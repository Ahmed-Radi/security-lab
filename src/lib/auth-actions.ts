'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/login?message=Could not authenticate user')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    name: formData.get('name') as string,
  }

  const { data: signupData, error } = await supabase.auth.signUp(data)

  if (error) {
    redirect(`/signup?message=${error?.message}`);
  }

  // Insert the user's profile with the name
  if (signupData.user) {
    const { error: profileError } = await supabase
      .from('user_profiles')
      .insert([{ id: signupData.user.id, name: data.name }]);

    if (profileError) {
      console.error('Error inserting user profile:', profileError);
      redirect('/signup?message=Error creating user profile');
      return;
    }
  }

  revalidatePath('/', 'layout')
  redirect('/login?message=Please verify your account')
}

export async function signout() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    redirect("/error");
  }

  redirect("/login");
}

export async function signInWithGoogle() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    redirect("/error");
  }

  redirect(data.url);
}