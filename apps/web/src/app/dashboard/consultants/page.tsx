"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type ConsultantItem = {
  id: string;
  name: string;
  email: string;
  city?: string | null;
  country?: string | null;
  company?: string | null;
  phone?: string | null;
  whatsapp?: string | null;
  gstNumber?: string | null;
  status: string;
  consultantProfile?: {
    services?: string | null;
    experience?: string | null;
    pricing?: string | null;
    msmeNumber?: string | null;
    shortBio?: string | null;
  } | null;
};

export default function ConsultantsPage() {
  const [consultants, setConsultants] = useState<ConsultantItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [service, setService] = useState("All");

  async function loadConsultants() {
    try {
      const res = await fetch("/api/consultants", { cache: "no-store" });
      const data = await res.json();

      if (res.ok) {
        setConsultants(data.consultants || []);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadConsultants();
  }, []);

  const filteredConsultants = useMemo(() => {
    return consultants.filter((consultant) => {
      const profile = consultant.consultantProfile;

      const searchText = `
        ${consultant.name}
        ${consultant.company || ""}
        ${consultant.city || ""}
        ${consultant.country || ""}
        ${profile?.services || ""}
      `.toLowerCase();

      const matchesSearch = searchText.includes(search.toLowerCase());

      const matchesService =
        service === "All" ||
        (profile?.services || "").toLowerCase().includes(service.toLowerCase());

      return matchesSearch && matchesService;
    });
  }, [consultants, search, service]);

  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-purple-100 bg-gradient-to-r from-[#2b064f] via-[#51245f] to-[#7b3f75] p-8 text-white shadow-2xl">
        <p className="text-sm font-semibold text-purple-100">
          Globalink Trusted Discovery
        </p>

        <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">
          Find Verified Consultants
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-purple-100">
          Only admin-verified consultants are visible here. Compare trusted BIS,
          ISO, FDA and FSSAI consultants before you connect.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <TrustBox title="Verified Experts" value="Admin approved profiles" />
          <TrustBox title="GST Checked" value="Business identity verified" />
          <TrustBox title="Direct Contact" value="No confusion, no fraud" />
        </div>
      </section>

      <section className="rounded-[28px] border border-purple-100 bg-white/90 p-5 shadow-xl">
        <div className="grid gap-4 md:grid-cols-[1fr_220px]">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search consultant, service or location..."
            className="inputBox"
          />

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="inputBox"
          >
            <option>All</option>
            <option>BIS</option>
            <option>ISO</option>
            <option>FDA</option>
            <option>FSSAI</option>
            <option>ISI</option>
          </select>
        </div>
      </section>

      {loading ? (
        <div className="rounded-[28px] bg-white p-10 text-center text-sm font-bold text-slate-500 shadow-xl">
          Loading verified consultants...
        </div>
      ) : filteredConsultants.length === 0 ? (
        <div className="rounded-[28px] border border-dashed border-purple-200 bg-white p-10 text-center shadow-lg">
          <h3 className="text-lg font-extrabold text-slate-950">
            No verified consultants found
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Approve consultant from admin panel or try another search.
          </p>
        </div>
      ) : (
        <section className="grid gap-6 xl:grid-cols-2">
          {filteredConsultants.map((consultant) => {
            const profile = consultant.consultantProfile;

            const location =
              [consultant.city, consultant.country].filter(Boolean).join(", ") ||
              "Location not added";

            const services =
              profile?.services || "BIS / ISO / Compliance Support";
            const experience =
              profile?.experience || "Experienced Consultant";
            const pricing = profile?.pricing || "Contact for pricing";
            const bio =
              profile?.shortBio ||
              "This consultant is verified by Globalink and available for professional certification and compliance support.";

            return (
              <div
                key={consultant.id}
                className="group overflow-hidden rounded-[32px] border border-purple-100 bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="h-2 bg-gradient-to-r from-[#2b064f] via-[#7b3f75] to-[#d9a7c7]" />

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[#2b064f] to-[#7b3f75] text-2xl font-extrabold text-white shadow-lg">
                        {consultant.name.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <h2 className="text-xl font-extrabold text-slate-950">
                          {consultant.name}
                        </h2>

                        <p className="mt-1 text-sm font-bold text-purple-700">
                          {services}
                        </p>

                        <p className="mt-1 text-xs font-medium text-slate-500">
                          {consultant.company || "Independent Consultant"}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-amber-50 px-3 py-2 text-sm font-extrabold text-amber-700">
                      ⭐ 4.8
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {consultant.gstNumber && <Badge text="GST Verified" />}
                    {profile?.msmeNumber && <Badge text="MSME Verified" />}
                    <Badge text="Admin Verified" />
                    <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-extrabold text-purple-700">
                      Trusted Expert
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <Info label="Experience" value={experience} />
                    <Info label="Starting Price" value={pricing} />
                    <Info label="Location" value={location} />
                  </div>

                  <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
                      About
                    </p>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                      {bio}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/dashboard/consultants/${consultant.id}`}
                      className="rounded-2xl bg-gradient-to-r from-[#2b064f] to-[#7b3f75] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02]"
                    >
                      View Profile
                    </Link>

                    {consultant.whatsapp && (
                      <a
                        href={`https://wa.me/${consultant.whatsapp}`}
                        target="_blank"
                        className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-100"
                      >
                        WhatsApp
                      </a>
                    )}

                    {consultant.phone && (
                      <a
                        href={`tel:${consultant.phone}`}
                        className="rounded-2xl border border-purple-200 bg-white px-5 py-3 text-sm font-bold text-purple-900 transition hover:bg-purple-50"
                      >
                        Call
                      </a>
                    )}

                    <a
                      href={`mailto:${consultant.email}`}
                      className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
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