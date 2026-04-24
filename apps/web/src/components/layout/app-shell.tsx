import { ReactNode } from "react";
import { TopNav } from "./top-nav";
import { SideNav } from "./side-nav";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FBE4D8]">
      <TopNav />

      <div className="page-container py-6">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <SideNav />
          <main className="min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}