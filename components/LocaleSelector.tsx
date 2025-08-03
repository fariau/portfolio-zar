"use client";
import { useState } from "react";
import { Globe } from "lucide-react"; 

export default function LocaleSelector() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Globe Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        <Globe className="w-5 h-5 text-white" />
      </button>

      {/* Dropdown Panel */}
      {open && (
        <div className="absolute right-0 mt-2 w-60 bg-[#101c2a] text-white rounded-xl shadow-lg p-4 space-y-3 z-50">
          <div>
            <label className="block text-sm mb-1">Location</label>
            <select className="w-full bg-[#1a2733] border border-gray-600 rounded px-3 py-2 text-sm">
              <option>Pakistan 🇵🇰</option>
              <option>India 🇮🇳</option>
              <option>USA 🇺🇸</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Language</label>
            <select className="w-full bg-[#1a2733] border border-gray-600 rounded px-3 py-2 text-sm">
              <option>English (US)</option>
              <option>Urdu (PK)</option>
              <option>Hindi (IN)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Currency</label>
            <select className="w-full bg-[#1a2733] border border-gray-600 rounded px-3 py-2 text-sm">
              <option>USD $</option>
              <option>PKR ₨</option>
              <option>INR ₹</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
