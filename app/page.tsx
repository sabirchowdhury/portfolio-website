"use client";

import NavButton from "@/components/NavButton/NavButton";
import useMounted from "@/utils/useMounted";
import classNames from "classnames";
import Image from "next/image";

export default function Home() {
  const mounted = useMounted();

  return (
    <>
      <main className="flex flex-grow xl:max-h-[1000px] flex-col w-full md:justify-center max-w-7xl p-8 mx-auto">
        <div className="flex gap-x-14 xl:gap-x-20 justify-between lg:flex-row flex-col-reverse items-center">
          <div>
            <h1
              className={classNames(
                "md:text-8xl text-6xl md:mb-6 mb-4 mt-4 transition-opacity ease-in duration-500 lg:text-left text-center",
                {
                  "opacity-0": !mounted,
                  "opacity-100": mounted,
                }
              )}
            >
              {"<coder>"}
            </h1>
            <p
              className={classNames(
                "md:text-2xl text-xl md:mb-6 mb-4 transition-opacity ease-in duration-500 delay-500 lg:text-left text-center",
                {
                  "opacity-0": !mounted,
                  "opacity-100": mounted,
                }
              )}
            >
              Hi 👋, I&apos;m{" "}
              <b className="text-2xl md:text-3xl dark:text-emerald-600 text-sky-800">
                Sabir
              </b>
              , a software developer 👨🏽‍💻 with a background in electrical
              engineering 🔧. Currently, I am based in the UK (near London 📍)
              and I am open to work.
            </p>
            <div
              className={classNames(
                "flex items-center justify-center lg:justify-start md:gap-6 gap-4 md:flex-row flex-col flex-wrap text-3xl text-center transition-opacity ease-in duration-500 delay-1000",
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
          </div>
          <div
            className={classNames(
              "bg-gradient-to-br relative from-blue-950 to-blue-700 dark:from-green-700 dark:to-emerald-600 flex items-center justify-center rounded-3xl",
              "w-[150px] h-[200px] min-w-[150px] md:w-[225px] md:h-[300px] md:min-w-[225px] xl:w-[300px] xl:h-[400px] xl:min-w-[300px]",
              "translate-all duration-300",
              {
                "-translate-y-96 opacity-0": !mounted,
                "translate-y-0 opacity-100": mounted,
              }
            )}
          >
            <div
              className={classNames(
                "absolute xl:-top-4 xl:-left-4 md:-top-3 md:-left-3 -top-2 -left-2 flex items-center justify-center rounded-3xl",
                "bg-gradient-to-br from-sky-700 to-sky-600 dark:from-green-800 dark:to-emerald-700",
                "w-[150px] h-[200px] min-w-[150px] md:w-[225px] md:h-[300px] md:min-w-[225px] xl:w-[300px] xl:h-[400px] xl:min-w-[300px]",
                "transition-all duration-300"
              )}
            >
              <div
                className={classNames(
                  "bg-cover xl:w-[200px] xl:h-[200px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-full duration-300 transition-all"
                )}
                style={{ backgroundImage: "url(/profile.png)" }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const DotSeperator = () => (
  <div className="md:block hidden h-2 w-2 rounded bg-sky-900 dark:bg-emerald-500" />
);
