"use client";

import React, { useEffect, useState, useRef } from "react";
import brand01 from "../../../../public/axtra/b1.png";
import brand02 from "../../../../public/axtra/b2.png";
import brand03 from "../../../../public/axtra/b3.png";
import brand04 from "../../../../public/axtra/b4.png";
import brand05 from "../../../../public/axtra/b5.png";
import brand06 from "../../../../public/axtra/b6.png";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.3, // Staggering children animation
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeInOut" },
  },
};

export default function BrandsSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const section = sectionRef.current; // Store the current value of ref
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section); // Use the locally stored ref value
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="container my-20 lg:my-36 text-center">
      {/* Heading Animation */}
      <motion.h2
        className="uppercase text-xl text-slate-700 mx-10 lg:mx-0"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={childVariants}
      >
        We worked with global largest brands
      </motion.h2>

      {/* Image Grid Animation */}
      <motion.div
        className="flex items-center justify-center flex-wrap gap-20 mt-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Each Image with Animation */}
        <motion.div variants={childVariants}>
          <Image src={brand01} width={100} height={100} alt="brand 1" />
        </motion.div>
        <motion.div variants={childVariants}>
          <Image src={brand02} width={100} height={100} alt="brand 2" />
        </motion.div>
        <motion.div variants={childVariants}>
          <Image src={brand03} width={100} height={100} alt="brand 3" />
        </motion.div>
        <motion.div variants={childVariants}>
          <Image src={brand04} width={100} height={100} alt="brand 4" />
        </motion.div>
        <motion.div variants={childVariants}>
          <Image src={brand05} width={100} height={100} alt="brand 5" />
        </motion.div>
        <motion.div variants={childVariants}>
          <Image src={brand06} width={100} height={100} alt="brand 6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
