"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type ConsultantDetail = {
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

export default function ConsultantProfilePage() {
  const params = useParams();
  const id = params.id as string;

  const [consultant, setConsultant] = useState<ConsultantDetail | null>(null);
  const [loading, setLoading] = useState(true);

  async function loadConsultant() {
    try {
      const res = await fetch(`/api/consultants/${id}`, {
        cache: "no-store",
      });

      const data = await res.json();

      if (res.ok) {
        setConsultant(data.consultant);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) {
      loadConsultant();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center text-sm font-bold text-slate-500 shadow-xl">
        Loading consultant profile...
      </div>
    );
  }

  if (!consultant) {
    return (
      <div className="rounded-3xl border border-dashed border-purple-200 bg-white p-10 text-center shadow-xl">
        <h1 className="text-xl font-extrabold text-slate-950">
          Consultant not found
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          This consultant may not be verified yet.
        </p>
      </div>
    );
  }

  const profile = consultant.consultantProfile;

  const services = profile?.services || "BIS / ISO / Compliance Support";
  const experience = profile?.experience || "Experienced Consultant";
  const pricing = profile?.pricing || "Contact for pricing";
  const bio =
    profile?.shortBio ||
    "This consultant is verified by Globalink and available for professional certification and compliance support.";

  const location =
    [consultant.city, consultant.country].filter(Boolean).join(", ") ||
    "Location not added";

  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-purple-100 bg-gradient-to-r from-[#2b064f] via-[#51245f] to-[#7b3f75] p-8 text-white shadow-2xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 text-3xl font-extrabold text-white shadow-lg">
              {consultant.name.charAt(0).toUpperCase()}
            </div>

            <h1 className="mt-5 text-3xl font-extrabold">
              {consultant.name}
            </h1>

            <p className="mt-2 text-sm font-semibold text-purple-100">
              {services}
            </p>

            <p className="mt-2 text-sm text-purple-100">
              {consultant.company || "Independent Consultant"} • {location}
            </p>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
            <p className="text-sm text-purple-100">Trust Rating</p>
            <p className="mt-1 text-3xl font-extrabold">⭐ 4.8</p>
            <p className="mt-1 text-xs text-purple-100">
              Admin verified consultant
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-[30px] border border-purple-100 bg-white p-6 shadow-xl lg:col-span-2">
          <h2 className="text-xl font-extrabold text-slate-950">
            Consultant Details
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Info label="Services" value={services} />
            <Info label="Experience" value={experience} />
            <Info label="Pricing" value={pricing} />
            <Info label="Location" value={location} />
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-extrabold text-slate-900">
              About Consultant
            </h3>

            <p className="mt-3 rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-600">
              {bio}
            </p>
          </div>
        </div>

        <div className="rounded-[30px] border border-purple-100 bg-white p-6 shadow-xl">
          <h2 className="text-xl font-extrabold text-slate-950">
            Trust Verification
          </h2>

          <div className="mt-5 space-y-3">
            {consultant.gstNumber && (
              <Badge title="GST Verified" value={consultant.gstNumber} />
            )}

            {profile?.msmeNumber && (
              <Badge title="MSME Verified" value={profile.msmeNumber} />
            )}

            <Badge title="Admin Verified" value="Approved by Globalink" />
          </div>

          <div className="mt-6 space-y-3">
            {consultant.whatsapp && (
              <a
                href={`https://wa.me/${consultant.whatsapp}`}
                target="_blank"
                className="block rounded-2xl bg-gradient-to-r from-[#2b064f] to-[#7b3f75] px-5 py-3 text-center text-sm font-bold text-white shadow-lg transition hover:scale-[1.02]"
              >
                WhatsApp Consultant
              </a>
            )}

            {consultant.phone && (
              <a
                href={`tel:${consultant.phone}`}
                className="block rounded-2xl border border-purple-200 bg-white px-5 py-3 text-center text-sm font-bold text-purple-900 transition hover:bg-purple-50"
              >
                Call Consultant
              </a>
            )}

            <a
              href={`mailto:${consultant.email}`}
              className="block rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Email Consultant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-xs font-extrabold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-slate-950">{value}</p>
    </div>
  );
}

function Badge({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-emerald-50 p-4">
      <p className="text-sm font-extrabold text-emerald-700">✓ {title}</p>
      <p className="mt-1 text-xs font-semibold text-emerald-600">{value}</p>
    </div>
  );
}