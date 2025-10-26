// import logo from "../../public/portfolioLogo.png";
// import Image from "next/image";
'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const HeroImage = () => {
  return (
    <>
      {/* <Image
        src={logo}
        alt="logo"
        loading="eager"
        priority
        height={1000}
        width={1000}
      /> */}
      


     <DotLottieReact
      src="/developer skills.lottie"
      loop
      autoplay
        style={{ height: "500px", width: "500px" }}

    />
    </>
  );
};
export default HeroImage;
