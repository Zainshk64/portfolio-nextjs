import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = [
    "React-Js",
    "Next-Js",
    "Node-Js",
    "Express-Js",
    "MongoDB",
    "Redux-Toolkit",
    "Tailwind-Css",
    "Framer-Motion",
    
  ];

  return (
    <div className="">
      <div className="text-2xl md:text-4xl max-w-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
     I’m a Passionate <span className="text-black dark:text-white">MERN Stack Developer</span> <br />
       using <FlipWords words={words} />
         {/* Currently pursuing my Intermediate studies. */}
         constantly learning and building impactful web experiences.
      </div>
    </div>
  );
}
