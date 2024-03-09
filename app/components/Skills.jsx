"use client";
import React, { useEffect } from "react";
import localFont from "next/font/local";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const myFont2 = localFont({ src: "../fonts/Satoshi-Medium.otf" });

const Skills = () => {
  return (
    <div id="skills" className="justify-center items-center text-center pt-40">
      <h1 className="font-bold text-3xl md:text-5xl">
        <span className={myFont2.className}>Skills</span>
      </h1>
      <hr className="w-6 h-1 flex items-center justify-center  mx-auto my-4 bg-teal-500 border-0 rounded" />
      <div className="flex flex-wrap items-center justify-center md:p-4 lg:px-[550px]">
        <SkillCard icon="/html.png" name="HTML" />
        <SkillCard icon="/css.png" name="CSS" />
        <SkillCard icon="/js.png" name="JavaScript" />
        <SkillCard icon="/react.png" name="React.js" />
        <SkillCard icon="/nextjs.png" name="Next.js" />
        <SkillCard icon="/tailwind.png" name="Tailwind CSS" />
        <SkillCard icon="/ts.png" name="TypeScript" />
        <SkillCard icon="/firebase.png" name="Firebase" />
        <SkillCard icon="/git.png" name="Git" />
        <SkillCard icon="/github.png" name="GitHub" />
      </div>
    </div>
  );
};

const SkillCard = ({ icon, name }) => {
  useEffect(() => {
    AOS.init({
      offset: 300, // offset (in px) from the original trigger point
      duration: 1000,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="m-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col items-center"
    >
      <div className="w-24 h-24 mb-4 flex items-center justify-center">
        <Image src={icon} alt="html" width={55} height={55} />
      </div>
      <p className="text-md text-gray-500 font-semibold dark:text-gray-300">
        <span className={myFont2.className}>{name}</span>
      </p>
    </div>
  );
};

export default Skills;
