"use client";

import { useRef, useState } from "react";
import LoopVideo from "../usables/LoopVideo";
import TypingText from "../usables/TypingText";

export default function WorkPage() {
  const trackRefs = useRef([]);
  const [active, setActive] = useState([0, 0, 0, 0]);

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
      stagger: true,
    },
    {
      title: "Long-form video",
      description: "YouTube-style edits with pacing, story and polish.",
      right: true,
      videos: ["https://imgur.com/eMUlDLQ", "https://imgur.com/f0pbzNB"],
      slide: "w-[88%] lg:w-auto aspect-video lg:aspect-auto lg:h-[420px]",
      pad: "px-[6%]",
      grid: "lg:grid-cols-5",
      spans: ["lg:col-span-3", "lg:col-span-2"],
    },
    {
      title: "Ads & commercials",
      description:
        "High-end edits for brands, built to sell. Custom pricing per project.",
      right: false,
      premium: true,
      videos: ["https://imgur.com/dfoV9Cr", "https://imgur.com/tXhd11Y"],
      slide: "w-[88%] lg:w-auto aspect-video",
      pad: "px-[6%]",
      grid: "lg:grid-cols-2",
    },
  ];

  return (
    <div
      className="border border-b-white border-transparent w-full flex flex-1 py-20 flex-col justify-center items-center gap-24"
      id="Work"
    >
      {/* Title */}
      <div className="flex flex-col items-center gap-3 px-4 text-center">
        <h2 className="text-4xl font-semibold">My services</h2>
        <p className="max-w-lg text-white/60">
          Videos edited to hold attention, from quick hooks to full stories.
        </p>
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
                <span className="rounded-full border border-accent-strong/50 bg-accent-strong/10 px-3 py-1 text-xs font-semibold text-accent-strong">
                  Premium
                </span>
              )}
            </div>
            <p className="max-w-md text-sm text-white/60">{s.description}</p>
          </div>

          <div
            ref={(el) => (trackRefs.current[si] = el)}
            onScroll={(e) => {
              const el = e.currentTarget;
              const slide = el.children[0];
              if (!slide) return;
              const i = Math.round(el.scrollLeft / (slide.offsetWidth + 16));
              setActive((prev) => {
                if (prev[si] === i) return prev;
                const next = [...prev];
                next[si] = i;
                return next;
              });
            }}
            className={`flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 ${s.pad} [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 ${s.grid}`}
          >
            {s.videos.map((src, i) => (
              <div
                key={src}
                className={`group shrink-0 snap-center overflow-hidden border transition duration-300 hover:border-accent-strong/60 lg:hover:-translate-y-1 ${
                  s.premium
                    ? "rounded-3xl border-accent-strong/40 bg-gradient-to-b from-white/10 to-white/[0.02] p-1.5 shadow-[0_30px_80px_-30px] shadow-accent-strong/60 ring-1 ring-white/10"
                    : "rounded-2xl border-white/10 bg-white/[0.03]"
                } ${s.slide} ${
                  s.spans ? s.spans[i] : ""
                } ${s.stagger && i % 2 === 1 ? "lg:mt-10" : ""}`}
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

          {/* Dots  */}
          <div
            className={`justify-center gap-2 lg:hidden ${
              s.videos.length > 1 ? "flex" : "hidden"
            }`}
          >
            {s.videos.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to video ${i + 1}`}
                onClick={() => {
                  const el = trackRefs.current[si];
                  const slide = el?.children[0];
                  if (!el || !slide) return;
                  el.scrollTo({
                    left: i * (slide.offsetWidth + 16),
                    behavior: "smooth",
                  });
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active[si] === i ? "w-6 bg-accent-strong" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
