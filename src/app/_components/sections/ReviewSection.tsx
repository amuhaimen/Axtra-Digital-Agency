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
    <section className="container my-40">
      <AnimationWrapper>
        <div className="relative">
          {/* Top Images */}
          <div className="flex justify-evenly">
            <div className="relative w-[200px] h-[200px] hidden md:block">
              <Image
                src={upCommentImageLeft}
                alt="Comments Image Left side"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[100px] h-[100px] mt-20 hidden md:block">
              <Image
                src={upCommentImageRight}
                alt="Comments Image Right side"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Middle Images */}
          <div className="w-full absolute top-80 flex justify-between gap-8">
            <div className="relative w-[100px] h-[100px] hidden md:block">
              <Image
                src={middleCommentImageLeft}
                alt="Comments Image Left side"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[200px] h-[200px] mt-14 hidden md:block">
              <Image
                src={middleCommentImageRight}
                alt="Comments Image Right side"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Carousel Section */}
          <div className="md:w-[580px] mx-auto">
            <div className="text-center mx-auto">
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
                      <p className="text-2xl leading-9 italic text-gray-800">
                        {comment.text}
                      </p>
                      <h2 className="text-2xl font-medium uppercase mt-7 text-slate-800">
                        {comment.author}
                      </h2>
                      <p className="uppercase text-xs mt-2 text-slate-500">
                        {comment.position}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-10 mt-10 md:w-[580px] w-full mx-auto z-10">
                <button
                  onClick={scrollPrev}
                  className="bg-white rounded-full hover:bg-gray-950 transition border border-slate-800 text-slate-800 hover:text-slate-200 flex items-center justify-center w-14 h-14"
                >
                  <LeftArrowIcon className="w-8" />
                </button>
                <button
                  onClick={scrollNext}
                  className="bg-white rounded-full hover:bg-gray-950 transition border border-slate-800 text-slate-800 hover:text-slate-200 flex items-center justify-center w-14 h-14"
                >
                  <RightArrowIcon className="w-8" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Images */}
          <div className="flex justify-between -mt-56">
            <div className="relative w-[200px] h-[384px] hidden md:block">
              <Image
                src={bottomCommentImageLeft}
                alt="Comments Image Left side"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[150px] h-[150px] mt-10 z-10 mr-28 hidden md:block">
              <Image
                src={bottomCommentImageRight}
                alt="Comments Image Right side"
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
