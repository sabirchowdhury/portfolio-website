import { Terminal } from "@mui/icons-material";

export default function Logo() {
  return (
    <span className="flex items-center text-4xl">
      <Terminal fontSize="inherit" />
      <h1 className="font-extrabold ml-4 mr-3">Sabir</h1>{" "}
      <h1 className="font-light">Chowdhury</h1>
    </span>
  );
}
