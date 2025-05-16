"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./dentist.json";
interface DentistProps {
  className?: string;
}

export default function Dentist({ className = "w-[140px] h-[140px]" }: DentistProps) {
  return (
    <div className={className}>
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
} 