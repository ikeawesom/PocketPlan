import React from "react";
import { twMerge } from "tailwind-merge";
import FlexContainer from "./FlexContainer";

export default function FormInputContainer(config: {
  text: string;
  id: string;
  children?: React.ReactNode;
  parentClassName?: string;
  labelClassName?: string;
}) {
  const { id, text, children, labelClassName, parentClassName } = config;

  return (
    <FlexContainer
      className={twMerge(
        "w-full items-start justify-start gap-1",
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
    </FlexContainer>
  );
}
