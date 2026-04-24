import Link from "next/link";
import { notFound } from "next/navigation";

type Consultant = {
  id: string;
  company?: string | null;
  expertise: string;
  country: string;
  city?: string | null;
  services: string;
  experienceYears?: number | null;
  pricing?: string | null;
  responseTime?: string | null;
  phone?: string | null;
  whatsapp?: string | null;
  website?: string | null;
  bio?: string | null;
  gstNumber?: string | null;
  msmeNumber?: string | null;
  verificationStatus?: string | null;
  isVerified?: boolean | null;
  averageRating?: number | null;
  totalReviews?: number | null;
  user?: {
    name?: string | null;
    email?: string | null;
  } | null;
};

async function getConsultant(id: string): Promise<Consultant | null> {
  const res = await fetch(`http://localhost:3000/api/consultants/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.consultant || null;
}

export default async function ConsultantProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const consultant = await getConsultant(params.id);

  if (!consultant) {
    notFound();
  }

  const status = consultant.verificationStatus || "PENDING";
  const rating = consultant.averageRating || 0;
  const reviews = consultant.totalReviews || 0;

  return (
    <div className="min-h-screen bg-[#FBE4D8] px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <Link
          href="/consultants"
          className="inline-flex rounded-xl border border-[#dfb6b2] bg-white px-4 py-2 text-sm font-semibold text-[#190019] shadow-sm"
        >
          ← Back to Consultants
        </Link>

        <section className="overflow-hidden rounded-3xl border border-[#dfb6b2] bg-white shadow-sm">
          <div
            className="px-8 py-10 text-white"
            style={{
              background:
                "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
            }}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#FBE4D8]">
                  Consultant Profile
                </p>

                <h1 className="mt-3 text-4xl font-bold">
                  {consultant.user?.name || consultant.company || "Consultant"}
                </h1>

                <p className="mt-2 text-lg text-[#FBE4D8]">
                  {consultant.expertise}
                </p>

                <p className="mt-2 text-sm text-[#FBE4D8]">
                  {consultant.city ? `${consultant.city}, ` : ""}
                  {consultant.country}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                  ⭐ {rating.toFixed(1)} Rating
                </span>
                <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                  {reviews} Reviews
                </span>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-bold text-yellow-800">
                {status}
              </span>

              {consultant.gstNumber ? (
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                  GST Registered
                </span>
              ) : null}

              {consultant.msmeNumber ? (
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                  MSME Registered
                </span>
              ) : null}

              {consultant.isVerified ? (
                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                  Verified Consultant
                </span>
              ) : null}
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] p-5">
                <p className="text-sm text-[#854F6C]">Experience</p>
                <p className="mt-2 text-2xl font-bold text-[#190019]">
                  {consultant.experienceYears || 0} yrs
                </p>
              </div>

              <div className="rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] p-5">
                <p className="text-sm text-[#854F6C]">Pricing</p>
                <p className="mt-2 text-2xl font-bold text-[#190019]">
                  {consultant.pricing || "Contact"}
                </p>
              </div>

              <div className="rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] p-5">
                <p className="text-sm text-[#854F6C]">Response</p>
                <p className="mt-2 text-lg font-bold text-[#190019]">
                  {consultant.responseTime || "Not added"}
                </p>
              </div>

              <div className="rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] p-5">
                <p className="text-sm text-[#854F6C]">Company</p>
                <p className="mt-2 text-lg font-bold text-[#190019]">
                  {consultant.company || "Independent"}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-[#dfb6b2] bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-[#190019]">Services</h2>
                <p className="mt-3 text-sm leading-7 text-[#522B5B]">
                  {consultant.services}
                </p>
              </div>

              <div className="rounded-2xl border border-[#dfb6b2] bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-[#190019]">About</h2>
                <p className="mt-3 text-sm leading-7 text-[#522B5B]">
                  {consultant.bio || "No bio added yet."}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] p-6">
              <h2 className="text-xl font-bold text-[#190019]">
                Trust & Verification
              </h2>

              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-white p-4">
                  <p className="text-sm text-[#854F6C]">GST Status</p>
                  <p className="mt-1 font-bold text-[#190019]">
                    {consultant.gstNumber ? "Available" : "Not Added"}
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4">
                  <p className="text-sm text-[#854F6C]">MSME Status</p>
                  <p className="mt-1 font-bold text-[#190019]">
                    {consultant.msmeNumber ? "Available" : "Not Added"}
                  </p>
                </div>

                <div className="rounded-xl bg-white p-4">
                  <p className="text-sm text-[#854F6C]">Admin Verification</p>
                  <p className="mt-1 font-bold text-[#190019]">{status}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {consultant.whatsapp ? (
                <a
                  href={`https://wa.me/${consultant.whatsapp}`}
                  target="_blank"
                  className="rounded-xl border border-[#dfb6b2] bg-white px-5 py-3 text-sm font-bold text-[#190019]"
                >
                  WhatsApp
                </a>
              ) : null}

              {consultant.phone ? (
                <a
                  href={`tel:${consultant.phone}`}
                  className="rounded-xl px-5 py-3 text-sm font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
                  }}
                >
                  Call Now
                </a>
              ) : null}

              {consultant.user?.email ? (
                <a
                  href={`mailto:${consultant.user.email}`}
                  className="rounded-xl px-5 py-3 text-sm font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
                  }}
                >
                  Email Consultant
                </a>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}