"use client";

import NavButton from "@/components/NavButton/NavButton";
import useMounted from "@/utils/useMounted";
import classNames from "classnames";

export default function Home() {
  const mounted = useMounted();

  return (
    <>
      <main className="flex flex-grow flex-col w-full items-center justify-center pb-20">
        <h1
          className={classNames(
            "md:text-8xl text-6xl md:mb-6 mb-4 mt-4 transition-opacity ease-in duration-500",
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
            "flex items-center md:gap-6 gap-4 md:flex-row flex-col flex-wrap text-3xl text-center transition-opacity ease-in duration-500 delay-1000",
            {
              "opacity-0": !mounted,
              "opacity-100": mounted,
            }
          )}
        >
          <NavButton text="Experience" link="/experience" />
          <DotSeperator />
          <NavButton text="Projects" link="/projects" />
          <DotSeperator />
          <NavButton text="About" link="/about" />
          <DotSeperator />
          <NavButton text="Contact" link="/contact" />
        </div>
      </main>
    </>
  );
}

const DotSeperator = () => (
  <div className="md:block hidden h-2 w-2 rounded bg-sky-900 dark:bg-sky-500" />
);
