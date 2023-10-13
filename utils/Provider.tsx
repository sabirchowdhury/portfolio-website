"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return <></>;

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
