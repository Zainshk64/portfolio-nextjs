import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animation/FramerWrapper";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    toolsicon: string[];
    link: string;
    img: string;
  };
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  return (
    <FramerWrapper
      className="max-w-[32%] max-lg:max-w-full"
      y={0}
      scale={0.8}
      delay={num / 4}
      duration={0.15}
    >
      <Card className="w-full h-full flex flex-col hover:shadow-lg transition-all duration-300 border-2">
        <Image src={value.img} alt="thumbnail" width={430} height={200} />
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-bold text-primary">
            {value.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col gap-4">
          {/* ✅ Removed description + tags */}
          <p>{value.description}</p>
          {/* <div className="flex flex-wrap pt-4 gap-3">
            {value.toolsicon.map((icon: string, index: number) => (
              <Image
                key={index}
                src={icon}
                alt="tech-icon"
                width={28}
                height={38}
                className="object-contain"
              />
            ))}
          </div> */}
          <div className="flex flex-wrap gap-2">
            {value?.tags?.map((tag: string, index: number) => {
              const tagStyles =
                {
                  "next-js": "bg-teal-100 text-teal-800",
                  "react-js": "bg-blue-100 text-blue-800",
                    'tailwind-css': 'bg-cyan-100 text-cyan-800',
                  "shadcn-ui": "bg-purple-100 text-purple-800",
                  "aceternity-ui": "bg-red-100 text-red-800",
                  "redux": "bg-orange-100 text-orange-800",
                  "material-ui": "bg-indigo-100 text-indigo-800",
                  "flowbite-react": "bg-emerald-100 text-emerald-800",
                  "API's": "bg-pink-100 text-pink-800",
                  "framer-motion": "bg-cyan-100 text-cyan-800",
                  "clerk": "bg-yellow-100 text-yellow-800",
                  "formspree": "bg-rose-100 text-rose-800",
                }[tag] || "bg-gray-100 text-gray-800";

              return (
                <span
                  key={index}
                  className={`inline-flex capitalize items-center px-3 py-1 rounded-full text-sm font-medium ${tagStyles}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </CardContent>

        <CardFooter className="">
          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "lg",
              }),
              "w-fit transition-all hover:translate-y-[-2px] hover:shadow-md group"
            )}
          >
            Visit Project
            <ArrowUpRight className="h-5 w-5 ml-2 transition-all group-hover:rotate-45 " />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
