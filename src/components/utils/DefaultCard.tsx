import { UtilityType } from "@/src/constants";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function DefaultCard({ children, className }: UtilityType) {
  return (
    <div
      className={twMerge(
        "w-full rounded-md bg-custom-dark-grey border-[1px] border-custom-border sm:p-8 p-4",
        className
      )}
    >
      {children}
    </div>
  );
}
