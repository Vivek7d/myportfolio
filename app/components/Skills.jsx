import React from "react";
import localFont from "next/font/local";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";

import Image from "next/image";

const myFont2 = localFont({ src: "../fonts/Satoshi-Medium.otf" });

const Skills = () => {
  return (
    <div id="skills" className="justify-center items-center text-center pt-40">
      <h1 className="font-bold text-3xl md:text-5xl">
        <span className={myFont2.className}>Skills</span>
      </h1>
      <hr className="w-6 h-1 flex items-center justify-center  mx-auto my-4 bg-teal-500 border-0 rounded" />
      <div className="flex flex-wrap items-center justify-center md:px-[550px]">
        <SkillCard
          icon={<FaHtml5 className="h-[55px] w-[55px]" />}
          name="HTML"
        />
        <SkillCard
          icon={<FaCss3Alt className="h-[55px] w-[55px]" />}
          name="CSS"
        />
        <SkillCard
          icon={<IoLogoJavascript className="h-[55px] w-[55px]" />}
          name="JavaScript"
        />
        <SkillCard
          icon={<FaReact className="h-[55px] w-[55px]" />}
          name="Reactjs"
        />
        <SkillCard
          icon={<TbBrandNextjs className="h-[55px] w-[55px]" />}
          name="Nextjs"
        />
        <SkillCard
          icon={<SiTailwindcss className="h-[55px] w-[55px]" />}
          name="Tailwind CSS"
        />
        <SkillCard
          icon={<SiTypescript className="h-[55px] w-[55px]" />}
          name="Typescript"
        />
        <SkillCard
          icon={<IoLogoFirebase className="h-[55px] w-[55px]" />}
          name="Firebase"
        />
        <SkillCard
          icon={<FaGitAlt className="h-[55px] w-[55px]" />}
          name="Git"
        />
        <SkillCard
          icon={<FaGithub className="h-[55px] w-[55px]" />}
          name="GitHub"
        />
      </div>
    </div>
  );
};

const SkillCard = ({ icon, name }) => {
  return (
    <div className="m-4 p-4 bg-gray-100 rounded-lg flex flex-col items-center">
      <div className="w-24 h-24 mb-4 flex items-center justify-center">
        {icon}
      </div>
      <p className="text-sm text-gray-500">{name}</p>
    </div>
  );
};

export default Skills;
