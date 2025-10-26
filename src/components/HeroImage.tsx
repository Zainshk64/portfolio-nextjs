// import logo from "../../public/portfolioLogo.png";
// import Image from "next/image";
'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

import { Player } from "@lottiefiles/react-lottie-player";

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
      {/* <div className="flex justify-center items-center">
      <Player
        autoplay
        loop
        src="/developer skills.lottie"
        style={{ height: "300px", width: "300px" }}
      />
    </div> */}


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
