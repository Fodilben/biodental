"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./Flower.json";
interface HealthProps {
  className?: string;
}

export default function Flower2({ className = "w-[140px] h-[140px]" }: HealthProps) {
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
