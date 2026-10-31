"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// https://imgur.com/ZrU3p96 -> https://i.imgur.com/ZrU3p96.png
const EXTENSIONS = ["png", "jpg", "jpeg", "webp"] as const;

export const getImgurId = (url: string) =>
  url.split("?")[0].split("/").pop()?.split(".")[0] ?? "";

export const toImgurDirect = (url: string, ext: string = "png") =>
  `https://i.imgur.com/${getImgurId(url)}.${ext}`;

type Props = {
  src: string; // imgur.com/ID ili i.imgur.com/ID.ext, oba rade
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  lightbox?: boolean;
};

export default function ImgurImage({
  src,
  alt = "Thumbnail",
  className = "",
  sizes = "(min-width: 1024px) 33vw, 88vw",
  priority = false,
  lightbox = true,
}: Props) {
  const [extIndex, setExtIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState(false);

  const direct = toImgurDirect(src, EXTENSIONS[extIndex]);

  // Esc zatvara lightbox + zakljucava scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleError = () => {
    // probaj sledecu ekstenziju, ako ih nema vise prikazi fallback
    if (extIndex < EXTENSIONS.length - 1) setExtIndex((i) => i + 1);
    else setFailed(true);
  };

  if (failed) {
    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-2 bg-white/[0.03] text-white/40 ${className}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="size-8"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="1.5" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 15l-5-5L5 21"
          />
        </svg>
        <span className="text-xs">Image unavailable</span>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => lightbox && setOpen(true)}
        aria-label={lightbox ? `Open ${alt}` : alt}
        className={`group/img relative block h-full w-full overflow-hidden ${
          lightbox ? "cursor-zoom-in" : "cursor-default"
        } ${className}`}
      >
        {/* skeleton dok se slika ucitava */}
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-white/[0.06]" />
        )}

        <Image
          key={direct}
          src={direct}
          alt={alt}
          fill
          unoptimized
          priority={priority}
          sizes={sizes}
          onLoad={() => setLoaded(true)}
          onError={handleError}
          className={`object-cover transition duration-700 ease-out group-hover/img:scale-[1.04] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* gradient + ikonica na hover */}
        {lightbox && loaded && (
          <>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/img:opacity-100" />
            <div className="pointer-events-none absolute bottom-3 right-3 flex size-9 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover/img:translate-y-0 group-hover/img:opacity-100">
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
                  d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
                />
              </svg>
            </div>
          </>
        )}
      </button>

      {/* Lightbox u portalu (da ga ne pokvari transform od roditelja) */}
      {open &&
        createPortal(
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-10"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            </button>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={direct}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full cursor-default rounded-2xl object-contain shadow-2xl"
            />
          </div>,
          document.body,
        )}
    </>
  );
}
