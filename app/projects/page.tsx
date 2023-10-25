"use client";

import Heading from "@/components/Heading";
import NavButton from "@/components/NavButton/NavButton";
import useMounted from "@/utils/useMounted";
import classNames from "classnames";
import projects, { projectTypeKeys, projectTypes } from "./_content/projects";
import TechIcons, { techIconKeys } from "@/utils/techIcons";
import TechTag from "@/components/TechTag";
import { techs } from "@/utils/techs";
import techIcons from "@/utils/techIcons";
import Image from "next/image";
import ComponentInView from "@/components/ComponentInView";
import { ComponentProps, HTMLProps, useState } from "react";
import { FilterAltOffOutlined } from "@mui/icons-material";

const topSkills = [
  techs.React,
  techs.TypeScript,
  techs.JavaScript,
  techs.Python,
  techs.Git,
  techs.NextJS,
  techs.C,
  techs.PostgreSQL,
  techs.CS,
  techs.DotNet,
  techs.Java,
  techs.AWS,
  techs.Azure,
  techs.CPP,
  techs.CSS,
  techs.HTML,
];

export default function Home() {
  const mounted = useMounted();
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<
    projectTypes[]
  >(Object.values(projectTypes));

  return (
    <main className="flex flex-grow flex-col mx-auto p-4 w-full max-w-4xl overflow-x-clip">
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
      <h2 className="mb-2 text-sm text-gray-700 dark:text-slate-400">
        Top Skills:
      </h2>
      <ComponentInView
        className="flex flex-wrap gap-2 mb-12 duration-1000 transition-opacity"
        notViewedClass="opacity-0"
        viewedClass="opacity-100"
      >
        {topSkills.map((skill, idx) => (
          <div
            key={`skill-tag-${idx}`}
            className="flex items-center font-medium gap-1 text-sm border-2 border-opacity-50 border-slate-400 dark:border-slate-600 py-1 px-2 rounded-md rounded-br-none rounded-tl-none"
          >
            <Image
              width={18}
              height={18}
              src={techIcons[skill as techIconKeys]}
              alt={`${skill}-logo`}
            />
            {skill}
          </div>
        ))}
      </ComponentInView>

      <h2 className="mb-2 text-sm text-gray-700 dark:text-slate-400">
        Filter By Project Type:
      </h2>
      <ComponentInView className="flex flex-wrap gap-2 mb-6">
        <FilterButton
          className="w-28"
          buttonText={
            Object.values(projectTypes)
              .map((currentKey) => selectedProjectTypes.includes(currentKey))
              .includes(false)
              ? "Select All"
              : "Deselect All"
          }
          isSelected={
            !Object.values(projectTypes)
              .map((currentKey) => selectedProjectTypes.includes(currentKey))
              .includes(false)
          }
          onClick={() => {
            setSelectedProjectTypes((prev) =>
              Object.values(projectTypes)
                .map((currentKey) => prev.includes(currentKey))
                .includes(false)
                ? Object.values(projectTypes)
                : []
            );
          }}
        />

        {Object.values(projectTypes).map((key, filterIdx) => {
          return (
            <FilterButton
              buttonText={key}
              isSelected={selectedProjectTypes.includes(key)}
              key={`filter-${filterIdx}`}
              onClick={() =>
                setSelectedProjectTypes((prev) =>
                  !selectedProjectTypes.includes(key)
                    ? [...prev, key]
                    : prev.filter((prevKeys) => prevKeys !== key)
                )
              }
            />
          );
        })}
      </ComponentInView>
      {projects
        .filter(({ type }) =>
          type.find((typeToFilter) =>
            selectedProjectTypes.includes(typeToFilter)
          )
        )
        .map(({ heading, bulletPoints, techs, extras }, index) => (
          <ComponentInView
            threshold={0.2}
            key={`${index}-project`}
            className="mb-10 last:mb-0 duration-500"
            onScrollEnterClass="translate-x-0"
            onScrollLeaveClass="translate-x-28 opacity-40"
          >
            {heading && <h2 className="font-bold text-xl">{heading}</h2>}
            <hr className="my-2 dark:border-neutral-600 border-neutral-400" />
            <ul>
              {bulletPoints.map((text, idx) => (
                <li
                  key={`${idx}-about-para`}
                  className="mb-1.5 text-sm text-gray-700 dark:text-slate-400"
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
          </ComponentInView>
        ))}
      {selectedProjectTypes.length === 0 && (
        <div className="flex justify-center pt-10 text-xl h-96">
          <span className="flex items-center gap-4 h-fit">
            <FilterAltOffOutlined fontSize="inherit" /> No filters selected
          </span>
        </div>
      )}
    </main>
  );
}

const FilterButton = ({
  isSelected,
  buttonText,
  ...props
}: { isSelected: boolean; buttonText: string } & ComponentProps<"button">) => (
  <button
    {...props}
    className={classNames(
      "py-0.5 px-1.5 rounded-md text-sm font-semibold border-4",
      props.className,
      {
        "bg-sky-700 dark:bg-emerald-400 text-white dark:text-black border-sky-800 dark:border-emerald-300":
          isSelected,
        "dark:bg-slate-700 bg-slate-500 dark:border-slate-800 border-slate-500 text-white":
          !isSelected,
      }
    )}
  >
    {buttonText}
  </button>
);
