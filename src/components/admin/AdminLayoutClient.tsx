"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

interface AdminLayoutClientProps {
  children: React.ReactNode;
}

export default function AdminLayoutClient({ children }: AdminLayoutClientProps) {
  const [dark, setDark] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme-dark");
    if (savedTheme === "true" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !dark;
    setDark(nextDark);
    localStorage.setItem("theme-dark", nextDark ? "true" : "false");
  };

  const isAuthPage =
    pathname === "/" ||
    pathname === "/login" ||
    pathname === "/create-account" ||
    pathname === "/forgot-password" ||
    pathname === "/admin" ||
    pathname === "/admin/login" ||
    pathname === "/admin/create-account" ||
    pathname === "/admin/forgot-password" ||
    (pathname ? pathname.includes("/pages/") : false);

  if (isAuthPage) {
    return (
      <div className={`admin-layout-root ${dark ? "theme-dark text-gray-200" : ""}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`admin-layout-root ${dark ? "theme-dark" : ""}`}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
        {/* Sidebar Component */}
        <Sidebar
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <div className="flex flex-col flex-1 w-full">
          {/* Header Component */}
          <Header
            dark={dark}
            onToggleTheme={toggleTheme}
            onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          />

          {/* Main Content Container */}
          <main className="h-full overflow-y-auto flex flex-col justify-between">
            <div className="container px-6 mx-auto grid">
              {children}
            </div>

            {/* Footer Component */}
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
