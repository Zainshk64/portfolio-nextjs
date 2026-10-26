"use client";
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
          Web Developer <br />
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

        {/* Experience 1 – H&H Visa Consultant */}
        <FramerWrapper y={0} x={100}>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-rubik text-primary">
              Full Stack Developer (IT Department)
            </h3>

            <h3 className="text-sm font-rubik text-primary">
              H&H Visa Consultant — Islamabad, Pakistan | June 2026 – Present
            </h3>

            <ul className="list-disc mt-5 list-inside space-y-2 text-lg text-neutral-700 dark:text-neutral-300 font-poppins">
              <li>
                Develop and deploy production-ready web applications using
                React.js, Next.js, Tailwind CSS, Node.js, Express.js, and
                MongoDB.
              </li>
              <li>
                Build and maintain a company-wide CRM featuring role-based
                dashboards, lead distribution, sales operations, consultant
                workflows, and invoicing.
              </li>
              <li>
                Connect REST APIs and implement lead-generation automation to
                improve operational efficiency and streamline data flow.
              </li>
              <li>
                Develop SEO-focused websites and interactive visa eligibility
                campaigns with automated email delivery and CRM lead
                synchronization.
              </li>
              <li>
                Handle application deployment, database operations, backend
                integrations, and ongoing performance and reliability
                improvements.
              </li>
            </ul>
          </div>
        </FramerWrapper>

        {/* Experience 2 – Devrolin */}
        <FramerWrapper y={0} x={100} delay={0.2}>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-rubik text-primary">
              MERN Stack Developer
            </h3>

            <h3 className="text-sm font-rubik text-primary">
              Devrolin — Rawalpindi, Pakistan | June 2025 – June 2026
            </h3>

            <ul className="list-disc mt-5 list-inside space-y-2 text-lg text-neutral-700 dark:text-neutral-300 font-poppins">
              <li>
                Developed responsive and interactive web interfaces using
                React.js, Next.js, and Tailwind CSS.
              </li>
              <li>
                Worked with Node.js, Express.js, and MongoDB to expand
                full-stack development capabilities and backend integration
                skills.
              </li>
              <li>
                Contributed to building, improving, and deploying modern web
                applications with an emphasis on usability and maintainability.
              </li>
            </ul>
          </div>
        </FramerWrapper>

        {/* Experience 3 – AxiomHub */}
        <FramerWrapper y={0} x={100} delay={0.3}>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-rubik text-primary">
              Full-Stack / React Native Developer
            </h3>

            <h3 className="text-sm font-rubik text-primary">
              AxiomHub | December 2025 – May 2026
            </h3>

            <ul className="list-disc mt-5 list-inside space-y-2 text-lg text-neutral-700 dark:text-neutral-300 font-poppins">
              <li>
                Developed UDealZone, a cross-platform marketplace delivering web
                and mobile experiences with Next.js and React Native.
              </li>
              <li>
                Implemented key marketplace features, including product
                discovery, real-time chat, push notifications, and AI-powered
                assistance.
              </li>
              <li>
                Improved application usability and performance to deliver a
                consistent experience across web and mobile platforms.
              </li>
              <li>
                Contributed to application releases for the Google Play Store
                and Apple App Store.
              </li>
            </ul>
          </div>
        </FramerWrapper>

        {/* Experience 4 – Summer Course */}
        <FramerWrapper y={0} x={100} delay={0.4}>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-rubik text-primary">
              Web Development (Summer Course)
            </h3>

            <h3 className="text-sm font-rubik text-primary">
              Arid Agriculture University — Rawalpindi, Pakistan | June 2024 –
              August 2024
            </h3>

            <ul className="list-disc mt-5 list-inside space-y-2 text-lg text-neutral-700 dark:text-neutral-300 font-poppins">
              <li>
                Built responsive web interfaces using React.js and Tailwind CSS.
              </li>
              <li>
                Practiced integrating REST APIs to display and manage dynamic
                data.
              </li>
              <li>
                Developed a foundation in modern frontend development,
                component-based architecture, and application deployment.
              </li>
            </ul>
          </div>
        </FramerWrapper>
      </FramerWrapper>
      <button
        onClick={() => window.scrollTo(0, 600)}
        className="fixed md:hidden bottom-6 right-3 p-3 duration-75 cursor-pointer bg-indigo-900  rounded-full shadow-2xl hover:bg-clay transition-all"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </div>
  );
};

export default page;
