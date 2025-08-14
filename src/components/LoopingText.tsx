// components/SeamlessLoopingText.tsx
"use client";

import { useEffect, useRef } from "react";
import styles from '../css/homePage.module.css';

export default function LoopingText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let pos = 0;
    const speed = 2; // pixels per frame
    let animationFrame: number;

    const loop = () => {
      pos -= speed;
      if (pos <= -container.scrollWidth / 2) {
        pos = 0; // reset instantly
      }
      container.style.transform = `translateX(${pos}px)`;
      animationFrame = requestAnimationFrame(loop);
    };

    animationFrame = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap flex w-full">
      <div className="flex gap-4 text-xs font-normal" ref={containerRef}>
        <span className="flex gap-2">
          LATEST WORK AND <b className="text-white">FEATURED</b>
          <img decoding="async" src="star1.svg" alt="" />
        </span>
        <span className="flex gap-2">
          LATEST WORK AND <b className="text-white">FEATURED</b>
          <img decoding="async" src="star1.svg" alt="" />
        </span>
        <span className="flex gap-2">
          LATEST WORK AND <b className="text-white">FEATURED</b>
          <img decoding="async" src="star1.svg" alt="" />
        </span>
        <span className="flex gap-2">
          LATEST WORK AND <b className="text-white">FEATURED</b>
          <img decoding="async" src="star1.svg" alt="" />
        </span>
        <span className="flex gap-2">
          LATEST WORK AND <b className="text-white">FEATURED</b>
          <img decoding="async" src="star1.svg" alt="" />
        </span>
        <span className="flex gap-2">
          LATEST WORK AND <b className="text-white">FEATURED</b>
          <img decoding="async" src="star1.svg" alt="" />
        </span>
        
        <span className="flex gap-2">
          LATEST WORK AND <b className="text-white">FEATURED</b>
          <img decoding="async" src="star1.svg" alt="" />
        </span>
        
        <span className="flex gap-2">
          LATEST WORK AND <b className="text-white">FEATURED</b>
          <img decoding="async" src="star1.svg" alt="" />
        </span>
      </div>
    </div>
  );
}
