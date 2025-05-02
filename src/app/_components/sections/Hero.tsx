"use client";

import { delay, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import banner from "../../../../public/axtra/banner.jpg";
import DownArrowIcon from "../Icons/down-arrow";
// Variants for Animation
const titleVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};
// Variants for Animation
const subTitleVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3 + 1,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const paragraphVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3 + 2,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

// Down Arrow Animation Variants
const arrowVariants = {
  move: {
    y: [0, 70, 0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 8,
        ease: "easeInOut",
      },
    },
  },
};

export default function Hero() {
  const title = "Mark";
  const subtitle = "Eting";
  const description =
    "Static and dynamic secure code review, can prevent a day before your product, is even released. We can integrate with, your dev environment.";
  const descriptionWords = description.split(",");

  return (
    <section className=" mt-24">
      <div className=" container relative">
        {/* Header Section */}
        <div className="flex items-center w-40 gap-6 ml-4 lg:ml-10">
          <span className="uppercase font-semibold text-2xl text-black">
            Digital
          </span>
          <hr className="flex-grow border-t-2 border-black" />
        </div>
        {/* Hero Title */}
        <div className="relative">
          {Array.from(title).map((letter, index) => (
            <motion.h2
              key={`letter-${index}`}
              className="inline-block uppercase font-bold lg:text-[250px] text-7xl leading-none ml-4 lg:ml-10"
              initial="hidden"
              animate="visible"
              custom={index}
              variants={titleVariants}
            >
              {letter}
            </motion.h2>
          ))}
        </div>
        {/* Hero subtitle */}
        <div className="relative z-10 lg:left-72">
          {Array.from(subtitle).map((letter, index) => (
            <motion.h2
              key={`letter-${index}`}
              className=" inline-block uppercase font-bold lg:text-[250px] text-7xl leading-none ml-4 lg:ml-10 tracking-tighter"
              initial="hidden"
              animate="visible"
              custom={index}
              variants={subTitleVariants}
            >
              {letter}
            </motion.h2>
          ))}
        </div>
        {/* Description */}
        <div className="lg:absolute top-0 lg:top-96 w-72 ml-4 text-slate-500 mt-20 lg:mt-6">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
            className="block"
          >
            {descriptionWords.map((word, index) => (
              <motion.span
                key={`word-${index}`}
                initial="hidden"
                animate="visible"
                custom={index}
                variants={paragraphVariants}
                className="inline-block"
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>
      <div className="lg:relative max-w-screen-2xl lg:ml-auto lg:flex items-center justify-center gap-20 lg:-mt-20">
        {/* DownArrowIcon on the Left */}
        <div className="flex items-center justify-center lg:w-64 lg:h-64">
          <motion.div
            variants={arrowVariants}
            animate="move"
            className="border-2 py-3 lg:py-8 ml-11 rounded-full w-10 lg:flex items-center justify-center hidden "
          >
            <DownArrowIcon />
          </motion.div>
        </div>

        {/* Banner on the Right */}
        <div>
          <Image src={banner} width={1400} height={300} alt="banner" />
        </div>
      </div>
    </section>
  );
}
