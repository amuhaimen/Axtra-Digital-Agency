import React from "react";
import choose from "../../../../../public/axtra/coose-02.webp";
import Image from "next/image";

export default function ChooseUsInformation() {
  return (
    <section className="min-h-screen w-full bg-[#FFFAF0] py-16 flex items-center">
      <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between">
        {/* Left content */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
          <div className="flex justify-center lg:justify-start flex-wrap mt-20 gap-y-16">
            <div className="basis-1/2 text-center">
              <h2 className="text-6xl lg:text-8xl font-semibold text-gray-900">
                25K
              </h2>
              <p className="text-lg text-gray-600">
                Project <br /> Completed
              </p>
            </div>
            <div className="basis-1/2 text-center">
              <h2 className="text-6xl lg:text-8xl font-semibold text-gray-900">
                8K
              </h2>
              <p className="text-lg text-gray-600">
                Happy <br /> Customer
              </p>
            </div>
            <div className="basis-1/2 text-center">
              <h2 className="text-6xl lg:text-8xl font-semibold text-gray-900">
                15K
              </h2>
              <p className="text-lg text-gray-600">
                Years <br /> Experience
              </p>
            </div>
            <div className="basis-1/2 text-center">
              <h2 className="text-6xl lg:text-8xl font-semibold text-gray-900">
                98
              </h2>
              <p className="text-lg text-gray-600">
                Awards <br /> Achievement
              </p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <Image
            src={choose}
            alt="Choose Us Image"
            className="max-w-full h-auto"
            width={1000}
            height={1000}
            priority
          />
        </div>
      </div>
    </section>
  );
}
