// components/SeamlessLoopingText.tsx
"use client";

import { useRef } from "react";
import { useGSAP, gsap, MotionPathPlugin } from "../utils/gsap-client";

export default function LoopingText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2; // half width for loop
    const speed = 200; // pixels per second

    // Create seamless loop using modifiers
    gsap.to(container, {
      x: `-=${totalWidth}`, // move left by half width
      duration: totalWidth / speed, // time based on speed
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % -totalWidth),
      },
    });
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap flex w-full">
      <div className="flex gap-4 text-xs font-normal" ref={containerRef}>
        {Array(8)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="flex gap-2">
              LATEST WORK AND <b className="text-white">FEATURED</b>
              <img decoding="async" src="star1.svg" alt="" />
            </span>
          ))}
      </div>
    </div>
  );
}
