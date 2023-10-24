import { Terminal } from "@mui/icons-material";
import classNames from "classnames";
import Link from "next/link";

export default function Logo({
  hidden,
  hide,
}: {
  hidden: boolean;
  hide: () => void;
}) {
  return (
    <Link
      className={classNames({ "hidden lg:block": hidden })}
      href="/"
      onClick={() => hide()}
    >
      <span className="flex items-center text-xl md:text-2xl my-2eid">
        <Terminal fontSize="inherit" />
        <h1 className="font-extrabold ml-2 mr-1.5">Sabir</h1>{" "}
        <h1 className="font-light">Chowdhury</h1>
      </span>
    </Link>
  );
}
