"use client";

import { motion } from "motion/react";
import { AnimatedLogo } from "../usables/AnimatedLogo";
import TypingText from "../usables/TypingText";

export default function AboutPage() {
  return (
    <main
      className="border border-b-white border-t-white border-transparent w-full h-screen flex flex-col justify-center items-center gap-10"
      id="About"
    >
      {/* Center Text */}
      <motion.div
        whileInView={{
          scale: [0.5, 1],
          opacity: [0, 1],
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        initial={{ y: -10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        className="text-4xl"
      >
        Nemanja Mirjanić
      </motion.div>

      <div className="flex items-center lg:justify-between justify-center lg:w-[80%] w-full">
        {/* Left */}
        <div className="flex flex-col items-center gap-5">
          <motion.span
            whileInView={{
              x: [-20, 0],
              opacity: [0, 1],
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            initial={{ y: -10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            className="text-2xl text-accent"
          >
            About me
          </motion.span>
          <motion.span
            whileInView={{
              x: [-20, 0],
              opacity: [0, 1],
              transition: { duration: 0.4, delay: 0.2, ease: "easeInOut" },
            }}
            initial={{ y: -10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.2, ease: "easeInOut" },
            }}
            className="border-b border-b-accent p-1 w-full"
          />
          <motion.span
            whileInView={{
              x: [-20, 0],
              opacity: [0, 1],
              transition: { duration: 0.4, delay: 0.3, ease: "easeInOut" },
            }}
            initial={{ y: -10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.3, ease: "easeInOut" },
            }}
            className="lg:w-150 w-80 text-start text-2xl text-muted"
          >
            I am a video editor from Serbia with
            <span className="text-accent font-bold"> 4 years</span> of
            experience in creating professional visual content. My expertise
            lies in editing with{" "}
            <span className="text-accent font-bold"> Adobe Premiere Pro</span>{" "}
            and
            <span className="text-accent font-bold"> Adobe After Effects</span>,
            where I specialize in
            <span className="text-accent font-bold">
              {" "}
              crafting cinematic intros
            </span>
            ,<span className="text-accent font-bold"> smooth transitions</span>,
            and
            <span className="text-accent font-bold"> polished final cuts</span>.
            Passionate about storytelling through visuals, I focus on{" "}
            <span className="text-accent font-bold">delivering creative</span>{" "}
            and{" "}
            <span className="text-accent font-bold">impactful projects</span>{" "}
            that align with modern digital trends.
          </motion.span>
        </div>

        {/* Right */}
        <div className="lg:flex hidden flex-col items-center gap-5">
          {/* Logo */}
          <div>
            <AnimatedLogo
              once={false}
              amount={0.6}
              loop={false}
              className="w-100 h-100"
            />
          </div>

          {/* Text */}
          <div className="text-2xl">
            <TypingText
              words={["Video editor", "Thumbnails design", "After Effect"]}
              loop={true}
              once={false}
              amount={0.6}
              startDelay={0.4}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
