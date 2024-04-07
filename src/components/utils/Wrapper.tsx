import { UtilityType } from "@/src/constants";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function Wrapper({
  children,
  className,
  parentClassName,
}: UtilityType) {
  return (
    <div className={twMerge("w-full grid place-items-center", parentClassName)}>
      <div className={twMerge("w-full max-w-[1000px]", className)}>
        {children}
      </div>
    </div>
  );
}
