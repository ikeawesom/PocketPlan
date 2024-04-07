import LoginForm from "@/src/components/auth/SignInForm";
import DefaultCard from "@/src/components/utils/DefaultCard";
import React from "react";

export default function LoginPage() {
  return (
    <DefaultCard className="max-w-[600px]">
      <LoginForm />
    </DefaultCard>
  );
}
