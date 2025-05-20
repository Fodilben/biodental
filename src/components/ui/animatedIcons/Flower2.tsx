"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./Flower.json";
interface HealthProps {
  className?: string;
}

export default function Flower2() {
  return (
    <div className="w-[140px] ml-[-18px]">
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: "100%" , width : "140px"}}
      />
    </div>
  );
}
