"use client";
import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import SMedia from "./SMedia";

const myFont1 = localFont({ src: "../fonts/Satoshi-Black.otf" });
const myFont2 = localFont({ src: "../fonts/Satoshi-Medium.otf" });

const Hero = () => {
  return (
    <div id="/" className="flex items-center justify-center pt-64 md:pt-72">
      <div className=" space-y-7 text-center">
        <h1 className={myFont1.className}>
          <span className="text-4xl text-gray-800 dark:text-white md:text-4xl lg:text-6xl">
            Hey, I'm{" "}
            <span className="font-bold dark:text-[#34d399] text-[#0d9488]">
              Vivek!
            </span>
          </span>
        </h1>
        <p className=" text-xl max-w-lg lg:max-w-screen-md dark:text-white text-gray-500 px-4 lg:text-2xl">
          <span className={myFont2.className}>
            <span className="font-bold">A Frontend focused Web Developer</span>{" "}
            building the Frontend of Websites and Web Applications that leads to
            the success of the overall product
          </span>{" "}
        </p>
        <SMedia />
        <div className="flex justify-center items-center">
          <Link
            to="about-me"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="pt-4 md:pt-44 cursor-pointer"
          >
            <HiArrowDown className=" animate-bounce w-[35px] h-[35px] " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
