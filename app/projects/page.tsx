"use client";

import Heading from "@/components/Heading";
import NavButton from "@/components/NavButton/NavButton";
import useMounted from "@/utils/useMounted";
import classNames from "classnames";

export default function Home() {
  const mounted = useMounted();

  return (
    <main className="flex flex-grow flex-col mx-auto p-4 w-full max-w-4xl">
      <Heading text="Projects" />

      {/* {about.map(({ heading, content }, index) => (
        <section key={`${index}-about-section`}>
          {heading && <h2 className="my-4 font-bold text-xl">{heading}</h2>}
          {content.map((text, idx) => (
            <p key={`${idx}-about-para`} className="mb-4">
              {text}
            </p>
          ))}
        </section>
      ))} */}
    </main>
  );
}
