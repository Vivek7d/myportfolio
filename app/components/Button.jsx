import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Button = (props) => {
  return (
    <button className="bg-[#0d9488] flex items-center gap-2 text-white py-2 px-6 rounded md:ml-8 hover:bg-[#0891b2] duration-500">
      {props.children}
    </button>
  );
};

export default Button;
