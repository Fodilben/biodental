import React from "react";
import MapIcon from "../ui/MapIcon";
import EmailIcon from "../ui/EmailIcon";
import ClockIcon from "../ui/ClockIcon";

const Contact = () => {
  return (
    <section className="w-full  bg-[#F7F7F5] flex flex-col items-center justify-center py-20 px-4">
      {/* Title */}
      <h2 className="font-playfair-important text-[2.5rem] md:text-[3rem] text-[#243520] font-bold mb-10 text-center">
        Contact
      </h2>
      <div className="flex flex-col md:flex-row w-full max-w-[1100px] gap-10 md:gap-20 items-start justify-center px-4">
        {/* Left: Contact Info */}
        <div className="flex-1 flex flex-col gap-6 min-w-[300px] max-w-[400px] mt-10 mx-auto md:mx-0">
          {/* Address */}
          <div className="flex items-center gap-3">
            <span className="mt-1">
              <MapIcon style={{ color: "#697C63" }} />
            </span>
            <div className="text-[18px] text-[#222] leading-snug">
              8 mars, plaine ouest, cité 1172 lgts,
              <br />
              bloc 60, Annaba, Algeria
            </div>
          </div>
          {/* Email & Phone in the same row */}
          <div>
            {/* Email */}
            <div className="flex items-center gap-3 my-2">
              <span className="mt-1">
                <EmailIcon style={{ color: "#697C63" }} />
              </span>
              <a
                href="mailto:biodental.dr.fetnaci@gmail.com"
                className="text-[18px] text-[#222] hover:underline"
              >
                biodental.dr.fetnaci@gmail.com
              </a>
            </div>
            {/* Phone */}
            <div className="flex items-center  gap-3">
              <span className="mt-1">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" style={{ color: "#3A4B35" }}>
                  <path
                    fill="#3A4B35"
                    d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"
                  />
                </svg>
              </span>
              <a
                href="tel:+2130659772737"
                className="text-[18px] text-[#222] hover:underline"
              >
                +213 0659 77 27 37
              </a>
            </div>
          </div>
          {/* Working hours */}
          <div className="flex items-start gap-3 mt-2">
            <span className="mt-1">
              <ClockIcon style={{ color: "#2B3029" }} />
            </span>
            <div>
              <div className="text-[18px] font-semibold text-[#243520] mb-1">
                Working hours:
              </div>
              <div className="text-[16px] text-[#222]">
                Saturday – Thursday
                <br />
                9:00am to 6:00pm
              </div>
            </div>
          </div>
        </div>
        {/* Right: Google Map */}
        <div className="flex-1 flex items-center justify-center w-full min-w-[320px]">
          <div className="rounded-[24px] overflow-hidden shadow-lg border border-[#e5e5e5] w-full h-[320px]  md:h-[340px] bg-[#f7f7f5]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Cabinet+Dentaire+BioDental+Dr.Fetnaci,+36.8887816,7.7332525&hl=en-GB&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
