"use client";

import { motion } from "framer-motion";
import BlogCard from "../BlogCard";
import blogImageOne from "../../../../public/axtra/ui-design-01.jpg";
import blogImageTwo from "../../../../public/axtra/ui-design-02.jpg";

export default function BlogSection() {
  // Animation variants for the main heading parts
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for paragraph spans
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
  };

  return (
    <section className="container w-full">
      <div className="w-full text-slate-800 relative lg:ml-64 mt-[650px] lg:mt-0  text-center lg:text-start lg:mx-0">
        <hr className="animated-line absolute left-36 -top-[288px] h-60 lg:border border-gray-100" />
        <div className="uppercase mt-72">
          <div className="relative">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={headingVariants}
              transition={{ duration: 0.8 }}
              className="text-xl text-slate-500"
            >
              Recent Blog
            </motion.h2>

            <h2 className="text-2xl lg:text-5xl mt-1 lg:my-3 font-medium">
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={headingVariants}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-block mr-2"
              >
                Read Updated
              </motion.span>
              <br className="hidden lg:block" />
              <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={headingVariants}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-block mr-2"
              >
                Journal
              </motion.span>
            </h2>
            <hr className="animated-line absolute left-36 top-44 lg:h-[292px] lg:border border-gray-100" />
          </div>
        </div>

        <div className="absolute w-full  lg:mx-0 lg:w-1/2 lg:left-44 top-[75px] lg:top-48 mx-auto justify-center">
          <p className="text-gray-500 text-center">
            {[
              "Read our blog and try to see everything",
              "from every perspective. Our passion lies",
              "in making everything accessible and",
              "aesthetic for everyone.",
            ].map((text, index) => (
              <motion.span
                key={index}
                custom={index + 4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={paragraphVariants}
                className="block"
              >
                {text}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
      <motion.div
        className="w-full mt-64 lg:mt-96 mb-20 lg:flex justify-evenly"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <BlogCard
          blogImg={blogImageOne}
          blogTitle="How to bring fold to your startup company with Axtra"
        />
        <BlogCard
          blogImg={blogImageTwo}
          blogTitle="How to bring fold to your startup company with Axtra"
        />
      </motion.div>
    </section>
  );
}
