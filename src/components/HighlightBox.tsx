"use client";
import { useRef } from "react";
import { useGSAP, gsap, ScrollTrigger } from "../utils/gsap-client";

const HighlightBox = ({
  children,
  className,
  rowClassName,
  withOverlay = true,
}: Readonly<{
  children: React.ReactNode;
  className: string;
  rowClassName: string;
  withOverlay?: boolean;
}>) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (ref.current) {
      if (
        window.scrollY <
        ref.current.getBoundingClientRect().top + window.scrollY
      ) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            delay: 1.5, // ✅ only applies on load
          }
        );
      }

      gsap.fromTo(
        ref.current,
        { opacity: 0, scale: 0.6 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",

          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            // once: true,
            // scrub: true,
          },
        }
      );
    }
  });

  return (
    <div ref={ref} className={`${className} will-change-transform`}>
      <div
        className={`mainBox ${rowClassName} h-full w-full flex flex-start flex-col sm:flex-row relative bg-background rounded-[30px] tracking-wide text-gray font-medium`}
      >
        {withOverlay && <a className="overlayLink"></a>}

        {children}
        {withOverlay && (
          <a className="arrowBtn">
            <img src={"/arrow-icon.svg"} />
          </a>
        )}
      </div>
    </div>
  );
};

const HighlightBoxWithoutHover = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return (
    <div
      className={`mainBox ${
        className ?? ""
      } px-7 py-5 flex flex-start flex-col sm:flex-row relative bg-background rounded-[30px] tracking-wide w-full text-gray font-medium`}
    >
      {children}
    </div>
  );
};

export { HighlightBox, HighlightBoxWithoutHover };
