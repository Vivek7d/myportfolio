"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import localFont from "next/font/local";
import Button from "./Button";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Resume from "./Resume";

const myFont1 = localFont({ src: "../fonts/Satoshi-Black.otf" });
const myFont2 = localFont({ src: "../fonts/Satoshi-Medium.otf" });

export default function Nav() {
  let [open, setOpen] = useState(false);
  let Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Me",
      link: "about-me",
    },
    {
      name: "Skills",
      link: "skills",
    },
    {
      name: "Projects",
      link: "projects",
    },
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <h1 className={myFont1.className}>Vivek Dhalkari</h1>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden"
        >
          {open ? <IoMdClose /> : <HiOutlineMenuAlt2 />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all  duration-500 ease-in bg-white ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 md:my-0 my-7 text-xl cursor-pointer hover:text-[#0ea5e9] cu"
            >
              <Link
                to={link.link}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={myFont2.className}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Resume />
          <Button>
            <FaGithub />
            <Link href="https://github.com/Vivek7d">GitHub</Link>
          </Button>
        </ul>
      </div>
    </div>
  );
}
