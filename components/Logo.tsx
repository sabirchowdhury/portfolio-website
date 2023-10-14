import { Terminal } from "@mui/icons-material";

export default function Logo() {
  return (
    <span className="flex items-center text-3xl">
      <Terminal fontSize="inherit" />
      <h1 className="font-extrabold ml-3 mr-2">Sabir</h1>{" "}
      <h1 className="font-light">Chowdhury</h1>
    </span>
  );
}
