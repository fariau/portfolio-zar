"use client";

import { useState } from "react";
import Image from "next/image";
import { FiDownload, FiX } from "react-icons/fi";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section
      id="Home"
      className="min-h-screen bg-[#0F1B29] text-white px-6 md:px-20 pt-16 pb-10 flex flex-col md:flex-row items-center justify-between"
    >
      {/* Left Side */}
      <div className="max-w-xl w-full space-y-5 text-center md:text-left">
        <p className="text-sm text-cyan-400">Hello I’m</p>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Zargham <br /> Khan
        </h1>
        <p className="uppercase text-xs tracking-widest text-gray-400">
          Graphic Designer – UI / UX Designer
        </p>

        <div className="flex justify-center md:justify-start space-x-4 pt-4">
          <button
            onClick={() => setShowResume(true)}
            className="bg-cyan-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-cyan-300 transition"
          >
            Resume
          </button>
          <a
            href="/HireMe"
            className="border border-cyan-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-cyan-400 hover:text-white transition"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="relative mt-10 md:mt-0 w-full md:w-[400px] lg:w-[450px] xl:w-[500px] flex justify-center">
        <div className="absolute w-[350px] h-[350px] bg-cyan-700/30 rounded-full blur-3xl z-0"></div>
        <Image
          src="/profile.png"
          alt="Zargham Khan"
          width={749}
          height={925}
          className="relative z-10 rounded-full object-cover"
          priority
        />
      </div>
      
      {showResume && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center px-4 overflow-auto">
          <div className="relative">
            {/* Top Icons */}
            <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-20 px-2">
              {/* Close Icon */}
              <button
                onClick={() => setShowResume(false)}
                className="text-white bg-black/50 hover:bg-red-600 p-2 rounded-full shadow-lg transition"
              >
                <FiX size={20} />
              </button>

              {/* Download Icon */}
              <a
                href="/Resume.png"
                download="My_Resume.png"
                className="text-white bg-black/50 hover:bg-cyan-600 p-2 rounded-full shadow-lg transition"
              >
                <FiDownload size={20} />
              </a>
            </div>

            {/* Resume Image */}
            <Image
              src="/Resume.png"
              alt="Resume"
              width={2000}
              height={2600}
              className="rounded-md w-[90vw] h-auto max-h-[95vh] object-contain shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
