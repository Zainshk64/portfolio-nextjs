'use client'
import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Book, Circle, Heart, User2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";
import { ArrowDown } from "lucide-react";
// import ScrollToDown from "@/components/ScrollToDown";

const page = () => {
  // const items = portfolioConfig.about.hobbies.map((hobby) => ({ hobby }));

  return (
    // ABOUT PAGE

    <div className="h-full w-full relative mt-10 flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <User2 className="h-4 w-4" />
        About me
      </Badge>
      <div className="flex flex-col gap-5">
        <Heading>
          Frontend Web Developer. <br />
          {/* Based In {''} */}
          {/* {portfolioConfig.about.personalInfo.nationality}. */}
        </Heading>

        <FramerWrapper y={0} x={100}>
          <p className=" font-poppins text-xl w-full text-primary max-sm:text-lg ">
            {portfolioConfig.about.bio}
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper
  className="w-full h-full relative my-10 flex flex-col items-start gap-8 overflow-hidden"
  x={100}
  delay={0.3}
>
  {/* Section Heading */}
  <Badge variant="secondary" className="gap-1.5 py-1">
    <Book className="h-4 w-4" />
    Experience
  </Badge>

  <Heading>Professional Journey</Heading>

  {/* Experience 1 – Devrolin */}
  <FramerWrapper y={0} x={100}>
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-rubik text-primary">
        MERN Stack Developer Internship
      </h3>
      <p className="text-sm text-muted-foreground">
        Devrolin — Rawalpindi | July 2025 – Present
      </p>

      <ul className="list-disc mt-5 list-inside space-y-1 text-lg text-neutral-700 dark:text-neutral-300 font-poppins">
        <li>Strengthened expertise in React, Next.js, and Tailwind CSS.</li>
        <li>Expanding backend skills with Express, Node.js, and MongoDB.</li>
        <li>Building and deploying real-world full-stack web applications.</li>
      </ul>
    </div>
  </FramerWrapper>

  {/* Experience 2 – Summer Course */}
  <FramerWrapper y={0} x={100} delay={0.2}>
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-rubik text-primary">
        Web Development (Summer Course)
      </h3>
      <p className="text-sm text-muted-foreground">
        Arid Agriculture University — Rawalpindi | June 2024 – August 2024
      </p>

      <ul className="list-disc mt-5 list-inside space-y-1 text-lg text-neutral-700 dark:text-neutral-300 font-poppins">
        <li>Designed responsive interfaces using React and Tailwind CSS.</li>
        <li>Integrated REST APIs for smooth dynamic data handling.</li>
        <li>Gained strong fundamentals in frontend design and deployment.</li>
      </ul>
    </div>
  </FramerWrapper>
</FramerWrapper>

<button


onClick={()=> window.scrollTo(0,1000)}
className="fixed md:hidden bottom-6 right-3 p-3 duration-75 cursor-pointer bg-indigo-900  rounded-full shadow-2xl hover:bg-clay transition-all"
>
      <ArrowDown className="w-6 h-6" />
    </button>


      
    </div>
  );
};

export default page;
