import Link from "next/link";

const consultants: any[] = [];

export default function ConsultantsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* HERO */}
        <section className="rounded-[34px] bg-[#000F22] px-8 py-14 text-white shadow-xl md:px-14">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C0E6FD]">
            Verified Consultant Network
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Find trusted compliance consultants for your business
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#DCEBFA]">
            Connect with verified BIS, CDSCO, ISO, EPR, WPC and regulatory
            consultants through one professional compliance marketplace.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-white px-6 py-4 text-sm font-extrabold text-[#000F22]">
              Explore Experts
            </button>

            <Link
              href="/join"
              className="rounded-2xl border border-white/25 px-6 py-4 text-sm font-extrabold text-white"
            >
              Become Consultant
            </Link>
          </div>
        </section>

        {/* FILTERS */}
        <section className="mt-8 rounded-[30px] border border-[#D6E2F0] bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-4">
            <input
              placeholder="Search consultant"
              className="rounded-2xl border border-[#D6E2F0] px-4 py-4 outline-none focus:border-[#5B86B6]"
            />

            <select className="rounded-2xl border border-[#D6E2F0] px-4 py-4 font-bold outline-none">
              <option>BIS Certification</option>
              <option>ISO</option>
              <option>CDSCO</option>
              <option>EPR</option>
            </select>

            <select className="rounded-2xl border border-[#D6E2F0] px-4 py-4 font-bold outline-none">
              <option>India</option>
              <option>Gujarat</option>
              <option>Delhi</option>
            </select>

            <button className="rounded-2xl bg-[#1B3554] px-5 py-4 text-sm font-extrabold text-white hover:bg-[#000F22]">
              Search Experts
            </button>
          </div>
        </section>

        {/* CONSULTANTS */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {consultants.length === 0 ? (
            <div className="col-span-full rounded-[28px] border border-[#D6E2F0] bg-white p-10 text-center shadow-sm">
              <h2 className="text-2xl font-extrabold text-[#000F22]">
                No verified consultants available yet
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#6B7280]">
                Verified consultant profiles will appear here only after admin
                approval. This helps Globalink maintain a trusted and
                compliance-ready marketplace.
              </p>

              <Link
                href="/join"
                className="mt-6 inline-flex rounded-2xl bg-[#1B3554] px-6 py-4 text-sm font-extrabold text-white hover:bg-[#000F22]"
              >
                Become a Verified Consultant
              </Link>
            </div>
          ) : (
            consultants.map((consultant) => (
              <div
                key={consultant.name}
                className="rounded-[28px] border border-[#D6E2F0] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#5B86B6]">
                      {consultant.category}
                    </p>

                    <h2 className="mt-3 text-3xl font-extrabold text-[#000F22]">
                      {consultant.name}
                    </h2>
                  </div>

                  {consultant.verified && (
                    <div className="rounded-full bg-[#DCFCE7] px-4 py-2 text-xs font-extrabold text-[#166534]">
                      VERIFIED
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="rounded-full bg-[#EEF7FF] px-4 py-2 text-sm font-bold text-[#1B3554]">
                    {consultant.location}
                  </div>

                  <div className="rounded-full bg-[#EEF7FF] px-4 py-2 text-sm font-bold text-[#1B3554]">
                    {consultant.experience}
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-[#6B7280]">
                  {consultant.desc}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="rounded-2xl bg-[#1B3554] px-5 py-4 text-sm font-extrabold text-white hover:bg-[#000F22]">
                    View Profile
                  </button>

                  <button className="rounded-2xl border border-[#D6E2F0] px-5 py-4 text-sm font-extrabold text-[#1B3554] hover:bg-[#EEF7FF]">
                    Send Request
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </main>
  );
}