"use client";
import { useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import ChatPopup from "./ChatPopup";

export default function FloatingChat({ autoOpen = false }: { autoOpen?: boolean }) {
  const [isSmallOpen, setIsSmallOpen] = useState(autoOpen);
  const [isFullOpen, setIsFullOpen] = useState(false);

  return (
    <div id="chat" className="fixed bottom-6 right-6 z-50">
      {!isSmallOpen && (
        <button
          onClick={() => setIsSmallOpen(true)}
          className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-600 transition"
        >
          <IoChatbubbleEllipsesOutline className="text-white text-2xl" />
        </button>
      )}

      {isSmallOpen && !isFullOpen && (
        <ChatPopup
          onExpand={() => setIsFullOpen(true)}
          onClose={() => setIsSmallOpen(false)}
          size="small"
        />
      )}

      {isFullOpen && (
        <ChatPopup
          onClose={() => {
            setIsFullOpen(false);
            setIsSmallOpen(false);
          }}
          size="full"
        />
      )}
    </div>
  );
}
