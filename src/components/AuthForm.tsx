"use client";

import Link from "next/link";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import CustomInput from "./CustomInput";
import { authformSchema } from "@/lib/utils";

import { LoaderCircle } from "lucide-react";
import { Form } from "./ui/form";
//import { useRouter } from "next/navigation";

const AuthForm = ({ type }: { type: string }) => {
  //const router = useRouter();
  const [user] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authformSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    setIsLoading(true);
    console.log(data);
    setIsLoading(false);

    // try {
    //   // Sign up with Appwrite or from backend
    //   // if (type === "sign-up") {
    //   //   const newUser = await signUp(data);
    //   //   setUser(newUser);

    //   }

    //   } catch (error) {
    //   console.log(error);
    //  } finally {
    //   setIsLoading(false);
    //   }
  };

  return (
    <div className="flex w-full">
      <section className="flex min-h-screen w-full max-w-[600px] flex-col justify-center gap-5 py-10 md:px-20 md:gap-8">
        <header className="flex flex-col gap-5 md:gap-8">
          <Link href="/" className="cursor-pointer flex items-center gap-1">
            <h1 className="text-2xl">NEPTUNE</h1>
          </Link>

          <div className="flex flex-col gap-1 md:gap:3">
            <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
              {user
                ? "Create Account"
                : type === "sign-in"
                ? "Sign In"
                : "Sign Up"}
              <p className="text-16 font-normal text-gray-600">
                {user
                  ? "Create your account to get started"
                  : "Please enter your details to sign in:"}
              </p>
            </h1>
          </div>
        </header>
        {user ? (
          <div className="flex flex-col gap-4">{/* user signed in */}</div>
        ) : (
          <>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {type === "sign-up" && (
                  <>
                    <div className="flex gap-4">
                      <CustomInput
                        control={form.control}
                        name="firstName"
                        label="First Name"
                        placeholder="Enter your first name"
                      />

                      <CustomInput
                        control={form.control}
                        name="lastName"
                        label="Last Name"
                        placeholder="Enter your last name"
                      />
                    </div>

                    <CustomInput
                      control={form.control}
                      name="company"
                      label="Company Name"
                      placeholder="Your awesome company"
                    />

                    <CustomInput
                      control={form.control}
                      name="phone"
                      label="Phone Number"
                      placeholder="Enter phone number"
                      isPhoneInput={true}
                    />
                  </>
                )}
                <CustomInput
                  control={form.control}
                  name="email"
                  label="Email address"
                  placeholder="johndoe@gmail.com"
                />

                <CustomInput
                  control={form.control}
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                />
                {type === "sign-in" && (
                  <Link href="/forgot-password">Forgot Password?</Link>
                )}

                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <LoaderCircle size={20} className="animate-spin" /> &nbsp;
                      Loading ...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </form>
            </Form>

            <div>
              <div className="flex items-center justify-center mb-8">
                <hr className="w-1/4 border-gray-300" />
                <div className="bg-gray-200 p-2">
                  <p className="text-gray-400 text-center">
                    {type === "sign-in" ? "or sign in with" : "or sign up with"}
                  </p>
                </div>
                <hr className="w-1/4 border-gray-300" />
              </div>

              <div className="bg-gray-200 p-2 rounded-lg mb-3">
                <p className="text-center text-gray-700">
                  Continue with Google
                </p>
              </div>

              <div className="bg-gray-200 p-2 rounded-lg mb-3">
                <p className="text-center text-gray-700">
                  Continue with Microsoft
                </p>
              </div>

              <div>
                <p className="text-center text-gray-500 mt-6">
                  <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"}>
                    {type === "sign-in"
                      ? "Create account"
                      : "Sign in to existing account"}
                  </Link>
                </p>
              </div>
            </div>
          </>
        )}
      </section>

      <div className="hidden md:hidden lg:block bg-slate-800 w-full min-h-screen">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className=" h-[200px] w-[350px] -mt-32 bg-slate-300"></div>
        </div>
        <div className="">
          <p className="flex text-white justify-center -mt-16">
            License <span className="ml-5">Terms of use</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
