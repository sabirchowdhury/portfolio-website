"use client";

import Heading from "@/components/Heading";
import NavButton from "@/components/NavButton/NavButton";
import useMounted from "@/utils/useMounted";
import classNames from "classnames";
import projects from "./_content/projects";
import TechIcons from "@/components/TechIcons";

export default function Home() {
  const mounted = useMounted();

  Object.keys(TechIcons).map((item, idx) => console.log(item));
  return (
    <main className="flex flex-grow flex-col mx-auto p-4 w-full max-w-4xl">
      <Heading text="Projects" />

      <div className="flex flex-wrap gap-2 gap-x-3">
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
      </div>

      {projects.map(({ heading, bulletPoints }, index) => (
        <section key={`${index}-about-section`}>
          {heading && <h2 className="my-4 font-bold text-xl">{heading}</h2>}
          {bulletPoints.map((text, idx) => (
            <p key={`${idx}-about-para`} className="mb-4">
              {text}
            </p>
          ))}
        </section>
      ))}
    </main>
  );
}
