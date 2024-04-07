import { UtilityType } from "@/src/constants";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function Notice({
  children,
  parentClassName,
  className,
}: UtilityType) {
  return (
    <div
      className={twMerge(
        "w-full rounded-md border-[0.5px] p-3",
        parentClassName
      )}
    >
      <p className={twMerge("text-custom-light-text text-sm", className)}>
        {children}
      </p>
    </div>
  );
}
