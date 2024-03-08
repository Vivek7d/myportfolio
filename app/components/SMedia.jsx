import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

export default function SMedia() {
  return (
    <div className="space-x-5">
      <button class="bg-[#0d9488] hover:bg-[#0891b2] text-white font-bold py-3 px-5 rounded-full">
        <Link href="https://github.com/Vivek7d">
          <FaGithub className="w-6 h-6 hover:w-9 hover:h-9 hover:transition-all hover:ease-out hover:duration-100" />
        </Link>
      </button>
      <button class="bg-[#0d9488] hover:bg-[#0891b2] text-white font-bold py-3 px-5 rounded-full">
        <Link href="https://www.linkedin.com/in/vivek-dhalkari-b09956219/">
          <FaLinkedin className="w-6 h-6 hover:w-9 hover:h-9 hover:transition-all hover:ease-out hover:duration-100" />
        </Link>
      </button>
      <button className="bg-[#0d9488] hover:bg-[#0891b2] text-white font-bold py-3 px-5 rounded-full">
        <a href="mailto:vivekdhalkari@gmail.com">
          <IoMailSharp className="w-6 h-6 hover:w-9 hover:h-9 hover:transition-all hover:ease-out hover:duration-100" />
        </a>
      </button>
    </div>
  );
}
