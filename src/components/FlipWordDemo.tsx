import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = [
    "React-Js",
    "Redux-Toolkit",
    "Tailwind-Css",
    "Material-Ui",
    "Framer-Motion",
    "Next-Js",
    "Shadcn-Ui",
  ];

  return (
    <div className="">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        I am a Passionate a Frontend Developer with expertise in
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
