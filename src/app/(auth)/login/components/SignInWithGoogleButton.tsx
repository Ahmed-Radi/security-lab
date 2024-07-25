"use client";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth-actions";
import Image from "next/image";
import React from "react";

const SignInWithGoogleButton = () => {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full gap-[3px]"
      onClick={() => {
        signInWithGoogle();
      }}
    >
      <Image width={11} height={11} src="/assets/icons/google-color-icon.svg" alt="google" />
      Login with Google
    </Button>
  );
};

export default SignInWithGoogleButton;