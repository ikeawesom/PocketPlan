import { UtilityType } from "@/src/constants";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function FlexContainer({ children, className }: UtilityType) {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center gap-2",
        className
      )}
    >
      {children}
    </div>
  );
}
