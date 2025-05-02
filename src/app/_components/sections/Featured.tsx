"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import sliderOne from "../../../../public/axtra/benjon-web-01.jpg";
import sliderTwo from "../../../../public/axtra/benjon-web-02.jpg";
import sliderThree from "../../../../public/axtra/benjon-web-03.jpg";
import sliderFour from "../../../../public/axtra/benjon-web-04.jpg";
import RightArrowIcon from "../Icons/right-arrow";
import LeftArrowIcon from "../Icons/left-arrow-icon";

export default function Featured() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      skipSnaps: false,
    },
    [autoplay]
  );

  const scrollPrev = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      autoplay.reset();
    }
  };

  const scrollNext = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
      autoplay.reset();
    }
  };

  useEffect(() => {
    const onSelect = () => {
      if (emblaApi) {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      }
    };

    if (emblaApi) {
      emblaApi.on("select", onSelect);
    }

    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect);
      }
    };
  }, [emblaApi]);

  const slides = [
    { image: sliderOne, id: 1 },
    { image: sliderTwo, id: 2 },
    { image: sliderThree, id: 3 },
    { image: sliderFour, id: 4 },
  ];

  return (
    <section className="bg-black">
      <div className="container mx-auto relative py-20">
        <div className="lg:flex justify-between items-start mb-10">
          <h2 className="text-2xl text-white font-bold uppercase lg:leading-6">
            Featured Work
          </h2>
        </div>

        <div className="embla group relative" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div key={slide.id} className="embla__slide">
                <div className="lg:flex min-h-[70vh] relative flex-col lg:flex-row-reverse">
                  <div className="lg:w-1/2 w-full h-[600px] sm:h-[750px] relative">
                    <Image
                      src={slide.image}
                      alt={`Slide ${slide.id}`}
                      fill
                      className="object-cover"
                    />
                    <motion.p
                      key={selectedIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute bottom-5 left-5 text-white text-3xl font-medium bg-black/50 px-4 py-2 rounded"
                    >
                      {`${selectedIndex + 1}/`}
                      <span className="text-gray-400">4</span>
                    </motion.p>
                  </div>

                  <AnimatePresence mode="wait">
                    {index === selectedIndex && (
                      <motion.div
                        className="lg:w-1/2 w-full flex items-center justify-center lg:justify-start lg:items-center
                                absolute lg:static top-1/2 left-5 transform -translate-y-1/2 z-10"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -80 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                      >
                        <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-medium text-white text-left p-6 lg:p-0 lg:ml-20">
                          BENJON
                          <br />
                          <span className="ml-10 lg:ml-32">WEBSITE</span>
                          <br />
                          <span>2012</span>
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full transition-opacity duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 z-20"
          >
            <LeftArrowIcon className="w-5" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full transition-opacity duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 z-20"
          >
            <RightArrowIcon className="w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
