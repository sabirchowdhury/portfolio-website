"use client";

import NavButton from "@/components/NavButton/NavButton";
import useMounted from "@/utils/useMounted";
import classNames from "classnames";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
import ComponentInView from "@/components/ComponentInView";

export default function Experience() {
  const mounted = useMounted();

  return (
    <>
      <main className="flex flex-grow flex-col w-full items-center pb-5">
        <h1
          className={classNames(
            "md:text-6xl text-4xl md:mb-6 mb-4 mt-8 transition-opacity ease-in duration-500 h-[3000px]",
            {
              "opacity-0": !mounted,
              "opacity-100": mounted,
            }
          )}
        >
          Experience
        </h1>
        <ComponentInView
          className="md:text-4xl text-2xl md:mb-6 mb-4 mt-8 transition-opacity ease-in duration-1000"
          onScrollEnterClass="opacity-100"
          onScrollLeaveClass="opacity-0"
        >
          <h2>Education</h2>
        </ComponentInView>
      </main>
    </>
  );
}
