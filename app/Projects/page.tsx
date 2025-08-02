'use client';
import ContactSection from "../Contact/page";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <section id="projects" className="w-full min-h-screen bg-[#0F1B29] text-white px-3 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Services List */}
          <div className="w-full px-10 py-16 bg-[#0F1B29] text-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold mb-12">Projects</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-gray-400 mb-20">
                <div className="flex flex-col gap-4">
                  <span className="border-b border-gray-400 pb-1 cursor-pointer hover:text-gray-200 transition-colors duration-200">Logo & Brand Identity</span>
                  <span className="border-b border-gray-400 pb-1 cursor-pointer hover:text-gray-200 transition-colors duration-200">Business Card & Stationary</span>
                  <span className="border-b border-gray-400 pb-1 cursor-pointer hover:text-gray-200 transition-colors duration-200">Social Media Design</span>
                  <span className="border-b border-gray-400 pb-1 cursor-pointer hover:text-gray-200 transition-colors duration-200">Poster & Banner Design</span>
                  <span className="border-b border-gray-400 pb-1 cursor-pointer hover:text-gray-200 transition-colors duration-200">Packaging & Label Design</span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="border-b border-gray-400 pb-1 cursor-pointer hover:text-gray-200 transition-colors duration-200">Social Media Design</span>
                  <span className="border-b border-gray-400 pb-1 cursor-pointer hover:text-gray-200 transition-colors duration-200">Thumbnail Design</span>
                  <span className="border-b border-gray-400 pb-1 cursor-pointer hover:text-gray-200 transition-colors duration-200">Illustration</span>
                  <span className="border-b border-gray-400 pb-1 cursor-pointer hover:text-gray-200 transition-colors duration-200">Manipulation</span>
                  <span className="border-b border-gray-400 pb-1 cursor-pointer hover:text-gray-200 transition-colors duration-200">Presentation Design</span>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="border-b border-gray-400 pb-1 cursor-pointer hover:text-gray-200 transition-colors duration-200">UI/UX Design</span>
                  <span className="border-b border-gray-400 pb-1 cursor-pointer hover:text-gray-200 transition-colors duration-200">Photo Editing</span>
                  <span className="border-b border-gray-400 pb-1 cursor-pointer hover:text-gray-200 transition-colors duration-200">CV/Portfolio</span>
                  <span className="border-b border-gray-400 pb-1 cursor-pointer hover:text-gray-200 transition-colors duration-200">Menu & Invitation Design</span>
                  <span className="border-b border-gray-400 pb-1 cursor-pointer hover:text-gray-200 transition-colors duration-200">T-Shirts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Logo & Brand Identity Projects */}
          <div className="mb-8">
            <h3 className="text-1xl font-semibold text-gray-400 mb-8">Logo & Brand Identity</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-[#152232] p-6 rounded-xl shadow-md group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/project/p1.png"
                    alt="Isablow Logo"
                    width={585}
                    height={542}
                    className="object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Isablow</h4>
                <p className="text-gray-400 text-sm mb-4">Line Line Line Line Line Line Line Line</p>
                <div className="flex gap-2">
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                </div>
              </div>
              <div className="bg-[#152232] p-6 rounded-xl shadow-md group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/project/p2.png"
                    alt="Smart Enterprises Logo"
                    width={585}
                    height={542}
                    className="object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Smart Enterprises</h4>
                <p className="text-gray-400 text-sm mb-4">Line Line Line Line Line Line Line Line</p>
                <div className="flex gap-2">
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                </div>
              </div>
              <div className="bg-[#152232] p-6 rounded-xl shadow-md group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/project/p3.png"
                    alt="Logo Project 3"
                    width={585}
                    height={542}
                    className="object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Name</h4>
                <p className="text-gray-400 text-sm mb-4">Line Line Line Line Line Line Line Line</p>
                <div className="flex gap-2">
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                </div>
              </div>
              <div className="bg-[#152232] p-6 rounded-xl shadow-md group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/project/p4.png"
                    alt="Logo Project 4"
                    width={585}
                    height={542}
                    className="object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Name</h4>
                <p className="text-gray-400 text-sm mb-4">Line Line Line Line Line Line Line Line</p>
                <div className="flex gap-2">
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className=" text-gray-300 px-6 py-2 ">
                See All
              </button>
            </div>
          </div>

          {/* Business Card & Stationary */}
          <div className="mb-16">
            <h3 className="text-1xl font-semibold text-gray-400 mb-8">Business Card & Stationary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-[#152232] p-6 rounded-xl shadow-md group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/project/p9.png"
                    alt="Business Card 1"
                    width={585}
                    height={542}
                    className=" object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Name</h4>
                <p className="text-gray-400 text-sm mb-4">Line Line Line Line Line Line Line Line</p>
                <div className="flex gap-2">
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                </div>
              </div>
              <div className="bg-[#152232] p-6 rounded-xl shadow-md group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/project/p10.png"
                    alt="Business Card 2"
                    width={585}
                    height={542}
                    className="object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Name</h4>
                <p className="text-gray-400 text-sm mb-4">Line Line Line Line Line Line Line Line</p>
                <div className="flex gap-2">
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                </div>
              </div>
              <div className="bg-[#152232] p-6 rounded-xl shadow-md group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/project/p11.png"
                    alt="Business Card 3"
                    width={585}
                    height={542}
                    className=" object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Name</h4>
                <p className="text-gray-400 text-sm mb-4">Line Line Line Line Line Line Line Line</p>
                <div className="flex gap-2">
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                </div>
              </div>
              <div className="bg-[#152232] p-6 rounded-xl shadow-md group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/project/p12.png"
                    alt="Business Card 4"
                    width={585}
                    height={542}
                    className="object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Name</h4>
                <p className="text-gray-400 text-sm mb-4">Line Line Line Line Line Line Line Line</p>
                <div className="flex gap-2">
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className=" text-gray-300 px-6 py-2 ">
                See All
              </button>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="mb-16">
            <h3 className="text-1xl font-semibold text-gray-400 mb-8">UI/UX Design</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-[#152232] p-6 rounded-xl shadow-md group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/project/p13.png"
                    alt="UI/UX Project 1"
                    width={585}
                    height={542}
                    className="object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Name</h4>
                <p className="text-gray-400 text-sm mb-4">Line Line Line Line Line Line Line Line</p>
                <div className="flex gap-2">
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                </div>
              </div>
              <div className="bg-[#152232] p-6 rounded-xl shadow-md group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/project/p16.png"
                    alt="UI/UX Project 2"
                    width={585}
                    height={542}
                    className="object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Name</h4>
                <p className="text-gray-400 text-sm mb-4">Line Line Line Line Line Line Line Line</p>
                <div className="flex gap-2">
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                </div>
              </div>
              <div className="bg-[#152232] p-6 rounded-xl shadow-md group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/project/p15.png"
                    alt="UI/UX Project 3"
                    width={585}
                    height={542}
                    className="object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Name</h4>
                <p className="text-gray-400 text-sm mb-4">Line Line Line Line Line Line Line Line</p>
                <div className="flex gap-2">
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                </div>
              </div>
              <div className="bg-[#152232] p-6 rounded-xl shadow-md group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/project/p14.png"
                    alt="UI/UX Project 4"
                    width={585}
                    height={542}
                    className=" object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Name</h4>
                <p className="text-gray-400 text-sm mb-4">Line Line Line Line Line Line Line Line</p>
                <div className="flex gap-2">
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className=" text-gray-300 px-6 py-2 ">
                See All
              </button>
            </div>
          </div>

          {/* Poster & Banner Design Projects */}
          <div className="mb-16">
            <h3 className="text-1xl font-semibold text-gray-400 mb-8">Poster & Banner Design</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-[#152232] p-6 rounded-xl shadow-md group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/project/p7.png"
                    alt="Poster 1"
                    width={585}
                    height={542}
                    className="object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Name</h4>
                <p className="text-gray-400 text-sm mb-4">Line Line Line Line Line Line Line Line</p>
                <div className="flex gap-2">
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                </div>
              </div>
              <div className="bg-[#152232] p-6 rounded-xl shadow-md group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/project/p8.png"
                    alt="Banner 1"
                    width={585}
                    height={542}
                    className="object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Name</h4>
                <p className="text-gray-400 text-sm mb-4">Line Line Line Line Line Line Line Line</p>
                <div className="flex gap-2">
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                </div>
              </div>
              <div className="bg-[#152232] p-6 rounded-xl shadow-md group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/project/p6.png"
                    alt="Poster 2"
                    width={585}
                    height={542}
                    className="object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Name</h4>
                <p className="text-gray-400 text-sm mb-4">Line Line Line Line Line Line Line Line</p>
                <div className="flex gap-2">
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                </div>
              </div>
              <div className="bg-[#152232] p-6 rounded-xl shadow-md group">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/project/p5.png"
                    alt="Banner 2"
                    width={585}
                    height={542}
                    className="object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">Name</h4>
                <p className="text-gray-400 text-sm mb-4">Line Line Line Line Line Line Line Line</p>
                <div className="flex gap-2">
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                  <button className="text-gray-400 px-4 py-1 rounded-full border border-cyan-500 hover:bg-[#1a2a3f] transition-colors text-sm">
                    web design
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className=" text-gray-300 px-6 py-2 ">
                See All
              </button>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}