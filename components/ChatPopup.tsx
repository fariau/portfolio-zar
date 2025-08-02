// components/ChatPopup.tsx
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

  return (
    <div
      className={`${
        isSmall ? "w-80 h-96" : "w-[600px] h-[500px]"
      } bg-[#0F1B29] text-white rounded-xl shadow-2xl flex flex-col overflow-hidden`}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 border-b border-white/10">
        <div className="text-sm font-semibold">Zargham Khan</div>
        <div className="flex items-center space-x-2">
          {isSmall && (
            <button
              onClick={onExpand}
              className="text-sm px-2 py-1 border rounded hover:bg-white/10 transition"
            >
              Open Full
            </button>
          )}
          <button onClick={onClose}>
            <MdClose className="text-white text-xl" />
          </button>
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex-1 px-4 py-3 overflow-y-auto space-y-2">
        <div className="text-xs text-center text-gray-400">At 12:23</div>
        <div className="bg-cyan-500 text-white p-2 rounded-md w-fit">Hi</div>
        <div className="bg-gray-300 text-black p-2 rounded-md w-fit self-end ml-auto">
          Hello
        </div>
      </div>

      {/* Input */}
      <div className="p-3 border-t border-white/10 flex gap-2">
        <input
          type="text"
          className="flex-1 px-3 py-2 rounded-md bg-white text-black text-sm"
          placeholder="Message Zargham Khan..."
        />
        <button className="bg-white text-black px-4 py-2 rounded-md text-sm hover:bg-cyan-300 transition">
          Send
        </button>
      </div>
    </div>
  );
}
