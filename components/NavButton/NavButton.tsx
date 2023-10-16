import "./NavButton.css";
import classnames from "classnames";
import { ButtonHTMLAttributes } from "react";

interface TNavButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  link?: string;
}

export default function NavButton({
  text,
  link,
  className,
  ...props
}: TNavButton) {
  return (
    <a href={link}>
      <button className={classnames("nav-underline", className)} {...props}>
        {text}
      </button>
    </a>
  );
}
