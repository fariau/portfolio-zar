"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <section
      id="about"
      ref={ref}
      className="bg-[#0F1B29] text-white px-4 min-h-[500px] flex items-center justify-center transition-colors duration-500"

    >
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className={`text-base leading-7 transition-colors duration-500 ${
          isInView ? "text-gray-100" : "text-gray-400"
        }`}>
          As a skilled Graphic and UI/UX Designer with{" "}
          <span className="text-cyan-400 font-medium">5 years</span> of experience, I bring creativity and
          precision to every project. I specialize in branding, digital media, and user interface
          design, using tools like{" "}
          <span className="text-cyan-400">Photoshop</span>,{" "}
          <span className="text-cyan-400">Illustrator</span>,{" "}
          <span className="text-cyan-400">Adobe XD</span>,{" "}
          <span className="text-cyan-400">Figma</span>, and more. My services range from logo creation and
          stationery design to photo manipulation and social media visuals. With a focus on client goals
          and audience impact, I deliver designs that are both visually compelling and strategically
          effective.
        </p>
      </motion.div>
    </section>
  );
}
