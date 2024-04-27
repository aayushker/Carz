"use client";

import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className=" hero">
      <div className="flex-1 pt-36 padding-x text-cyan-50">
        <h1 className="hero__title">
          Find, book, or rent a car - all in one place!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental process with our unique platform.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero image" fill className="object-contain" />    
          {/* <Image src="https://lottie.host/940586b1-a2d0-4db1-93ef-1616ed6fc17c/J3SOXEApqF.json" alt="hero image" fill className="object-contain" />      */}
          {/* <Image src="https://lottie.host/embed/940586b1-a2d0-4db1-93ef-1616ed6fc17c/J3SOXEApqF.json" alt="hero image" fill className="object-contain" />      */}
          
        </div>
          <div className="hero__image-overlay"></div>
   
      </div>
    </div>
  );
};

export default Hero;
