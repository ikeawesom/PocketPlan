"use server";

import { AuthMemberType } from "@/src/constants";
import { createSupabaseServer } from "@/src/lib/supabase/server";
import handleResponses from "@/src/lib/utils/handleResponses";

export async function handleLogin(formData: AuthMemberType) {
  const { email, password } = formData;
  const supabase = createSupabaseServer();

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new Error(error.message);
    return handleResponses({ data: user });
  } catch (err: any) {
    return handleResponses({ status: false, error: err.message });
  }
}

export async function handleRegister(formData: AuthMemberType) {
  const { email, password, first_name, last_name } = formData;
  const supabase = createSupabaseServer();

  const metaData = {
    first_name,
    last_name,
    role: "member",
  };

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.signUp({
      email,
      password,
      options: { data: metaData },
    });
    if (error) throw new Error(error.message);
    return handleResponses({ data: user });
  } catch (err: any) {
    return handleResponses({ status: false, error: err.message });
  }
}

export async function handleSignOut() {
  const supabase = createSupabaseServer();

  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
    return handleResponses();
  } catch (err: any) {
    return handleResponses({ status: false, error: err.message });
  }
}
