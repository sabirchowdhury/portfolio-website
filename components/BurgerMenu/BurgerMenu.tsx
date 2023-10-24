"use client";

import classNames from "classnames";
import MenuIcon from "./MenuIcon";

interface TBurgerMenu {
  isOpen: boolean;
  setIsOpen: (newState: (prev: boolean) => boolean | boolean) => void;
}

export default function BurgerMenu({ isOpen, setIsOpen }: TBurgerMenu) {
  return (
    <>
      <button
        className={classNames("md:ml-4 ml-2 text-4xl lg:hidden")}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MenuIcon isChecked={isOpen} />
      </button>
    </>
  );
}

export const menuItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Experience",
    link: "/experience",
  },
  {
    text: "Projects",
    link: "/projects",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];
