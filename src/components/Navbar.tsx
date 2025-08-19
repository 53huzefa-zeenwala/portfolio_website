"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import styles from "../css/navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();
    const [isChecked, setIsChecked] = useState(false);

  const routes = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About me",
      route: "/about",
    },
    {
      name: "My Work",
      route: "/work",
    },
    {
      name: "Contact",
      route: "/contact",
    },
  ];

    const handleCheckboxChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    console.log(isChecked);
  };

  return (
    <header className="w-full flex justify-center items-center py-4 fixed bg-background z-20 drop-shadow-lg">
      <div className="flex justify-between items-center max-w-6xl w-full px-4 ">
        <Image
          className="dark:invert z-30"
          src="/logo.svg"
          alt="App logo"
          width={70}
          height={38}
          priority
        />
        
        <div className="flex sm:hidden z-50">
          <label className={styles.menuButton} htmlFor="check">
            <input className={styles.checkbox} type="checkbox" checked={isChecked} onChange={handleCheckboxChange} id="check" />

            <span className={styles.top}></span>
            <span className={styles.middle}></span>
            <span className={styles.bottom}></span>
          </label>
        </div>
        <nav className="hidden sm:flex justify-center items-center gap-8 md:gap-12">
          {routes.map((e) => (
            <Link
              key={e.name}
              href={e.route}
              className={`nav-link ${pathname == e.route ? "text-white" : ""}`}
            >
              {e.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link href={"/"}>
            <button className="px-7 py-2 text-white bg-dark rounded-2xl transition-colors duration-500 hover:bg-white hover:text-background cursor-pointer">
              Let&apos;s Talk
            </button>
          </Link>
        </div>
      </div>
      <nav className={`${isChecked ? styles.mobileNavActive : styles.mobileNavInactive} flex sm:hidden flex-col  backdrop-blur-md bg-background w-full max-h-fit fixed justify-center items-center gap-4  top-10 p-5 pb-7 drop-shadow-lg`}>
     {routes.map((e) => (
            <Link
              key={e.name}
              href={e.route}
              className={`nav-link ${pathname == e.route ? "text-white" : ""}`}
            >
              {e.name}
            </Link>
          ))}
        </nav>
    </header>
  );
};

export default Navbar;
