"use client";
import React, { FormEvent, useState } from "react";
import FormInputContainer from "../utils/FormInputContainer";
import Link from "next/link";
import { toast } from "sonner";
import { AuthMemberType } from "@/src/constants";
import PrimaryButton from "../utils/PrimaryButton";
import { handleLogin } from "./handleAccount";

export default function LoginForm() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const ready = details.email !== "" && details.password !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const loginDetails = {
      email: details.email,
      password: details.password,
    } as AuthMemberType;

    try {
      // handle login
      const { status, error } = await handleLogin(loginDetails);
      if (!status) throw new Error(error.message);
    } catch (err: any) {
      toast.error(err.message);
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start justify-start w-full gap-4"
    >
      <FormInputContainer
        labelClassName="text-custom-light-text"
        id="email"
        text="Email Address"
      >
        <input
          value={details.email}
          onChange={handleChange}
          required
          placeholder="Enter your email address"
          name="email"
        />
      </FormInputContainer>
      <FormInputContainer
        labelClassName="text-custom-light-text"
        id="password"
        text="Password"
      >
        <input
          value={details.password}
          onChange={handleChange}
          required
          placeholder="Enter your password"
          name="password"
          type="password"
        />
      </FormInputContainer>
      <Link
        href="/auth/forgot-password"
        className="text-sm text-custom-secondary underline hover:opacity-85"
      >
        Forgot Password
      </Link>
      <PrimaryButton
        className="mt-2"
        type="submit"
        disabled={!ready || loading}
        loading={loading}
      >
        {loading ? "Signing In" : "Sign In"}
      </PrimaryButton>
      <p className="text-sm text-custom-light-text">
        New here?{" "}
        <span>
          <Link
            className="underline text-custom-secondary hover:opacity-85"
            href="/register"
          >
            Sign up
          </Link>
          .
        </span>
      </p>
    </form>
  );
}
