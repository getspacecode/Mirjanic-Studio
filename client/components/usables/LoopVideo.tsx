"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/* Pretvara Imgur link strane u direktan link na fajl:
   imgur.com/AbC123x        -> i.imgur.com/AbC123x.mp4
   i.imgur.com/AbC123x.gifv -> i.imgur.com/AbC123x.mp4
   Svi ostali linkovi ostaju isti. */
function toDirectUrl(url: string): string {
  if (!url) return url;
  const page = url.match(
    /^https?:\/\/(?:www\.)?imgur\.com\/(?!a\/|gallery\/)([A-Za-z0-9]+)$/,
  );
  if (page) return `https://i.imgur.com/${page[1]}.mp4`;
  return url.replace(
    /^(https?:\/\/i\.imgur\.com\/[A-Za-z0-9]+)\.gifv$/,
    "$1.mp4",
  );
}

/* ---------- Jedan aktivan video na telefonu ---------- */

type Entry = {
  video: HTMLVideoElement;
  ratio: number; // koliko je video vidljiv (0 - 1)
  canPlay: () => boolean; // false ako je korisnik rucno pauzirao / video zavrsen
};

// Svi LoopVideo-i na stranici se upisuju ovde
const registry = new Set<Entry>();

// Telefon / tablet (ispod Tailwind "lg")
const isMobile = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 1023px)").matches;

// Pusti samo najvidljiviji video (mora biti bar 50% vidljiv), ostale pauziraj
function syncExclusive() {
  let best: Entry | null = null;
  for (const e of registry) {
    if (e.ratio >= 0.5 && (!best || e.ratio > best.ratio)) best = e;
  }
  for (const e of registry) {
    if (e === best) {
      if (e.canPlay()) e.video.play().catch(() => {});
    } else {
      e.video.pause();
    }
  }
}

type LoopVideoProps = {
  src: string;
  poster?: string;
  loop?: boolean; // false = odigra se jednom pa ponudi replay
  autoPlay?: boolean; // krece sam kad udje u vidno polje
  showSound?: boolean; // dugme za zvuk
  className?: string;
};

export default function LoopVideo({
  src,
  poster,
  loop = true,
  autoPlay = true,
  showSound = true,
  className = "",
}: LoopVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const entryRef = useRef<Entry | null>(null);
  const userPaused = useRef(false);
  const reduce = useReducedMotion();

  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [muted, setMuted] = useState(true);
  const [error, setError] = useState(false);

  const videoSrc = toDirectUrl(src);

  /* Telefon: svi videi sa stranice dele jedan "red", igra samo najvidljiviji.
     Desktop: svaki video se pusta cim je vidljiv (kao do sada). */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const entry: Entry = {
      video: v,
      ratio: 0,
      canPlay: () => autoPlay && !userPaused.current && !v.ended,
    };
    entryRef.current = entry;
    registry.add(entry);

    const io = new IntersectionObserver(
      ([e]) => {
        entry.ratio = e.intersectionRatio;

        if (isMobile()) {
          syncExclusive();
          return;
        }

        if (entry.ratio >= 0.4) {
          if (entry.canPlay()) v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      // fini pragovi da se ratio azurira tokom swipe-a
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) },
    );
    io.observe(v);

    return () => {
      io.disconnect();
      registry.delete(entry);
      entryRef.current = null;
      if (isMobile()) syncExclusive(); // neko drugi moze da preuzme
    };
  }, [autoPlay]);

  /* Glatka progres linija */
  useEffect(() => {
    if (!playing) return;
    let id = 0;
    const tick = () => {
      const v = videoRef.current;
      if (v && barRef.current && v.duration) {
        barRef.current.style.transform = `scaleX(${v.currentTime / v.duration})`;
      }
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [playing]);

  /* React ne sinhronizuje pouzdano "muted" atribut, pa ga setujemo rucno */
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  /* Novi src = nova sansa (resetuj gresku) */
  useEffect(() => {
    setError(false);
  }, [videoSrc]);

  /* Kad korisnik rucno pusti video na telefonu, ostali se pauziraju */
  const pauseOthers = () => {
    if (!isMobile()) return;
    for (const e of registry) {
      if (e !== entryRef.current) e.video.pause();
    }
  };

  const toggle = () => {
    const v = videoRef.current;
    if (!v || error) return;
    if (v.ended) {
      v.currentTime = 0;
      userPaused.current = false;
      setEnded(false);
      pauseOthers();
      v.play().catch(() => {});
      return;
    }
    if (v.paused) {
      userPaused.current = false;
      pauseOthers();
      v.play().catch(() => {});
    } else {
      userPaused.current = true;
      v.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-xl bg-black ${className}`}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        loop={loop}
        muted
        playsInline
        preload="metadata"
        onPlay={() => {
          setPlaying(true);
          setEnded(false);
        }}
        onPause={() => setPlaying(false)}
        onEnded={() => {
          setPlaying(false);
          setEnded(true);
          if (barRef.current) barRef.current.style.transform = "scaleX(1)";
        }}
        onError={() => setError(true)}
        className="h-full w-full object-cover"
      />

      {/* Ako se video ne ucita, pokazi poruku umesto crnog kvadrata */}
      {error && (
        <div className="absolute inset-0 grid place-items-center bg-neutral-900 p-4 text-center text-sm text-neutral-300">
          Video se ne moze ucitati. Proveri link.
        </div>
      )}

      {/* Zatamnjenje pri dnu da kontrole budu citljive */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />

      {/* Klik bilo gde = play / pauza / replay */}
      {!error && (
        <button
          type="button"
          onClick={toggle}
          aria-label={ended ? "Pusti ponovo" : playing ? "Pauziraj" : "Pusti"}
          className="absolute inset-0 grid cursor-pointer place-items-center focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
        >
          <span
            className={`grid h-16 w-16 place-items-center rounded-full bg-white/90 text-black shadow-lg backdrop-blur transition-all duration-200 ${
              playing
                ? "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                : "scale-100 opacity-100"
            }`}
          >
            {ended ? (
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12a9 9 0 1 0 3-6.7" />
                <path d="M3 4v5h5" />
              </svg>
            ) : playing ? (
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="currentColor"
                className="ml-1"
              >
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            )}
          </span>
        </button>
      )}

      {/* Zvuk */}
      {showSound && !error && (
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Ukljuci zvuk" : "Iskljuci zvuk"}
          className="absolute bottom-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur transition-opacity duration-300 hover:bg-black/70 focus-visible:opacity-100 group-hover:opacity-100"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5z"
              fill="currentColor"
              stroke="none"
            />
            {muted ? (
              <path d="M16 9.5l5 5m0-5l-5 5" />
            ) : (
              <path d="M16 9a4 4 0 0 1 0 6" />
            )}
          </svg>
        </button>
      )}

      {/* Tanka progres linija */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-white/20">
        <div
          ref={barRef}
          className="h-full origin-left bg-white"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </motion.div>
  );
}
