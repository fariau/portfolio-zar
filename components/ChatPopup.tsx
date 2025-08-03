"use client";
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";

export default function ChatPopup({
  onClose,
  onExpand,
  size = "small",
}: {
  onClose: () => void;
  onExpand?: () => void;
  size: "small" | "full";
}) {
  const isSmall = size === "small";
  const [isTyping] = useState(true); // Always true to keep showing

  return (
    <div
      className={`${isSmall ? "w-80 h-96" : "w-[95vw] max-w-xl h-[550px]"
        } bg-[#0F1B29] text-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/10 transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 bg-[#122032] border-b border-white/10">
        <div className="text-sm font-semibold">Zargham Khan</div>
        <div className="flex items-center space-x-2">
          {isSmall && (
            <button
              onClick={onExpand}
              className="text-xs px-3 py-1 border border-white/20 rounded-md hover:bg-white/10 transition"
            >
              Open Full
            </button>
          )}
          <button
            onClick={onClose}
            className="hover:bg-white/10 p-1 rounded-full transition"
          >
            <MdClose className="text-white text-lg" />
          </button>
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex-1 px-4 py-3 overflow-y-auto text-sm space-y-3 scrollbar-thin scrollbar-thumb-white/20">
        <div className="text-xs text-center text-gray-400">Today at 12:23 PM</div>

        {/* Sender */}
        <div className="bg-[#0A2E3F] text-white px-3 py-1.5 text-sm rounded-md max-w-[70%] w-fit">
          Hello
        </div>

        {/* Receiver */}
        <div className="bg-cyan-400 text-white px-3 py-1.5 text-sm rounded-md max-w-[70%] w-fit ml-auto">
          Hi
        </div>
      </div>

      {/* Typing indicator (fixed above input, outside scroll area) */}
      {isTyping && (
        <div className="px-4 py-2">
          <div className="flex items-center gap-1 w-fit  px-3 py-2 rounded-lg">
            <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-3 border-t border-white/10 bg-[#0F1B29] flex items-center gap-2">
        <input
          type="input"
          className="flex-1 px-4 py-2 rounded-full bg-black text-black text-sm placeholder:text-gray-600 focus:outline-none"
          placeholder="Message Zargham Khan..."
        />
        <button className="bg-white text-black px-5 py-2 rounded-full text-sm hover:bg-cyan-600 transition">
          Send
        </button>
      </div>
    </div>
  );
}
