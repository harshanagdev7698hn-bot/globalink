import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";

const consultants = [
  {
    id: "rk-compliance",
    name: "RK Compliance Solutions",
    role: "BIS & Product Certification Expert",
    location: "Ahmedabad, India",
    experience: "8+ Years",
    rating: "4.9",
    response: "< 2 hrs",
    projects: "240+",
    trust: "96%",
    initials: "RK",
    services: ["BIS", "ISI", "CRS", "QCO"],
  },
  {
    id: "global-regulatory",
    name: "Global Regulatory Experts",
    role: "CDSCO & Medical Device Consultant",
    location: "Delhi, India",
    experience: "12+ Years",
    rating: "4.8",
    response: "< 4 hrs",
    projects: "310+",
    trust: "94%",
    initials: "GR",
    services: ["CDSCO", "Medical Devices", "Import License"],
  },
  {
    id: "epr-green",
    name: "EPR Green Consultants",
    role: "EPR & Environmental Compliance Expert",
    location: "Mumbai, India",
    experience: "6+ Years",
    rating: "4.7",
    response: "< 3 hrs",
    projects: "180+",
    trust: "91%",
    initials: "EG",
    services: ["EPR", "Plastic", "Battery", "E-Waste"],
  },
  {
    id: "iso-tech",
    name: "ISO Tech Advisors",
    role: "ISO & Factory Compliance Consultant",
    location: "Pune, India",
    experience: "10+ Years",
    rating: "4.8",
    response: "< 5 hrs",
    projects: "220+",
    trust: "93%",
    initials: "IT",
    services: ["ISO 9001", "Audit", "Documentation"],
  },
];

const categories = [
  "All",
  "BIS",
  "CDSCO",
  "EPR",
  "ISO",
  "WPC",
  "Legal Metrology",
];

