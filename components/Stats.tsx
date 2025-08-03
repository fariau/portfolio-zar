"use client";

import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="bg-[#0F1B29] py-16 px-4 flex justify-center items-center">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 max-w-6xl w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }} 
      >
        {/* Experience (row-span-2) */}
        <motion.div
          className="bg-[#0F1B29] rounded-xl shadow-md p-6 text-center flex flex-col justify-center items-center row-span-2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <h3 className="text-9xl font-bold text-cyan-400">5</h3>
          <p className="mt-2 text-lg font-bold text-gray-300">Years Experience</p>
        </motion.div>

        {/* Clients */}
        <motion.div
          className="bg-gray-800 rounded-xl shadow-md p-6 text-center flex flex-col justify-center items-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.3 }}
        >
          <h3 className="text-5xl font-bold text-cyan-400">60+</h3>
          <p className="mt-2 text-lg text-gray-300">Clients</p>
        </motion.div>

        {/* Rating (row-span-2) */}
        <motion.div
          className="bg-gray-800 rounded-xl shadow-md p-6 text-center flex flex-col justify-center items-center row-span-2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <h3 className="text-7xl font-bold text-cyan-400">4.8</h3>
          <div className="flex mt-2 text-xl justify-center relative">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">★</span>
            ))}

            {/* Half Star */}
            <div className="relative w-5 h-6">
              <span className="absolute left-0 top-0 text-gray-600">★</span>
              <span className="absolute left-0 top-0 text-yellow-400 w-1/2 overflow-hidden">★</span>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="bg-gray-800 rounded-xl shadow-md p-6 text-center flex flex-col justify-center items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.3 }}
        >
          <h3 className="text-5xl font-bold text-cyan-400">102</h3>
          <p className="mt-2 text-lg text-gray-300">Projects Completed</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
