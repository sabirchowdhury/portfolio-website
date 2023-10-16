"use client";

import NavButton from "@/components/NavButton/NavButton";
import useMounted from "@/utils/useMounted";
import classnames from "classnames";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";

export default function Home() {
  const mounted = useMounted();

  return (
    <>
      <main className="flex flex-grow flex-col w-full items-center pb-5">
        <h1
          className={classnames(
            "md:text-6xl text-4xl md:mb-6 mb-4 mt-8 transition-opacity ease-in duration-500",
            {
              "opacity-0": !mounted,
              "opacity-100": mounted,
            }
          )}
        >
          Get in touch
        </h1>

        <div className="flex flex-col items-center justify-center my-auto py-4 md:text-3xl text-xl">
          <NavButton
            className="mt-12 rounded-sm"
            text={
              <span className="flex items-center gap-2">
                <Email fontSize="inherit" /> Contact me via Email
              </span>
            }
            link="mailto: m.sabir.chowdhury@gmail.com"
          />
          <NavButton
            className="mt-12 rounded-sm"
            text={
              <span className="flex items-center gap-2">
                <LinkedIn fontSize="inherit" /> Connect with me on Linkedin
              </span>
            }
            link="https://www.linkedin.com/in/sabir-chowdhury/"
            linkProps={{ target: "_blank" }}
          />
          <NavButton
            className="mt-12 rounded-sm"
            text={
              <span className="flex items-center gap-2">
                <GitHub fontSize="inherit" /> Check out my GitHub
              </span>
            }
            link="https://github.com/sabirchowdhury"
            linkProps={{ target: "_blank" }}
          />
        </div>
        <p className="md:text-xl text-center mt-12">
          Or email me at{" "}
          <a
            href="mailto: m.sabir.chowdhury@gmail.com"
            className="underline-offset-2 underline"
          >
            m.sabir.chowdhury@gmail.com
          </a>
        </p>
      </main>
    </>
  );
}
