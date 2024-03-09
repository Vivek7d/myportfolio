"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SMedia() {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      offset: 300, // offset (in px) from the original trigger point
      duration: 1000,
    });
  }, []);
  return (
    <div data-aos="zoom-in-down" className="space-x-5">
      <button class="bg-[#0d9488] hover:bg-[#0891b2] text-white font-bold py-3 px-5 rounded-full">
        <Link href="https://github.com/Vivek7d">
          <Image
            src="/github.png"
            alt=""
            width={35}
            height={35}
            className="hover:w-14 hover:h-14 hover:transition-all hover:ease-out hover:duration-100"
          />
        
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
