"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import localFont from "next/font/local";
import AOS from "aos";
import "aos/dist/aos.css";

const myFont2 = localFont({ src: "../fonts/Satoshi-Medium.otf" });
const Aboutme = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      offset: 300, // offset (in px) from the original trigger point
      duration: 1000,
    });
  }, []);
  return (
    <div
      id="about-me"
      className="justify-center items-center text-center  pt-40"
    >
      <h1 className="font-bold text-3xl md:text-5xl">
        <span className={myFont2.className}>About me</span>
      </h1>
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      <div className=" flex flex-col md:flex-col  lg:flex-row items-center p-4 md:p-0">
        <Image
          src="/coderboy.gif"
          alt="My Image"
          width={900}
          height={500}
          data-aos="fade-down"
          className="pl-0 md:p-20 lg:pt-9 lg:pr-0 lg:pl-52  rounded-md"
        />
        <div
          data-aos="fade-up"
          className="p-9 md:pt-0 lg:pt-12 md:p-28 md:text-justify text-justify dark:text-white text-gray-800 text-xl md:text-2xl  lg:text-left  md:leading-9"
        >
          <h1 className={myFont2.className}>
            {" "}
            Hello there! I'm Vivek S. Dhalkari , a Passionate{" "}
            <span className="font-bold">Frontend Developer</span> with a knack
            for crafting engaging digital experiences.
            <br />
            <div className="pt-4"></div>
            Armed with a B.E in Computer Engineering from SIES GST and a Diploma
            in Industrial Electronics, I thrive on innovation and creativity.
            <br />
            <div className="pt-4"></div>
            My expertise lies in leveraging technologies like{" "}
            <span className="font-bold dark:text-[#10b981] text-[#047857]">
              {" "}
              React.js, Next.js, and Firebase
            </span>{" "}
            to build dynamic web applications that captivate users. From
            developing a Netflix clone with Tailwind CSS to leading eCommerce
            projects with Stripe integration, I enjoy pushing the boundaries of
            web development. With a penchant for clean design and seamless
            functionality, I strive to create intuitive interfaces that leave a
            lasting impression.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
