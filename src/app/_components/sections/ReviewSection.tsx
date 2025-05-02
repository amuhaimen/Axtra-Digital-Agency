"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import DoubleQuotationUpIcon from "../Icons/double-quotation";
import LeftArrowIcon from "../Icons/left-arrow-icon";
import RightArrowIcon from "../Icons/right-arrow";
import Image from "next/image";

import upCommentImageLeft from "../../../../public/axtra/faq-01.jpg";
import upCommentImageRight from "../../../../public/axtra/faq-02.jpg";
import middleCommentImageLeft from "../../../../public/axtra/faq-03.jpg";
import middleCommentImageRight from "../../../../public/axtra/faq-04.jpg";
import bottomCommentImageLeft from "../../../../public/axtra/faq-05.jpg";
import bottomCommentImageRight from "../../../../public/axtra/faq-06.jpg";
import { AnimationWrapper } from "../AnimationWrapper";

interface Comment {
  text: string;
  author: string;
  position: string;
}

export default function ReviewSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const comments: Comment[] = [
    {
      text: "When we talk about Alts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success!",
      author: "Marid D. Halk",
      position: "Managing Director",
    },
    {
      text: "Working with Alts was one of the best decisions for our business. Their expertise and commitment are truly outstanding, making them an invaluable partner for our growth.",
      author: "Sarah L. Collins",
      position: "Chief Marketing Officer",
    },
    {
      text: "Alts consistently delivers above and beyond our expectations. They are not just partners; they are integral to our success story.",
      author: "Johnathan E. Roberts",
      position: "CEO, BrightTech",
    },
  ];

  return (
    <section className="container my-20 lg:my-40 px-4">
      <AnimationWrapper>
        <div className="relative w-full">
          {/* Decorative Images (hidden on small screens) */}
          <div className="hidden md:flex justify-evenly">
            <div className="relative w-[200px] h-[200px]">
              <Image
                src={upCommentImageLeft}
                alt="Comment image left"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[100px] h-[100px] mt-20">
              <Image
                src={upCommentImageRight}
                alt="Comment image right"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="hidden md:flex absolute top-80 w-full justify-between gap-8">
            <div className="relative w-[100px] h-[100px]">
              <Image
                src={middleCommentImageLeft}
                alt="Middle left image"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[200px] h-[200px] mt-14">
              <Image
                src={middleCommentImageRight}
                alt="Middle right image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Carousel Section */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="text-center">
              <DoubleQuotationUpIcon className="w-14 mx-auto mb-7 text-slate-800" />
            </div>

            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {comments.map((comment, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full text-center px-4"
                    >
                      <p className="text-lg sm:text-xl md:text-2xl leading-relaxed italic text-gray-800">
                        {comment.text}
                      </p>
                      <h2 className="text-xl md:text-2xl font-medium uppercase mt-7 text-slate-800">
                        {comment.author}
                      </h2>
                      <p className="uppercase text-xs mt-2 text-slate-500">
                        {comment.position}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons - visible on all screen sizes */}
              <div className="flex justify-center gap-6 mt-10">
                <button
                  onClick={scrollPrev}
                  className="bg-white rounded-full hover:bg-gray-950 transition border border-slate-800 text-slate-800 hover:text-white flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
                >
                  <LeftArrowIcon className="w-6 md:w-8" />
                </button>
                <button
                  onClick={scrollNext}
                  className="bg-white rounded-full hover:bg-gray-950 transition border border-slate-800 text-slate-800 hover:text-white flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
                >
                  <RightArrowIcon className="w-6 md:w-8" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Images (hidden on small screens) */}
          <div className="hidden md:flex justify-between -mt-56">
            <div className="relative w-[200px] h-[384px]">
              <Image
                src={bottomCommentImageLeft}
                alt="Bottom image left"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[150px] h-[150px] mt-10 z-10 mr-28">
              <Image
                src={bottomCommentImageRight}
                alt="Bottom image right"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AnimationWrapper>
    </section>
  );
}
