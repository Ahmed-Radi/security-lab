"use client"

import CustomFormField from "@/components/customFormField"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { loginFormSchema } from "@/lib/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

export enum FormFieldType {
  INPUT = "input",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phone_input",
  DATE_PICKER = "date_picker",
  SELECT = "select",
  SKELETON = "skeleton",
}
const Login = () => {

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values)
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <section className="mb-6">
        <h1 className='text-4xl font-bold'>Login</h1>
      </section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[300px] md:w-[450px]">
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
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default Login