"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { FC } from "react";
import WhyChooseUs from "./WhyChooseUs";
import ChooseUsReason from "./ChooseUsReason";
import ChooseUsInformation from "./ChooseUsInformation";
import GoTogether from "./GoTogether";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyChooseUsIndex: FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Horizontal scroll effect only on desktop
  useEffect(() => {
    if (isMobile) return;

    const container = containerRef.current;
    if (!container) return;

    gsap.set(sectionsRef.current.slice(1), { xPercent: 100 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        pin: true,
        start: "top top",
        end: () => `+=${sectionsRef.current.length * 100}%`,
        scrub: 4,
        anticipatePin: 1,
      },
    });

    sectionsRef.current.forEach((section, index) => {
      if (index === 0) return;
      tl.to(section, {
        xPercent: 0,
        duration: 1,
        ease: "none",
      }).to(
        sectionsRef.current[index - 1],
        {
          xPercent: -100,
          duration: 1,
          ease: "none",
        },
        "<"
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  // Define components
  const allSections = [
    WhyChooseUs,
    ChooseUsReason,
    ChooseUsInformation,
    GoTogether,
  ];
  const sectionsToRender = isMobile ? allSections.slice(1) : allSections;

  return (
    <section
      ref={containerRef}
      className={`relative bg-[#f6f6f5] w-full ${isMobile ? "" : "h-screen"}`}
    >
      {isMobile ? (
        // 👇 Stack vertically on mobile, skipping first slide
        <div className="flex flex-col">
          {sectionsToRender.map((Component, index) => (
            <Component key={index} />
          ))}
        </div>
      ) : (
        // 👇 Horizontal scroll on desktop
        <div className="sticky top-0 h-screen overflow-hidden">
          {sectionsToRender.map((Component, index) => (
            <div
              key={index}
              ref={(el) => {
                sectionsRef.current[index] = el;
              }}
              className="absolute w-full h-screen"
            >
              <Component />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default WhyChooseUsIndex;
