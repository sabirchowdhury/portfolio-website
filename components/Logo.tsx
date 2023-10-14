import { Terminal } from "@mui/icons-material";

export default function Logo() {
  return (
    <span className="flex items-center text-2xl md:text-3xl">
      <Terminal fontSize="inherit" />
      <h1 className="font-extrabold md:ml-3 md:mr-2 mr-1 ml-2">Sabir</h1>{" "}
      <h1 className="font-light">Chowdhury</h1>
    </span>
  );
}
