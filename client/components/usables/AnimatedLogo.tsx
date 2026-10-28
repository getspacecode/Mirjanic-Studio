"use client";

import { motion } from "motion/react";

type Props = {
  className?: string;
  loop?: boolean;
  startDelay?: number;
  once?: boolean; // true = animira samo prvi put kad udje u view
  amount?: number | "some" | "all"; // koliko logoa mora biti vidljivo (0-1)
};

export function AnimatedLogo({
  className = "w-40 text-white",
  loop = true,
  startDelay = 0.2, // globalni delay pre nego sto cela animacija krene
  once = true,
  amount = 0.4,
}: Props) {
  return (
    <motion.svg
      viewBox="360 450 625 370"
      className={className}
      fill="currentColor"
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: { transition: { delayChildren: startDelay } },
      }}
    >
      {/* Leva polovina M-a */}
      <motion.polygon
        points="438,471 524,471 601,576 545,646 497,583 458,787 378,787"
        variants={{
          hidden: { y: 60, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, delay: 0.1, ease: "easeInOut" },
          },
        }}
      />

      {/* Desna polovina M-a */}
      <motion.polygon
        points="722,471 801,471 768,760 688,803 712,591 601,721 561,666"
        variants={{
          hidden: { y: -60, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, delay: 0.25, ease: "easeInOut" },
          },
        }}
      />

      {/* Play trougao */}
      <motion.g
        variants={{
          hidden: { x: -50, opacity: 0, scale: 0.6 },
          visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, delay: 0.5, ease: "easeInOut" },
          },
        }}
        style={{ transformOrigin: "890px 658px" }}
      >
        {/* Unutrasnji g za beskonacnu petlju (guranje napred) */}
        <motion.g
          variants={{
            hidden: { x: 0 },
            visible: loop
              ? {
                  x: [0, 12, 0],
                  transition: {
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                    delay: 2.5, // krece tek kad se uvod zavrsi
                  },
                }
              : { x: 0 },
          }}
        >
          <polygon
            points="833,566 965,653 815,749"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinejoin="round"
          />
        </motion.g>
      </motion.g>
    </motion.svg>
  );
}
