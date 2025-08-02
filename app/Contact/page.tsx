"use client";

export default function ContactSection() {
  return (
    <section 
    id="contact"
    className="bg-[#0F1B29] text-white py-8 px-3">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-10">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-3">
              {[
                { src: "/Instagram.png", name: "Instagram" },
                { src: "/facebook.png", name: "Facebook" },
                { src: "/threads.png", name: "Threads" },
                { src: "/x.png", name: "X" },
                { src: "/youtube.png", name: "Youtube" },
                { src: "/pinterest.png", name: "Pinterest" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200">
                  <img src={item.src} alt={item.name} className="w-5 h-5" />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Platforms */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Other Platforms</h3>
            <ul className="space-y-3">
              {[
                { src: "/fiverr_icon.png", name: "Fiverr" },
                { src: "/upwork.png", name: "Upwork" },
                { src: "/dribbble.png", name: "Dribbble" },
                { src: "/behance.png", name: "Behance" },
                { src: "/linkedin.png", name: "Linkedin" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200">
                  <img src={item.src} alt={item.name} className="w-5 h-5" />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacts</h3>
            <div className="space-y-4 text-gray-200">
              <div className="flex items-center gap-3">
                <img src="/whatsapp.png" alt="Whatsapp" className="w-5 h-5" />
                <span>+92 312 2932827</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/email.png" alt="Email" className="w-5 h-5" />
                <span>hello@zarghamkhan.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-10">
          Terms and Conditions . Privacy Policy . Security
        </div>
      </div>
    </section>
  );
}
