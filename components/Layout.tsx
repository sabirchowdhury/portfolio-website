"use client";

import { AutoAwesome, DarkMode, LightMode } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import Logo from "./Logo";
import Switcher from "./Switcher";

export default function Layout({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <div className="flex justify-between p-4 items-center flex-wrap">
        <Logo />
        <Switcher />
      </div>
      {children}
    </div>
  );
}
