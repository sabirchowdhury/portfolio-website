import "./NavButton.css";
import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode, AnchorHTMLAttributes } from "react";
import Link, { LinkProps } from "next/link";

interface TNavButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | ReactNode;
  link: string;
  hidden?: boolean;
  linkProps?: Omit<LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>, "href">;
}

export default function NavButton({
  text,
  link,
  className,
  linkProps,
  hidden,
  ...props
}: TNavButton) {
  return (
    <Link
      className={classNames({
        "invisible select-none pointer-events-none": !!hidden,
      })}
      {...linkProps}
      href={link}
    >
      <button className={classNames("nav-button", className)} {...props}>
        {text}
        <div className="nav-underline" />
      </button>
    </Link>
  );
}
