"use client";

import { Menu, Close } from "@mui/icons-material";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        className={classNames("md:ml-4 ml-2 text-4xl lg:hidden", {
          hidden: pathname === "/",
        })}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <Close fontSize="inherit" /> : <Menu fontSize="inherit" />}
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
