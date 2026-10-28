"use client";

import LoopVideo from "../usables/LoopVideo";
import TypingText from "../usables/TypingText";

export default function WorkPage() {
  return (
    <div
      className="border border-b-white border-transparent w-full flex flex-1 py-20 flex-col justify-center items-center gap-20"
      id="Work"
    >
      {/* Center Text */}
      <div className="text-4xl">My services</div>

      {/* Short form videos */}
      <div className="flex flex-col lg:items-start items-center justify-center gap-5 lg:w-[80%] w-full">
        <span className="text-accent-strong text-2xl font-bold">
          <TypingText words={["Short-form video"]} loop={false} />
        </span>
        <div className="flex lg:flex-row flex-col items-center gap-5 justify-center">
          <LoopVideo
            src="https://imgur.com/8V4Jz5q"
            loop={false}
            className="md:w-100 w-80 h-120 max-w-3xl"
          />
          <LoopVideo
            src="https://imgur.com/26H1HfT"
            loop={false}
            className="w-80 h-120 max-w-3xl"
          />
          <LoopVideo
            src="https://imgur.com/Oy5sfWE"
            loop={false}
            className="md:w-120 w-80 h-120 max-w-3xl"
          />
          <LoopVideo
            src="https://imgur.com/SBIopfS"
            loop={false}
            className="md:w-90 w-80 h-120 max-w-3xl"
          />
        </div>
      </div>

      {/* Long form videos */}
      <div className="flex flex-col lg:items-end items-center justify-center gap-5 lg:w-[90%] w-full">
        <span className="text-accent-strong text-2xl font-bold">
          <TypingText words={["Long-form video"]} loop={false} />
        </span>
        <div className="flex lg:flex-row flex-col items-center gap-5 justify-center">
          <LoopVideo
            src="https://imgur.com/eMUlDLQ"
            loop={false}
            className="lg:w-250 w-80 h-120 max-w-3xl"
          />
          <LoopVideo
            src="https://imgur.com/f0pbzNB"
            loop={false}
            className="lg:w-150 w-80 h-120 max-w-3xl"
          />
        </div>
      </div>
    </div>
  );
}
