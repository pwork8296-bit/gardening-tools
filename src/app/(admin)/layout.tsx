import React from "react";
import AdminLayoutClient from "@/components/admin/AdminLayoutClient";
import ThemeScript from "@/components/admin/ThemeScript";
import type { Metadata } from "next";
import "@/app/admin.css";

export const metadata: Metadata = {
  title: "Admin Dashboard | Windmill Theme",
  description: "Next.js Admin Dashboard with Windmill layout and themes",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminLayoutClient>{children}</AdminLayoutClient>
      <ThemeScript />
    </>
  );
}
