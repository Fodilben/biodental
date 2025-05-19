"use client";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import Link from "next/link";
import { useState } from "react";
import { FiPhone } from "react-icons/fi";

export const Footer = () => {
  // Footer navigation data
  const footerSections = [
    {
      title: "Services",
      links: ["Orthodontie (ODF)", "Cosmetic", "Surgical"],
    },
    {
      title: "Liens",
      links: ["Accueil", "À propos", "Services", "témoignages"],
    },
    {
      title: "Contact",
      links: ["+213 7 87 90 78 32", "biodental.dr.fetnaci@gmail.com"],
    },
    {
      title: "Social",
      isIconSection: true,
    },
  ];

  // Social media icons (Facebook, Instagram, TikTok)
  const socialIcons = [
    { src: "/icon.svg", alt: "Facebook" },
    { src: "/icon-9.svg", alt: "Instagram" },
    { src: "/icon-3.svg", alt: "TikTok" },
  ];

  // State for phone panel
  const [showPhonePanel, setShowPhonePanel] = useState(false);
  const phoneNumbers = [
    { number: "07 87 90 78 32", href: "tel:0787907832" },
    { number: "06 59 77 27 37", href: "tel:0659772737" },
  ];

  return (
    <>
      <footer className="w-full overflow-hidden bg-white border border-[#83967b] rounded-[8px] px-4 md:px-3   py-9  mx-auto">
        <div className="grid  xl:grid-cols-3  md:place-items-center lg:place-items-center xl:place-items-start    grid-rows-1 sm:grid-cols-1  gap-4">
          {/* Main CTA Button */}
          <div className="flex flex-col items-center justify-center md:hidden xl:flex  order-last md:order-first">
            <button className="w-[250px] h-[40px] bg-[#263820] text-white rounded-[6px] shadow font-bold text-[20px] flex items-center justify-center mb-6">
              Prendre rendez-vous
            </button>
          </div>
          {/* Footer Navigation Sections */}
          <div className="flex flex-col md:flex-row  pl-3 justify-between gap-8 sm:order-first md:order-last">
            {/* lines and contact section*/}
            <div className="flex gap-2">
              {/* lines */}
              <div className="flex flex-col min-w-[140px]">
                <h3 className="text-[21px] text-[#51634B]  font-normal mb-1 text-left">
                  Liens
                </h3>
                <ul className="flex flex-col gap-1 text-left">
                  <li>
                    <a
                      href="#"
                      className="text-[16px] text-[#0F1F0D] font-normal underline tracking-[-0.8px]"
                    >
                      Accueil
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px]"
                    >
                      À propos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px]"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px]"
                    >
                      témoignages
                    </a>
                  </li>
                </ul>
              </div>
              {/* contact */}
              <div className="flex flex-col min-w-[180px]">
                <h3 className="text-[21px] text-[#51634B]  font-normal mb-1 text-left">
                  Contact
                </h3>
                <ul className="flex flex-col gap-1 text-left">
                  <li className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px]">
                    +213 7 87 90 78 32
                  </li>
                  <li>
                    <a
                      href="mailto:biodental.dr.fetnaci@gmail.com"
                      className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px]"
                    >
                      biodental.dr.fetnaci@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* services and social section*/}
            <div className="flex  gap-6 ">
              {/* services */}
              <div className="flex flex-col min-w-[140px]">
                <h3 className="text-[21px] text-[#51634B] font-medium  text-left">
                  Services
                </h3>
                <ul className="flex flex-col gap-1 text-left">
                  <li className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px]">
                    Orthodontie (ODF)
                  </li>
                  <li className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px]">
                    Cosmetic
                  </li>
                  <li className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px]">
                    Surgical
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div className="flex flex-col min-w-[120px]">
                <h3 className="text-[21px] text-[#51634B]  font-normal mb-1 text-left">
                  Social
                </h3>
                <div className="flex gap-4 mt-1">
                  {/* Facebook */}
                  <svg className="w-8 h-8" fill="#222" viewBox="0 0 40 40">
                    <path d="M8.333 5h23.334A3.333 3.333 0 0 1 35 8.333v23.334A3.333 3.333 0 0 1 31.667 35H8.333A3.333 3.333 0 0 1 5 31.667V8.333A3.333 3.333 0 0 1 8.333 5Zm21.667 3.333h-4.167c-1.547 0-3.03.615-4.124 1.709C20.614 11.136 20 12.62 20 14.167v4.166h-3.333v5h3.333V35h5V23.333h5v-5h-5v-3.333c0-.442.176-.866.488-1.179.313-.312.737-.487 1.179-.487h3.333V8.333Z" />
                  </svg>
                  {/* Instagram */}
                  <svg className="w-7 h-7" fill="#222" viewBox="0 0 40 40">
                    <path d="M13 3.333h14C32.333 3.333 36.667 7.666 36.667 13v14c0 2.563-.98 5.022-2.794 6.835C32.022 35.648 29.564 36.666 27 36.666H13c-5.333 0-9.667-4.333-9.667-9.666V13c0-2.564.98-5.023 2.795-6.836C7.978 4.351 10.436 3.333 13 3.333Zm-.333 3.333c-1.591 0-3.117.632-4.243 1.758C7.299 9.549 6.667 11.075 6.667 12.666v14.667c0 3.317 2.683 6 6 6h14.667c1.591 0 3.117-.632 4.242-1.758 1.126-1.125 1.758-2.651 1.758-4.242V12.666c0-3.317-2.683-6-6-6H12.667Zm16.083 2.5a2.083 2.083 0 1 1 0 4.167 2.083 2.083 0 0 1 0-4.167ZM20 11.666c2.21 0 4.33.878 5.893 2.441C27.456 15.67 28.334 17.79 28.334 20c0 2.21-.878 4.33-2.441 5.892C24.33 27.455 22.21 28.333 20 28.333c-2.21 0-4.33-.878-5.892-2.441C12.545 24.33 11.667 22.21 11.667 20c0-2.21.878-4.33 2.441-5.893C15.67 12.544 17.79 11.666 20 11.666Zm0 3.333c-1.326 0-2.598.527-3.535 1.464C15.527 17.402 15 18.674 15 20c0 1.326.527 2.598 1.465 3.535C17.402 24.473 18.674 25 20 25c1.326 0 2.598-.527 3.536-1.465C24.473 22.598 25 21.326 25 20c0-1.326-.527-2.598-1.464-3.537C22.598 15.527 21.326 15 20 15Z" />
                  </svg>
                  {/* TikTok */}
                  <svg className="w-7 h-7" fill="#222" viewBox="0 0 40 40">
                    <path d="M31.667 5A3.333 3.333 0 0 1 35 8.333v23.334A3.333 3.333 0 0 1 31.667 35H8.333A3.333 3.333 0 0 1 5 31.667V8.333A3.333 3.333 0 0 1 8.333 5h23.334ZM30.833 30.833V22c0-1.441-.572-2.823-1.591-3.842-1.019-1.019-2.401-1.591-3.842-1.591-1.417 0-3.067.867-3.867 2.167v-1.85h-4.65v13.95h4.65v-8.217c0-1.283 1.033-2.333 2.317-2.333.619 0 1.212.246 1.65.684.438.438.684 1.032.684 1.651v8.215h4.65ZM11.467 14.267c.742 0 1.454-.295 1.98-.82.525-.525.82-1.238.82-1.98 0-1.55-1.25-2.817-2.8-2.817-.747 0-1.463.297-1.991.825-.528.528-.825 1.244-.825 1.991 0 1.55 1.267 2.8 2.816 2.8Zm2.317 16.566V16.883h-4.617v13.95h4.617Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="flex justify-center items-center md:px-16">
          <div className="flex flex-col md:flex-row justify-between font-[460] items-center mt-6 text-[15px] w-full">
            <div className="mb-2 md:mb-0 flex flex-wrap items-center gap-1 tracking-[-0.77px] text-[#51634B]">
              <span className="">© BioDental clinic 2024 |</span>
              <a href="#" className=" hover:underline">
                Privacy Policy
              </a>
              <span className="">|</span>
              <a
                href="#"
                className="text-[#2266ff] hover:underline hidden md:block"
              >
                Accessibility Statement
              </a>
            </div>
            <div className="flex items-center gap-2 font-normal text-right underline">
              <a href="#" className="text-[#2266ff] hover:underline">
                Made <span className="text-black  no-underline">by</span> Ayoub
                SADAOUI
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Fixed phone button and panel for mobile */}
      <div className="md:hidden">
        {/* Phone panel */}
        {showPhonePanel && (
          <div className="fixed bottom-[180px] right-6 z-50 flex flex-col rounded-xl border border-[#b2c2a6] bg-[#83967b] 83967b  min-w-[180px]">
            {phoneNumbers.map((item, idx) => (
              <a
                key={item.number}
                href={item.href}
                className={`flex items-center gap-2 ${idx === 0 ? "border-b-[1.5px] border-white" : ""} px-4 py-2 text-[#000]  h-[52px] text-base font-medium ${idx === 0 ? "rounded-t-xl" : ""} ${idx === phoneNumbers.length - 1 ? "rounded-b-xl" : "border-t border-white"}`}
                style={{ minWidth: 160 }}
              >
                <FiPhone className="text-[#fff]" size={18} />
                <span>{item.number}</span>
              </a>
            ))}
          </div>
        )}
        {/* Floating phone button */}
        <button
          className="fixed bottom-[120px] right-6 z-50 flex items-center justify-center w-[47px] h-[47px] rounded-full bg-[#243520] hover:bg-[#222] transition-colors duration-150 focus:outline-none shadow-lg"
          aria-label="Afficher les numéros de téléphone"
          type="button"
          onClick={() => setShowPhonePanel((v) => !v)}
        >
          <FiPhone className="text-[#F7F7F5]" size={28} />
        </button>
      </div>
    </>
  );
};
