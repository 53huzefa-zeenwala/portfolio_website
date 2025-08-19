import React from "react";

const HighlightBox = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className: string
}>) => {
  return (
    <div
      className={`mainBox ${className} flex flex-start flex-col sm:flex-row relative bg-background rounded-[30px] tracking-wide text-gray font-medium`}
    >
      <a className="overlayLink"></a>
      {children}
      <a className="arrowBtn">
        <img src={"/arrow-icon.svg"} />
      </a>
    </div>
  );
};



const HighlightBoxWithoutHover = ({
  children,
  className ,
}: Readonly<{
  children: React.ReactNode;
  className?: string 
}>) => {
  return (
    <div
      className={`mainBox ${className ?? ''} px-7 py-5 flex flex-start flex-col sm:flex-row relative bg-background rounded-[30px] tracking-wide w-full text-gray font-medium`}
    >
      {children}
      
    </div>
  );
};

export  {HighlightBox, HighlightBoxWithoutHover};
