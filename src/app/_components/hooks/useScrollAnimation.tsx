import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimation(
  selector: string,
  animationProps: object = {}
) {
  useEffect(() => {
    gsap.from(selector, {
      opacity: 0,
      y: 50,
      duration: 1,
      ...animationProps,
      scrollTrigger: {
        trigger: selector,
        start: "top bottom",
        end: "top center",
        scrub: true,
      },
    });
  }, [selector, animationProps]);
}
