"use client";

import { useTheme } from "next-themes";
import { ReactNode } from "react";
import Logo from "./Logo";
import Switcher from "./Switcher";
import BackgroundBlobs from "./BackgroundBlobs";
import classNames from "classnames";
import Background from "./Background";
import { usePathname } from "next/navigation";
import NavButton from "./NavButton/NavButton";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-full p-4">
      <Background />
      <div
        className={classNames(
          "flex justify-between items-center flex-wrap max-w-6xl w-full gap-4 mx-auto min-w-fit"
        )}
      >
        <Logo />
        <NavButton text="Home" link="/" hidden={pathname === "/"} />
        <NavButton
          text="Experience"
          link="/experience"
          hidden={pathname === "/"}
        />
        <NavButton text="Projects" link="/projects" hidden={pathname === "/"} />
        <NavButton text="About" link="/about" hidden={pathname === "/"} />
        <NavButton text="Contact" link="/contact" hidden={pathname === "/"} />
        <Switcher />
      </div>
      {children}
    </div>
  );
}
