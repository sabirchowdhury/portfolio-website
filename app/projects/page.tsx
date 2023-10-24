"use client";

import Heading from "@/components/Heading";
import NavButton from "@/components/NavButton/NavButton";
import useMounted from "@/utils/useMounted";
import classNames from "classnames";
import projects from "./_content/projects";
import TechIcons from "@/components/TechIcons";
import TechTag from "@/components/TechTag";

export default function Home() {
  const mounted = useMounted();

  Object.keys(TechIcons).map((item, idx) => console.log(item));
  return (
    <main className="flex flex-grow flex-col mx-auto p-4 w-full max-w-4xl">
      <Heading text="Projects" />

      {/* <div className="flex flex-wrap gap-2 gap-x-3">
        {Object.keys(TechIcons({})).map((item, idx) => (
          <div
            className="text-xl flex items-center w-fit gap-2 bg-white px-2 py-1 rounded-full"
            key={`${idx}-logo`}
          >
            {item}
            <div className="max-h-[25px] w-fit">
              {
                (
                  TechIcons({
                    height: "100%",
                    width: "auto",
                    style: { maxHeight: "25px" },
                  }) as any
                )[item]
              }
            </div>
          </div>
        ))}
      </div> */}

      {projects.map(({ heading, bulletPoints, techs, extras }, index) => (
        <div key={`${index}-project`} className="mb-10 last:mb-0">
          {heading && <h2 className="font-bold text-xl">{heading}</h2>}
          <hr className="my-2 dark:border-neutral-600 border-neutral-400" />
          <ul>
            {bulletPoints.map((text, idx) => (
              <li
                key={`${idx}-about-para`}
                className="mb-1.5 text-sm text-gray-800 dark:text-slate-400"
              >
                {text}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 flex-wrap mt-3">
            {techs.map((tag, idx) => (
              <TechTag key={`${idx}-tech-tag`}>{tag}</TechTag>
            ))}
            {extras.map((tag, idx) => (
              <TechTag key={`${idx}-tech-extra-tag`}>{tag}</TechTag>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
