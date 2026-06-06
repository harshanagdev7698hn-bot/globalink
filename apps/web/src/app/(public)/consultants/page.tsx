import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";

const consultants: any[] = [];

const categories = ["All", "BIS", "CDSCO", "EPR", "ISO", "WPC", "Legal Metrology"];

export default function ConsultantsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <PublicNavbar />

      <div className="mx-auto max-w-7xl px-5 py-4">
        <section className="rounded-3xl bg-[#000F22] px-6 py-6 text-white shadow-lg">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#C0E6FD]">
                Verified Consultant Marketplace
              </p>

              <h1 className="mt-2 max-w-2xl text-2xl font-black leading-tight md:text-3xl">
                Find trusted compliance experts
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#DCEBFA]">
                Compare verified consultants for BIS, ISO, CDSCO, EPR, WPC and
                industrial approvals before you connect.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <MiniStat value="Verified" label="Experts" />
              <MiniStat value="Verified" label="Profiles" />
              <MiniStat value="Secure" label="Network" />
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-[#D6E2F0] bg-white p-4 shadow-sm">
          <div className="grid gap-3 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.5fr]">
            <input
              placeholder="Search consultant, service or location"
              className="rounded-xl border border-[#D6E2F0] bg-white px-4 py-3 text-sm font-bold outline-none"
            />

            <select className="rounded-xl border border-[#D6E2F0] bg-white px-4 py-3 text-sm font-bold text-[#1B3554] outline-none">
              <option>All Services</option>
              <option>BIS</option>
              <option>CDSCO</option>
              <option>EPR</option>
              <option>ISO</option>
            </select>

            <select className="rounded-xl border border-[#D6E2F0] bg-white px-4 py-3 text-sm font-bold text-[#1B3554] outline-none">
              <option>All Locations</option>
              <option>Ahmedabad</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Pune</option>
            </select>

            <button className="rounded-xl bg-[#1B3554] px-5 py-3 text-sm font-black text-white">
              Search
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                className={`rounded-full px-4 py-2 text-[11px] font-black ${
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

        <section className="mt-4 grid gap-3 md:grid-cols-2">
          {consultants.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-[#D6E2F0] bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#EEF7FF] text-lg font-black text-[#1B3554]">
                  {item.initials}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-black text-[#000F22]">
                      {item.name}
                    </h2>

                    <span className="rounded-full bg-[#DCFCE7] px-2.5 py-1 text-[10px] font-black text-[#166534]">
                      VERIFIED
                    </span>
                  </div>

                  <p className="mt-1 text-sm font-black text-[#5B86B6]">
                    {item.role}
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#6B7280]">
                    {item.location}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-[#F3F8FD] px-3 py-1.5 text-[11px] font-black text-[#1B3554]"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-4 gap-2">
                <Info label="Rating" value={`★ ${item.rating}`} />
                <Info label="Exp." value={item.experience} />
                <Info label="Projects" value={item.projects} />
                <Info label="Trust" value={item.trust} />
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <Link
                  href={`/consultants/${item.id}`}
                  className="rounded-xl bg-[#1B3554] px-4 py-3 text-center text-sm font-black text-white"
                >
                  View Profile
                </Link>

                <Link
                  href="/join"
                  className="rounded-xl border border-[#D6E2F0] bg-white px-4 py-3 text-center text-sm font-black text-[#1B3554]"
                >
                  Send Inquiry
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-4 rounded-2xl bg-[#1B3554] p-4 text-white shadow-lg">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C0E6FD]">
                Need help?
              </p>
              <h3 className="mt-2 text-xl font-black">
                Let Globalink suggest the right expert
              </h3>
              <p className="mt-2 text-sm text-[#DCEBFA]">
                Share your product or certification requirement and get matched
                with suitable verified consultants.
              </p>
            </div>

            <Link
              href="/join"
              className="rounded-xl bg-white px-6 py-3 text-center text-sm font-black text-[#000F22]"
            >
              Request Match
            </Link>
          </div>
        </section>
      </div>

      <PublicFooter />
    </main>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4">
      <p className="text-2xl font-black text-white">{value}</p>
      <p className="mt-1 text-xs font-bold text-[#C0E6FD]">{label}</p>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#F8FAFC] p-3">
      <p className="text-[10px] font-bold text-[#6B7280]">{label}</p>
      <p className="mt-1 text-xs font-black text-[#000F22]">{value}</p>
    </div>
  );
}