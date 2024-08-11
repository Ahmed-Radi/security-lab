"use client";

import CustomFormField, { FormFieldType } from "@/components/customFormField"
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { loginFormSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CustomAlert } from "@/components/customAlert";
import { useSearchParams } from "next/navigation";
import { login } from "@/lib/auth-actions";
import Link from "next/link";
import SubmitButton from "@/components/submitButton";
import SignInWithGoogleButton from "./components/SignInWithGoogleButton";
import { useTransition } from "react";

const Login = () => {
  const [ pending, startTransition ] = useTransition();

  const searchParams = useSearchParams();
  const message = searchParams.get("message");

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    const { email, password } = data;

    startTransition(async() => {
      try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        await login(formData);
      } catch (error) {
        console.error("Failed to login:", error);
        throw new Error(error as string ?? "Failed to login")
      }
    })
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <section className='mb-6 w-[300px] md:w-[450px]'>
        <h1 className='text-4xl font-bold text-center mb-6'>Login</h1>
        {message && (
          <CustomAlert
            title={message.includes("verify") ? "Info" : "Error"}
            message={message ?? ""}
          />
        )}
      </section>

      <Form {...form}>
        <form className='space-y-8 w-[300px] md:w-[450px]' onSubmit={form.handleSubmit(onSubmit)}>
          <CustomFormField
            control={form.control}
            name='email'
            label='Email'
            fieldType={FormFieldType.INPUT}
            placeholder='Email'
            inputType='email'
          />
          <CustomFormField
            control={form.control}
            name='password'
            label='Password'
            fieldType={FormFieldType.INPUT}
            placeholder='******'
            inputType='password'
          />
          <div className='flex justify-between'>
            <SubmitButton isLoading={pending}>Submit</SubmitButton>
            <Button variant={"ghost"} asChild>
              <Link href='/signup'>Sign Up</Link>
            </Button>
          </div>
          <SignInWithGoogleButton />
        </form>
      </Form>
    </div>
  );
};

export default Login;
