"use client";

import image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className=" hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car - all in one place!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental process with our unique platform.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
