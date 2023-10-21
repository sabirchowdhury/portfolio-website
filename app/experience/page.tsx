"use client";

import NavButton from "@/components/NavButton/NavButton";
import useMounted from "@/utils/useMounted";
import classNames from "classnames";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
import ComponentInView from "@/components/ComponentInView";
import InfoBox from "./_content/InfoBox";
import technicalExperience from "./_content/technicalExperience";
import education from "./_content/education";
import otherExperience from "./_content/otherExperience";

export default function Experience() {
  const mounted = useMounted();

  return (
    <>
      <main className="flex flex-grow flex-col mx-auto p-4 w-full max-w-4xl">
        <h1
          className={classNames(
            "md:text-6xl text-4xl mx-auto md:mb-20 mb-10 md:mt-8 transition-opacity ease-in duration-200",
            {
              "opacity-0": !mounted,
              "opacity-100": mounted,
            }
          )}
        >
          Experience
        </h1>
        <ComponentInView
          className="md:mb-16 mb-14 transition-opacity ease-in duration-500"
          viewedClass="opacity-100"
          notViewedClass="opacity-0"
          threshold={0.1}
        >
          <h2 className="text-2xl md:text-3xl mb-4 md:mb-10">
            Technical Experience
          </h2>

          {technicalExperience.map((props, index) => (
            <InfoBox {...props} key={`infobox-techexp-${index}`} />
          ))}
        </ComponentInView>
        <ComponentInView
          className="md:mb-8 mb-6 transition-opacity ease-in duration-500"
          viewedClass="opacity-100"
          notViewedClass="opacity-0"
          threshold={0.1}
        >
          <h2 className="text-2xl md:text-3xl mb-4 md:mb-10">Education </h2>
          {education.map((props, index) => (
            <InfoBox key={`edu-${index}`} {...props} className="mb-8" />
          ))}
        </ComponentInView>

        <ComponentInView
          className="md:mb-8 mb-6 transition-opacity ease-in duration-500"
          viewedClass="opacity-100"
          notViewedClass="opacity-0"
          threshold={0.05}
        >
          <h2 className="text-2xl md:text-3xl mb-4 md:mb-10">
            Other Work Experience
          </h2>
          {otherExperience.map((props, idx) => (
            <InfoBox {...props} key={`oth-exp-${idx}`} className="mb-8" />
          ))}
        </ComponentInView>
      </main>
    </>
  );
}
