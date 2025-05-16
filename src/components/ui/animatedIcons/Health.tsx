"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import  animationData  from "./health.json";
interface HealthProps {
  className?: string;
}

export default function Health({ className = "w-[100px] h-[100px]" }: HealthProps) {
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
