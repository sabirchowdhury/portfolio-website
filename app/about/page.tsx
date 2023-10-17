"use client";

import NavButton from "@/components/NavButton/NavButton";
import useMounted from "@/utils/useMounted";
import classNames from "classnames";

export default function About() {
  const mounted = useMounted();

  return (
    <>
      <main className="flex flex-grow flex-col w-full items-center justify-center pb-20">
        <h1
          className={classNames(
            "md:text-8xl text-6xl md:mb-6 mb-4 transition-opacity ease-in duration-500",
            {
              "opacity-0": !mounted,
              "opacity-100": mounted,
            }
          )}
        >
          Welcome
        </h1>
        <p
          className={classNames(
            "md:text-2xl text-xl text-center md:mb-10 mb-6 transition-opacity ease-in duration-500 delay-500",
            {
              "opacity-0": !mounted,
              "opacity-100": mounted,
            }
          )}
        >
          I&apos;m Sabir, a software developer based in the UK.
        </p>
        <div
          className={classNames(
            "flex md:gap-12 gap-4 md:flex-row flex-col flex-wrap text-3xl text-center transition-opacity ease-in duration-500 delay-1000",
            {
              "opacity-0": !mounted,
              "opacity-100": mounted,
            }
          )}
        >
          <NavButton text="Experience" link="/experience" />
          <NavButton text="Projects" link="/projects" />
          <NavButton text="About" link="/about" />
          <NavButton text="Contact" link="/contact" />
        </div>
      </main>
    </>
  );
}
