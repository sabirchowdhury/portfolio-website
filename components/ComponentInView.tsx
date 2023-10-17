"use client";

import classNames from "classnames";
import { ComponentProps, LegacyRef, useEffect, useRef, useState } from "react";

interface TComponentInView extends ComponentProps<"div"> {
  onScrollEnterClass?: ComponentProps<"div">["className"];
  onScrollLeaveClass?: ComponentProps<"div">["className"];
  viewedClass?: ComponentProps<"div">["className"];
  notViewedClass?: ComponentProps<"div">["className"];
  observeOptions?: IntersectionObserverInit;
  scrollRatio?: number;
}

export default function ComponentInView({
  onScrollEnterClass,
  viewedClass,
  notViewedClass,
  onScrollLeaveClass,
  className,
  observeOptions,
  scrollRatio,
  ...props
}: TComponentInView) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [isViewed, setIsViewed] = useState(false);

  useEffect(() => {
    const rootMargin = `-${Math.floor(
      (scrollRef?.current?.clientHeight || 0) / (scrollRatio || 0.5)
    )}px`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setIsViewed(true);
        }
      },
      { rootMargin, ...observeOptions }
    );

    if (!!scrollRef && !!scrollRef?.current) {
      observer.observe(scrollRef.current);
    }

    return () => observer.disconnect();
  }, [observeOptions, scrollRatio]);

  return (
    <div
      ref={scrollRef}
      {...props}
      className={classNames(className, {
        [viewedClass || ""]: isViewed,
        [notViewedClass || " "]: !isViewed,
        [onScrollEnterClass || "  "]: inView,
        [onScrollLeaveClass || "   "]: !inView,
      })}
    />
  );
}
