"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Heart } from "reicon-react";

import LoopVideo from "../usables/LoopVideo";
import TypingText from "../usables/TypingText";
import ImgurImage from "../usables/imgurImage";

import review from "@/public/review.jpg";
import review1 from "@/public/review1.jpg";
import review3 from "@/public/review3.jpg";

export default function WorkPage() {
  const SCROLL_THRESHOLD = 4;
  const GAP = 16;

  const sections = [
    {
      title: "Showreel",
      description: "A quick look at my best work in one video.",
      right: false,
      carousel: false,
      premium: false,
      image: false,
      videos: [{ url: "https://imgur.com/cbaMjXi", adv: null }],
      slide: "w-[88%] lg:w-full lg:max-w-2xl lg:mx-auto aspect-video",
      pad: "px-[6%]",
      grid: "lg:grid-cols-1",
    },
    {
      title: "Short-form video",
      description: "Vertical edits for Reels, TikTok and Shorts.",
      right: false,
      carousel: false,
      premium: false,
      image: false,
      videos: [
        { url: "https://imgur.com/8V4Jz5q", adv: null },
        { url: "https://imgur.com/26H1HfT", adv: null },
        { url: "https://imgur.com/Oy5sfWE", adv: null },
        { url: "https://imgur.com/SBIopfS", adv: null },
        { url: "https://imgur.com/YqHdV8H", adv: null },
        { url: "https://imgur.com/2mdIHAW", adv: null },
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
      premium: false,
      image: false,
      videos: [
        { url: "https://imgur.com/xhyCC4Z", adv: null },
        { url: "https://imgur.com/99u2Uzi", adv: null },
      ],
      slide: "w-full aspect-video",
      pad: "px-0",
      grid: "",
    },
    {
      title: "Ads & commercials",
      description:
        "High-end edits for brands, built to sell. Custom pricing per project.",
      right: false,
      carousel: false,
      premium: true,
      image: false,
      videos: [
        {
          url: "https://imgur.com/dfoV9Cr",
          adv: {
            link: "https://spacecodestudio.vercel.app",
            title: "Space Code",
          },
        },
        {
          url: "https://imgur.com/tXhd11Y",
          adv: {
            link: "https://mirjanic-studio.vercel.app",
            title: "Mirjanic Studio",
          },
        },
      ],
      slide: "w-[70%] lg:w-auto aspect-[9/16]",
      pad: "px-[15%]",
      grid: "lg:grid-cols-4 lg:[&>*:first-child]:col-start-2",
    },
    {
      title: "Thumbnails",
      description: "Click-worthy thumbnails designed to boost your CTR.",
      right: false,
      carousel: false,
      premium: false,
      image: true,
      videos: [
        { url: "https://imgur.com/ZrU3p96", adv: null },
        { url: "https://imgur.com/ILPH2XU", adv: null },
        { url: "https://imgur.com/VNeObh3", adv: null },
      ],
      slide: "w-full aspect-video",
      pad: "px-0",
      grid: "lg:grid-cols-3",
    },
  ];

  const reviews = [review, review1, review3];

  const REVIEWS_INDEX = sections.length;

  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<number[]>(
    Array(sections.length + 1).fill(0),
  );
  const [atEnd, setAtEnd] = useState<boolean[]>(
    Array(sections.length + 1).fill(false),
  );

  const getStride = (el: HTMLElement) => {
    const a = el.children[0] as HTMLElement | undefined;
    const b = el.children[1] as HTMLElement | undefined;
    if (!a) return 0;
    return b ? b.offsetLeft - a.offsetLeft : a.offsetWidth + GAP;
  };

  const setAt = <T,>(
    setter: React.Dispatch<React.SetStateAction<T[]>>,
    index: number,
    value: T,
  ) =>
    setter((prev) => {
      if (prev[index] === value) return prev;
      const next = [...prev];
      next[index] = value;
      return next;
    });

  const handleScroll = (index: number, el: HTMLDivElement) => {
    const stride = getStride(el);
    if (!stride) return;
    setAt(setActive, index, Math.round(el.scrollLeft / stride));
    setAt(
      setAtEnd,
      index,
      el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    );
  };

  const goTo = (index: number, i: number) => {
    const el = trackRefs.current[index];
    if (!el) return;
    el.scrollTo({ left: i * getStride(el), behavior: "smooth" });
  };

  const step = (index: number, dir: 1 | -1) => {
    const el = trackRefs.current[index];
    if (!el) return;
    el.scrollBy({ left: dir * getStride(el), behavior: "smooth" });
  };

  return (
    <div
      className="w-full flex flex-1 py-20 flex-col justify-center items-center gap-24"
      id="Work"
    >
      {/* ---------- NASLOV ---------- */}
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

      {/* ---------- SEKCIJE (video / slike) ---------- */}
      {sections.map((s, si) => {
        const count = s.videos.length;

        const isScrollable = !s.carousel && count > SCROLL_THRESHOLD;
        const hasArrows = (s.carousel || isScrollable) && count > 1;

        const desktopLayout = s.carousel
          ? ""
          : isScrollable
            ? "lg:gap-6 lg:px-0 lg:py-2"
            : `lg:grid lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 ${s.grid}`;

        const slideClass = isScrollable
          ? s.slide.replace(
              "lg:w-auto",
              "lg:w-[calc((100%-4.5rem)/4)] lg:snap-start",
            )
          : s.slide;

        return (
          <section
            key={s.title}
            className="relative isolate flex w-full flex-col gap-8 lg:w-[85%] lg:max-w-7xl"
          >
            {/* Glow iza sekcije */}
            <div className="pointer-events-none absolute inset-x-[10%] top-1/3 -z-10 h-2/3 rounded-full bg-accent-strong/20 blur-3xl" />

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
                      transition: {
                        duration: 1,
                        delay: 0.2,
                        ease: "easeInOut",
                      },
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

            {/* Traka + strelice */}
            <div className="relative">
              <div
                ref={(el) => {
                  trackRefs.current[si] = el;
                }}
                onScroll={(e) => handleScroll(si, e.currentTarget)}
                className={`flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 ${s.pad} [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${desktopLayout}`}
              >
                {s.videos.map((v) => (
                  <div
                    key={v.url}
                    className={`group flex flex-col w-full shrink-0 snap-center overflow-hidden border transition duration-300 hover:border-accent-strong/60 ${
                      s.carousel ? "" : "lg:hover:-translate-y-1"
                    } ${
                      s.premium
                        ? "rounded-3xl border-accent-strong/40 bg-gradient-to-b from-white/10 to-white/[0.02] p-1.5 shadow-[0_30px_80px_-30px] shadow-accent-strong/60 ring-1 ring-white/10"
                        : "rounded-2xl border-white/10 bg-white/[0.03]"
                    } ${slideClass}`}
                  >
                    {/* Slika ili video */}
                    {s.image ? (
                      <ImgurImage src={v.url} alt="Thumbnail" />
                    ) : (
                      <LoopVideo
                        src={v.url}
                        loop={false}
                        className={`h-full w-full ${
                          s.premium ? "overflow-hidden rounded-[1.1rem]" : ""
                        }`}
                      />
                    )}

                    {/* "Crafted for" traka */}
                    {v.adv && (
                      <Link
                        href={v.adv.link}
                        className="group/credit flex items-center justify-between gap-3 border-t border-white/[0.06] bg-white/[0.02] px-4 py-3 transition-colors duration-300 hover:bg-accent-strong/[0.06]"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-accent-strong/20 bg-accent-strong/[0.08] text-accent-strong transition-colors duration-300 group-hover/credit:border-accent-strong/40 group-hover/credit:bg-accent-strong/[0.14]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={1.7}
                              className="size-4.5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 15l1.1 2.9L23 19l-2.9 1.1L19 23l-1.1-2.9L15 19l2.9-1.1L19 15z"
                              />
                            </svg>
                          </div>

                          <div className="min-w-0">
                            <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                              Crafted for
                            </p>
                            <p className="truncate text-sm font-medium text-white/85 transition-colors duration-300 group-hover/credit:text-accent-strong">
                              {v.adv.title}
                            </p>
                          </div>
                        </div>

                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-white/40 transition-all duration-300 group-hover/credit:translate-x-0.5 group-hover/credit:border-accent-strong/30 group-hover/credit:text-accent-strong">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.8}
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7 17L17 7M7 7h10v10"
                            />
                          </svg>
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Strelice (samo desktop, samo kad ima scroll) */}
              {hasArrows && (
                <>
                  <button
                    aria-label="Previous"
                    disabled={active[si] === 0}
                    onClick={() => step(si, -1)}
                    className="absolute left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xl text-white transition hover:bg-accent-strong/80 disabled:pointer-events-none disabled:opacity-30 lg:flex"
                  >
                    ‹
                  </button>
                  <button
                    aria-label="Next"
                    disabled={atEnd[si]}
                    onClick={() => step(si, 1)}
                    className="absolute right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-xl text-white transition hover:bg-accent-strong/80 disabled:pointer-events-none disabled:opacity-30 lg:flex"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* Tackice (na desktopu samo kod karusela) */}
            {count > 1 && (
              <div
                className={`flex justify-center gap-2 ${
                  s.carousel ? "" : "lg:hidden"
                }`}
              >
                {s.videos.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to item ${i + 1}`}
                    onClick={() => goTo(si, i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      active[si] === i
                        ? "w-6 bg-accent-strong"
                        : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            )}
          </section>
        );
      })}

      {/* ---------- REVIEWS ---------- */}
      <section className="relative isolate flex w-full flex-col items-center px-4 py-20 lg:py-28">
        {/* Glow u pozadini */}
        <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-2/3 w-[70%] -translate-x-1/2 rounded-full bg-accent-strong/10 blur-3xl" />

        <div className="flex w-full max-w-5xl flex-col gap-14">
          {/* Header */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-4">
              <motion.span
                animate={{ scale: [1, 1.15, 1] }}
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
            </div>

            <p className="max-w-md text-sm text-white/60 sm:text-base">
              Real messages from clients who keep coming back.
            </p>
          </div>

          {/* Slike review-a */}
          <div
            ref={(el) => {
              trackRefs.current[REVIEWS_INDEX] = el;
            }}
            onScroll={(e) => handleScroll(REVIEWS_INDEX, e.currentTarget)}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[7.5%] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:block sm:columns-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-8"
          >
            {reviews.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
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
