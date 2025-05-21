"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./dentist.json";
interface DentistProps {
  className?: string;
}

export default function Dentist() {
  return (
    <div className="w-[140px] ml-[-18px]">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "100%", width: "140px" }}
      />
    </div>
  );
} 