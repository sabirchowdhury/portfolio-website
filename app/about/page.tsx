"use client";

import NavButton from "@/components/NavButton/NavButton";
import useMounted from "@/utils/useMounted";
import classNames from "classnames";

export default function About() {
  const mounted = useMounted();

  return (
    <>
      <main className="flex flex-grow flex-col w-full items-center pb-20">
        <h2>About me</h2>
        <p>
          My journey into the world of programming began when I was just 12
          years old through my older brother, who at the time was studying
          Computer Science for his GCSE&apos;s. I grew up in a family where
          everything is a competition, and I was adamant that I could create a
          better game than him. Little did I know that this initial spark of
          ambition would evolve into a passion for creating applications, games,
          and even venturing into the realm of robotics. <br />
          <br />
        </p>
        <p>
          I&apos;ve recently graduated with a BEng in Computer Systems
          Engineering (A blend of computer science and electronics) from The
          University of Bath. I had the opportunity to work full-time as a full
          stack developer at an exciting startup through my placement year.
          Working closely with the founder, CTO and senior developers was an
          invaluable experience that enriched me with a wealth of knowledge and
          practical skills.
        </p>
        <p>
          Subsequently, during my final year, I embarked on a part-time
          internship as an Investment Analyst at Europe&apos;s leading pre-seed
          investment fund for university startups. This unique opportunity
          allowed me to explore the business side of the startup world. The
          knowledge I acquired during this time has propelled me forward on my
          path to becoming a well-rounded programmer with a keen understanding
          of business dynamics.
        </p>
        <p>
          Currently, I am actively seeking a new employment opportunity that
          will enable me to continue my career in software development.
        </p>
      </main>
    </>
  );
}
