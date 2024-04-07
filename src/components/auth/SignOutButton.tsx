"use client";
import React from "react";
import PrimaryButton from "../utils/PrimaryButton";
import { toast } from "sonner";
import { handleSignOut } from "./handleAccount";

export default function SignOutButton() {
  const handleClick = async () => {
    try {
      const { error } = await handleSignOut();
      if (error) throw new Error(error);
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return <PrimaryButton onClick={handleClick}>Sign Out</PrimaryButton>;
}
