"use client";

import { motion } from "motion/react";
import { ArrowDown2 } from "reicon-react";
import { AnimatedLogo } from "@/components/usables/AnimatedLogo";

export default function HomePage() {
  return (
    <div
      id="Home"
      className="relative flex flex-col pt-12 lg:pt-0 lg:justify-center w-full h-screen overflow-hidden bg-bg text-fg"
    >
      <div className="flex xl:flex-row flex-col items-center justify-between gap-4 xl:gap-8 w-full xl:px-56">
        {/* Left */}
        <div className="flex flex-col items-center xl:items-start xl:gap-5 w-max xl:w-2/5">
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            className="w-full aspect-square rounded-4xl cursor-default flex items-center justify-center"
          >
            <AnimatedLogo
              once={false}
              amount={0.6}
              loop={false}
              className="w-full text-fg"
            />
          </motion.div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center xl:items-start gap-5">
          {/* Text */}
          <div className="flex flex-col items-center xl:items-start gap-3 md:gap-5 text-6xl lg:text-8xl">
            <motion.span
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5, ease: "easeInOut" }}
              className="text-accent py-3 px-6 md:p-5 md:px-10 rounded-xl italic"
            >
              Turning
            </motion.span>

            <span className="flex flex-wrap items-center justify-center xl:justify-start gap-3 md:gap-5">
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.4, delay: 0.6, ease: "easeInOut" },
                }}
                className="inline-block"
              >
                ideas
              </motion.span>
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.4, delay: 0.7, ease: "easeInOut" },
                }}
                className="inline-block"
              >
                into
              </motion.span>
            </span>

            <motion.span
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8, ease: "easeInOut" }}
              className="py-3 px-6 md:p-5 md:px-10 rounded-xl italic text-accent-soft"
            >
              Motion
            </motion.span>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 bottom-20"
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={{
          opacity: [0, 1, 0.75, 1],
          y: [-20, 0, 12, 0],
          scale: [0.8, 1, 1, 1],
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          times: [0, 0.5, 0.75, 1],
          delay: 0.8,
          y: {
            duration: 1.2,
            ease: "easeOut",
            delay: 0.8,
          },
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.1,
          }}
        >
          <ArrowDown2 size={70} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </div>
  );
}
