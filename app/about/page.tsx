"use client";

import Heading from "@/components/Heading";
import about from "./_content/about";

export default function About() {
  return (
    <main className="flex flex-grow flex-col mx-auto p-4 w-full max-w-4xl">
      <Heading text="About me" />

      {about.map(({ heading, content }, index) => (
        <section key={`${index}-about-section`}>
          {heading && <h2 className="my-4 font-bold text-xl">{heading}</h2>}
          {content.map((text, idx) => (
            <p key={`${idx}-about-para`} className="mb-4">
              {text}
            </p>
          ))}
        </section>
      ))}
    </main>
  );
}
