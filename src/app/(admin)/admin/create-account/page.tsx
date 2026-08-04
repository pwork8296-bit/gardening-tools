import React from "react";
import CreateAccountPageComponent from "@/components/admin/CreateAccountPageComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account | Windmill Admin Dashboard",
  description: "Create account page for Windmill Admin Dashboard",
};

export default function AdminSubCreateAccountPage() {
  return <CreateAccountPageComponent />;
}
