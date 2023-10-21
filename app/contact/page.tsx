"use client";

import NavButton from "@/components/NavButton/NavButton";
import useMounted from "@/utils/useMounted";
import classNames from "classnames";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";

export default function Contact() {
  const mounted = useMounted();

  return (
    <>
      <main className="flex flex-grow flex-col mx-auto p-4 w-full max-w-4xl">
        <h1
          className={classNames(
            "md:text-6xl text-4xl mx-auto md:mb-20 mb-10 md:mt-8 transition-opacity ease-in duration-500",
            {
              "opacity-0": !mounted,
              "opacity-100": mounted,
            }
          )}
        >
          Get in touch
        </h1>

        <div
          className={classNames(
            "flex flex-col gap-2 items-center justify-center md:text-2xl text-xl transition-opacity ease-in duration-300 delay-200",
            {
              "opacity-0": !mounted,
              "opacity-100": mounted,
            }
          )}
        >
          <NavButton
            text={
              <span className="flex items-center gap-2">
                <Email fontSize="inherit" /> Contact me via Email
              </span>
            }
            link="mailto: m.sabir.chowdhury@gmail.com"
          />
          <NavButton
            text={
              <span className="flex items-center gap-2">
                <LinkedIn fontSize="inherit" /> Connect with me on Linkedin
              </span>
            }
            link="https://www.linkedin.com/in/sabir-chowdhury/"
            linkProps={{ target: "_blank" }}
          />
          <NavButton
            text={
              <span className="flex items-center gap-2">
                <GitHub fontSize="inherit" /> Check out my GitHub
              </span>
            }
            link="https://github.com/sabirchowdhury"
            linkProps={{ target: "_blank" }}
          />
        </div>
        <p
          className={classNames(
            "md:text-xl text-center mt-8 transition-opacity ease-in duration-300 delay-200",
            {
              "opacity-0": !mounted,
              "opacity-100": mounted,
            }
          )}
        >
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
