import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";

const stats = [
  { value: "500+", label: "Verified Experts" },
  { value: "100+", label: "Trusted Labs" },
  { value: "25+", label: "Compliance Categories" },
  { value: "2,000+", label: "Business Users" },
];

const services = [
  "BIS Certification",
  "CDSCO Registration",
  "WPC Approval",
  "TEC / MTCTE",
  "EPR Registration",
  "Legal Metrology",
  "Pollution Control",
  "ISO Certification",
];

const features = [
  {
    title: "Verified Consultants",
    desc: "Find trusted experts for BIS, CDSCO, ISO, EPR and industrial approvals.",
  },
  {
    title: "Trusted Labs",
    desc: "Connect with verified testing and calibration labs.",
  },
  {
    title: "Compliance Marketplace",
    desc: "Explore certified products and compliance services.",
  },
  {
    title: "AI Compliance Assistant",
    desc: "Get AI-powered compliance guidance and recommendations.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <PublicNavbar />

      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* HERO */}
        <section className="overflow-hidden rounded-[40px] bg-[#000F22] text-white shadow-2xl">
          <div className="grid gap-10 p-8 md:grid-cols-[1.05fr_0.95fr] md:p-14">
            <div>
              <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.28em] text-[#C0E6FD]">
                AI-powered compliance marketplace
              </p>

              <h1 className="mt-7 max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Find verified consultants, labs and compliance experts in one trusted platform
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#DCEBFA] md:text-lg">
                Globalink helps manufacturers, exporters and industry owners connect with trusted experts for BIS, CDSCO, WPC, EPR, ISO, testing and industrial approvals.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/consultants"
                  className="rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#000F22]"
                >
                  Find Verified Experts
                </Link>

                <Link
                  href="/join"
                  className="rounded-2xl border border-white/25 px-6 py-4 text-sm font-black text-white hover:bg-white/10"
                >
                  Register Your Business
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <TrustBadge text="GST Verified Experts" />
                <TrustBadge text="NABL Lab Network" />
                <TrustBadge text="Admin Reviewed Profiles" />
              </div>
            </div>

            {/* DASHBOARD VISUAL */}
            <div className="relative">
              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#5B86B6]/30 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#C0E6FD]/20 blur-3xl" />

              <div className="relative rounded-[34px] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
                <div className="rounded-[28px] bg-white p-5 text-[#1F2937]">
                  <div className="flex items-center justify-between border-b border-[#D6E2F0] pb-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#5B86B6]">
                        Globalink Trust Console
                      </p>

                      <h3 className="mt-2 text-xl font-black text-[#000F22]">
                        Compliance Overview
                      </h3>
                    </div>

                    <span className="rounded-full bg-[#DCFCE7] px-3 py-2 text-xs font-black text-[#166534]">
                      LIVE
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <MiniStat label="Experts" value="500+" />
                    <MiniStat label="Labs" value="100+" />
                    <MiniStat label="Requests" value="2k+" />
                  </div>

                  <div className="mt-5 rounded-3xl border border-[#D6E2F0] bg-[#F8FAFC] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-black text-[#000F22]">
                        Verified Consultant Match
                      </p>

                      <span className="rounded-full bg-[#EEF7FF] px-3 py-1 text-xs font-black text-[#1B3554]">
                        AI
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <MatchRow title="BIS Toy Certification" score="96%" />
                      <MatchRow title="NABL Testing Partner" score="91%" />
                      <MatchRow title="EPR Registration Expert" score="88%" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-[#1B3554] p-5 text-white">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C0E6FD]">
                        Verification
                      </p>

                      <p className="mt-3 text-2xl font-black">
                        Admin Approved
                      </p>

                      <p className="mt-2 text-xs leading-5 text-[#DCEBFA]">
                        GST, profile, service scope and trust documents reviewed.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-[#D6E2F0] bg-white p-5">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#5B86B6]">
                        Workflow
                      </p>

                      <p className="mt-3 text-2xl font-black text-[#000F22]">
                        4 Steps
                      </p>

                      <p className="mt-2 text-xs leading-5 text-[#6B7280]">
                        Register → Verify → Match → Connect
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="mt-8 grid gap-5 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[26px] border border-[#D6E2F0] bg-white p-6 shadow-sm"
            >
              <p className="text-4xl font-black text-[#000F22]">
                {item.value}
              </p>

              <p className="mt-2 text-sm font-bold text-[#6B7280]">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        {/* FEATURES */}
        <section className="mt-8 rounded-[34px] border border-[#D6E2F0] bg-white p-8 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#5B86B6]">
            Why Globalink
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-[#000F22]">
            Built for companies who need trust and verified compliance support
          </h2>

          <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#D6E2F0] bg-[#F8FAFC] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1B3554] text-lg font-black text-white">
                  ✓
                </div>

                <h3 className="mt-5 text-xl font-black text-[#000F22]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="mt-8 rounded-[34px] border border-[#D6E2F0] bg-white p-8 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#5B86B6]">
            Compliance Services
          </p>

          <h2 className="mt-4 text-4xl font-black text-[#000F22]">
            Popular categories available on Globalink
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-[#D6E2F0] bg-[#F8FAFC] p-5 text-sm font-black text-[#1B3554]"
              >
                {service}
              </div>
            ))}
          </div>
        </section>
      </div>

      <PublicFooter />
    </main>
  );
}

function TrustBadge({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black text-[#C0E6FD]">
      {text}
    </span>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#F8FAFC] p-4">
      <p className="text-2xl font-black text-[#000F22]">{value}</p>
      <p className="mt-1 text-xs font-bold text-[#6B7280]">{label}</p>
    </div>
  );
}

function MatchRow({ title, score }: { title: string; score: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3">
      <p className="text-sm font-bold text-[#1F2937]">{title}</p>
      <p className="text-sm font-black text-[#16A34A]">{score}</p>
    </div>
  );
}