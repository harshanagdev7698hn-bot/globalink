const labs = [
  {
    name: "National Testing Labs",
    category: "NABL Accredited",
    location: "Ahmedabad, India",
    scope: "Electrical & Electronics",
    verified: true,
  },
  {
    name: "Precision Calibration Center",
    category: "Calibration Lab",
    location: "Pune, India",
    scope: "Industrial Equipment",
    verified: true,
  },
  {
    name: "Global Compliance Labs",
    category: "Product Testing",
    location: "Delhi, India",
    scope: "Consumer Products",
    verified: true,
  },
  {
    name: "Industrial Safety Labs",
    category: "Mechanical Testing",
    location: "Mumbai, India",
    scope: "Steel & Furniture",
    verified: true,
  },
];

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* HERO */}
        <section className="rounded-[34px] bg-[#000F22] px-8 py-14 text-white shadow-xl md:px-14">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C0E6FD]">
            Trusted Testing Ecosystem
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Discover verified NABL and compliance testing labs
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#DCEBFA]">
            Connect with accredited testing, calibration and product compliance
            labs for BIS, ISO, CDSCO and industrial certification workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-white px-6 py-4 text-sm font-extrabold text-[#000F22]">
              Explore Labs
            </button>

            <button className="rounded-2xl border border-white/25 px-6 py-4 text-sm font-extrabold text-white">
              Register Lab
            </button>
          </div>
        </section>

        {/* SEARCH */}
        <section className="mt-8 rounded-[30px] border border-[#D6E2F0] bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-4">
            <input
              placeholder="Search labs"
              className="rounded-2xl border border-[#D6E2F0] px-4 py-4 outline-none focus:border-[#5B86B6]"
            />

            <select className="rounded-2xl border border-[#D6E2F0] px-4 py-4 font-bold outline-none">
              <option>NABL Labs</option>
              <option>Calibration</option>
              <option>Mechanical</option>
              <option>Electronics</option>
            </select>

            <select className="rounded-2xl border border-[#D6E2F0] px-4 py-4 font-bold outline-none">
              <option>India</option>
              <option>Ahmedabad</option>
              <option>Delhi</option>
            </select>

            <button className="rounded-2xl bg-[#1B3554] px-5 py-4 text-sm font-extrabold text-white hover:bg-[#000F22]">
              Search Labs
            </button>
          </div>
        </section>

        {/* LABS */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {labs.map((lab) => (
            <div
              key={lab.name}
              className="rounded-[28px] border border-[#D6E2F0] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#5B86B6]">
                    {lab.category}
                  </p>

                  <h2 className="mt-3 text-3xl font-extrabold text-[#000F22]">
                    {lab.name}
                  </h2>
                </div>

                {lab.verified && (
                  <div className="rounded-full bg-[#DCFCE7] px-4 py-2 text-xs font-extrabold text-[#166534]">
                    VERIFIED
                  </div>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-full bg-[#EEF7FF] px-4 py-2 text-sm font-bold text-[#1B3554]">
                  {lab.location}
                </div>

                <div className="rounded-full bg-[#EEF7FF] px-4 py-2 text-sm font-bold text-[#1B3554]">
                  {lab.scope}
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-[#6B7280]">
                Trusted lab partner for testing, calibration and certification
                support with enterprise-grade compliance workflows.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-[#1B3554] px-5 py-4 text-sm font-extrabold text-white hover:bg-[#000F22]">
                  View Lab
                </button>

                <button className="rounded-2xl border border-[#D6E2F0] px-5 py-4 text-sm font-extrabold text-[#1B3554] hover:bg-[#EEF7FF]">
                  Send Inquiry
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}