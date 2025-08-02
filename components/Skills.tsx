"use client";

import { motion } from "framer-motion";
import Image from "next/image"; 

export default function SoftwareSkills() {
  const skills = [
    {
      name: "Adobe Photoshop",
      icon: "/Photoshop logo.png",
      dots: [true, true, true, true, true, true, false],
    },
    {
      name: "Adobe Illustrator",
      icon: "/Illustrator Logo.png",
      dots: [true, true, true, true, true, false, false],
    },
    {
      name: "Adobe XD",
      icon: "/XD Logo.png",
      dots: [true, true, true, true, false, false, false],
    },
    {
      name: "Adobe Lightroom",
      icon: "/Lightroom Logo.png",
      dots: [true, true, true, true, true, true, false],
    },
    {
      name: "Canva",
      icon: "/canva_icon.png",
      dots: [true, true, true, true, true, true, false],
    },
    {
      name: "Figma",
      icon: "/Icon.png",
      dots: [true, true, true, true, true, true, false],
    },
  ];

  return (
    <section className="bg-[#0F1B29] py-16 px-4 text-white text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Software Skills
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-10"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-[#121f27] p-4 rounded-xl shadow-md w-[90px] h-[90px] flex items-center justify-center">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
            </div>

            <p className="mt-3 text-sm text-gray-300">{skill.name}</p>

            <div className="flex mt-3 space-x-1">
              {skill.dots.map((isBlue, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    isBlue ? "bg-cyan-400" : "bg-gray-500"
                  } opacity-80`}
                />
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
