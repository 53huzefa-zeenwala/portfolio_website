"use client";
import { useGSAP, gsap } from "../utils/gsap-client";
import Navbar from "./Navbar";

const MainOverlay = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".overlay", {
      top: 0,
      duration: 1,
      ease: "power1.inOut",
    });

    tl.to(
      ".overlay",
      {
        top: "100%",
        duration: 1,
        ease: "power1.inOut",
        delay: 0.2,
      },
      "+=0"
    );

    tl.to(
      ".content",
      {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      },
      "-=0.8"
    );
  });
  return (
    <>
      <div className="overlay"></div>
      <div className="content">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default MainOverlay;
