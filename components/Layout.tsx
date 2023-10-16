"use client";

import { useTheme } from "next-themes";
import { ReactNode } from "react";
import Logo from "./Logo";
import Switcher from "./Switcher";

export default function Layout({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex justify-between items-center flex-wrap">
        <Logo />
        <Switcher />
      </div>
      {children}
      <div className="absolute h-1/4 w-1/5 left-0 top-1/2 rounded-full bg-gradient-radial from-rose-950 to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-20 opacity-20 -z-20"></div>
      <div className="absolute h-1/5 w-1/6 right-3/4 top-3/4 rounded-full bg-gradient-radial from-emerald-950 to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-red-700 dark:opacity-20 opacity-30 -z-20"></div>
      <div className="absolute h-1/5 w-1/6 right-0 top-0 rounded-full bg-gradient-radial from-yellow-50 to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-orange-800 dark:opacity-20 -z-20"></div>
      <div className="absolute h-1/2 w-1/3 right-1/4 bottom-1/4 rounded-full bg-gradient-radial from-sky-300 to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-green-700 dark:opacity-20 opacity-20 -z-20"></div>
    </div>
  );
}
