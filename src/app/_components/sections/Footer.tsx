"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import footerImg from "../../../../public/axtra/logo.png";
import gsap from "gsap";

const Footer = () => {
  const textRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (textRef.current.length) {
      gsap.to(textRef.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.1,
        duration: 0.6,
      });
    }
  }, []);

  const letters = ["L", "E", "T", "'", "S", " ", "T", "A", "L", "K"];

  return (
    <div className="bg-black text-white">
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-1/4 p-4 lg:p-8">
          <div className="mb-8 lg:mb-12">
            <Image
              src={footerImg}
              width={100}
              height={100}
              alt="Axtra"
              className=""
            />
            <p className="mt-4 text-[#6F6F6F] font-semibold text-lg">
              When do they work well, and when do they on us and finally, when
              do we actually need how can we avoid them.
            </p>
          </div>
        </div>

        {/* Social Media Sidebar */}
        <div className="w-full lg:w-32 border-t lg:border-t-0 border-l-0 lg:border-l border-r-0 lg:border-r border-b border-gray-800">
          <div className="flex flex-col justify-center lg:justify-start h-full">
            <Link
              href="#"
              className="flex-1 lg:flex-none text-center border-r lg:border-r-0 border-b-0 lg:border-b border-gray-800 hover:bg-white hover:text-black transition-colors py-9 px-8"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="flex-1 lg:flex-none text-center border-r lg:border-r-0 border-b-0 lg:border-b border-gray-800 hover:bg-white hover:text-black transition-colors py-9 px-8"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="flex-1 lg:flex-none text-center border-r lg:border-r-0 border-b-0 lg:border-b border-gray-800 hover:bg-white hover:text-black transition-colors py-9 px-8"
            >
              Linkedin
            </Link>
            <Link
              href="#"
              className="flex-1 lg:flex-none text-center border-r lg:border-r-0 border-b-0 lg:border-b border-gray-800 hover:bg-white hover:text-black transition-colors py-9 px-8"
            >
              Instagram
            </Link>
          </div>
        </div>

        {/* Right Content - LET'S TALK Animated */}
        <div className="flex-1 p-4 lg:p-8 relative">
          <div className="flex items-center justify-center h-full py-8 lg:py-0">
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-semibold text-center whitespace-nowrap">
              {letters.map((char, i) => (
                <span
                  key={i}
                  ref={(el) => {
                    if (el) textRef.current[i] = el;
                  }}
                  className="inline-block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient"
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bottom-0 w-full bg-black border-t border-gray-800 py-6 lg:py-10">
        <div className="container mx-auto px-4 lg:px-8 py-2 lg:py-4 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
          <div className="text-sm text-white text-center lg:text-left order-2 lg:order-1">
            © 2022 - 2025 | All rights reserved by Wealcoder
          </div>
          <div className="flex order-1 lg:order-2 flex-wrap justify-center lg:justify-end gap-4 lg:gap-8">
            <Link href="/about" className="text-gray-400 hover:text-white">
              ABOUT US
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white">
              CONTACT
            </Link>
            <Link href="/career" className="text-gray-400 hover:text-white">
              CAREER
            </Link>
            <Link href="/faqs" className="text-gray-400 hover:text-white">
              FAQS
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
