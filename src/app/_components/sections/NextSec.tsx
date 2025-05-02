"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import exampleImage from "../../../../public/axtra/marketing-agency.jpg";

export default function NextSec() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animate clip-path shape (from 0% to 100% of height)
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh]   flex items-start"
    >
      {/* Fixed Image on the Left */}
      <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center">
        <motion.div
          style={{ clipPath }}
          className="w-[90%] h-[90%] overflow-hidden rounded-xl shadow-xl"
        >
          <Image
            src={exampleImage}
            alt="Scroll Reveal"
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Scrolling Text Content */}
      <div className="w-1/2 pl-10 pr-4 space-y-40 py-40">
        <div className="text-4xl font-bold text-slate-800">Who We Are</div>
        <div className="text-lg text-slate-600">
          We work with world-class companies to deliver exceptional branding and
          digital experiences. Scroll to reveal our story.
        </div>
        <div className="text-lg text-slate-600">
          Our team specializes in turning complex problems into elegant digital
          products. With decades of experience, we provide clarity, design, and
          world-class development.
        </div>
        <div className="text-lg text-slate-600">
          We’re not just a service provider — we’re a partner. We embed with
          your team to bring ideas to life and make a lasting impact.
        </div>
        <div className="text-lg text-slate-600">
          Let's build something amazing together.
        </div>
      </div>
    </section>
  );
}
