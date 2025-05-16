import { useState } from "react";
import { Phone } from "lucide-react";

export default function PhoneDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-900 text-white p-2 rounded-full flex items-center justify-center"
      >
        <Phone size={20} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full mt-2 right-0 bg-green-200 rounded-xl shadow-md w-52 p-2 space-y-2 transition-all">
          <div className="flex items-center justify-between border-b pb-1">
            <Phone size={16} />
            <span className="ml-2 font-semibold">07 87 90 78 32</span>
          </div>
          <div className="flex items-center justify-between">
            <Phone size={16} />
            <span className="ml-2 font-semibold">06 59 77 27 37</span>
          </div>
        </div>
      )}
    </div>
  );
} 