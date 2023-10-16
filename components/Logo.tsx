import { Terminal } from "@mui/icons-material";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <span className="flex items-center text-xl md:text-2xl my-2">
        <Terminal fontSize="inherit" />
        <h1 className="font-extrabold mx-2">Sabir</h1>{" "}
        <h1 className="font-light">Chowdhury</h1>
      </span>
    </Link>
  );
}
