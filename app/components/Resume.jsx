import Link from "next/link";
import React from "react";
import localFont from "next/font/local";

const myFont2 = localFont({ src: "../fonts/Satoshi-Medium.otf" });

export default function Resume() {
  return (
    <li className="md:ml-8 md:my-0 my-7 text-xl hover:text-[#0ea5e9]">
      <Link
        className={myFont2.className}
        href="https://drive.google.com/file/d/1k1lmPKwH44HEpDSx9h760R9M1vhqU7OW/view?usp=sharing"
      >
        Resume
      </Link>
    </li>
  );
}
