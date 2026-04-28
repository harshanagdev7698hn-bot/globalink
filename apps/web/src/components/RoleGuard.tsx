"use client";

import { useEffect, useState } from "react";

type Role = "BUYER" | "CONSULTANT" | "SELLER" | "LAB" | "ADMIN";

export default function RoleGuard({
  allowed,
  children,
  message,
}: {
  allowed: Role[];
  children: React.ReactNode;
  message: string;
}) {
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("globalink_user");
    if (saved) {
      const user = JSON.parse(saved);
      setRole(user.role);
    }
  }, []);

  if (!role) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow">
        <h2 className="text-2xl font-bold">Login required</h2>
        <p>Please login first.</p>
      </div>
    );
  }

  if (!allowed.includes(role as Role)) {
    return (
      <div className="rounded-3xl bg-white p-8 shadow">
        <h2 className="text-2xl font-bold text-red-600">Access Denied</h2>
        <p className="mt-2">{message}</p>
      </div>
    );
  }

  return <>{children}</>;
}