import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import {
  FaCss3Alt,
  FaExternalLinkAlt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import Link from "next/link";

const myFont2 = localFont({ src: "../fonts/Satoshi-Medium.otf" });
const Projects = () => {
  let projectDetail=[{
    id:1,
    src:"/eccom-app.jpeg",
    name:"Eccomerce Webapp",
    techStack:"Tech Stack: Nextjs, Typescript, Tailwind CSS, Sanity.io",
    github:"https://github.com/Vivek7d/ecommerce-app",
    live:"https://ecommercevsd-app.vercel.app/",
  },
  {
    id:2,
    src:"/netflix-app.jpeg",
    name:"Netflix Clone",
    techStack:"Tech Stack: Next.js 14, TypeScript, Tailwind CSS, Recoil, Firebase, MovieDB API, YouTube API",
    github:"https://github.com/Vivek7d/vdmovie-app",
    live:"https://movievsd.vercel.app/",
  },
  {
    id:3,
    src:"/usablityhub-app.jpeg",
    name:" Usablityhub Clone",
    techStack:"Tech Stack: HTML, CSS, JavaScript.",
    github:"https://github.com/Vivek7d/Usability-Clone",
    live:"https://usability-clone-vsd.vercel.app/",
  },
]
  return (
    <div
      id="projects"
      className="justify-center items-center text-center  pt-40"
    >
      <h1 className="font-bold text-3xl md:text-5xl">
        <span className={myFont2.className}>Projects</span>
      </h1>
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      {projectDetail.map((project)=>(
        <div key={project.id}  className="pt-20 md:flex items-center">
        <Image
          src={project.src}
          alt="My Image"
          width={900}
          height={500}
          className="pl-0 md:pl-52 rounded-xl"
        />
        <div className="p-9  md:p-28 text-justify text-gray-800 text-xl md:text-left  md:leading-9">
          <div className={myFont2.className}>
            <h1 className="font-bold text-3xl md:text-4xl ">
            {project.name}

            </h1>
            <p className="text-gray-600 text-xl pt-5">
              Tech Stack: {project.techStack}
            </p>
            <div className="flex items-center pt-5 gap-4  ">
              <Link href={project.github}>
                <FaGithub className="h-9 w-9" />
              </Link>
              <Link href="https://ecommercevsd-app.vercel.app/">
                <FaExternalLinkAlt className="h-8 w-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      ))}
      
    </div>
  );
};

export default Projects;
