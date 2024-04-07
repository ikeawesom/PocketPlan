"use client";
import React, { FormEvent, useState } from "react";
import FormInputContainer from "../utils/FormInputContainer";
import Link from "next/link";
import { AuthMemberType } from "@/src/constants";
import PrimaryButton from "../utils/PrimaryButton";
import { handleRegister } from "./handleAccount";
import Notice from "../utils/Notice";
import FlexContainer from "../utils/FlexContainer";

export default function RegisterForm() {
  const [success, setSuccess] = useState({ state: false, error: "" });
  const [details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    "cfm-password": "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const ready =
    details["cfm-password"] !== "" &&
    details["cfm-password"] === details["password"] &&
    details.fname !== "" &&
    details.lname !== "" &&
    details.email !== "";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const memberDetails = {
        email: details.email,
        first_name: details.fname,
        last_name: details.lname,
        password: details["cfm-password"],
      } as AuthMemberType;

      //   handle register
      const { data, error, status } = await handleRegister(memberDetails);
      console.log(error);
      if (!status) throw new Error(error);
      setSuccess({ ...success, state: true });
      console.log(data);
    } catch (err: any) {
      setSuccess({ ...success, error: err.message });
    }
    setLoading(false);
  };

  if (success.state) {
    return (
      <Notice parentClassName="border-custom-light-grey bg-green-600">
        A confirmation email has been sent to{" "}
        <span className="font-bold">{details.email}</span>. Please click on the
        link provided to complete your account creation. If you cannot find your
        email, try checking your spam folder.
      </Notice>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start justify-start w-full gap-4"
    >
      <div className="flex items-center justify-between gap-4 w-full">
        <FormInputContainer
          labelClassName="text-custom-light-text"
          id="fname"
          text="First Name"
        >
          <input
            onChange={handleChange}
            value={details.fname}
            required
            placeholder="Enter your given name"
            name="fname"
          />
        </FormInputContainer>
        <FormInputContainer
          labelClassName="text-custom-light-text"
          id="lname"
          text="Last Name"
        >
          <input
            onChange={handleChange}
            value={details.lname}
            required
            placeholder="Enter your last name"
            name="lname"
          />
        </FormInputContainer>
      </div>
      <FormInputContainer
        labelClassName="text-custom-light-text"
        id="email"
        text="Email Address"
      >
        <input
          onChange={handleChange}
          value={details.email}
          required
          placeholder="Enter your email address"
          name="email"
          type="email"
        />
      </FormInputContainer>
      <FormInputContainer
        labelClassName="text-custom-light-text"
        id="password"
        text="Password"
      >
        <input
          value={details.password}
          required
          placeholder="Enter a password"
          name="password"
          type="password"
          onChange={handleChange}
        />
      </FormInputContainer>
      <FormInputContainer
        labelClassName="text-custom-light-text"
        id="cfm-password"
        text="Confirm Password"
      >
        <input
          value={details["cfm-password"]}
          required
          placeholder="Re-Enter a password"
          name="cfm-password"
          type="password"
          onChange={handleChange}
        />
      </FormInputContainer>

      {!success.state && success.error !== "" && (
        <FlexContainer>
          <Notice parentClassName="sm:p-3 p-2 border-custom-light-grey bg-red-500">
            {success.error}
          </Notice>
        </FlexContainer>
      )}
      <PrimaryButton
        disabled={!ready || loading}
        type="submit"
        className="mt-2"
        loading={loading}
      >
        {loading ? "Creating" : "Sign Up"}
      </PrimaryButton>
      <p className="text-sm text-custom-light-text">
        Already have an account?{" "}
        <span>
          <Link className="font-bold text-custom-primary" href="/login">
            Sign in
          </Link>
          .
        </span>
      </p>
    </form>
  );
}
