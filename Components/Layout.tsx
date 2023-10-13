"use client";

import { AutoAwesome, DarkMode, LightMode } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div className="flex justify-between">
        <div className="dark:text-blue-700">Sabir Chowdhury</div>
        <label htmlFor="dark-mode-toggle" className="flex cursor-pointer">
          <input
            id="dark-mode-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            type="checkbox"
            className="hidden"
          />
          <div className="relative flex justify-between bg-gray-400 dark:bg-gray-800 w-[84px] rounded-full overflow-clip">
            <LightMode className="text-white dark:text-gray-600 z-10 m-2" />
            <DarkMode className=" text-black dark:text-gray-600 z-10 m-2" />
            <div className="absolute top-0 bottom-0 aspect-square bg-yellow-400 dark:bg-white rounded-full dark:translate-x-11 duration-200" />
            <div className="absolute top-10 -bottom-10 left-2 w-6 dark:delay-100 bg-gray-800 dark:-translate-y-5 dark:duration-200 z-20">
              <div className="flex w-6 h-0.5 bg-gray-800" />
              <div className="flex w-6 h-0.5 bg-gray-600" />
            </div>
            <div className="flex absolute top-10 -bottom-10 right-0 text-gray-400 dark:-translate-y-10 duration-200">
              <AutoAwesome className="pl-2" /> <AutoAwesome className="pb-3" />
            </div>
          </div>
        </label>
      </div>
      {children}
    </div>
  );
}
