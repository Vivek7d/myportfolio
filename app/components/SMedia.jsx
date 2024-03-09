import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

export default function SMedia() {
  return (
    <div className="space-x-5">
      <button class="bg-[#0d9488] hover:bg-[#0891b2] text-white font-bold py-3 px-5 rounded-full">
        <Link href="https://github.com/Vivek7d">
          <Image
            src="/github.png"
            alt=""
            width={35}
            height={35}
            className="hover:w-14 hover:h-14 hover:transition-all hover:ease-out hover:duration-100"
          />
          {/* <FaGithub  /> */}
        </Link>
      </button>
      <button class="bg-[#0d9488] hover:bg-[#0891b2] text-white font-bold py-3 px-5 rounded-full">
        <Link href="https://www.linkedin.com/in/vivek-dhalkari-b09956219/">
          <Image
            src="/linkedin.png"
            alt=""
            width={35}
            height={35}
            className="hover:w-14 hover:h-14 hover:transition-all hover:ease-out hover:duration-100"
          />
        </Link>
      </button>
      <button className="bg-[#0d9488] hover:bg-[#0891b2] text-white font-bold py-3 px-5 rounded-full">
        <a href="mailto:vivekdhalkari@gmail.com">
        <Image
            src="/gmail.png"
            alt=""
            width={35}
            height={35}
            className="hover:w-14 hover:h-14 hover:transition-all hover:ease-out hover:duration-100"
          />
        </a>
      </button>
    </div>
  );
}
