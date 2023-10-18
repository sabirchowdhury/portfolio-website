"use client";

import classNames from "classnames";
import { ComponentProps, useLayoutEffect, useRef } from "react";

interface TBackgroundBlobs extends ComponentProps<"div"> {
  radial?: boolean;
  conic?: boolean;
  speed?: number;
}

export default function BackgroundBlobs({
  className,
  radial,
  conic,
  speed = 2,
  ...props
}: TBackgroundBlobs) {
  const ref = useRef<HTMLDivElement>(null);
  const updateAnimation = () => requestAnimationFrame(() => updateScroll());

  useLayoutEffect(() => {
    if (!!window) {
      window.addEventListener("scroll", updateAnimation);
      return () => window.removeEventListener("scroll", updateAnimation);
    }
  });

  const updateScroll = () => {
    if (!!ref?.current && !!window) {
      ref.current.style.transform =
        "translate(0," + Math.floor(window.scrollY * speed) + "px)";
    }
  };

  return (
    <div
      ref={ref}
      {...props}
      className={classNames("absolute rounded-full -z-20", className, {
        "bg-gradient-radial": radial,
        "bg-gradient-conic": conic,
      })}
    />
  );
}
// h-1/4 w-1/5 left-0 top-1/2 from-rose-950 to-transparent dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-20 opacity-20
