import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

const myFont2 = localFont({ src: "../fonts/Satoshi-Medium.otf" });
const Aboutme = () => {
  return (
    <div
      id="about-me"
      className="justify-center items-center text-center  pt-40"
    >
      <h1 className="font-bold text-3xl md:text-5xl">
        <span className={myFont2.className}>About me</span>
      </h1>
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      <div className=" md:flex items-center p-4 md:p-0">
        <Image
          src="/coderboy.gif"
          alt="My Image"
          width={900}
          height={500}
          unoptimized
          className="pl-0 md:pl-52 rounded-md"
        />
        <div className="p-9 md:p-28 text-justify dark:text-white text-gray-800 text-xl md:text-left  md:leading-9">
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
            <span className="font-bold text-[#047857]">
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