export default function ConsultantsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <PublicNavbar />

      <div className="mx-auto max-w-7xl px-5 py-10">
        <section className="overflow-hidden rounded-[40px] bg-[#000F22] text-white shadow-2xl">
          <div className="grid gap-10 p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-14">
            <div>
              <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#C0E6FD]">
                Verified Consultant Marketplace
              </p>

              <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                Find trusted compliance experts for your business
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#DCEBFA]">
                Compare verified consultants for BIS, ISO, CDSCO, EPR, WPC and
                industrial approvals before you connect.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <TrustPill text="GST Verified" />
                <TrustPill text="Admin Approved" />
                <TrustPill text="Ratings Enabled" />
                <TrustPill text="Business Checked" />
              </div>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="rounded-[28px] bg-white p-5 text-[#1F2937]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#5B86B6]">
                      Marketplace Trust
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-[#000F22]">
                      Consultant Verification
                    </h2>
                  </div>

                  <span className="rounded-full bg-[#DCFCE7] px-3 py-2 text-xs font-black text-[#166534]">
                    LIVE
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <HeroStat label="Experts" value="500+" />
                  <HeroStat label="Avg Rating" value="4.8" />
                  <HeroStat label="Trust" value="96%" />
                </div>

                <div className="mt-5 space-y-3">
                  <CheckRow text="Business profile verified" />
                  <CheckRow text="Documents reviewed by admin" />
                  <CheckRow text="Service scope mapped clearly" />
                  <CheckRow text="Buyer inquiry flow enabled" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[30px] border border-[#D6E2F0] bg-white p-6 shadow-sm">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.6fr]">
            <input
              placeholder="Search consultant, service or location"
              className="rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 text-sm font-bold outline-none focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
            />

            <select className="rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 text-sm font-bold text-[#1B3554] outline-none">
              <option>All Services</option>
              <option>BIS</option>
              <option>CDSCO</option>
              <option>EPR</option>
              <option>ISO</option>
            </select>

            <select className="rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 text-sm font-bold text-[#1B3554] outline-none">
              <option>All Locations</option>
              <option>Ahmedabad</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Pune</option>
            </select>

            <button className="rounded-2xl bg-[#1B3554] px-5 py-4 text-sm font-black text-white hover:bg-[#000F22]">
              Search
            </button>
          </div>

          <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
            {categories.map((item) => (
              <button
                key={item}
                className={`shrink-0 rounded-full px-5 py-3 text-xs font-black ${
                  item === "All"
                    ? "bg-[#1B3554] text-white"
                    : "bg-[#EEF7FF] text-[#1B3554]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="space-y-6">
            <div className="rounded-[30px] border border-[#D6E2F0] bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
                Trust Filters
              </p>

              <div className="mt-6 space-y-3">
                <FilterItem text="Verified only" />
                <FilterItem text="GST checked" />
                <FilterItem text="4.5+ rating" />
                <FilterItem text="Fast response" />
                <FilterItem text="Admin reviewed" />
              </div>
            </div>

            <div className="rounded-[30px] bg-[#1B3554] p-6 text-white shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C0E6FD]">
                Need help?
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Let Globalink suggest the right expert
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#DCEBFA]">
                Share your product or certification requirement and get matched
                with suitable verified consultants.
              </p>

              <Link
                href="/join"
                className="mt-6 inline-flex rounded-2xl bg-white px-5 py-4 text-sm font-black text-[#000F22]"
              >
                Request Match
              </Link>
            </div>
          </aside>

          <div className="grid gap-6">
            {consultants.map((item) => (
              <article
                key={item.id}
                className="rounded-[34px] border border-[#D6E2F0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid gap-6 xl:grid-cols-[1fr_260px]">
                  <div>
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[26px] bg-[#EEF7FF] text-2xl font-black text-[#1B3554]">
                        {item.initials}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h2 className="text-2xl font-black text-[#000F22]">
                            {item.name}
                          </h2>

                          <span className="rounded-full bg-[#DCFCE7] px-3 py-1.5 text-xs font-black text-[#166534]">
                            VERIFIED
                          </span>
                        </div>

                        <p className="mt-2 text-sm font-black text-[#5B86B6]">
                          {item.role}
                        </p>

                        <p className="mt-3 text-sm font-bold text-[#6B7280]">
                          {item.location}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.services.map((service) => (
                            <span
                              key={service}
                              className="rounded-full bg-[#F3F8FD] px-3 py-2 text-xs font-black text-[#1B3554]"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-4">
                      <Info label="Rating" value={`★ ${item.rating}`} />
                      <Info label="Experience" value={item.experience} />
                      <Info label="Projects" value={item.projects} />
                      <Info label="Response" value={item.response} />
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-[#D6E2F0] bg-[#F8FAFC] p-5">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#5B86B6]">
                      Trust Score
                    </p>

                    <p className="mt-3 text-5xl font-black text-[#000F22]">
                      {item.trust}
                    </p>

                    <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                      Based on verification, profile quality and marketplace
                      readiness.
                    </p>

                    <div className="mt-6 grid gap-3">
                      <Link
                        href={`/consultants/${item.id}`}
                        className="rounded-2xl bg-[#1B3554] px-5 py-4 text-center text-sm font-black text-white hover:bg-[#000F22]"
                      >
                        View Profile
                      </Link>

                      <Link
                        href="/join"
                        className="rounded-2xl border border-[#D6E2F0] bg-white px-5 py-4 text-center text-sm font-black text-[#1B3554] hover:bg-[#EEF7FF]"
                      >
                        Send Inquiry
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <PublicFooter />
    </main>
  );
}

function TrustPill({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black text-[#C0E6FD]">
      {text}
    </span>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#F8FAFC] p-4">
      <p className="text-2xl font-black text-[#000F22]">{value}</p>
      <p className="mt-1 text-xs font-bold text-[#6B7280]">{label}</p>
    </div>
  );
}

function CheckRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#F8FAFC] p-4">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DCFCE7] text-sm font-black text-[#166534]">
        ✓
      </span>
      <p className="text-sm font-black text-[#000F22]">{text}</p>
    </div>
  );
}

function FilterItem({ text }: { text: string }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#D6E2F0] bg-[#F8FAFC] p-4 text-sm font-black text-[#000F22]">
      <input type="checkbox" className="h-4 w-4 accent-[#1B3554]" />
      {text}
    </label>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#F8FAFC] p-4">
      <p className="text-xs font-bold text-[#6B7280]">{label}</p>
      <p className="mt-1 text-sm font-black text-[#000F22]">{value}</p>
    </div>
  );
}