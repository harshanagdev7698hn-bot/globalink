"use client";

import { useEffect, useState } from "react";

type Cert = {
  id: string;
  name: string;
  authority: string;
  category: string;
  country: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  documentUrl?: string | null;
  adminRemark?: string | null;
  user: {
    name: string;
    email: string;
  };
};

export default function AdminCertificationsPage() {
  const [items, setItems] = useState<Cert[]>([]);
  const [loading, setLoading] = useState(true);
  const [remarks, setRemarks] = useState<Record<string, string>>({});

  const fetchAll = async () => {
    try {
      const res = await fetch("/api/certifications");
      const data = await res.json();

      if (res.ok) {
        setItems(data.certifications || []);
      }
    } catch (error) {
      console.error("Failed to fetch certifications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const updateStatus = async (
    id: string,
    status: "APPROVED" | "REJECTED"
  ) => {
    try {
      const res = await fetch("/api/certifications/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          status,
          adminRemark: remarks[id] || "",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to update status");
        return;
      }

      alert("Certification updated");
      fetchAll();
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-3xl border border-[#dfb6b2] bg-white shadow-sm">
        <div
          className="px-6 py-8 text-white"
          style={{
            background:
              "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
          }}
        >
          <p className="text-sm uppercase tracking-wide text-[#FBE4D8]">
            Admin Certifications
          </p>
          <h1 className="mt-2 text-3xl font-bold">
            Certification Approval Center
          </h1>
          <p className="mt-2 text-sm text-[#FBE4D8]">
            Review uploaded documents, verify certification details and add admin remarks.
          </p>
        </div>
      </div>

      <div className="glass-panel p-6">
        <h2 className="text-2xl font-bold text-[#190019]">
          All Certification Requests
        </h2>
        <p className="mt-1 text-sm text-[#854F6C]">
          Review certificate requests, open uploaded files and respond with remarks.
        </p>

        {loading ? (
          <div className="mt-6 text-sm text-[#854F6C]">Loading...</div>
        ) : items.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] p-6 text-sm text-[#854F6C]">
            No certifications found.
          </div>
        ) : (
          <div className="mt-6 grid gap-4">
            {items.map((c) => (
              <div key={c.id} className="premium-card p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wide text-[#854F6C]">
                      {c.category}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-[#190019]">
                      {c.name}
                    </h3>
                    <p className="mt-2 text-sm text-[#522B5B]">
                      Authority: {c.authority}
                    </p>
                    <p className="mt-1 text-sm text-[#522B5B]">
                      Country: {c.country}
                    </p>
                    <p className="mt-3 text-sm text-[#854F6C]">
                      User: {c.user.name} ({c.user.email})
                    </p>

                    {c.documentUrl ? (
                      <a
                        href={c.documentUrl}
                        target="_blank"
                        className="mt-4 inline-block rounded-xl border border-[#dfb6b2] bg-[#FBE4D8] px-4 py-2 text-sm font-semibold text-[#190019] transition hover:opacity-90"
                      >
                        Preview Document
                      </a>
                    ) : (
                      <p className="mt-4 text-sm text-[#854F6C]">
                        No document uploaded
                      </p>
                    )}
                  </div>

                  <div className="w-full lg:w-[360px]">
                    <div className="mb-3">
                      <span
                        className={
                          c.status === "APPROVED"
                            ? "status-approved"
                            : c.status === "REJECTED"
                            ? "status-pending"
                            : "status-open"
                        }
                      >
                        {c.status}
                      </span>
                    </div>

                    <textarea
                      placeholder="Add admin remark..."
                      value={remarks[c.id] ?? c.adminRemark ?? ""}
                      onChange={(e) =>
                        setRemarks((prev) => ({
                          ...prev,
                          [c.id]: e.target.value,
                        }))
                      }
                      className="min-h-[110px] w-full rounded-2xl border border-[#dfb6b2] p-3 text-sm text-[#190019]"
                    />

                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={() => updateStatus(c.id, "APPROVED")}
                        className="rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => updateStatus(c.id, "REJECTED")}
                        className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}