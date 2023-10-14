"use client";

import { AutoAwesome, DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "next-themes";

export default function Switcher() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <label
      htmlFor="dark-mode-toggle"
      className="flex cursor-pointer m-1 pl-1 ml-auto"
    >
      <input
        id="dark-mode-toggle"
        onClick={() => toggleTheme()}
        type="checkbox"
        className="hidden"
      />
      <div className="relative flex justify-between bg-gray-400 dark:bg-gray-800 w-16 h-min rounded-full overflow-clip">
        <LightMode
          className="text-white dark:text-gray-600 z-10 m-1.5"
          fontSize="small"
        />
        <DarkMode
          className=" text-black dark:text-gray-600 z-10 m-1.5"
          fontSize="small"
        />
        <div className="absolute top-0 bottom-0 aspect-square bg-yellow-400 dark:bg-white rounded-full dark:translate-x-8 duration-200" />
        <div className="absolute top-8 -bottom-10 left-1.5 w-6 dark:delay-100 bg-gray-800 dark:-translate-y-4 dark:duration-200 z-20">
          <div className="flex w-5 h-0.5 bg-gray-800" />
          <div className="flex w-5 h-0.5 bg-gray-600" />
        </div>
        <div className="flex absolute top-8 -bottom-10 right-0 text-gray-400 dark:-translate-y-8 duration-200">
          <AutoAwesome className="pl-4" /> <AutoAwesome className="pb-3" />
        </div>
      </div>
    </label>
  );
}
