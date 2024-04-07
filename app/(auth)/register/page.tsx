import RegisterForm from "@/src/components/auth/SignUpForm";
import DefaultCard from "@/src/components/utils/DefaultCard";
import React from "react";

export default function LoginPage() {
  return (
    <DefaultCard className="max-w-[600px]">
      <h1 className="text-3xl mb-6">Start planning your expenses today!</h1>
      <RegisterForm />
    </DefaultCard>
  );
}
