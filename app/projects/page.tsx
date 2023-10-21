"use client";

import Heading from "@/components/Heading";
import NavButton from "@/components/NavButton/NavButton";
import useMounted from "@/utils/useMounted";
import classNames from "classnames";
import projects from "./_content/projects";

export default function Home() {
  const mounted = useMounted();

  return (
    <main className="flex flex-grow flex-col mx-auto p-4 w-full max-w-4xl">
      <Heading text="Projects" />

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
