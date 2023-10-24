"use client";

import { useTheme } from "next-themes";
import { ReactNode, useState } from "react";
import Logo from "./Logo";
import Switcher from "./Switcher";
import BackgroundBlobs from "./BackgroundBlobs";
import classNames from "classnames";
import Background from "./Background";
import { usePathname } from "next/navigation";
import NavButton from "./NavButton/NavButton";
import BurgerMenu, { menuItems } from "./BurgerMenu/BurgerMenu";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-full p-4 pt-24">
      <Background />
      <div
        className={classNames(
          "fixed flex flex-col p-8 pt-16 inset-0 bg-zinc-300 dark:bg-neutral-800 z-[50] duration-500 ease-in-out lg:hidden overflow-y-scroll",
          {
            "-translate-y-full": !isOpen,
          }
        )}
      >
        {menuItems.map((props, index) => (
          <NavButton
            key={`nav-item-${index}`}
            {...props}
            onClick={() => setIsOpen(false)}
            className="text-4xl"
          />
        ))}
      </div>

      <div
        className={classNames(
          "lg:absolute top-0 left-0 right-0 flex justify-center md:p-4 z-50",
          {
            absolute: !isOpen || pathname === "/",
            fixed: isOpen && pathname !== "/",
          }
        )}
      >
        <div
          className={classNames(
            "flex justify-between items-center flex-wrap max-w-7xl w-full gap-4 min-w-fit md:rounded-full px-3 sm:px-4 md:px-8 py-2 bg-zinc-300 dark:bg-neutral-800 lg:dark:bg-opacity-30 lg:bg-opacity-70",
            {
              "dark:bg-opacity-30 bg-opacity-70": !isOpen || pathname === "/",
              "bg-opacity-0 dark:bg-opacity-0": isOpen && pathname !== "/",
            }
          )}
        >
          <Logo hidden={isOpen} hide={() => setIsOpen(false)} />
          {menuItems.map((props, index) => (
            <NavButton
              key={`nav-item-${index}`}
              {...props}
              onClick={() => setIsOpen(false)}
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
            <Switcher hidden={isOpen} />
            <BurgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
