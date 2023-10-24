import classNames from "classnames";
import { ReactNode, HTMLProps } from "react";

export default function TechTag({ children, className }: HTMLProps<"div">) {
  return (
    <div
      className={classNames(
        "p-1 px-2 border rounded text-sm dark:border-emerald-400 border-sky-700 text-sky-700 dark:text-emerald-400",
        className
      )}
    >
      {children}
    </div>
  );
}
