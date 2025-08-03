"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CreateOrder() {
  const router = useRouter();

  useEffect(() => {
    const handleClose = () => {
      router.push("/");
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [router]);

  const handleClose = () => {
    router.push("/");
  };

  return (
    <section>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="relative w-full max-w-4xl rounded-2xl border border-cyan-500 bg-gradient-to-b from-[#0e1b27] to-[#081018] p-8 shadow-[0_0_40px_#06d6a0]/30 backdrop-blur-lg">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl font-bold focus:outline-none"
            aria-label="Close"
          >
            &times;
          </button>

          <h2 className="text-center text-3xl font-bold text-gray-200">Create Order</h2>
          <hr className="my-6 border-t border-cyan-700 opacity-40" />

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div>
              <select className="w-full bg-[#1a2733] border border-gray-600 rounded px-4 py-3 text-sm text-white focus:outline-none">
                <option>Select service</option>
                <option>Logo Design</option>
                <option>Banner</option>
                <option>Social Media</option>
              </select>
            </div>
            <div>
              <select className="w-full bg-[#1a2733] border border-gray-600 rounded px-4 py-3 text-sm text-white focus:outline-none">
                <option>Design Type</option>
                <option>Modern</option>
                <option>Minimal</option>
                <option>3D</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm text-white/80">Describe your design</label>
              <input
                type="text"
                placeholder="What you want"
                className="w-full bg-[#1a2733] border border-gray-600 rounded px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div className="md:row-span-2">
              <textarea
                placeholder="Brief Description"
                rows={6}
                className="w-full bg-[#1a2733] border border-gray-600 rounded px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none"
              ></textarea>
            </div>
            <div>
              <input
                type="text"
                placeholder="Instruction"
                className="w-full bg-[#1a2733] border border-gray-600 rounded px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none"
              />
            </div>
          </form>

          <div className="flex justify-end mt-8">
            <button className="w-40 border-2 bg-cyan-400 border-cyan-400 rounded-full py-2 text-white hover:bg-cyan-500 hover:text-black transition font-medium text-sm">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
