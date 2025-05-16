'use client'
import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { FiPhone } from "react-icons/fi";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Témoignages", path: "/testimonials" },
];

const PHONE_NUMBERS = [
  "07 87 90 78 32",
  "06 59 77 27 37",
];

export  function PhonePopup({ open }: { open: boolean }) {
  
  return (
    <div
      className="absolute top-[60px] right-0 z-50 flex flex-col rounded-xl shadow-lg bg-[#9aad92]/90 border border-[#e0e7db] min-w-[230px]"
      style={{ boxShadow: "0 4px 24px 0 #0002" }}
    >
      {PHONE_NUMBERS.map((num, idx) => (
        <a
          key={num}
          href={`tel:${num.replace(/\s/g, "")}`}
          className={`flex items-center gap-2 px-6 py-4 text-lg text-[#243520] font-medium ${idx === 0 ? "rounded-t-xl" : ""} ${idx === PHONE_NUMBERS.length - 1 ? "rounded-b-xl" : "border-t border-[#e0e7db]"}`}
        >
          <FiPhone className="text-[#243520]" size={22} />
          {num}
        </a>
      ))}
    </div>
  );
}

export const Nav = () => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <nav className="fixed  w-[670px] h-16 top-[8px] left-1/2 -translate-x-1/2 z-[100]">
      <Card className="h-16  bg-[#9aad92]/60 backdrop-blur-[5px] rounded-[50px] overflow-hidden border border-[#F7F7F5]">
        <CardContent className="p-0">
          <div className="relative w-full h-16 rounded-[50px] flex items-center justify-between px-6">
            <img src="./logo.webp" alt="BioDental" className="h-8" />
            <div className="flex gap-7 ">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  className="font-medium text-[#f7f7f5] text-[14px]  hover:underline focus:underline transition-colors duration-150"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="relative">
              <button
                onClick={() => setShowPhone((v) => !v)}
                className="flex items-center justify-center w-11 h-11 rounded-full  bg-[#243520] hover:bg-[#222] transition-colors duration-150 focus:outline-none"
                aria-label="Afficher les numéros de téléphone"
                type="button"
              >
                <FiPhone className="text-[#F7F7F5] " size={23} />
              </button>
              {/* Overlay for click-away */}
              {showPhone && (
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowPhone(false)}
                  aria-label="Fermer le popup téléphone"
                />
              )}
              <PhonePopup open={showPhone} />
            </div>
          </div>
        </CardContent>
      </Card>
    </nav>
  );
};

