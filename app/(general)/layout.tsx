import { Navbar } from "@/components/index";
import React from "react";

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span>Hello, World!</span>
        {children}
      </main>
    </>
  );
}
