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

  useEffect(() => {
    // Initial setup
    gsap.set(textRef.current, { opacity: 0, y: 100 });
    gsap.set([card1Ref.current, card2Ref.current], {
      opacity: 0,
      y: 0,
      scale: 0.8,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
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
        {
          y: -20,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .to(
        card2Ref.current,
        {
          y: 20,
          duration: 1,
          ease: "power2.out",
        },
        "<"
      )
      .to(buttonRef.current, {
        keyframes: [
          { y: -20, duration: 0.2 },
          { y: 0, duration: 0.2 },
          { y: -15, duration: 0.2 },
          { y: 0, duration: 0.2 },
          { y: -10, duration: 0.2 },
          { y: 0, duration: 0.2 },
        ],
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="container bg-[#F3ECEC] py-64  ">
      <div className="lg:flex w-full">
        <div ref={textRef} className="lg:w-1/2 mx-5">
          <p className="uppercase text-xl text-gray-600">Pricing Table</p>
          <h2 className="uppercase text-2xl lg:text-5xl font-medium mt-4 text-gray-900">
            Be kind to your <br /> mind
          </h2>
          <div className="border-b pb-4 lg:pb-16 border-gray-900 lg:mx-14"></div>
          <Faq />
        </div>
        <div className="lg:w-1/2 relative mx-4 lg:mx-0">
          <div className="absolute  w-full mt-20">
            <div
              ref={card1Ref}
              className="relative bg-gray-950 text-gray-200 py-10 rounded-lg mb-4"
            >
              {/* Card one content remains same */}
              <p className="absolute uppercase -top-4 right-10 bg-orange-400 text-gray-100 px-4 py-1 rounded-lg">
                Best Value
              </p>
              <div className="flex justify-evenly">
                <button className="border border-gray-300 px-2 py-1 rounded-full shadow-md uppercase text-sm text-gray-400">
                  Yearly
                </button>
                <p className="text-4xl text-gray-100">
                  $129. <sub>99</sub>
                </p>
              </div>
              <div className="w-full flex items-center gap-6 ml-10 mt-10">
                <DoneIcon className="w-10 text-orange-400" />
                <div>
                  <h2 className="uppercase text-2xl font-medium text-slate-100">
                    14 days free
                  </h2>
                  <p className="text-gray-400">
                    Subscription fee is $129.99 USD and <br /> automatically
                    renews each year.
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={card2Ref}
              className="bg-gray-100 text-gray-900 py-10 rounded-lg shadow-lg"
            >
              {/* Card two content remains same */}
              <div className="flex justify-evenly">
                <button className="border border-gray-900 px-2 py-1 rounded-full shadow-md uppercase text-sm">
                  Monthly
                </button>
                <p className="text-4xl">
                  $12. <sub>99</sub>
                </p>
              </div>
              <div className="w-full flex items-center gap-6 ml-10 mt-10">
                <DoneIcon className="w-10 text-gray-900" />
                <div>
                  <h2 className="uppercase text-2xl font-medium">
                    7 days free
                  </h2>
                  <p className="text-gray-600">
                    Subscription fee is $12.99 USD and <br /> automatically
                    renews each month.
                  </p>
                </div>
              </div>
            </div>

            <div ref={buttonRef} className="w-full mt-20 ml-20 lg:ml-0">
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
