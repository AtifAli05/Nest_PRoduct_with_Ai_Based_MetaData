"use client"
import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({title,handleClick,containerStyles}:CustomButtonProps) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      type={"button"}
      onClick={handleClick}
    >
     <span className="flex-1">
{  title
}     </span>
    </button>
  );
};

export default CustomButton;
