import Image from "next/image";
import styles from "../css/homePage.module.css";
import LoopingText from "@/components/LoopingText";
import {
  HighlightBox,
  HighlightBoxWithoutHover,
} from "@/components/HighlightBox";
import {
  Camera,
  ColorFilter,
  DesignPencil,
  Dribbble,
  Instagram,
  Linkedin,
  MobileDevMode,
  Twitter,
} from "iconoir-react";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen flex-col px-4 pb-20 pt-40 gap-5 max-w-6xl w-full mx-auto">
      <div className="flex flex-col lg:flex-row w-full gap-5 justify-center items-stretch">
        <HighlightBox
          className={"px-7 py-10 sm:px-[46px] sm:py-[50px] flex-1"}
        >
          <div className="flex flex-col sm:flex-row gap-8">
            <div
              className={`${styles.profileImageBox} aspect-square w-[224px] lg:w-[190px] xl:w-[224px]`}
            >
              <Image
                src={"/me.png"}
                fill
                className="object-cover"
                alt="My Phtot"
              />
            </div>
            <div className="flex flex-col justify-center pr-5 sm:pr-0">
              <p className="font-medium text-sm mb-2 text-gray">
                A WEB DESIGNER
              </p>
              <h2 className="text-[30px] leading-10 font-semibold text-white mb-4">
                David Henderson.
              </h2>
              <p className="text-sm tracking-wide text-gray">
                I am a Web Designer based in san francisco.
              </p>
            </div>
          </div>
        </HighlightBox>
        <div className="space-y-5 flex-1 min-w-half-flex">
          <HighlightBoxWithoutHover>
            <LoopingText />
          </HighlightBoxWithoutHover>
          <div className="flex flex-col sm:flex-row w-full gap-5 justify-center items-stretch">
            <HighlightBox className={"p-6 flex-1"}>
              <div className="w-full">
                <div className="relative w-full mb-2 h-[136px]">
                  <Image
                    src={"/sign.png"}
                    alt="sign"
                    className="object-contain"
                    fill
                  />
                </div>
                <p className="text-xs tracking-wide text-gray">
                  MORE ABOUT ME.
                </p>
                <p className="text-[20px] leading-10 font-semibold text-white ">
                  Credentials
                </p>
              </div>
            </HighlightBox>
            <HighlightBox className={"p-6 flex-1"}>
              <div className="w-full">
                <div className="relative w-full mb-2 h-[136px]">
                  <Image
                    src={"/my-works.png"}
                    alt="sign"
                    className="object-contain"
                    fill
                  />
                </div>
                <p className="text-xs tracking-wide  text-gray">SHOWCASE.</p>
                <p className="text-[20px] leading-10 font-semibold text-white ">
                  Projects
                </p>
              </div>
            </HighlightBox>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-wrap lg:flex-nowrap sm:flex-row items-stretch justify-center w-full gap-5">
        <HighlightBox
          className={"w-full sm:w-half-flex lg:w-sem-half-flex p-6"}
        >
          <div className="w-full">
            <div className="relative w-full mb-2 h-[136px]">
              <Image
                src={"/gfonts.png"}
                alt="sign"
                className="object-contain"
                fill
              />
            </div>
            <p className="text-xs tracking-wide text-gray">BLOG</p>
            <p className="text-[20px] leading-10 font-semibold text-white ">
              GFonts
            </p>
          </div>
        </HighlightBox>
        <HighlightBox
          className={
            "p-6 order-none sm:order-3 w-full lg:w-half-flex lg:order-none h-full "
          }
        >
          <div className="w-full">
            <div className="flex justify-around items-center mb-2 lg:h-[136px] h-[80px]">
              <Camera fontSize={28} className="text-white" />
              <DesignPencil fontSize={28} className="text-white" />
              <ColorFilter fontSize={28} className="text-white" />
              <MobileDevMode fontSize={28} className="text-white" />
            </div>
            <p className="text-xs tracking-wide text-gray">SPECIALIZATION</p>
            <p className="text-[20px] leading-10 font-semibold text-white ">
              Services Offering
            </p>
          </div>
        </HighlightBox>
        <HighlightBox
          className={"w-full sm:w-half-flex lg:w-sem-half-flex p-6 h-full"}
        >
          <div className="w-full socailMediaLinkBoxOuter ">
            <div className="h-[136px] mb-2">
              <div className="flex gap-5 mb-6  relative w-full bg-[#0f0f0f] z-[10] rounded-[30px] p-5 socailMediaLinkBox justify-evenly ">
                <div className="relative socailMediaLink w-half-flex rounded-full z-[1] border-[1px] max-w-[80px] lg:max-w-none  border-white/10 flex justify-center items-center h-fit text-white aspect-square p-4 cursor-pointer transition-all duration-300">
                  <Dribbble fontSize={22} />
                </div>
                <div className="relative socailMediaLink w-half-flex rounded-full z-[1] border-[1px] max-w-[80px] lg:max-w-none border-white/10 flex justify-center items-center h-fit text-white aspect-square p-4 cursor-pointer transition-all duration-300">
                  <Twitter fontSize={22} />
                </div>
              </div>
            </div>
            <p className="text-xs tracking-wide text-gray">STAY WITH ME</p>
            <p className="text-[20px] leading-10 font-semibold text-white ">
              Profiles
            </p>
          </div>
        </HighlightBox>
      
      </div>

      <div className="flex flex-col lg:flex-row w-full h-fit gap-5 justify-center items-stretch">
        <HighlightBoxWithoutHover className={"flex-1"}>
          <div></div>
        </HighlightBoxWithoutHover>
        <HighlightBox className={"flex-1"}>
          <div></div>
        </HighlightBox>
      </div>

     
    </div>
  );
}
