import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import UpArrowIcon from "./Icons/up-arrow-icon";

interface BlogData {
  blogImg: StaticImageData;
  blogTitle: string;
}

export default function BlogCard({ blogImg, blogTitle }: BlogData) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="lg:relative lg:w-1/2 text-center lg:text-start">
        <motion.div
          whileHover={{
            x: -20,
            transition: {
              type: "spring",
              duration: 1,
              bounce: 0.5,
            },
          }}
        >
          <Image
            src={blogImg}
            width={300}
            height={500}
            alt="blog image"
            className="mx-auto lg:mx-0"
          />
        </motion.div>

        <div className="lg:absolute lg:left-32 -bottom-10 lg:w-96 bg-white py-10 px-8">
          <p className="text-gray-400 mb-4">UI Design . 02 May 2019</p>
          <h2 className="text-2xl font-medium text-gray-900">{blogTitle}</h2>
          <div className="border border-gray-300 mt-14"></div>
          <button className="flex items-center mt-4 text-gray-600 cursor-pointer">
            Read More <UpArrowIcon className="w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
