import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";

type Lab = {
  name: string;
  type?: string;
  city?: string;
  approvals?: string[];
};

const labs: Lab[] = [];

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <PublicNavbar />

      <div className="mx-auto max-w-7xl px-5 py-4">
        {/* HERO */}
        <section className="rounded-[28px] bg-[#1B3554] px-6 py-6 text-white shadow-xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C0E6FD]">
            Verified Testing Labs
          </p>

          <h1 className="mt-2 max-w-2xl text-2xl font-black leading-tight md:text-3xl">
            Trusted labs for testing, certification and validation
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-[#DCEBFA]">
            Explore verified laboratories for BIS, CDSCO, EPR, EMC,
            electronics, plastic, toys and industrial compliance.
          </p>
        </section>

        {/* SEARCH */}
        <section className="mt-5 rounded-[22px] border border-[#D6E2F0] bg-white p-4 shadow-sm">
          <div className="grid gap-4 md:grid-cols-4">
            <input
              placeholder="Search labs or category"
              className="rounded-2xl border border-[#D6E2F0] px-4 py-4 outline-none focus:border-[#5B86B6]"
              aria-label="Search laboratories by name or category"
            />

            <select className="rounded-2xl border border-[#D6E2F0] px-4 py-4 font-bold outline-none" aria-label="Filter by lab category">
              <option>All Categories</option>
              <option>Electrical</option>
              <option>Medical</option>
              <option>Plastic</option>
            </select>

            <select className="rounded-2xl border border-[#D6E2F0] px-4 py-4 font-bold outline-none" aria-label="Filter by city">
              <option>All Cities</option>
            </select>

            <button className="rounded-2xl bg-[#1B3554] px-5 py-4 text-sm font-extrabold text-white hover:bg-[#000F22]" aria-label="Search laboratories">
              Search
            </button>
          </div>
        </section>

        {/* LAB CARDS */}
        <section className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {labs.length === 0 ? (
            <div className="col-span-full mx-auto w-full max-w-3xl rounded-[24px] border border-[#D6E2F0] bg-white p-8 text-center shadow-sm">
              <h2 className="text-2xl font-black text-[#000F22]">
                No accredited laboratories available yet.
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#6B7280]">
                Join Globalink and submit your laboratory profile for verification.
              </p>

              <Link
                href="/join"
                className="mt-5 inline-flex rounded-2xl bg-[#1B3554] px-6 py-3 text-sm font-extrabold text-white hover:bg-[#000F22]"
              >
                Join as Laboratory
              </Link>
            </div>
          ) : (
            labs.map((lab) => (
              <article
                key={lab.name}
                className="rounded-[24px] border border-[#D6E2F0] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF7FF] text-xl font-black text-[#1B3554]">
                    {lab.name.charAt(0)}
                  </div>

                  <span className="rounded-full bg-[#DCFCE7] px-4 py-2 text-xs font-extrabold text-[#166534]">
                    VERIFIED
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-black text-[#000F22]">
                  {lab.name}
                </h2>

                {lab.type && (
                  <p className="mt-2 text-sm font-bold text-[#5B86B6]">
                    {lab.type}
                  </p>
                )}

                {lab.city && (
                  <div className="mt-5">
                    <p className="text-xs font-bold text-[#6B7280]">Location</p>
                    <p className="mt-1 text-sm font-black text-[#000F22]">
                      {lab.city}
                    </p>
                  </div>
                )}

                {lab.approvals && lab.approvals.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {lab.approvals.map((approval) => (
                      <span
                        key={approval}
                        className="rounded-full bg-[#F3F8FD] px-3 py-2 text-xs font-extrabold text-[#1B3554]"
                      >
                        {approval}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-5 flex gap-2">
                  <Link
                    href="/join"
                    className="flex-1 rounded-2xl bg-[#1B3554] px-5 py-4 text-center text-sm font-extrabold text-white hover:bg-[#000F22]"
                  >
                    Contact Lab
                  </Link>

                  <button className="rounded-2xl border border-[#D6E2F0] px-5 py-4 text-sm font-extrabold text-[#1B3554] hover:bg-[#EEF7FF]">
                    View
                  </button>
                </div>
              </article>
            ))
          )}
        </section>
      </div>

      <PublicFooter />
    </main>
  );
}