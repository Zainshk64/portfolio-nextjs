import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";
import { FlipWords } from "./ui/flip-words";
import { FlipWordsDemo } from "./FlipWordDemo";

function TextRotator() {
  return (
    <div className="py-4 rounded-md flex flex-col justify-center items-center overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
        {portfolioConfig.title}
          <FlipWordsDemo />

        <span className="inline-flex ml-2 flex-col h-[1.2em] sm:h-[2em] overflow-hidden align-middle">
          {/* <ul className="block text-left font-rubik text-lg sm:text-3xl leading-tight [&_li]:block animate-text-slide">
        {portfolioConfig.skills.roles.map((role, index) => (
          <li key={index} className="text-[#2f7df4]">
            {role}
          </li>
        ))}
      </ul> */}
        </span>
      </div>
    </div>
  );
}

export default TextRotator;
