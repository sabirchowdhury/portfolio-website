"use client";

import NavButton from "@/components/NavButton/NavButton";
import useMounted from "@/utils/useMounted";
import classNames from "classnames";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
import ComponentInView from "@/components/ComponentInView";
import InfoBox from "./_content/InfoBox";
import technicalExperience from "./_content/technicalExperience";

export default function Experience() {
  const mounted = useMounted();

  return (
    <>
      <main className="flex flex-grow flex-col w-full items-center p-4">
        <h1
          className={classNames(
            "md:text-6xl text-4xl md:mb-10 mb-8 md:mt-8 transition-opacity ease-in duration-500",
            {
              "opacity-0": !mounted,
              "opacity-100": mounted,
            }
          )}
        >
          Experience
        </h1>
        <ComponentInView
          className="md:mb-6 mb-4 transition-opacity ease-in duration-1000 md:p-8 w-full max-w-4xl"
          viewedClass="opacity-100"
          notViewedClass="opacity-0"
          threshold={0.2}
        >
          <h2 className="text-2xl md:text-3xl mb-4 md:mb-10">
            Technical Experience
          </h2>

          {technicalExperience.map((props, index) => (
            <InfoBox {...props} key={`infobox-techexp-${index}`} />
          ))}
        </ComponentInView>
        <ComponentInView
          className="md:mb-6 mb-4 mt-8 transition-opacity ease-in duration-1000"
          viewedClass="opacity-100"
          notViewedClass="opacity-0"
          threshold={0.2}
        >
          <h2 className="text-3xl">Education</h2>
          <div className="p-4 rounded-md border border-white shadow-md">
            <h3 className="text-2xl">University of Bath</h3>
            <h3 className="text-2xl">
              (BSc) Computer Systems Engineering with Placement Year
            </h3>
            <h3 className="text-2xl">2021-2022</h3>
            <p>First-class honours (1st).</p>
            <p>Relevant Modules:</p>
            <p>Mathematics 1 & 2 (82% & 100%),</p>
            <p>Artificial Intelligence (94%),</p>
            <p>Data Structures & Algorithms (94%),</p>
            <p>Structured Programming (92%),</p>
            <p>Microprocessors (87%).</p>
            <p>A-Levels: Mathematics (A), Physics (A), Computer Science (A).</p>
          </div>
        </ComponentInView>

        <ComponentInView
          className="md:mb-6 mb-4 mt-8 transition-opacity ease-in duration-1000"
          viewedClass="opacity-100"
          notViewedClass="opacity-0"
          threshold={0.2}
        >
          <h2>Other Work Experience</h2>
          <div>
            <h3>Investment Analyst</h3>
            <h3>Creator Fund</h3>
            <h3>2021-2022</h3>
            <p>
              • Contributed as a key team member among 47 analysts at
              Europe&apos;s leading VC fund for university start-ups.
            </p>
            <p>
              • Conducted due diligence, in-depth competitor analysis, market
              research, and business strategy evaluation of industry
              cutting-edge technologies (AR glasses, medical drones etc.)
              resulting in a strategic investment decision of £600k, proving
              highly successful for the fund.
            </p>
          </div>
          <div>
            <h3>Tutor</h3>
            <h3>Trinity Community Centre</h3>
            <h3>2021-2022</h3>
            <p>
              • Tutored 100+ GCSE Maths and English sessions to multiple groups
              of 5 students. Systematically tailored lessons and questions to
              address various ages and abilities.
            </p>
            <p>
              • Achieved 100% pass rate with all students improving on average
              by 1 grade from their predicted.
            </p>
            <p>
              • Maintained regular clear communication with parents to provide
              progress updates.
            </p>
            <p>
              • Explained complex mathematical concepts and ensured
              comprehension of key learning objectives.
            </p>
          </div>
          <div>
            <h3>Waiter</h3>
            <h3>Venue Central</h3>
            <h3>2021-2022</h3>
          </div>
          <div>
            <h3>Shop Floor Assistant</h3>
            <h3>Co-operative</h3>
            <h3>2021-2022</h3>
          </div>
        </ComponentInView>
      </main>
    </>
  );
}
