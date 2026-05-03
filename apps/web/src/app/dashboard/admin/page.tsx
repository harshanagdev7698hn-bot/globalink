"use client";

import { useEffect, useState } from "react";

type UserItem = {
  id: string;
  name: string;
  email: string;
  role: string;
  city?: string | null;
  country?: string | null;
  company?: string | null;
  phone?: string | null;
  whatsapp?: string | null;
  gstNumber?: string | null;
  status: "PENDING" | "VERIFIED" | "REJECTED";
  createdAt: string;
};

export default function AdminPage() {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState("");

  async function loadUsers() {
    try {
      const res = await fetch("/api/admin/users", {
        cache: "no-store",
      });

      const data = await res.json();

      if (res.ok) {
        setUsers(data.users || []);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(
    userId: string,
    status: "VERIFIED" | "REJECTED" | "PENDING"
  ) {
    setUpdatingId(userId);

    try {
      const res = await fetch("/api/admin/verify", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          status,
        }),
      });

      if (res.ok) {
        await loadUsers();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setUpdatingId("");
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const pendingCount = users.filter((user) => user.status === "PENDING").length;
  const verifiedCount = users.filter(
    (user) => user.status === "VERIFIED"
  ).length;
  const rejectedCount = users.filter(
    (user) => user.status === "REJECTED"
  ).length;

  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-purple-100 bg-gradient-to-r from-[#2b064f] via-[#51245f] to-[#7b3f75] p-8 text-white shadow-2xl">
        <p className="text-sm font-semibold text-purple-100">
          Globalink Trust Control
        </p>

        <h1 className="mt-2 text-3xl font-extrabold">
          Admin Verification Panel
        </h1>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-purple-100">
          Review registered consultants, labs, sellers and buyers before they
          become visible in the trusted marketplace.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <StatCard title="Pending Review" value={pendingCount} />
          <StatCard title="Verified Users" value={verifiedCount} />
          <StatCard title="Rejected Users" value={rejectedCount} />
        </div>
      </section>

      <section className="rounded-[30px] border border-purple-100 bg-white p-6 shadow-xl">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold text-slate-950">
              Registered Users
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Approve only genuine and document-verified users.
            </p>
          </div>

          <button
            onClick={loadUsers}
            className="rounded-2xl border border-purple-200 bg-white px-4 py-2 text-sm font-bold text-purple-900 hover:bg-purple-50"
          >
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="rounded-2xl bg-slate-50 p-6 text-center text-sm font-semibold text-slate-500">
            Loading users...
          </div>
        ) : users.length === 0 ? (
          <div className="rounded-2xl bg-slate-50 p-6 text-center text-sm font-semibold text-slate-500">
            No users found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left text-xs font-extrabold uppercase tracking-wide text-slate-500">
                  <th className="px-4">User</th>
                  <th className="px-4">Role</th>
                  <th className="px-4">Business Details</th>
                  <th className="px-4">GST</th>
                  <th className="px-4">Status</th>
                  <th className="px-4 text-right">Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="bg-slate-50">
                    <td className="rounded-l-2xl px-4 py-4">
                      <p className="font-extrabold text-slate-950">
                        {user.name}
                      </p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        {user.phone || "No phone"}
                      </p>
                    </td>

                    <td className="px-4 py-4">
                      <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-extrabold text-purple-800">
                        {user.role}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <p className="text-sm font-bold text-slate-800">
                        {user.company || "No company"}
                      </p>
                      <p className="text-xs text-slate-500">
                        {[user.city, user.country].filter(Boolean).join(", ") ||
                          "No location"}
                      </p>
                    </td>

                    <td className="px-4 py-4">
                      {user.gstNumber ? (
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700">
                          {user.gstNumber}
                        </span>
                      ) : (
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                          Not Provided
                        </span>
                      )}
                    </td>

                    <td className="px-4 py-4">
                      <StatusBadge status={user.status} />
                    </td>

                    <td className="rounded-r-2xl px-4 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          disabled={updatingId === user.id}
                          onClick={() => updateStatus(user.id, "VERIFIED")}
                          className="rounded-xl bg-emerald-600 px-3 py-2 text-xs font-extrabold text-white hover:bg-emerald-700 disabled:opacity-50"
                        >
                          Approve
                        </button>

                        <button
                          disabled={updatingId === user.id}
                          onClick={() => updateStatus(user.id, "REJECTED")}
                          className="rounded-xl bg-red-600 px-3 py-2 text-xs font-extrabold text-white hover:bg-red-700 disabled:opacity-50"
                        >
                          Reject
                        </button>

                        <button
                          disabled={updatingId === user.id}
                          onClick={() => updateStatus(user.id, "PENDING")}
                          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-extrabold text-slate-700 hover:bg-slate-100 disabled:opacity-50"
                        >
                          Pending
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
      <p className="text-sm font-bold text-purple-100">{title}</p>
      <p className="mt-2 text-3xl font-extrabold text-white">{value}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  if (status === "VERIFIED") {
    return (
      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700">
        VERIFIED
      </span>
    );
  }

  if (status === "REJECTED") {
    return (
      <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-extrabold text-red-700">
        REJECTED
      </span>
    );
  }

  return (
    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-extrabold text-amber-700">
      PENDING
    </span>
  );
}