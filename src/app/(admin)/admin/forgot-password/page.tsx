import React from "react";
import ForgotPasswordPageComponent from "@/components/admin/ForgotPasswordPageComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Windmill Admin Dashboard",
  description: "Forgot password recovery page for Windmill Admin Dashboard",
};

export default function AdminSubForgotPasswordPage() {
  return <ForgotPasswordPageComponent />;
}
