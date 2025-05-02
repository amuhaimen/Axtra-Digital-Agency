"use client";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import banner from "../../../../public/axtra/banner.jpg";
import DownArrowIcon from "../Icons/down-arrow";

const titleVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.5, ease: "easeInOut" },
  }),
};

const subTitleVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3 + 1, duration: 0.5, ease: "easeInOut" },
  }),
};

const paragraphVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3 + 2, duration: 0.5, ease: "easeInOut" },
  }),
};

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

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [modalStyle, setModalStyle] = useState({});
  const heroRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleVideo = () => setIsVideoOpen((prev) => !prev);

  useLayoutEffect(() => {
    if (heroRef.current && buttonRef.current) {
      const heroRect = heroRef.current.getBoundingClientRect();
      const buttonRect = buttonRef.current.getBoundingClientRect();

      const centerX = buttonRect.left + buttonRect.width / 2 - heroRect.left;
      const centerY = buttonRect.top + buttonRect.height / 2 - heroRect.top;

      setModalStyle({
        clipPath: isVideoOpen
          ? `circle(150% at ${centerX}px ${centerY}px)`
          : `circle(0px at ${centerX}px ${centerY}px)`,
      });
    }
  }, [isVideoOpen]);

  // Escape key press to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsVideoOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section ref={heroRef} className="relative mt-24 overflow-hidden">
      <div className="container relative">
        {/* Header Section */}
        <div className="flex items-center w-40 gap-6 ml-4 lg:ml-10">
          <span className="uppercase font-semibold text-2xl text-black">
            Digital
          </span>
          <hr className="flex-grow border-t-2 border-black" />
        </div>

        {/* Video Button */}
        <div
          ref={buttonRef}
          onClick={toggleVideo}
          className="absolute right-6 top-24 hidden lg:flex items-center gap-5 cursor-pointer z-20"
        >
          <div className="relative w-36 h-36 rounded-full overflow-hidden">
            <video
              className="w-full h-full object-cover "
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://axtra-next-agency.vercel.app/assets/video/hero-3.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-black/30 flex items-center justify-center hover:bg-black/40 transition-colors">
                <div className="w-0 h-0 border-t-10 border-t-transparent border-l-16 border-l-white border-b-10 border-b-transparent ml-2"></div>
              </div>
            </div>
          </div>
          <p className="uppercase">
            Watch <br /> Video Intro
          </p>
        </div>

        {/* Hero Title */}
        <div className="relative z-10">
          {Array.from(title).map((letter, index) => (
            <motion.h2
              key={`title-${index}`}
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

        {/* Subtitle */}
        <div className="relative z-10 left-12 lg:left-72">
          {Array.from(subtitle).map((letter, index) => (
            <motion.h2
              key={`subtitle-${index}`}
              className="inline-block uppercase font-bold lg:text-[250px] text-7xl leading-none ml-4 lg:ml-10 tracking-tighter"
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
        <div className="lg:absolute top-0 lg:top-96 w-72 ml-4 text-black my-8">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
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

      {/* Down Arrow & Banner */}
      <div className="lg:relative max-w-screen-2xl lg:ml-auto lg:flex items-center justify-center gap-20 lg:-mt-20">
        <div className="flex items-center justify-center lg:w-64 lg:h-64">
          <motion.div
            variants={arrowVariants}
            animate="move"
            className="border-2 py-3 lg:py-8 ml-11 rounded-full w-10 lg:flex items-center justify-center hidden"
          >
            <DownArrowIcon />
          </motion.div>
        </div>
        <div>
          <Image src={banner} width={1400} height={300} alt="banner" />
        </div>
      </div>

      {/* Circle Reveal Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            key="video-modal"
            initial={{
              clipPath: modalStyle.clipPath, // <-- এখানেও origin use
              opacity: 0,
            }}
            animate={{
              ...modalStyle,
              opacity: 1,
              transition: { duration: 0.7, ease: "easeInOut" },
            }}
            exit={{
              clipPath: `circle(0px at ${
                modalStyle.clipPath?.match(/\d+px at (.+)/)?.[1]
              })`,
              opacity: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center z-10 overflow-hidden"
          >
            {/* Video Background */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-10"
              autoPlay
              loop
              muted
              playsInline
              controls
            >
              <source
                src="https://axtra-next-agency.vercel.app/assets/video/hero-3.mp4"
                type="video/mp4"
              />
            </video>

            {/* Overlay Content */}
            <div className="relative z-20 w-full h-full flex flex-col justify-start pt-24 px-4 lg:px-20 text-white">
              {/* Title */}
              <div className="relative z-20">
                {Array.from(title).map((letter, index) => (
                  <motion.h2
                    key={`modal-title-${index}`}
                    className="inline-block uppercase font-bold lg:text-[200px] text-7xl leading-none ml-4 lg:ml-10"
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    variants={titleVariants}
                  >
                    {letter}
                  </motion.h2>
                ))}
              </div>

              {/* Subtitle */}
              <div className="relative z-20 left-12 lg:left-72">
                {Array.from(subtitle).map((letter, index) => (
                  <motion.h2
                    key={`modal-subtitle-${index}`}
                    className="inline-block uppercase font-bold lg:text-[200px] text-7xl leading-none ml-4 lg:ml-10 tracking-tighter"
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
              <div className="lg:absolute top-0 lg:top-96 w-72 ml-4 text-white my-8">
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={paragraphVariants}
                >
                  {descriptionWords.map((word, index) => (
                    <motion.span
                      key={`modal-word-${index}`}
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
