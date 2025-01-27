"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type BackgroundEffectProps = {
  children: ReactNode;
};

export const BackgroundEffect = ({ children }: BackgroundEffectProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const movementFactor = 0.02;

  const backgroundPosition = `right 0% top ${
    0 - scrollY * movementFactor
  }%`;

  return (
    <main
      className="h-full w-full bg-[url('/LooperGroup2.png')] bg-no-repeat transition-all duration-300 ease-out"
      style={{ backgroundPosition }}
    >
      {children}
    </main>
  );
};
