"use client"
import Image from "next/image";
import { useState } from "react";
import ScheduleMeeting from "@/components/ScheduleMeeting";

export default function HireMeSection() {
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);

  return (
    <section
      id="HireMe"
      className="bg-[#05141B] min-h-screen text-white px-4 md:px-8 py-12"
    >
      <div className="max-w-5xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Hire Me</h2>
            <p className="text-base text-gray-400 mb-4 leading-relaxed">
              As a skilled Graphic and UI/UX Designer with{" "}
              <span className="text-cyan-400 font-semibold">5 years</span> of
              experience, I bring creativity and precision to every project. I
              specialize in branding, digital media, and user interface design,
              using tools like{" "}
              <span className="text-cyan-400 underline">
                Photoshop, Illustrator, Adobe XD, Figma
              </span>
              , and more. My services range from logo creation and stationery
              design to photo manipulation and social media visuals. With a
              focus on client goals and audience impact, I deliver designs that
              are both visually compelling and strategically effective.
            </p>
            <p className="text-3xl font-bold text-gray-300">
              20$<span className="text-xl font-bold text-gray-400">/hour</span>
            </p>
          </div>

          {/* Image */}
          <div className="relative mt-8 md:mt-0">
            <Image
              src="/hireMe.png"
              alt="Zargham Khan"
              width={400}
              height={500}
              className="relative z-10"
            />
          </div>
        </div>

        {/* Proposal Form */}
        <div className="bg-[#0A1F2A] text-white py-10 px-4 md:px-10 border border-cyan-400">
          <div className="max-w-4xl mx-auto bg-[#0A1F2A] rounded-xl p-3 shadow-lg ">

            <h1 className="text-3xl font-semibold text-center mb-4">Proposal</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select className="w-full bg-[#11252D] text-gray-300 p-3 rounded-md border border-[#1A2E35] focus:outline-none">
                <option>Company or Individual</option>
                <option>Company</option>
                <option>Individual</option>
              </select>
              <div></div>

              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-[#11252D] text-gray-300 p-3 rounded-md border border-[#1A2E35] focus:outline-none"
              />
              <div></div>

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#11252D] text-gray-300 p-3 rounded-md border border-[#1A2E35] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Contact"
                className="w-full bg-[#11252D] text-gray-300 p-3 rounded-md border border-[#1A2E35] focus:outline-none"
              />

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#11252D] text-gray-300 p-3 rounded-md border border-[#1A2E35] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your Position"
                className="w-full bg-[#11252D] text-gray-300 p-3 rounded-md border border-[#1A2E35] focus:outline-none"
              />

              <textarea
                rows={6}
                placeholder="Tell me about your company / your work"
                className="md:col-span-2 w-full bg-[#11252D] text-gray-300 p-3 rounded-md border border-[#1A2E35] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Position"
                className="w-full bg-[#11252D] text-gray-300 p-3 rounded-md border border-[#1A2E35] focus:outline-none"
              />
              <div></div>
            </div>

            <div className="mt-6 space-y-4">
              <textarea
                rows={3}
                placeholder="Role"
                className="w-full bg-[#11252D] text-gray-300 p-3 rounded-md border border-[#1A2E35] focus:outline-none"
              />
              <textarea
                rows={3}
                placeholder="Responsibilities"
                className="w-full bg-[#11252D] text-gray-300 p-3 rounded-md border border-[#1A2E35] focus:outline-none"
              />
              <textarea
                rows={3}
                placeholder="Benefits"
                className="w-full bg-[#11252D] text-gray-300 p-3 rounded-md border border-[#1A2E35] focus:outline-none"
              />
            </div>

            <div className="mt-6 text-sm text-gray-400">
              <p className="mb-2">Hire For:</p>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Graphic Design
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> UI Design
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Both
                </label>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              <div className="space-y-4">
                {/* Hiring Type & Hourly Rate */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col w-full">
                    <select className="w-full bg-[#11252D] text-gray-300 p-3 rounded-md border border-[#1A2E35] focus:outline-none h-12">
                      <option disabled selected>
                        Hiring Type
                      </option>
                      <option>Full Time</option>
                      <option>Part Time</option>
                      <option>Contract</option>
                      <option>Freelance</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-full">
                    <select className="w-full bg-[#11252D] text-gray-300 p-3 rounded-md border border-[#1A2E35] focus:outline-none h-12">
                      <option disabled selected>
                        Hourly Rate
                      </option>
                      <option>$5 - $10</option>
                      <option>$10 - $20</option>
                      <option>$20 - $30</option>
                      <option>$30 - $50</option>
                      <option>$50+</option>
                    </select>
                  </div>
                </div>

                {/* Hours per Day & Week */}
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col w-full">
                    <select className="w-full bg-[#11252D] text-gray-300 p-3 rounded-md border border-[#1A2E35] focus:outline-none h-12">
                      <option disabled selected>
                        Hours per Day
                      </option>
                      <option>1 hour</option>
                      <option>2 hours</option>
                      <option>3 hours</option>
                      <option>4 hours</option>
                      <option>5 hours</option>
                      <option>6 hours</option>
                      <option>7 hours</option>
                      <option>8+ hours</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-full">
                    <select className="w-full bg-[#11252D] text-gray-300 p-3 rounded-md border border-[#1A2E35] focus:outline-none h-12">
                      <option disabled selected>
                        Hours per Week
                      </option>
                      <option>5 hours/week</option>
                      <option>10 hours/week</option>
                      <option>15 hours/week</option>
                      <option>20 hours/week</option>
                      <option>25 hours/week</option>
                      <option>30 hours/week</option>
                      <option>35 hours/week</option>
                      <option>40+ hours/week</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-400">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="flex-1">
                  <p className="text-gray-400 mb-2">Working days per</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="flex items-center text-gray-400">
                      <input type="checkbox" className="mr-2" /> Week
                    </label>
                    <label className="flex items-center text-gray-400">
                      <input type="checkbox" className="mr-2" /> Month
                    </label>
                    <div className="w-full sm:w-60">
                      <select className="w-full bg-[#11252D] text-gray-300 p-3 rounded-md border border-[#1A2E35] focus:outline-none">
                        <option>Select days</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="text-gray-400 text-sm mt-4">Select Services</h4>
            <div className="flex flex-wrap gap-2 mt-2 py-2 px-2 justify-center items-center">
              {[
                "Logo & Brand Identity",
                "UI Design",
                "Photo Editing",
                "Business Card & Stationary",
                "Manipulation",
                "Thumbnail Design",
                "Social Media Design",
                "CV/Portfolio",
                "Packaging & Label Design",
                "Invitation Design",
                "Flyer & Brochure Design",
                "Illustration",
                "Poster & Banner Design",
                "Book & Album Cover Design",
                "T-Shirts",
                "Catalog Design",
                "Menu Design",
              ].map((service) => (
                <span
                  key={service}
                  className="bg-[#1e2a33] text-white px-4 py-2 text-sm md:text-base border border-gray-600
                      transition-all duration-300 ease-in-out
                      hover:bg-[#a0f0f8] hover:text-black hover:border-[#a0f0f8]
                      hover:shadow-md hover:shadow-cyan-200/50 rounded-lg"
                >
                  {service}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-gray-400 text-sm mb-2">Schedule Meeting (optional)</h4>
              <button
                onClick={() => setIsMeetingOpen(true)}
                className="w-full border-2 border-cyan-400 rounded-full py-3 text-cyan-400 hover:bg-cyan-400 hover:text-black transition font-medium text-sm"
              >
                Schedule Meeting
              </button>
            </div>

            {isMeetingOpen && (
              <ScheduleMeeting onClose={() => setIsMeetingOpen(false)} />
            )}
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <button className="w-40 border-2 bg-cyan-400 border-cyan-400 rounded-full py-2 text-white hover:bg-cyan-500 hover:text-black transition font-medium text-sm">
            Submit proposal
          </button>
        </div>
      </div>
    </section>
  );
}
