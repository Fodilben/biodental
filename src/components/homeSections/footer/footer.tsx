import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full bg-white rounded-[8px] p-[32px] mx-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Navigation and Contact Columns */}
        <div className="flex flex-1 flex-col sm:flex-row justify-between gap-8">
          {/* First column group: Liens and Contact */}
          <div className="flex flex-row justify-between gap-8 md:gap-16">
            {/* Liens Column */}
            <div className="flex flex-col min-w-[120px]">
              <h3 className="text-[21px] text-[#51634B] font-normal mb-1">
                Liens
              </h3>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/"
                    className="text-[16px] text-[#0F1F0D] font-normal"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-[16px] text-[#0F1F0D] font-normal"
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-[16px] text-[#0F1F0D] font-normal"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="text-[16px] text-[#0F1F0D] font-normal"
                  >
                    témoignages
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col min-w-[120px]">
              <h3 className="text-[21px] text-[#51634B] font-normal mb-1">
                Contact
              </h3>
              <ul className="flex flex-col gap-1">
                <li className="text-[16px] text-[#0F1F0D] font-normal">
                  +213 7 87 90 78 32
                </li>
                <li>
                  <a
                    href="mailto:biodental.dr.fetnaci@gmail.com"
                    className="text-[16px] text-[#0F1F0D] font-normal break-words"
                  >
                    biodental.dr.fetnaci@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Second column group: Services and Social */}
          <div className="flex flex-row justify-between gap-8 md:gap-16">
            {/* Services Column */}
            <div className="flex flex-col min-w-[120px]">
              <h3 className="text-[21px] text-[#51634B] font-normal mb-1">
                Services
              </h3>
              <ul className="flex flex-col gap-1">
                <li className="text-[16px] text-[#0F1F0D] font-normal">
                  Orthodontie (ODF)
                </li>
                <li className="text-[16px] text-[#0F1F0D] font-normal">
                  Cosmetic
                </li>
                <li className="text-[16px] text-[#0F1F0D] font-normal">
                  Surgical
                </li>
              </ul>
            </div>

            {/* Social Column */}
            <div className="flex flex-col flex-start min-w-[233px]">
              <h3 className="text-[21px] text-[#51634B] font-normal mb-1">
                Social
              </h3>
              <div className="flex gap-4 mt-1">
                {/* Facebook */}
                <a href="#" aria-label="Facebook">
                  <svg className="w-7 h-7" fill="#222" viewBox="0 0 40 40">
                    <path d="M8.333 5h23.334A3.333 3.333 0 0 1 35 8.333v23.334A3.333 3.333 0 0 1 31.667 35H8.333A3.333 3.333 0 0 1 5 31.667V8.333A3.333 3.333 0 0 1 8.333 5Zm21.667 3.333h-4.167c-1.547 0-3.03.615-4.124 1.709C20.614 11.136 20 12.62 20 14.167v4.166h-3.333v5h3.333V35h5V23.333h5v-5h-5v-3.333c0-.442.176-.866.488-1.179.313-.312.737-.487 1.179-.487h3.333V8.333Z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" aria-label="Instagram">
                  <svg className="w-7 h-7" fill="#222" viewBox="0 0 40 40">
                    <path d="M13 3.333h14C32.333 3.333 36.667 7.666 36.667 13v14c0 2.563-.98 5.022-2.794 6.835C32.022 35.648 29.564 36.666 27 36.666H13c-5.333 0-9.667-4.333-9.667-9.666V13c0-2.564.98-5.023 2.795-6.836C7.978 4.351 10.436 3.333 13 3.333Zm-.333 3.333c-1.591 0-3.117.632-4.243 1.758C7.299 9.549 6.667 11.075 6.667 12.666v14.667c0 3.317 2.683 6 6 6h14.667c1.591 0 3.117-.632 4.242-1.758 1.126-1.125 1.758-2.651 1.758-4.242V12.666c0-3.317-2.683-6-6-6H12.667Zm16.083 2.5a2.083 2.083 0 1 1 0 4.167 2.083 2.083 0 0 1 0-4.167ZM20 11.666c2.21 0 4.33.878 5.893 2.441C27.456 15.67 28.334 17.79 28.334 20c0 2.21-.878 4.33-2.441 5.892C24.33 27.455 22.21 28.333 20 28.333c-2.21 0-4.33-.878-5.892-2.441C12.545 24.33 11.667 22.21 11.667 20c0-2.21.878-4.33 2.441-5.893C15.67 12.544 17.79 11.666 20 11.666Zm0 3.333c-1.326 0-2.598.527-3.535 1.464C15.527 17.402 15 18.674 15 20c0 1.326.527 2.598 1.465 3.535C17.402 24.473 18.674 25 20 25c1.326 0 2.598-.527 3.536-1.465C24.473 22.598 25 21.326 25 20c0-1.326-.527-2.598-1.464-3.537C22.598 15.527 21.326 15 20 15Z" />
                  </svg>
                </a>
                {/* TikTok */}
                <a href="#" aria-label="TikTok">
                  <svg className="w-7 h-7" fill="#222" viewBox="0 0 40 40">
                    <path d="M31.667 5A3.333 3.333 0 0 1 35 8.333v23.334A3.333 3.333 0 0 1 31.667 35H8.333A3.333 3.333 0 0 1 5 31.667V8.333A3.333 3.333 0 0 1 8.333 5h23.334ZM30.833 30.833V22c0-1.441-.572-2.823-1.591-3.842-1.019-1.019-2.401-1.591-3.842-1.591-1.417 0-3.067.867-3.867 2.167v-1.85h-4.65v13.95h4.65v-8.217c0-1.283 1.033-2.333 2.317-2.333.619 0 1.212.246 1.65.684.438.438.684 1.032.684 1.651v8.215h4.65ZM11.467 14.267c.742 0 1.454-.295 1.98-.82.525-.525.82-1.238.82-1.98 0-1.55-1.25-2.817-2.8-2.817-.747 0-1.463.297-1.991.825-.528.528-.825 1.244-.825 1.991 0 1.55 1.267 2.8 2.816 2.8Zm2.317 16.566V16.883h-4.617v13.95h4.617Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button - Desktop only */}
        <div className="hidden lg:flex items-start justify-center">
          <Button className="w-[205px] h-[40px] bg-[#263820] text-white rounded-[6px] shadow font-semibold text-[16px]">
            Prendre rendez-vous
          </Button>
        </div>
      </div>

      {/* Mobile CTA Button - Bottom of section on tablet and mobile */}
      <div className="lg:hidden flex justify-center mt-6">
        <Button className="w-[205px] h-[40px] bg-[#263820] text-white rounded-[6px] shadow font-semibold text-[16px]">
          Prendre rendez-vous
        </Button>
      </div>

      {/* Footer Bottom */}
      <div className="flex justify-center items-center mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center w-full text-[15px] max-w-6xl">
          <div className="mb-2 md:mb-0 flex flex-wrap justify-center md:justify-start items-center gap-1 text-[#51634B]">
            <span>© BioDental clinic 2024 |</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="text-[#2266ff] hover:underline">
              Accessibility Statement
            </a>
          </div>
          <div className="flex items-center text-right">
            <a href="#" className="text-[#2266ff] hover:underline">
              Made <span className="text-black no-underline">by</span> Ayoub
              SADAOUI
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
