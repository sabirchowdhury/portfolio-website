import classNames from "classnames";
import "./MenuIcon.css";

export default function MenuIcon({ isChecked }: { isChecked?: boolean }) {
  return (
    <div
      className={classNames(
        "relative z-[110] flex flex-col border-2 items-center justify-center h-8 w-8 dark:border-[#ccc] border-black",
        { isChecked }
      )}
    >
      <div className="menu-top" />
      <div className="menu-middle" />
      <div className="menu-bottom" />
      <div className="x-left" />
      <div className="x-right" />
    </div>
  );
}
