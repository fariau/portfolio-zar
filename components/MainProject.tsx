"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import Image from "next/image"; 

export default function MainProject() {
  const router = useRouter();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const projects = [
    { src: "/mainproject/logo.png", title: "Logo Design" },
    { src: "/mainproject/social.png", title: "Social Media Design" },
    { src: "/mainproject/poster.png", title: "Poster & Banner Design" },
    { src: "/mainproject/mainupulation.png", title: "Manipulation & Illustration" },
    { src: "/mainproject/uv-ux.png", title: "Ui/Ux Design" },
    { src: "/mainproject/cv.png", title: "CV/Portfolio Design" },
    { src: "/mainproject/packaging.png", title: "Packaging & Label Design" },
    { src: "/mainproject/photo.png", title: "Photo Editing" },
  ];

  return (
    <div className="bg-[#0F1B29] text-white font-sans py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-12">Projects</h1>

      <div
        ref={containerRef}
        className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
      >
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="w-[244px] h-[298px] relative rounded-xl overflow-hidden shadow-lg border-2 border-transparent hover:border-cyan-400"
          >
            <div className="w-full h-full relative">
              <Image
                src={item.src}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
                priority={index === 0}
              />
            </div>

            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold text-center px-2 whitespace-nowrap">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* See All Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => router.push("/Projects")}
          className="text-gray-400 underline cursor-pointer inline-block hover:text-gray-200 transition-colors duration-200"
        >
          See All
        </button>
      </div>
    </div>
  );
}
