"use client"
import React from "react";
import { Button } from "./ui/button";
import { signout } from "@/lib/auth-actions";

const LogoutButton = ({ style }: { style?: string }) => {
  return (
    <Button
      className={style ?? ""}
      onClick={() => {
        signout();
      }}>
      Log out
    </Button>
  );
};

export default LogoutButton;
