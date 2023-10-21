"use client";

import ComponentInView from "@/components/ComponentInView";
import Heading from "@/components/Heading";
import InfoBox from "./_content/InfoBox";
import education from "./_content/education";
import otherExperience from "./_content/otherExperience";
import technicalExperience from "./_content/technicalExperience";

export default function Experience() {
  return (
    <main className="flex flex-grow flex-col mx-auto p-4 w-full max-w-4xl">
      <Heading text="Experience" />

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
  );
}
