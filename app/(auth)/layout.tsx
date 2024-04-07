import { createSupabaseServer } from "@/src/lib/supabase/server";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Account",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createSupabaseServer();

  const { data } = await supabase.auth.getUser();
  if (data?.user) redirect("/dashboard/home");

  return (
    <div className="h-svh w-full grid place-items-center p-4 bg-custom-black">
      {children}
    </div>
  );
}
