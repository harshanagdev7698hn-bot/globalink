import Link from "next/link";
import {
  ShieldCheck,
  Stethoscope,
  Radio,
  Recycle,
  Factory,
  Scale,
  Globe2,
  FlaskConical,
  FileCheck2,
  Sparkles,
  LockKeyhole,
  ArrowRight,
} from "lucide-react";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";

const stats = [
  { value: "500+", label: "Verified Experts" },
  { value: "100+", label: "Trusted Labs" },
  { value: "25+", label: "Compliance Categories" },
  { value: "2,000+", label: "Business Users" },
];

const services = [
  {
    icon: ShieldCheck,
    title: "BIS Certification",
    desc: "ISI, CRS and FMCS certification support.",
    tag: "ISI / CRS / FMCS",
  },
  {
    icon: Stethoscope,
    title: "CDSCO Registration",
    desc: "Medical device licensing and regulatory approvals.",
    tag: "Medical Devices",
  },
  {
    icon: Radio,
    title: "WPC / TEC Approval",
    desc: "Wireless, telecom and MTCTE compliance.",
    tag: "Telecom",
  },
  {
    icon: Recycle,
    title: "EPR Registration",
    desc: "Battery, plastic, e-waste and tyre EPR support.",
    tag: "Environment",
  },
  {
    icon: Scale,
    title: "Legal Metrology",
    desc: "LMPC and packaged commodity compliance.",
    tag: "Legal",
  },
  {
    icon: Factory,
    title: "Factory Approvals",
    desc: "Factory license, CTE, CTO and industrial approvals.",
    tag: "Industrial",
  },
  {
    icon: Globe2,
    title: "Import Export Compliance",
    desc: "IEC, customs and import-export documentation.",
    tag: "Global Trade",
  },
  {
    icon: FileCheck2,
    title: "ISO Certifications",
    desc: "ISO 9001, 14001, 22000, 27001 and audit support.",
    tag: "Standards",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <PublicNavbar />

      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[44px] bg-[#000F22] text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2F80ED55,transparent_38%),radial-gradient(circle_at_bottom_left,#C0E6FD30,transparent_35%)]" />

          <div className="relative grid gap-12 p-8 md:p-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.28em] text-[#C0E6FD]">
                <Sparkles size={14} />
                AI-powered compliance marketplace
              </p>

              <h1 className="mt-7 max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Find verified consultants, labs and compliance experts in one trusted platform
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#DCEBFA] md:text-lg">
                Globalink connects manufacturers, exporters and industries with verified experts for BIS, CDSCO, WPC, EPR, ISO, testing and industrial approvals.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/consultants"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#000F22]"
                >
                  Find Verified Experts <ArrowRight size={16} />
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

            {/* PREMIUM VISUAL */}
            <div className="relative">
              <div className="absolute -right-8 -top-8 h-52 w-52 rounded-full bg-[#5B86B6]/40 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-[#C0E6FD]/25 blur-3xl" />

              <div className="relative rounded-[36px] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
                <div className="rounded-[30px] bg-white p-5 text-[#1F2937]">
                  <div className="flex items-center justify-between border-b border-[#D6E2F0] pb-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#5B86B6]">
                        Globalink Trust Console
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-[#000F22]">
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
                    <VisualCard
                      dark
                      icon={<LockKeyhole size={22} />}
                      title="Admin Approved"
                      desc="GST, profile, service scope and trust documents reviewed."
                    />

                    <VisualCard
                      icon={<FlaskConical size={22} />}
                      title="Lab Ready"
                      desc="Testing and certification partners mapped by category."
                    />
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
              className="rounded-[28px] border border-[#D6E2F0] bg-white p-6 shadow-sm"
            >
              <p className="text-4xl font-black text-[#000F22]">{item.value}</p>
              <p className="mt-2 text-sm font-bold text-[#6B7280]">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        {/* SERVICES */}
        <section className="mt-8 rounded-[40px] border border-[#D6E2F0] bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#5B86B6]">
            Compliance Ecosystem
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-[#000F22]">
            One marketplace for certifications, labs, consultants and compliance support
          </h2>

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((item) => (
              <div
                key={item.title}
                className="group rounded-[30px] border border-[#D6E2F0] bg-[#F8FAFC] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1B3554] text-white shadow-lg">
                  <item.icon size={24} />
                </div>

                <span className="mt-5 inline-flex rounded-full bg-[#EEF7FF] px-3 py-1.5 text-xs font-black text-[#1B3554]">
                  {item.tag}
                </span>

                <h3 className="mt-4 text-xl font-black text-[#000F22]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* IMAGE STYLE SECTION */}
        <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[40px] bg-[#1B3554] p-8 text-white shadow-xl md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#C0E6FD]">
              Trust-first platform
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight">
              Built to reduce fraud and confusion in compliance markets
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#DCEBFA]">
              Globalink helps businesses compare verified consultants, connect with testing labs and manage compliance requirements through a professional trust layer.
            </p>

            <div className="mt-8 grid gap-4">
              <TrustLine text="Verified consultant profiles" />
              <TrustLine text="Admin reviewed business details" />
              <TrustLine text="Clear service scope and pricing signals" />
              <TrustLine text="Inquiry and marketplace workflow ready" />
            </div>
          </div>

          <div className="rounded-[40px] border border-[#D6E2F0] bg-white p-6 shadow-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <VisualPanel title="Consultant Verification" icon={ShieldCheck} />
              <VisualPanel title="Lab Testing Network" icon={FlaskConical} />
              <VisualPanel title="Product Compliance" icon={FileCheck2} />
              <VisualPanel title="Global Trade Support" icon={Globe2} />
            </div>
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

function VisualCard({
  title,
  desc,
  icon,
  dark = false,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-3xl p-5 ${
        dark ? "bg-[#1B3554] text-white" : "border border-[#D6E2F0] bg-white"
      }`}
    >
      <div className={dark ? "text-[#C0E6FD]" : "text-[#1B3554]"}>{icon}</div>
      <p className="mt-4 text-xl font-black">{title}</p>
      <p className={`mt-2 text-xs leading-5 ${dark ? "text-[#DCEBFA]" : "text-[#6B7280]"}`}>
        {desc}
      </p>
    </div>
  );
}

function TrustLine({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DCFCE7] text-sm font-black text-[#166534]">
        ✓
      </span>
      <p className="text-sm font-black text-white">{text}</p>
    </div>
  );
}

function VisualPanel({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.ElementType;
}) {
  return (
    <div className="rounded-[30px] bg-[#F8FAFC] p-6">
      <div className="h-36 rounded-[24px] bg-[radial-gradient(circle_at_top_left,#C0E6FD,transparent_35%),linear-gradient(135deg,#000F22,#1B3554)] p-5 text-white">
        <Icon size={34} />
      </div>
      <p className="mt-5 text-lg font-black text-[#000F22]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[#6B7280]">
        Premium visual workflow for Globalink compliance marketplace.
      </p>
    </div>
  );
}