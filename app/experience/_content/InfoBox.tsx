import { Business, CalendarMonth } from "@mui/icons-material";
import classNames from "classnames";

interface TInfoBox {
  title: string;
  company: string;
  dates: string;
  preInfo?: string[];
  bulletPoints: string[];
  languages?: string;
  className?: string;
}

export default function InfoBox({
  title,
  company,
  dates,
  preInfo,
  bulletPoints,
  languages,
  className,
}: TInfoBox) {
  return (
    <div
      className={classNames(
        "md:p-6 p-4 rounded-lg border shadow-md border-black dark:border-white",
        className
      )}
    >
      <h3 className="relative text-lg md:text-xl md:-mt-10 z-10 w-fit">
        {title}
        <div className="absolute hidden md:block top-1/2 -left-2 -right-2 dark:bg-bg-d bg-bg-l h-1 -z-10" />
      </h3>
      <span className="flex flex-col mt-2 gap-1 mb-2">
        {company && (
          <h3 className="flex items-center text-sm md:text-lg gap-2 text-sky-700 dark:text-emerald-500">
            <Business fontSize="inherit" />
            {company}
          </h3>
        )}
        <h3 className="flex items-center text-sm md:text-md text-gray-600 dark:text-gray-400 gap-2 w-fit">
          <CalendarMonth fontSize="inherit" />
          {dates}
        </h3>
      </span>
      {preInfo &&
        preInfo.map((txt, idx) => (
          <p className="text-sm mb-1" key={`preinfo-${idx}`}>
            {txt}
          </p>
        ))}
      <ul className="flex flex-col gap-1 text-sm m-1 md:mb-4 md:mx-4">
        {bulletPoints.map((text, index) => (
          <li key={`bp-${index}`}>{text}</li>
        ))}
      </ul>
      {languages && <p>{languages}</p>}
    </div>
  );
}
