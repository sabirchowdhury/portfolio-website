import useMounted from "@/utils/useMounted";
import classNames from "classnames";
import { ComponentProps } from "react";

export default function Heading({
  text,
  ...props
}: {
  text: string;
} & ComponentProps<"h1">) {
  const mounted = useMounted();

  return (
    <h1
      className={classNames(
        "md:text-6xl text-4xl mx-auto md:mb-20 mb-10 md:mt-8 transition-opacity ease-in duration-200",
        {
          "opacity-0": !mounted,
          "opacity-100": mounted,
        }
      )}
      {...props}
    >
      {text}
    </h1>
  );
}
