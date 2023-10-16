"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";
import useMounted from "./useMounted";

export default function Provider({ children }: { children: ReactNode }) {
  const hydrated = useMounted();

  if (!hydrated) return <></>;

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
