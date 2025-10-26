import { cn } from "@/lib/utils";
import {
  Linkedin,
  Twitter,
  ExternalLink,
  Github,
  Instagram,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";



import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const SocialLinks = () => {
  const links = [
    {
      name: "Facebook",
      link: portfolioConfig.socialLinks.facebook,
      icon: <GrFacebookOption size={26} />,
    },
    {
      name: "Insta",
      link: portfolioConfig.socialLinks.insta,
      icon: <FaInstagram size={26} />,
    },
    {
      name: "Linkedin",
      link: portfolioConfig.socialLinks.linkedin,
      icon: <FaLinkedin size={26} />,
    },
    
    {
      name: "WhatsApp",
      link: portfolioConfig.socialLinks.whatsapp,
      icon: <FaWhatsapp size={26} />,
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target="blank"
              href={itm.link}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" })
              )}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
