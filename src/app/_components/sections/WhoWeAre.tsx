"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import marketingAgency from "../../../../public/axtra/marketing-agency.jpg";
import Button from "../Button";

export default function WhoWeAre() {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const image = imageRef.current;
    const section = sectionRef.current;

    // Initial state
    gsap.set(image, {
      opacity: 0,
      y: 100,
    });

    // Main timeline for image appearance and movement
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "30% center", // Trigger when section is 30% visible
        end: "50% center",
        scrub: 1, // Smooth scrolling
        toggleActions: "play none none reverse",
        markers: false,
      },
    });

    mainTl.to(image, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    // Quick upward movement timeline
    const upwardTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "50% center", // Start quick movement after initial animation
        end: "60% center",
        scrub: true, // Enable scrubbing
        toggleActions: "play none none reverse",
        markers: false,
      },
    });

    upwardTl.to(image, {
      y: -50,
      duration: 0.3,
      ease: "power1.in",
    });

    // Fade out timeline
    const fadeTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "60% center", // Start fade out near the end
        end: "80% center",
        scrub: 1, // Smooth scrolling
        toggleActions: "play none none reverse",
        markers: false,
      },
    });

    fadeTl.to(image, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
    });

    return () => {
      // Cleanup all scroll triggers
      [mainTl, upwardTl, fadeTl].forEach((timeline) => {
        if (timeline.scrollTrigger) {
          timeline.scrollTrigger.kill();
        }
      });
    };
  }, []);

  // Animation variants for the main heading parts
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for paragraph spans
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
  };

  return (
    <section ref={sectionRef} className="bg-black bg-custom p-8 z-10">
      <div className="container grid grid-cols-1 lg:grid-cols-2  lg:py-60">
        {/* Image with animation */}
        <div ref={imageRef} className="relative">
          <Image
            src={marketingAgency}
            width={500}
            height={500}
            alt="marketing agency"
            className="relative"
          />
        </div>

        {/* Content Section */}
        <div className="text-slate-200 relative">
          <hr className="animated-line absolute left-36 -top-[272px] h-64 lg:border border-gray-900" />
          <div className="uppercase lg:w-4/5 mt-16">
            <div className="relative z-10">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={headingVariants}
                transition={{ duration: 0.8 }}
                className="text-xl"
              >
                Who We Are
              </motion.h2>

              <h2 className="text-5xl my-3 font-medium">
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={headingVariants}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="inline-block mr-2"
                >
                  We are leading
                </motion.span>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={headingVariants}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="inline-block mr-2"
                >
                  digital marketing
                </motion.span>
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={headingVariants}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="inline-block"
                >
                  agency.
                </motion.span>
              </h2>
              <hr className="animated-line absolute left-36 top-52 lg:h-[692px] lg:border border-gray-900" />
            </div>
          </div>
          {/* bg black not found */}
          <div className="absolute lg:mx-0 w-full lg:w-2/3 lg:right-10 top-[410px] lg:top-64">
            <p className="text-gray-500">
              {[
                "We're a team of strategic digital marketing",
                "working globally with largest brands. We believe",
                "that progress only happens when you refuse",
                "to play it safe. We combine ideas, behaviors, and",
                "insights with design, and data to produce brand",
                "experiences that customers love.",
              ].map((text, index) => (
                <motion.span
                  key={index}
                  custom={index + 4} // Start after the heading animations
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={paragraphVariants}
                  className="inline-block mr-1"
                >
                  {text}{" "}
                </motion.span>
              ))}
            </p>
            <div className="mt-6 lg:mt-20">
              <Button
                title={"Explore Ue"}
                hoverBackgroundColor="white"
                hoverTextColor="black"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
