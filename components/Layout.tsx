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
import BurgerMenu, { menuItems } from "./BurgerMenu";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-full p-4 pt-24">
      <Background />

      <div className="absolute top-0 left-0 right-0 flex justify-center md:p-4 z-50">
        <div
          className={classNames(
            "flex justify-between items-center flex-wrap max-w-7xl w-full gap-4 min-w-fit md:rounded-full px-3 sm:px-4 md:px-8 py-2 dark:bg-opacity-30 bg-opacity-70 bg-zinc-300 dark:bg-neutral-800"
          )}
        >
          <Logo />
          {menuItems.map((props, index) => (
            <NavButton
              key={`nav-item-${index}`}
              {...props}
              hidden={pathname === "/"}
              className="hidden lg:block"
            />
          ))}
          {/* <NavButton
            text="Home"
            link="/"
            hidden={pathname === "/"}
            className="hidden lg:block"
          />
          <NavButton
            text="Experience"
            link="/experience"
            hidden={pathname === "/"}
            className="hidden lg:block"
          />
          <NavButton
            text="Projects"
            link="/projects"
            hidden={pathname === "/"}
            className="hidden lg:block"
          />
          <NavButton
            text="About"
            link="/about"
            hidden={pathname === "/"}
            className="hidden lg:block"
          />
          <NavButton
            text="Contact"
            link="/contact"
            hidden={pathname === "/"}
            className="hidden lg:block"
          /> */}
          <div className="flex items-center ml-auto lg:ml-0">
            <Switcher />
            <BurgerMenu />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
