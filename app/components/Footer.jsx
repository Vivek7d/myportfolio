import localFont from "next/font/local";
import SMedia from "./SMedia";
import { FaRegCopyright } from "react-icons/fa";

const myFont1 = localFont({ src: "../fonts/Satoshi-Black.otf" });
const myFont2 = localFont({ src: "../fonts/Satoshi-Medium.otf" });

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="flex items-center pt-10">
      <div className="font-bold text-4xl py-14 text-white bg-[#0d9488] w-full text-center">
        <h1 className={myFont1.className}>Let's Collabrate</h1>
        <SMedia className="bg-none hover:bg-none" />

        <p className="pt-4 text-[15px] text-center font-normal">
          <span className={myFont2.className}>Made With Love💖</span>
        </p>
        <p className="pt-4 text-[13px] text-balance font-normal">
          <span className={myFont2.className}>© {year} Vivek Dhalkari </span>
        </p>
      </div>
    </div>
  );
}
