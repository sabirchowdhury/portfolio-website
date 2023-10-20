import { Business, CalendarMonth } from "@mui/icons-material";

interface TInfoBox {
  title: string;
  company: string;
  dates: string;
  bulletPoints: string[];
  languages: string;
}

export default function InfoBox({
  title,
  company,
  dates,
  bulletPoints,
  languages,
}: TInfoBox) {
  return (
    <div className="md:p-6 p-4 rounded-lg border shadow-md border-black dark:border-white">
      <h3 className="relative text-lg md:text-xl md:-mt-10 z-10 w-fit">
        {title}
        <div className="absolute hidden md:block top-1/2 -left-2 -right-2 dark:bg-bg-d bg-bg-l h-1 -z-10" />
      </h3>
      <span className="flex flex-col my-2 gap-1">
        <h3 className="flex items-center text-sm md:text-lg gap-2 text-sky-700">
          <Business fontSize="inherit" />
          {company}
        </h3>
        <h3 className="flex items-center text-sm md:text-md text-gray-500 gap-2 w-fit">
          <CalendarMonth fontSize="inherit" />
          {dates}
        </h3>
      </span>
      <ul className="flex flex-col gap-1 text-sm m-1 md:m-4">
        {bulletPoints.map((text, index) => (
          <li key={`bp-${index}`}>{text}</li>
        ))}
      </ul>
      <p>{languages}</p>
    </div>
  );
}
