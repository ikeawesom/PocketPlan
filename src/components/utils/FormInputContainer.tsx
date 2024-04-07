import React from "react";
import { twMerge } from "tailwind-merge";

export default function FormInputContainer(config: {
  text: string;
  id: string;
  children?: React.ReactNode;
  parentClassName?: string;
  labelClassName?: string;
}) {
  const { id, text, children, labelClassName, parentClassName } = config;

  return (
    <div
      className={twMerge(
        "flex flex-col w-full items-start justify-start gap-1",
        parentClassName
      )}
    >
      <label
        htmlFor={id}
        className={twMerge("text-sm text-start", labelClassName)}
      >
        {text}
      </label>
      {children}
    </div>
  );
}
