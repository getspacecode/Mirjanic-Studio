"use client";

import { Call, House, User2, VideoLib } from "reicon-react";
import { motion } from "motion/react";
import { Link } from "react-scroll";

export default function Navbar() {
  const NavbarProps = [
    {
      index: 1,
      icon: <House size={20} />,
      text: "Home",
      id: "Home",
    },
    {
      index: 2,
      icon: <User2 size={20} />,
      text: "About me",
      id: "About",
    },
    {
      index: 3,
      icon: <VideoLib size={20} />,
      text: "My work",
      id: "Work",
    },
    {
      index: 4,
      icon: <Call size={20} />,
      text: "Contact",
      id: "Contact",
    },
  ];

  return (
    <div className="fixed z-50 md:top-0 bottom-0 h-20 w-full flex items-center justify-center backdrop-blur-xl">
      <motion.div
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex items-center justify-center lg:w-[80%] md:w-[90%] w-full md:px-0 px-5"
      >
        <div className="flex items-center gap-5">
          {NavbarProps.map((item) => (
            <motion.div
              key={item.index}
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="flex items-center justify-center gap-5 cursor-pointer transition-all duration-300 ease-in-out md:w-55 w-20 h-12 rounded-xl relative"
            >
              <Link
                to={item.id}
                className="flex gap-2 items-center justify-center w-full h-full"
                offset={-50}
              >
                <span>{item.icon}</span>
                <span className="md:text-xl text-sm md:flex hidden">
                  {item.text}
                </span>

                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-current"
                  style={{ originX: 0.5 }}
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
