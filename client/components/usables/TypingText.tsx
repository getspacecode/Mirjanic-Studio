"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

type Props = {
  words: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
  startDelay?: number; // seconds to wait after entering view before typing starts
  once?: boolean; // true = only triggers the first time it enters view
  amount?: number | "some" | "all"; // how much must be visible (0-1)
};

export default function TypingText({
  words,
  loop = true,
  typeSpeed = 90,
  deleteSpeed = 50,
  pause = 1500,
  className,
  startDelay = 0.4,
  once = true,
  amount = 0.5,
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [inView, setInView] = useState(false);
  const [started, setStarted] = useState(false);

  // Start typing after the spawn animation / delay once in view.
  // When leaving view (only possible with once={false}), reset everything.
  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setStarted(true), startDelay * 1000);
      return () => clearTimeout(t);
    }

    setStarted(false);
    setText("");
    setDeleting(false);
    setIndex(0);
  }, [inView, startDelay]);

  useEffect(() => {
    if (!started || words.length === 0) return;

    // Without looping, only the first word is ever used
    const current = loop ? words[index % words.length] : words[0];

    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (!deleting && text === current) {
      if (loop) {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1),
          );
        },
        deleting ? deleteSpeed : typeSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [
    started,
    text,
    deleting,
    index,
    words,
    loop,
    typeSpeed,
    deleteSpeed,
    pause,
  ]);

  return (
    <motion.span
      className={className}
      style={{ display: "inline-block" }}
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
    >
      {text}
      <motion.span
        aria-hidden
        className="inline-block w-0.5 h-[1em] ml-1 align-middle"
        style={{ backgroundColor: "#e2e0df" }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
      />
    </motion.span>
  );
}
