"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import UpArrowIcon from "./Icons/up-arrow-icon";

interface ButtonProps {
  title: string;
  hoverTextColor?: string; // Optional prop for custom hover color
  hoverBackgroundColor?: string; // Custom hover background color
}

export default function Button({
  title,
  hoverTextColor: hoverColor = "#ffff",
  hoverBackgroundColor = "#ffffff",
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();

    // Calculate mouse position relative to button edges
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setMousePosition({ x, y });
  };

  return (
    <div className="">
      <motion.button
        ref={buttonRef}
        className="relative group flex items-center gap-3 px-9 py-20 bg-transparent text-slate-400 border border-gray-400 rounded-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Button Text */}
        <motion.span
          className="relative z-10 transition-colors duration-300"
          variants={{
            rest: { color: "#94A3B8" }, // text-slate-400
            hover: { color: hoverColor }, // Dynamic hover color
          }}
        >
          {title}
        </motion.span>
        <motion.div
          className="relative z-10 transition-colors duration-300"
          variants={{
            rest: { color: "#94A3B8" }, // text-slate-400
            hover: { color: hoverColor }, // Dynamic hover color
          }}
        >
          <UpArrowIcon className="w-6" />
        </motion.div>

        {/* Background Animation */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ scale: 0, backgroundColor: hoverBackgroundColor }}
          variants={{
            rest: { scale: 0 },
            hover: {
              scale: 2,
              transition: {
                duration: 1,
                ease: "easeOut",
              },
            },
          }}
          style={{
            transformOrigin: `${mousePosition.x * 100}% ${
              mousePosition.y * 100
            }%`,
          }}
        />
      </motion.button>
    </div>
  );
}
