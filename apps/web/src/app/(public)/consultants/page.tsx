import Link from "next/link";

const consultants = [
  {
    name: "RK Compliance Solutions",
    role: "BIS & Product Certification Expert",
    location: "Ahmedabad, India",
    experience: "8+ Years",
    rating: "4.9",
    projects: "240+",
    services: ["BIS", "ISI", "CRS", "QCO"],
  },
  {
    name: "Global Regulatory Experts",
    role: "CDSCO & Medical Device Consultant",
    location: "Delhi, India",
    experience: "12+ Years",
    rating: "4.8",
    projects: "310+",
    services: ["CDSCO", "Medical Devices", "Import License"],
  },
  {
    name: "EPR Green Consultants",
    role: "EPR & Environmental Compliance Expert",
    location: "Mumbai, India",
    experience: "6+ Years",
    rating: "4.7",
    projects: "180+",
    services: ["EPR", "Plastic", "Battery", "E-Waste"],
  },
];

export default function ConsultantsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <section className="rounded-[34px] bg-[#000F22] px-8 py-14 text-white shadow-xl md:px-14">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C0E6FD]">
            Verified Consultant Marketplace
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Find trusted compliance experts for your business
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#DCEBFA]">
            Compare verified consultants for BIS, ISO, CDSCO, EPR, WPC and
            industrial approvals before you connect.
          </p>
        </section>

        <section className="mt-8 rounded-[28px] border border-[#D6E2F0] bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-4">
            <input
              placeholder="Search consultant or service"
              className="rounded-2xl border border-[#D6E2F0] px-4 py-4 outline-none focus:border-[#5B86B6]"
            />

            <select className="rounded-2xl border border-[#D6E2F0] px-4 py-4 font-bold outline-none">
              <option>All Services</option>
              <option>BIS</option>
              <option>CDSCO</option>
              <option>EPR</option>
              <option>ISO</option>
            </select>

            <select className="rounded-2xl border border-[#D6E2F0] px-4 py-4 font-bold outline-none">
              <option>All Locations</option>
              <option>Ahmedabad</option>
              <option>Delhi</option>
              <option>Mumbai</option>
            </select>

            <button className="rounded-2xl bg-[#1B3554] px-5 py-4 text-sm font-extrabold text-white hover:bg-[#000F22]">
              Search
            </button>
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {consultants.map((item) => (
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
                {item.role}
              </p>

              <p className="mt-4 text-sm leading-7 text-[#6B7280]">
                {item.location}
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <Info label="Rating" value={`★ ${item.rating}`} />
                <Info label="Projects" value={item.projects} />
                <Info label="Exp." value={item.experience} />
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-[#F3F8FD] px-3 py-2 text-xs font-extrabold text-[#1B3554]"
                  >
                    {service}
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