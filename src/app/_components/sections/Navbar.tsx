"use client";

import logo from "../../../../public/axtra/logo-black.png";
import Image from "next/image";
import { motion } from "framer-motion";
import BarIcon from "../Icons/bar-icon";
import SearchIcon from "../Icons/search-icon";
import { useState } from "react";

const topLetterVariants = {
  initial: {
    y: 0,
    opacity: 1,
  },
  hover: (i: number) => ({
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: i * 0.05,
      ease: "easeInOut",
    },
  }),
  exit: (i: number) => ({
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: i * 0.05,
      ease: "easeInOut",
    },
  }),
};

const bottomLetterVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  hover: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: i * 0.05,
      ease: "easeInOut",
    },
  }),
  exit: (i: number) => ({
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: i * 0.05,
      ease: "easeInOut",
    },
  }),
};

const navLinks = [
  "Home",
  "About",
  "Pages",
  "Services",
  "Team",
  "Blog",
  "Contact",
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <section className="w-full py-6  bg-white z-30 fixed">
      <div className="flex justify-between items-center mx-10">
        <div className="flex-shrink-0">
          <Image src={logo} width={135} height={100} alt="logo" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex w-full justify-center">
          <ul className="flex   gap-24 text-gray-800">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                className="cursor-pointer relative text-black font-semibold"
                initial="initial"
                whileHover="hover"
                animate="initial"
                exit="exit"
              >
                <div className="flex overflow-hidden absolute w-full">
                  {Array.from(link).map((char: string, i: number) => (
                    <motion.span
                      key={`top-${i}`}
                      custom={i}
                      variants={topLetterVariants}
                      className="relative inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>

                <div className="flex  overflow-hidden">
                  {Array.from(link).map((char: string, i: number) => (
                    <motion.span
                      key={`bottom-${i}`}
                      custom={i}
                      variants={bottomLetterVariants}
                      className="relative inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Desktop Icons (Search and Bar) */}
        <div className="hidden lg:flex gap-10 items-center    ">
          <SearchIcon className="w-7" />
          <BarIcon className="w-5" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-5 lg:hidden">
          <SearchIcon className="w-7" />

          {/* Bar Icon or X based on the menu state */}
          <div onClick={toggleMenu}>
            {isMenuOpen ? (
              <span className="text-2xl">X</span> // X Icon when menu is open
            ) : (
              <BarIcon className="w-5" /> // Bar Icon when menu is closed
            )}
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-20 left-0 w-full h-screen bg-gray-800 border-t-2 py-4 px-6 z-50 overflow-y-auto">
            <ul className="flex flex-col gap-4 text-slate-100 text-2xl mt-20">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  className="cursor-pointer relative"
                  initial="initial"
                  whileHover="hover"
                  animate="initial"
                  exit="exit"
                >
                  <div className="flex overflow-hidden absolute w-full">
                    {Array.from(link).map((char: string, i: number) => (
                      <motion.span
                        key={`top-${i}`}
                        custom={i}
                        variants={topLetterVariants}
                        className="relative inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex overflow-hidden">
                    {Array.from(link).map((char: string, i: number) => (
                      <motion.span
                        key={`bottom-${i}`}
                        custom={i}
                        variants={bottomLetterVariants}
                        className="relative inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
