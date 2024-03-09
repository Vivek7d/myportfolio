"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Themebtn() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center">
      {resolvedTheme === "light" ? (
        <FiMoon
          className="h-7 w-7 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <FiSun
          className="h-7 w-7 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
}
