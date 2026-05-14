import Link from "next/link";

const labs = [
  {
    name: "National Testing Labs",
    type: "NABL Accredited Lab",
    location: "Ahmedabad, India",
    scope: "Electrical & Electronics",
    rating: "4.8",
    reports: "1,200+",
    badges: ["NABL", "BIS Testing", "Calibration"],
  },
  {
    name: "Precision Calibration Center",
    type: "Calibration & Testing Lab",
    location: "Pune, India",
    scope: "Industrial Equipment",
    rating: "4.7",
    reports: "850+",
    badges: ["Calibration", "ISO", "Industrial"],
  },
  {
    name: "Global Compliance Labs",
    type: "Product Testing Partner",
    location: "Delhi, India",
    scope: "Consumer Products",
    rating: "4.9",
    reports: "2,000+",
    badges: ["Product Testing", "BIS", "Safety"],
  },
];

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <section className="rounded-[34px] bg-[#000F22] px-8 py-14 text-white shadow-xl md:px-14">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C0E6FD]">
            Verified Lab Network
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Find trusted labs for testing, calibration and certification support
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#DCEBFA]">
            Connect with verified NABL, BIS and testing labs for product
            compliance, reports and industrial approvals.
          </p>
        </section>

        <section className="mt-8 rounded-[28px] border border-[#D6E2F0] bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-4">
            <input
              placeholder="Search lab or scope"
              className="rounded-2xl border border-[#D6E2F0] px-4 py-4 outline-none focus:border-[#5B86B6]"
            />

            <select className="rounded-2xl border border-[#D6E2F0] px-4 py-4 font-bold outline-none">
              <option>All Lab Types</option>
              <option>NABL</option>
              <option>Calibration</option>
              <option>BIS Testing</option>
            </select>

            <select className="rounded-2xl border border-[#D6E2F0] px-4 py-4 font-bold outline-none">
              <option>All Locations</option>
              <option>Ahmedabad</option>
              <option>Delhi</option>
              <option>Pune</option>
            </select>

            <button className="rounded-2xl bg-[#1B3554] px-5 py-4 text-sm font-extrabold text-white hover:bg-[#000F22]">
              Search Labs
            </button>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {labs.map((item) => (
            <article
              key={item.name}
              className="rounded-[30px] border border-[#D6E2F0] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF7FF] text-xl font-black text-[#1B3554]">
                  {item.name.charAt(0)}
                </div>

                <span className="rounded-full bg-[#DCFCE7] px-4 py-2 text-xs font-extrabold text-[#166534]">
                  VERIFIED
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-black text-[#000F22]">
                {item.name}
              </h2>

              <p className="mt-2 text-sm font-bold text-[#5B86B6]">
                {item.type}
              </p>

              <p className="mt-4 text-sm leading-7 text-[#6B7280]">
                {item.location}
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <Info label="Rating" value={`★ ${item.rating}`} />
                <Info label="Reports" value={item.reports} />
                <Info label="Scope" value={item.scope} />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-[#F3F8FD] px-3 py-2 text-xs font-extrabold text-[#1B3554]"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <Link
                  href="/join"
                  className="flex-1 rounded-2xl bg-[#1B3554] px-5 py-4 text-center text-sm font-extrabold text-white hover:bg-[#000F22]"
                >
                  Send Inquiry
                </Link>

                <button className="rounded-2xl border border-[#D6E2F0] px-5 py-4 text-sm font-extrabold text-[#1B3554] hover:bg-[#EEF7FF]">
                  View
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#F8FAFC] p-3">
      <p className="text-xs font-bold text-[#6B7280]">{label}</p>
      <p className="mt-1 text-sm font-black text-[#000F22]">{value}</p>
    </div>
  );
}