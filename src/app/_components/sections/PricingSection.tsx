"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Faq from "../Faq";
import DoneIcon from "../Icons/done-icon";
import Button from "../Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PricingSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const buttonRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 768;

    if (isSmallScreen) {
      // ✅ Immediately show all content on small screens
      gsap.set(textRef.current, { opacity: 1, y: 0 });
      gsap.set([card1Ref.current, card2Ref.current], {
        opacity: 1,
        scale: 1,
        y: 0,
      });
      gsap.set(buttonRef.current, { y: 0 });
      gsap.set(faqRef.current, { opacity: 1, y: 0 });
      return;
    }

    // GSAP animation for large screens
    gsap.set(textRef.current, { opacity: 0, y: 100 });
    gsap.set([card1Ref.current, card2Ref.current], {
      opacity: 0,
      y: 0,
      scale: 0.8,
    });
    gsap.set(faqRef.current, { opacity: 0, y: 50 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom", // safer trigger for shorter viewports
        end: "top 20%",
        scrub: false,
      },
    });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
    })
      .to([card1Ref.current, card2Ref.current], {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      })
      .to(
        card1Ref.current,
        { y: -20, duration: 1, ease: "power2.out" },
        "-=0.4"
      )
      .to(card2Ref.current, { y: 20, duration: 1, ease: "power2.out" }, "<")
      .to(buttonRef.current, {
        keyframes: [
          { y: -20, duration: 0.2 },
          { y: 0, duration: 0.2 },
          { y: -15, duration: 0.2 },
          { y: 0, duration: 0.2 },
          { y: -10, duration: 0.2 },
          { y: 0, duration: 0.2 },
        ],
      })
      .to(faqRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F3ECEC] py-24">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16">
        {/* Left: Text & FAQ */}
        <div ref={textRef} className="lg:w-1/2 w-full">
          <p className="uppercase text-xl text-gray-600">Pricing Table</p>
          <h2 className="uppercase text-2xl lg:text-5xl font-medium mt-4 text-gray-900">
            Be kind to your <br /> mind
          </h2>
          <div className="border-b pb-4 lg:pb-16 border-gray-900 mt-6"></div>

          <div ref={faqRef} className="mt-6">
            <Faq />
          </div>
        </div>

        {/* Right: Cards & Button */}
        <div className="lg:w-1/2 w-full">
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div
              ref={card1Ref}
              className="relative bg-gray-950 text-gray-200 py-10 px-6 rounded-lg"
            >
              <p className="absolute uppercase -top-4 right-6 bg-orange-400 text-gray-100 px-4 py-1 rounded-lg text-sm">
                Best Value
              </p>
              <div className="flex justify-between items-center">
                <button className="border border-gray-300 px-3 py-1 rounded-full text-sm uppercase text-gray-400">
                  Yearly
                </button>
                <p className="text-4xl text-gray-100">
                  $129.<sub>99</sub>
                </p>
              </div>
              <div className="flex items-start gap-4 mt-10">
                <DoneIcon className="w-8 text-orange-400" />
                <div>
                  <h2 className="uppercase text-xl font-semibold text-slate-100">
                    14 days free
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    Subscription fee is $129.99 USD and <br /> automatically
                    renews each year.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              ref={card2Ref}
              className="bg-gray-100 text-gray-900 py-10 px-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-center">
                <button className="border border-gray-900 px-3 py-1 rounded-full text-sm uppercase">
                  Monthly
                </button>
                <p className="text-4xl">
                  $12.<sub>99</sub>
                </p>
              </div>
              <div className="flex items-start gap-4 mt-10">
                <DoneIcon className="w-8 text-gray-900" />
                <div>
                  <h2 className="uppercase text-xl font-semibold">
                    7 days free
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Subscription fee is $12.99 USD and <br /> automatically
                    renews each month.
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div
              ref={buttonRef}
              className="mt-8 flex justify-center lg:justify-start"
            >
              <Button
                title="Try it Free"
                hoverBackgroundColor="black"
                hoverTextColor="white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
