"use client"

import CustomFormField, { FormFieldType } from "@/components/customFormField"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { registerFormSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CustomAlert } from "@/components/customAlert"
import { useSearchParams } from "next/navigation"
import { signup } from "@/lib/auth-actions"
import Link from "next/link"
import SubmitButton from "@/components/submitButton"
import { useTransition } from "react"

const SignUp = () => {
  const [ pending, startTransition ] = useTransition();

  const searchParams = useSearchParams();
  const message = searchParams.get('message');

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof registerFormSchema>) => {
    const { name, email, password } = data;

    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)

        await signup(formData)
      } catch (error) {
        throw new Error(error as string ?? "Failed to Signup")
      }
    })
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <section className="mb-6 w-[300px] md:w-[450px]">
        <h1 className='text-4xl font-bold text-center mb-6'>Sign Up</h1>
        {message && <CustomAlert
          title="Error"
          message={message ?? ""}
        />}
      </section>
      <Form {...form}>
        <form className="space-y-8 w-[300px] md:w-[450px]" onSubmit={form.handleSubmit(onSubmit)}>
          <CustomFormField
            control={form.control}
            name="name"
            label="Full name"
            fieldType={FormFieldType.INPUT}
            placeholder="Full name"
            inputType="text"
          />
          <CustomFormField
            control={form.control}
            name="email"
            label="Email"
            fieldType={FormFieldType.INPUT}
            placeholder="Email"
            inputType="email"
          />
          <CustomFormField
            control={form.control}
            name="password"
            label="Password"
            fieldType={FormFieldType.INPUT}
            placeholder="******"
            inputType="password"
          />
          <div className="flex justify-between">
            <SubmitButton isLoading={pending}>Submit</SubmitButton>
            <Button variant={"ghost"} asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default SignUp