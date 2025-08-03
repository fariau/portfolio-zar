'use client';
import Image from "next/image";
import { FiDownload, FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function DownloadCVPage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-[#0F1B29]">
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center px-4 overflow-auto">
        <div className="relative">
          {/* Top Icons */}
          <div className="absolute top-2 left-2 right-2 flex justify-between items-center z-20 px-2">
            {/* Close Icon */}
            <button
              onClick={() => router.back()}
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
    </div>
  );
}
