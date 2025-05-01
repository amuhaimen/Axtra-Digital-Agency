// components/CircleOverlay.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CircleOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Trigger Icon */}
      <button
        onClick={toggleOverlay}
        className="absolute top-[500px] right-10 z-20 bg-black text-white px-4 py-2 rounded-full"
      >
        {isOpen ? "Close" : "Open"}
      </button>

      {/* Animated Circle Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 100 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute z-10 w-20 h-20 rounded-full bg-black top-6 right-6 origin-left-right"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
