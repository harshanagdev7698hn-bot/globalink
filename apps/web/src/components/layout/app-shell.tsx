import React from "react";
import TopNav from "./top-nav";
import { SideNav } from "./side-nav";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#FBE4D8]">
      <SideNav />

      <div className="flex-1">
        <TopNav />

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}