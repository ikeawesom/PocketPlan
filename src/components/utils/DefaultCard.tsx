import { UtilityType } from "@/src/constants";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function DefaultCard({ children, className }: UtilityType) {
  return (
    <div
      className={twMerge(
        "w-full rounded-md bg-custom-dark-grey border-[1px] border-custom-border p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
