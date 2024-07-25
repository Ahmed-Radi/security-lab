"use client"
import React from "react";
import { Button } from "./ui/button";
import { signout } from "@/lib/auth-actions";

const LogoutButton = () => {
  return (
    <Button
      onClick={() => {
        signout();
      }}>
      Log out
    </Button>
  );
};

export default LogoutButton;
