"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

export type ButtonType = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  loading?: boolean;
  border?: boolean;
};

export default function PrimaryButton(props: ButtonType) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type ? props.type : "button"}
      className={twMerge(
        "rounded-md font-bold duration-150 ease-in-out w-full bg-custom-primary text-custom-light-text px-4 py-2",
        `${
          props.disabled
            ? "opacity-90 cursor-not-allowed"
            : "hover:brightness-90"
        }`,
        props.className
      )}
    >
      {props.children ? props.children : "Click Me"}
    </button>
  );
}
