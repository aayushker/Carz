"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
  // Add import statement for textStyles
  // import { textStyles } from "@/styles"; 
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  isDisabled,
}: CustomButtonProps) => {


  return (
    <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    {/* {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )} */}
    {/* <span className={`flex-1 ${textStyles}`}>{title}</span> */}
  </button>
  );
};

export default CustomButton;