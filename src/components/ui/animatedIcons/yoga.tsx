"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./yoga.json";
interface YogaProps {
  className?: string;
}

export default function Yoga({ className = "w-[100px] h-[100px]" }: YogaProps) {
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