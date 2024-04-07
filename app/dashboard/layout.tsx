import { createSupabaseServer } from "@/src/lib/supabase/server";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createSupabaseServer();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) redirect("/");

  return <>{children}</>;
}
