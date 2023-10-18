"use client";

import { useTheme } from "next-themes";
import { ReactNode } from "react";
import Logo from "./Logo";
import Switcher from "./Switcher";
import BackgroundBlobs from "./BackgroundBlobs";
import classNames from "classnames";
import Background from "./Background";

export default function Layout({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-col min-h-full p-4">
      <Background />
      <div className="flex justify-between items-center flex-wrap">
        <Logo />
        <Switcher />
      </div>
      {children}
    </div>
  );
}
