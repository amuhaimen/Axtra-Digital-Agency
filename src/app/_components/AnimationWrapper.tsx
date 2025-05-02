"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimationWrapperProps {
  children: React.ReactNode;
}

export function AnimationWrapper({ children }: AnimationWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const images = Array.from(
      wrapperRef.current?.querySelectorAll("img") || []
    );
    imagesRef.current = images;

    const ctx = gsap.context(() => {
      gsap.from(images, {
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top center",
          end: "bottom center",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, wrapperRef);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.02;
      const moveY = (clientY - window.innerHeight / 2) * 0.02;

      gsap.to(images, {
        x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power2.out",
        stagger: {
          amount: 0.1,
          from: "center",
        },
      });
    };

    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      ctx.revert();
      wrapper?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={wrapperRef}>{children}</div>;
}
