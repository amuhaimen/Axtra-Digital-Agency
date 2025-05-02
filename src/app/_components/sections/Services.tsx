"use client";

import { motion } from "framer-motion";
import ServiceProducts from "../ServiceProducts";
import SEO from "../../../../public/axtra/SEO.jpg";
import Email from "../../../../public/axtra/email-marketing.png";
import ContentMarketing from "../../../../public/axtra/content-marketing.png";
import SocialMarketing from "../../../../public/axtra/socianl-marketing.png";

export default function Services() {
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
    <section className="container mb-10">
      <div>
        <div className="w-full text-slate-800 relative lg:ml-64 mt-[550px] lg:mt-0 mx-4 lg:mx-0">
          <hr className="animated-line absolute left-36 -top-[288px] h-60 lg:border border-gray-100" />
          <div className="uppercase mt-72">
            <div className="relative">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={headingVariants}
                transition={{ duration: 0.8 }}
                className="text-xl text-slate-500 "
              >
                Services
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
                  Our marketing
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
                  Services
                </motion.span>
              </h2>
              <hr className="animated-line absolute left-36 top-44 lg:h-[292px] lg:border border-gray-100" />
            </div>
          </div>

          <div className="absolute lg:mx-0 lg:w-1/2 lg:left-44 top-[75px] lg:top-48">
            <p className="text-gray-500">
              {[
                "We're a team of strategic digital marketing",
                "working globally with largest brands. We believe",
                "that progress only happens when you refuse",
                "to play it safe. We combine ideas, behaviors, and",
                "insights with design, and data to produce brand.",
              ].map((text, index) => (
                <motion.span
                  key={index}
                  custom={index + 4} // Start after the heading animations
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={paragraphVariants}
                  className="inline-block mr-1"
                >
                  {text}{" "}
                </motion.span>
              ))}
            </p>
          </div>
        </div>

        {/* Services products */}
        <div className="mt-44 lg:mt-96">
          <ServiceProducts title="Search Engine Optimization" bgImage={SEO} />
          <ServiceProducts title="Email Marketing" bgImage={Email} />
          <ServiceProducts
            title="Content Marketing"
            bgImage={SocialMarketing}
          />
          <ServiceProducts
            title="Social Marketing"
            bgImage={ContentMarketing}
          />
        </div>
      </div>
    </section>
  );
}
