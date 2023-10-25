import { techs } from "@/utils/techs";
import Image from "next/image";
import { ComponentProps } from "react";

const techIcons = {
  [techs.AWS]: "/aws.png",
  [techs.Azure]: "/azure.png",
  [techs.C]: "/c.png",
  [techs.CPP]: "/cpp.png",
  [techs.CS]: "/csharp.png",
  [techs.CSS]: "/css.png",
  [techs.DotNet]: "/dotnet.png",
  [techs.Git]: "/git.png",
  [techs.HTML]: "/html.png",
  [techs.Java]: "/java.png",
  [techs.JavaScript]: "/javascript.png",
  [techs.NextJS]: "/nextjs.png",
  [techs.PostgreSQL]: "/postgresql.png",
  [techs.Python]: "/python.png",
  [techs.React]: "/react.png",
  [techs.TypeScript]: "/typescript.png",
};

export type techIconKeys = keyof typeof techIcons;

export default techIcons;
