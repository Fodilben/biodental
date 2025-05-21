'use client'
import { useEffect, useRef, useState } from 'react';

export const useElementOnScreen = (options?: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting && videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log("Autoplay failed:", error);
        });
      }
    }, options);

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [options]);

  return { containerRef, videoRef, isVisible };
}; 