"use client";

import { useEffect, useMemo, useState } from "react";

type LabItem = {
  id: string;
  name: string;
  email: string;
  company?: string | null;
  city?: string | null;
  country?: string | null;
  phone?: string | null;
  whatsapp?: string | null;
  gstNumber?: string | null;
  labProfile?: {
    labScope?: string | null;
    testingCategories?: string | null;
    contactPerson?: string | null;
    nablFile?: string | null;
    bisApprovalFile?: string | null;
  } | null;
};

export default function LabsPage() {
  const [labs, setLabs] = useState<LabItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  async function loadLabs() {
    try {
      const res = await fetch("/api/labs", { cache: "no-store" });
      const data = await res.json();

      if (res.ok) {
        setLabs(data.labs || []);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadLabs();
  }, []);

  const filteredLabs = useMemo(() => {
    return labs.filter((lab) => {
      const profile = lab.labProfile;

      const text = `
        ${lab.name}
        ${lab.company || ""}
        ${lab.city || ""}
        ${lab.country || ""}
        ${profile?.labScope || ""}
        ${profile?.testingCategories || ""}
      `.toLowerCase();

      return text.includes(search.toLowerCase());
    });
  }, [labs, search]);

  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-purple-100 bg-gradient-to-r from-[#2b064f] via-[#51245f] to-[#7b3f75] p-8 text-white shadow-2xl">
        <p className="text-sm font-semibold text-purple-100">
          Globalink Verified Labs
        </p>

        <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">
          Find Verified Labs
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-purple-100">
          Discover admin-verified labs with NABL, BIS approval and testing
          capability details.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <TrustBox title="NABL Labs" value="Verified testing support" />
          <TrustBox title="BIS Approved" value="Approval document checked" />
          <TrustBox title="Direct Contact" value="Connect with lab directly" />
        </div>
      </section>

      <section className="rounded-[28px] border border-purple-100 bg-white/90 p-5 shadow-xl">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search lab, city, scope or testing category..."
          className="inputBox"
        />
      </section>

      {loading ? (
        <div className="rounded-[28px] bg-white p-10 text-center text-sm font-bold text-slate-500 shadow-xl">
          Loading verified labs...
        </div>
      ) : filteredLabs.length === 0 ? (
        <div className="rounded-[28px] border border-dashed border-purple-200 bg-white p-10 text-center shadow-lg">
          <h3 className="text-lg font-extrabold text-slate-950">
            No verified labs found
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Register lab account and approve from admin panel.
          </p>
        </div>
      ) : (
        <section className="grid gap-6 xl:grid-cols-2">
          {filteredLabs.map((lab) => {
            const profile = lab.labProfile;

            const location =
              [lab.city, lab.country].filter(Boolean).join(", ") ||
              "Location not added";

            return (
              <div
                key={lab.id}
                className="overflow-hidden rounded-[32px] border border-purple-100 bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="h-2 bg-gradient-to-r from-[#2b064f] via-[#7b3f75] to-[#d9a7c7]" />

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#2b064f] to-[#7b3f75] text-2xl font-extrabold text-white shadow-lg">
                        {lab.name.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <h2 className="text-xl font-extrabold text-slate-950">
                          {lab.name}
                        </h2>

                        <p className="mt-1 text-sm font-bold text-purple-700">
                          {lab.company || "Verified Testing Lab"}
                        </p>

                        <p className="mt-1 text-xs font-medium text-slate-500">
                          {location}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-amber-50 px-3 py-2 text-sm font-extrabold text-amber-700">
                      ⭐ 4.7
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {lab.gstNumber && <Badge text="GST Verified" />}
                    {profile?.nablFile && <Badge text="NABL Approved" />}
                    {profile?.bisApprovalFile && <Badge text="BIS Approved" />}
                    <Badge text="Admin Verified" />
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <Info
                      label="Lab Scope"
                      value={profile?.labScope || "Testing support available"}
                    />
                    <Info
                      label="Testing Categories"
                      value={
                        profile?.testingCategories ||
                        "Contact lab for categories"
                      }
                    />
                    <Info
                      label="Contact Person"
                      value={profile?.contactPerson || "Not added"}
                    />
                    <Info label="Location" value={location} />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {lab.whatsapp && (
                      <a
                        href={`https://wa.me/${lab.whatsapp}`}
                        target="_blank"
                        className="rounded-2xl bg-gradient-to-r from-[#2b064f] to-[#7b3f75] px-5 py-3 text-sm font-bold text-white shadow-lg"
                      >
                        WhatsApp
                      </a>
                    )}

                    {lab.phone && (
                      <a
                        href={`tel:${lab.phone}`}
                        className="rounded-2xl border border-purple-200 bg-white px-5 py-3 text-sm font-bold text-purple-900"
                      >
                        Call Lab
                      </a>
                    )}

                    <a
                      href={`mailto:${lab.email}`}
                      className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700"
                    >
                      Email
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}

function TrustBox({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
      <p className="text-sm font-extrabold text-white">{title}</p>
      <p className="mt-1 text-xs text-purple-100">{value}</p>
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700">
      ✓ {text}
    </span>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <p className="text-[11px] font-extrabold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-extrabold text-slate-950">{value}</p>
    </div>
  );
}