"use client";

import { useEffect, useState } from "react";

type Consultant = {
  id: string;
  company?: string | null;
  expertise: string;
  country: string;
  city?: string | null;
  services: string;
  experienceYears: number;
  pricing?: string | null;
  phone?: string | null;
  whatsapp?: string | null;
  gstNumber?: string | null;
  msmeNumber?: string | null;
  gstFile?: string | null;
  msmeFile?: string | null;
  verificationStatus?: string | null;
  isVerified?: boolean;
  averageRating?: number;
  totalReviews?: number;
  user?: {
    name?: string | null;
    email?: string | null;
    role?: string | null;
  };
};

export default function AdminPage() {
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState("");

  const loadConsultants = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/admin/consultants", {
        cache: "no-store",
      });

      const data = await res.json();
      setConsultants(data.consultants || []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadConsultants();
  }, []);

  const updateStatus = async (id: string, status: "APPROVED" | "REJECTED" | "PENDING") => {
    try {
      setUpdatingId(id);

      const res = await fetch(`/api/admin/consultants/${id}/verify`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Status update failed");
        return;
      }

      alert(data.message);
      loadConsultants();
    } finally {
      setUpdatingId("");
    }
  };

  const statusClass = (status?: string | null) => {
    if (status === "APPROVED") {
      return "bg-green-100 text-green-700";
    }

    if (status === "REJECTED") {
      return "bg-red-100 text-red-700";
    }

    return "bg-yellow-100 text-yellow-800";
  };

  if (loading) {
    return (
      <div className="rounded-[28px] border border-[#dfb6b2] bg-white p-7 shadow-sm">
        Loading consultants...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-[#dfb6b2] bg-white p-3 shadow-sm">
        <div
          className="rounded-[24px] px-7 py-10 text-white shadow-md"
          style={{
            background:
              "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
          }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#FBE4D8]">
            Admin Verification
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Consultant Approval System
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#FBE4D8]">
            Review consultant profiles, GST/MSME details and approve or reject
            verification requests.
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <div className="rounded-[24px] border border-[#dfb6b2] bg-white p-6 shadow-sm">
          <p className="text-sm text-[#854F6C]">Total Consultants</p>
          <h2 className="mt-3 text-3xl font-bold text-[#190019]">
            {consultants.length}
          </h2>
        </div>

        <div className="rounded-[24px] border border-[#dfb6b2] bg-white p-6 shadow-sm">
          <p className="text-sm text-[#854F6C]">Pending</p>
          <h2 className="mt-3 text-3xl font-bold text-yellow-700">
            {
              consultants.filter(
                (c) => (c.verificationStatus || "PENDING") === "PENDING"
              ).length
            }
          </h2>
        </div>

        <div className="rounded-[24px] border border-[#dfb6b2] bg-white p-6 shadow-sm">
          <p className="text-sm text-[#854F6C]">Approved</p>
          <h2 className="mt-3 text-3xl font-bold text-green-700">
            {consultants.filter((c) => c.verificationStatus === "APPROVED").length}
          </h2>
        </div>
      </section>

      <section className="rounded-[28px] border border-[#dfb6b2] bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-bold text-[#190019]">
          Consultant Verification Requests
        </h2>

        <p className="mt-2 text-sm text-[#854F6C]">
          Approve only after checking GST/MSME details and profile quality.
        </p>

        <div className="mt-7 space-y-5">
          {consultants.length === 0 ? (
            <div className="rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] p-6 text-center font-semibold text-[#522B5B]">
              No consultants found.
            </div>
          ) : (
            consultants.map((c) => (
              <div
                key={c.id}
                className="rounded-[24px] border border-[#dfb6b2] bg-[#fff8f7] p-6 shadow-sm"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold text-[#190019]">
                        {c.user?.name || c.company || "Consultant"}
                      </h3>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${statusClass(
                          c.verificationStatus
                        )}`}
                      >
                        {c.verificationStatus || "PENDING"}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-[#522B5B]">
                      {c.expertise || "Expert Consultant"}
                    </p>

                    <p className="mt-1 text-sm text-[#854F6C]">
                      {c.city ? `${c.city}, ` : ""}
                      {c.country || "India"}
                    </p>

                    <p className="mt-1 text-sm text-[#854F6C]">
                      {c.user?.email || "No email"}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => updateStatus(c.id, "APPROVED")}
                      disabled={updatingId === c.id}
                      className="rounded-xl bg-green-600 px-4 py-2 text-sm font-bold text-white"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => updateStatus(c.id, "REJECTED")}
                      disabled={updatingId === c.id}
                      className="rounded-xl bg-red-600 px-4 py-2 text-sm font-bold text-white"
                    >
                      Reject
                    </button>

                    <button
                      onClick={() => updateStatus(c.id, "PENDING")}
                      disabled={updatingId === c.id}
                      className="rounded-xl bg-yellow-500 px-4 py-2 text-sm font-bold text-white"
                    >
                      Pending
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-2xl border border-[#dfb6b2] bg-white p-4">
                    <p className="text-sm text-[#854F6C]">Experience</p>
                    <p className="mt-1 font-bold text-[#190019]">
                      {c.experienceYears || 0} years
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#dfb6b2] bg-white p-4">
                    <p className="text-sm text-[#854F6C]">Pricing</p>
                    <p className="mt-1 font-bold text-[#190019]">
                      {c.pricing || "Not added"}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#dfb6b2] bg-white p-4">
                    <p className="text-sm text-[#854F6C]">GST Number</p>
                    <p className="mt-1 font-bold text-[#190019]">
                      {c.gstNumber || "Not added"}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#dfb6b2] bg-white p-4">
                    <p className="text-sm text-[#854F6C]">MSME Number</p>
                    <p className="mt-1 font-bold text-[#190019]">
                      {c.msmeNumber || "Not added"}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {c.gstFile ? (
                    <a
                      href={c.gstFile}
                      target="_blank"
                      className="rounded-xl border border-[#dfb6b2] bg-white px-4 py-2 text-sm font-bold text-[#190019]"
                    >
                      View GST File
                    </a>
                  ) : (
                    <span className="rounded-xl border border-[#dfb6b2] bg-white px-4 py-2 text-sm font-bold text-[#854F6C]">
                      GST File Not Uploaded
                    </span>
                  )}

                  {c.msmeFile ? (
                    <a
                      href={c.msmeFile}
                      target="_blank"
                      className="rounded-xl border border-[#dfb6b2] bg-white px-4 py-2 text-sm font-bold text-[#190019]"
                    >
                      View MSME File
                    </a>
                  ) : (
                    <span className="rounded-xl border border-[#dfb6b2] bg-white px-4 py-2 text-sm font-bold text-[#854F6C]">
                      MSME File Not Uploaded
                    </span>
                  )}

                  <a
                    href={`/consultants/${c.id}`}
                    target="_blank"
                    className="rounded-xl bg-[#2B124C] px-4 py-2 text-sm font-bold text-white"
                  >
                    Public Profile
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}