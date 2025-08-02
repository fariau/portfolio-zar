"use client";
import { useState } from "react";
import { format } from "date-fns";

type Props = {
  onClose: () => void;
};

export default function ScheduleMeeting({ onClose }: Props) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("9:00am to 9:30am");

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = getDaysInMonth(year, month);

  const handleDateSelect = (day: number) => {
    const date = new Date(year, month, day);
    setSelectedDate(date);
  };

  const timeOptions = [
    "9:00am to 9:30am",
    "10:00am to 10:30am",
    "11:00am to 11:30am",
    "12:00pm to 12:30pm",
    "1:00pm to 1:30pm",
    "2:00pm to 2:30pm",
    "3:00pm to 3:30pm",
    "4:00pm to 4:30pm",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-2">
      <div className="bg-[#0A1B24] p-4 sm:p-6 rounded-xl border border-cyan-400 w-full max-w-xl text-white shadow-lg space-y-4">
        <h2 className="text-xl font-bold text-center">Schedule Meeting</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Calendar */}
          <div>
            <div className="text-center text-sm text-gray-400 mb-2">
              {format(new Date(year, month), "MMMM yyyy")}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-gray-400 text-xs mb-1">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array(new Date(year, month, 1).getDay() || 7)
                .fill("")
                .map((_, i) => (
                  <span key={`empty-${i}`} />
                ))}
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
                (day) => (
                  <button
                    key={day}
                    onClick={() => handleDateSelect(day)}
                    className={`w-8 h-8 rounded-full text-sm hover:bg-cyan-400 hover:text-black ${
                      selectedDate?.getDate() === day
                        ? "bg-cyan-400 text-black"
                        : ""
                    }`}
                  >
                    {day}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Time Picker */}
          <div className="space-y-4">
            <label className="block text-sm text-gray-400">Time</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full h-10 bg-[#11252D] text-white px-3 rounded-md border border-[#1A2E35] focus:outline-none"
            >
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            {/* Preview */}
            <div className="bg-[#11252D] rounded-md p-3 text-sm border border-[#1A2E35] space-y-1">
              <div>
                <span className="text-gray-400"> Date: </span>
                {selectedDate ? format(selectedDate, "dd-MMM-yyyy") : "--"}
              </div>
              <div>
                <span className="text-gray-400"> Day: </span>
                {selectedDate ? format(selectedDate, "EEEE") : "--"}
              </div>
              <div>
                <span className="text-gray-400"> Time: </span>
                {selectedTime}
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-500 text-sm hover:bg-gray-600"
          >
            Cancel
          </button>
          <button className="px-4 py-2 rounded-md bg-cyan-400 text-black font-medium text-sm hover:bg-cyan-500">
            Schedule
          </button>
        </div>
      </div>
    </div>
  );
}
