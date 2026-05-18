import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = [
    "React-Js",
    "React-Native",
    "Next-Js",
    "Node-Js",
    "Express-Js",
    "MongoDB",
    "Redux-Toolkit",
    "Tailwind-Css",
    "BootStrap",
    "Framer-Motion",
    
  ];

  return (
    <div className="">
      <div className="text-2xl md:text-4xl max-w-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
     I’m a <span className="text-black dark:text-white">Full Stack Developer (MERN)</span> <br />
      building scalable web & mobile applications with <FlipWords words={words} />
         {/* Currently pursuing my Intermediate studies. */}
        
      </div>
    </div>
  );
}
