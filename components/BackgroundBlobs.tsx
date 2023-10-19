"use client";

import classNames from "classnames";
import {
  ComponentProps,
  RefObject,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import useWindowDimensions from "@/utils/windowDimensions";

interface TBackgroundBlobs extends ComponentProps<"div"> {
  radial?: boolean;
  conic?: boolean;
  speed?: number;
  respawnRatio?: number;
  offset?: number;
  isBottom?: boolean;
}

export default function BackgroundBlobs({
  className,
  radial,
  conic,
  speed = 2,
  respawnRatio = 1,
  offset = 0,
  isBottom = false,
  ...props
}: TBackgroundBlobs) {
  const ref = useRef<HTMLDivElement>(null);
  const { totalHeight } = useWindowDimensions();
  const updateAnimation = () => requestAnimationFrame(() => updateScroll());

  const respawnHeight = useCallback(
    (refObj: RefObject<HTMLDivElement>) =>
      respawnRatio * totalHeight + (refObj?.current?.clientHeight || 0),
    [respawnRatio, totalHeight]
  );
  const offsetHeight = useCallback(
    (refObj: RefObject<HTMLDivElement>) =>
      offset * totalHeight +
      (isBottom ? 0 : 1) * (refObj?.current?.clientHeight || 0),
    [offset, totalHeight, isBottom]
  );

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", updateAnimation);
      return () => window.removeEventListener("scroll", updateAnimation);
    }
  });

  const updateScroll = () => {
    if (!!ref?.current && typeof window !== "undefined") {
      ref.current.style.transform =
        "translate(0," +
        ((Math.floor(window.scrollY * speed + offsetHeight(ref)) %
          respawnHeight(ref)) -
          offsetHeight(ref)) +
        "px)";
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
