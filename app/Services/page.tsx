"use client";

import { motion } from "framer-motion";

const services = [
  "Logo & Brand Identity",
  "UI Design",
  "Photo Editing",
  "Business Card & Stationary",
  "Manipulation",
  "Illustration",
  "Thumbnail Design",
  "Packaging & Label Design",
  "Invitation Design",
  "Social Media Design",
  "CV/portfolio",
  "Flyer & Brochure Design",
  "Menu Design",
  "Catalog Design",
  "Poster & Banner Design",
  "Book & Album Cover Design",
  "T-Shirts",
];

export default function Services() {
  const customRows = [
    5, // row 1
    4, // row 2
    5, // row 3
    3, // row 4
  ];

  let index = 0;

  return (
    <section id="services" className="bg-[#0F1B29] py-16 px-4 flex justify-center items-center">
      <motion.div
        className="max-w-6xl w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Services</h2>

        <div className="space-y-4">
          {customRows.map((count, rowIdx) => (
            <div key={rowIdx} className="flex justify-center flex-wrap gap-4">
              {Array.from({ length: count }).map((_, i) => {
                const service = services[index];
                index++;

                return (
                  <motion.div
                    key={index}
                    className="bg-[#1e2a33] text-white px-4 py-2 text-sm md:text-base border border-gray-600
                      transition-all duration-300 ease-in-out
                      hover:bg-[#a0f0f8] hover:text-black hover:border-[#a0f0f8]
                      hover:shadow-md hover:shadow-cyan-200/50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.02, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {service}
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}