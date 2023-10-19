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
      <main className="flex flex-grow flex-col w-full items-center p-4">
        <h1
          className={classNames(
            "md:text-6xl text-4xl md:mb-6 mb-4 mt-8 transition-opacity ease-in duration-500",
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
          viewedClass="opacity-100"
          notViewedClass="opacity-0"
          threshold={0.2}
        >
          <h2>Technical Experience</h2>
          <div>
            <h3>Full stack developer</h3>
            <h3>Wonders of Maths</h3>

            <p>
              • Collaborated closely with founder and CTO to successfully launch
              an ed-tech platform, used by many of the UK&apos;s largest
              tutoring agencies and 200+ tutors/students globally.{" "}
            </p>
            <p>
              {" "}
              • Developed and deployed new features and intuitive UI components
              such as smart notes and instant parent reports which cut usage
              time by 40%.{" "}
            </p>
            <p>
              {" "}
              • Rebuilt Educai to utilise dynamic imports and SSR to slash
              rendering speeds by 70% on average.{" "}
            </p>
            <p>
              {" "}
              • Significantly cut overheads by 7+ hours per week by facilitating
              internal testing through UAT links with AWS, integrating Webflow
              pages using NGINX and implementing REST APIs, GraphQL & AWS S3
              buckets to enable features such as integration of a CMS, payments,
              and document upload.{" "}
            </p>
            <p>
              {" "}
              • Displayed strong teamwork having comprehensively reviewed and
              tested code from interns to senior developers & CTO in an agile
              development system.{" "}
            </p>
            <p>
              {" "}
              • Upheld the quality and scalability of the codebase with industry
              coding practices and through integration of TDD, BDD and CI/CD
              methodologies whilst maintaining a rapid development approach.
            </p>
            <p>
              TypeScript, JavaScript, React, HTML, CSS, TailwindCSS, Remix,
              PostgreSQL, Prisma, NodeJS, ExpressJS, Cypress, AWS,
              Flightcontrol, Render, BlitzJS, Docker, NGINX, StoryBook,
              StoryBlok (CMS), GitHub, Husky, CI/CD.
            </p>
          </div>
        </ComponentInView>
        <ComponentInView
          className="md:text-4xl text-2xl md:mb-6 mb-4 mt-8 transition-opacity ease-in duration-1000"
          viewedClass="opacity-100"
          notViewedClass="opacity-0"
          threshold={0.2}
        >
          <h2>Education</h2>
          <div>
            <h3>University of Bath</h3>
            <h3>(BSc) Computer Systems Engineering with Placement Year</h3>
            <h3>2021-2022</h3>
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
          className="md:text-4xl text-2xl md:mb-6 mb-4 mt-8 transition-opacity ease-in duration-1000"
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
