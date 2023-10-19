import { useState, useEffect, useMemo } from "react";

function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height,
    outerHeight: totalHeight,
  } = window;
  return {
    width,
    height,
    totalHeight,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
