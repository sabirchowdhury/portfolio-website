import classNames from "classnames";
import BackgroundBlobs from "./BackgroundBlobs";

export default function Background() {
  return (
    <>
      <div className="fixed inset-0 overflow-clip -z-20">
        <BackgroundBlobs
          radial
          className={classNames(
            "h-1/4 w-1/5 left-0 top-1/2",
            "from-rose-950 to-transparent",
            "dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700",
            "dark:opacity-20 opacity-20"
          )}
          speed={0.55}
        />
        <BackgroundBlobs
          radial
          className={classNames(
            "h-1/5 w-1/6 right-3/4 top-3/4",
            "from-emerald-950 to-transparent ",
            "dark:bg-gradient-to-tl dark:from-transparent dark:to-red-700",
            "dark:opacity-20 opacity-30"
          )}
          speed={-0.1}
        />
        <BackgroundBlobs
          radial
          className={classNames(
            "h-1/5 w-1/6 right-0 top-0",
            "from-yellow-50 to-transparent",
            "dark:bg-gradient-to-tr dark:from-transparent dark:to-orange-800",
            "dark:opacity-20"
          )}
        />
        <BackgroundBlobs
          radial
          className={classNames(
            "h-1/2 w-1/3 right-1/4 bottom-1/4",
            "from-sky-300 to-transparent",
            "dark:bg-gradient-to-tl dark:from-transparent dark:to-green-700",
            "dark:opacity-20 opacity-20"
          )}
          speed={0.1}
        />
        <BackgroundBlobs
          radial
          className={classNames(
            "w-1/12 aspect-square right-1/4 -bottom-full",
            "from-sky-300 to-transparent",
            "dark:bg-gradient-to-tl dark:from-transparent dark:to-cyan-700",
            "dark:opacity-20 opacity-20"
          )}
          speed={0.3}
        />
        <BackgroundBlobs
          radial
          className={classNames(
            "w-1/12 aspect-square right-1/4 -bottom-full",
            "from-sky-300 to-transparent",
            "dark:bg-gradient-to-tl dark:from-transparent dark:to-cyan-700",
            "dark:opacity-20 opacity-20"
          )}
          speed={-0.3}
        />
        <BackgroundBlobs
          radial
          className={classNames(
            "w-1/12 aspect-square left-1/4 -top-1/2",
            "from-sky-300 to-transparent",
            "dark:bg-gradient-to-tl dark:from-transparent dark:to-purple-700",
            "dark:opacity-20 opacity-20"
          )}
          speed={1.4}
        />
        <BackgroundBlobs
          radial
          className={classNames(
            "w-2/3 h-1/4 -left-1/4 -bottom-1/4",
            "from-sky-300 to-transparent",
            "dark:bg-gradient-to-tl dark:from-transparent dark:to-lime-700",
            "dark:opacity-20 opacity-20"
          )}
          speed={-0.05}
        />
        {/*
      <div className="absolute h-1/4 w-1/5 left-0 top-1/2 rounded-full bg-gradient-radial from-rose-950 to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-blue-700 dark:opacity-20 opacity-20 -z-20" />
      <div className="absolute h-1/5 w-1/6 right-3/4 top-3/4 rounded-full bg-gradient-radial from-emerald-950 to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-red-700 dark:opacity-20 opacity-30 -z-20" />
      <div className="absolute h-1/5 w-1/6 right-0 top-0 rounded-full bg-gradient-radial from-yellow-50 to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-orange-800 dark:opacity-20 -z-20" />
      <div className="absolute h-1/2 w-1/3 right-1/4 bottom-1/4 rounded-full bg-gradient-radial from-sky-300 to-transparent blur-2xl dark:bg-gradient-to-br dark:from-transparent dark:to-green-700 dark:opacity-20 opacity-20 -z-20" /> */}
      </div>
    </>
  );
}
