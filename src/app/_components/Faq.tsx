"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Design should enrich our day",
    answer:
      "Our design services start and end with a best-in-class experience strategy that builds brands through iteration and prototyping design interfaces that bring joy to people.",
  },
  {
    question: "Bring their individual experience and creative",
    answer:
      "This is the second `$item's` accordion body. It is hidden by default until the collapse plugin adds the appropriate classes that we use to style each element.",
  },
  {
    question: "Human centred design to challenges",
    answer:
      "Our design services start and end with a best-in-class experience strategy that builds brands through iteration and prototyping design interfaces that bring joy to people.",
  },
  {
    question: "Design should enrich our day",
    answer:
      "Our design services start and end with a best-in-class experience strategy that builds brands through iteration and prototyping design interfaces that bring joy to people.",
  },
  {
    question: "Developing core web applications",
    answer:
      "Our design services start and end with a best-in-class experience strategy that builds brands through iteration and prototyping design interfaces that bring joy to people.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className="lg:max-w-2xl p-4 lg:mx-10">
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            layout
            initial={{ borderRadius: 0 }}
            className="border-b border-gray-900 pb-2"
            transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 focus:outline-none"
            >
              <div className="lg:flex justify-between items-center">
                <span className="lg:text-xl font-medium text-gray-900">
                  {item.question}
                </span>
                <span className="ml-2">{openIndex === index ? "-" : "+"}</span>
              </div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="p-4 text-gray-700"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
