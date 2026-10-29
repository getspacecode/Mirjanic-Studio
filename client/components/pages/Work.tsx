"use client";

import { useRef, useState } from "react";
import LoopVideo from "../usables/LoopVideo";
import TypingText from "../usables/TypingText";
import { motion } from "motion/react";
import { Heart } from "reicon-react";
import review from "@/public/review.jpg";
import review1 from "@/public/review1.jpg";
import review3 from "@/public/review3.jpg";
import Image from "next/image";

const GAP = 16;

export default function WorkPage() {
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState([0, 0, 0, 0, 0]);

  const sections = [
    {
      title: "Showreel",
      description: "A quick look at my best work in one video.",
      right: false,
      videos: ["https://imgur.com/cbaMjXi"],
      slide: "w-[88%] lg:w-full lg:max-w-2xl lg:mx-auto aspect-video",
      pad: "px-[6%]",
      grid: "lg:grid-cols-1",
    },
    {
      title: "Short-form video",
      description: "Vertical edits for Reels, TikTok and Shorts.",
      right: false,
      videos: [
        "https://imgur.com/8V4Jz5q",
        "https://imgur.com/26H1HfT",
        "https://imgur.com/Oy5sfWE",
        "https://imgur.com/SBIopfS",
      ],
      slide: "w-[70%] lg:w-auto aspect-[9/16]",
      pad: "px-[15%]",
      grid: "lg:grid-cols-4",
    },
    {
      title: "Long-form video",
      description: "YouTube-style edits with pacing, story and polish.",
      right: true,
      carousel: true,
      videos: ["https://imgur.com/eMUlDLQ", "https://imgur.com/f0pbzNB"],
      slide: "w-full aspect-video",
      pad: "px-0",
      grid: "",
    },
    {
      title: "Ads & commercials",
      description:
        "High-end edits for brands, built to sell. Custom pricing per project.",
      right: false,
      premium: true,
      videos: ["https://imgur.com/dfoV9Cr", "https://imgur.com/tXhd11Y"],
      slide: "w-[70%] lg:w-auto aspect-[9/16]",
      pad: "px-[15%]",
      grid: "lg:grid-cols-4 lg:[&>*:first-child]:col-start-2",
    },
  ];

  const reviews = [review, review1, review3];

  const goTo = (si: number, i: number) => {
    const el = trackRefs.current[si];
    const slide = el?.children[0] as HTMLElement | undefined;
    if (!el || !slide) return;
    el.scrollTo({
      left: i * (slide.offsetWidth + GAP),
      behavior: "smooth",
    });
  };

  return (
    <div
      className="border border-b-white border-transparent w-full flex flex-1 py-20 flex-col justify-center items-center gap-24"
      id="Work"
    >
      {/* Title */}
      <div className="flex flex-col items-center gap-3 px-4 text-center">
        <motion.h2
          whileInView={{
            x: [-15, 0],
            opacity: [0, 1],
            transition: { duration: 1, ease: "easeInOut" },
          }}
          className="text-4xl font-semibold"
        >
          My services
        </motion.h2>
        <motion.p
          whileInView={{
            x: [-15, 0],
            opacity: [0, 1],
            transition: { duration: 1, delay: 0.1, ease: "easeInOut" },
          }}
          className="max-w-lg text-white/60"
        >
          Videos edited to hold attention, from quick hooks to full stories.
        </motion.p>
      </div>

      {sections.map((s, si) => (
        <section
          key={s.title}
          className="relative isolate flex w-full flex-col gap-8 lg:w-[85%] lg:max-w-7xl"
        >
          {/* Glow iza premium sekcije */}
          {s.premium && (
            <div className="pointer-events-none absolute inset-x-[10%] top-1/3 -z-10 h-2/3 rounded-full bg-accent-strong/20 blur-3xl" />
          )}

          {/* Header */}
          <div
            className={`flex flex-col items-center gap-2 px-4 text-center lg:px-0 ${
              s.right
                ? "lg:items-end lg:text-right"
                : "lg:items-start lg:text-left"
            }`}
          >
            <div
              className={`flex items-center gap-4 ${
                s.right ? "lg:flex-row-reverse" : ""
              }`}
            >
              <span className="text-accent-strong text-2xl font-bold">
                <TypingText words={[s.title]} loop={false} />
              </span>
              {s.premium && (
                <motion.span
                  whileInView={{
                    scale: [0.5, 1],
                    opacity: [0, 1],
                    transition: { duration: 1, delay: 0.2, ease: "easeInOut" },
                  }}
                  className="rounded-full border border-accent-strong/50 bg-accent-strong/10 px-3 py-1 text-xs font-semibold text-accent-strong"
                >
                  Premium
                </motion.span>
              )}
            </div>
            <motion.p
              whileInView={{
                x: [-15, 0],
                opacity: [0, 1],
                transition: { duration: 1, delay: 0.2, ease: "easeInOut" },
              }}
              className="max-w-md text-sm text-white/60"
            >
              {s.description}
            </motion.p>
          </div>

          <div className="relative">
            <div
              ref={(el) => {
                trackRefs.current[si] = el;
              }}
              onScroll={(e) => {
                const el = e.currentTarget;
                const slide = el.children[0] as HTMLElement | undefined;
                if (!slide) return;
                const i = Math.round(el.scrollLeft / (slide.offsetWidth + GAP));
                setActive((prev) => {
                  if (prev[si] === i) return prev;
                  const next = [...prev];
                  next[si] = i;
                  return next;
                });
              }}
              className={`flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 ${s.pad} [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                s.carousel
                  ? ""
                  : `lg:grid lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 ${s.grid}`
              }`}
            >
              {s.videos.map((src) => (
                <div
                  key={src}
                  className={`group w-full shrink-0 snap-center overflow-hidden border transition duration-300 hover:border-accent-strong/60 ${
                    s.carousel ? "" : "lg:hover:-translate-y-1"
                  } ${
                    s.premium
                      ? "rounded-3xl border-accent-strong/40 bg-gradient-to-b from-white/10 to-white/[0.02] p-1.5 shadow-[0_30px_80px_-30px] shadow-accent-strong/60 ring-1 ring-white/10"
                      : "rounded-2xl border-white/10 bg-white/[0.03]"
                  } ${s.slide}`}
                >
                  <LoopVideo
                    src={src}
                    loop={false}
                    className={`h-full w-full ${
                      s.premium ? "overflow-hidden rounded-[1.1rem]" : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Arrow */}
            {s.carousel && s.videos.length > 1 && (
              <>
                <button
                  aria-label="Previous video"
                  disabled={active[si] === 0}
                  onClick={() => goTo(si, active[si] - 1)}
                  className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xl text-white transition hover:bg-accent-strong/80 disabled:pointer-events-none disabled:opacity-30 lg:flex"
                >
                  ‹
                </button>
                <button
                  aria-label="Next video"
                  disabled={active[si] === s.videos.length - 1}
                  onClick={() => goTo(si, active[si] + 1)}
                  className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xl text-white transition hover:bg-accent-strong/80 disabled:pointer-events-none disabled:opacity-30 lg:flex"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* Dots */}
          <div
            className={`justify-center gap-2 ${s.carousel ? "" : "lg:hidden"} ${
              s.videos.length > 1 ? "flex" : "hidden"
            }`}
          >
            {s.videos.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to video ${i + 1}`}
                onClick={() => goTo(si, i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active[si] === i ? "w-6 bg-accent-strong" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </section>
      ))}

      {/* review section */}
      <section className="relative isolate flex w-full flex-col items-center px-4 py-20 lg:py-28">
        {/* Glow u pozadini */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-2/3 w-[70%] -translate-x-1/2 rounded-full bg-accent-strong/10 blur-3xl" />

        <div className="flex w-full max-w-5xl flex-col gap-14">
          {/* Header */}
          <div className="flex flex-col items-center gap-3 text-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              custom={0}
              className="flex items-center gap-4"
            >
              <motion.span
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                  ease: "easeInOut",
                }}
                className="grid h-12 w-12 place-items-center rounded-full border border-red-500/30 bg-red-500/10"
              >
                <Heart size={24} className="fill-red-500 text-red-500" />
              </motion.span>
              <span className="text-2xl font-semibold text-accent-strong sm:text-3xl">
                My loyal customers
              </span>
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              custom={0.15}
              className="max-w-md text-sm text-white/60 sm:text-base"
            >
              Real messages from clients who keep coming back.
            </motion.p>
          </div>

          <div
            ref={(el) => {
              trackRefs.current[4] = el;
            }}
            onScroll={(e) => {
              const el = e.currentTarget;
              const slide = el.children[0] as HTMLElement | undefined;
              if (!slide) return;
              const i = Math.round(el.scrollLeft / (slide.offsetWidth + GAP));
              setActive((prev) => {
                if (prev[4] === i) return prev;
                const next = [...prev];
                next[4] = i;
                return next;
              });
            }}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[7.5%] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:block sm:columns-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-8"
          >
            {reviews.map((src, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                className="w-[85%] shrink-0 snap-center self-center sm:mb-6 sm:w-auto sm:break-inside-avoid lg:mb-8"
              >
                <div className="group overflow-hidden rounded-2xl border border-accent-soft/60 bg-white/[0.03] p-1.5 shadow-[0_20px_60px_-30px] shadow-accent-strong/40 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:border-accent-strong/60 hover:shadow-accent-strong/60">
                  <Image
                    src={src}
                    alt={`Customer review ${i + 1}`}
                    sizes="(min-width: 640px) 50vw, 85vw"
                    className="h-auto w-full rounded-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
