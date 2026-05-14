import Link from "next/link";

const stats = [
  {
    title: "Active Requests",
    value: "128",
    growth: "+18%",
  },
  {
    title: "Verified Consultants",
    value: "542",
    growth: "+12%",
  },
  {
    title: "Pending Reviews",
    value: "19",
    growth: "-4%",
  },
  {
    title: "Marketplace Trust",
    value: "96%",
    growth: "+2%",
  },
];

const activities = [
  "BIS consultant inquiry submitted",
  "New lab verification request received",
  "Factory audit workflow initiated",
  "CDSCO consultant approved",
  "Marketplace profile verified",
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F5F7FB] p-6">
      {/* TOP BAR */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#5B86B6]">
            Globalink Control Center
          </p>

          <h1 className="mt-3 text-4xl font-black text-[#07162D]">
            Enterprise Compliance Dashboard
          </h1>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6B7280]">
            Manage compliance workflows, consultant activity, marketplace trust
            verification and operational requests from one unified platform.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="rounded-2xl border border-[#D6E2F0] bg-white px-5 py-4 text-sm font-black text-[#1B3554]">
            Export Report
          </button>

          <button className="rounded-2xl bg-[#1B3554] px-5 py-4 text-sm font-black text-white hover:bg-[#000F22]">
            Create Request
          </button>
        </div>
      </div>

      {/* HERO VISUAL */}
      <section className="mt-8 overflow-hidden rounded-[40px] bg-[#000F22] text-white shadow-2xl">
        <div className="grid gap-10 p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
          <div>
            <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#C0E6FD]">
              Live Marketplace Operations
            </p>

            <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
              Real-time compliance and trust monitoring
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[#DCEBFA]">
              Monitor consultant approvals, business verification, compliance
              requests and operational workflows with enterprise-grade controls.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <HeroBadge text="AI Monitoring" />
              <HeroBadge text="Trust Verification" />
              <HeroBadge text="Marketplace Active" />
            </div>
          </div>

          {/* VISUAL CARD */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#5B86B6]/30 blur-3xl" />

            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#C0E6FD]/20 blur-3xl" />

            <div className="relative rounded-[34px] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="rounded-[28px] bg-white p-5 text-[#1F2937]">
                <div className="flex items-center justify-between border-b border-[#D6E2F0] pb-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#5B86B6]">
                      Compliance Operations
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-[#000F22]">
                      Trust Activity
                    </h3>
                  </div>

                  <span className="rounded-full bg-[#DCFCE7] px-3 py-2 text-xs font-black text-[#166534]">
                    LIVE
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <MiniStat label="Experts" value="542" />
                  <MiniStat label="Labs" value="103" />
                  <MiniStat label="Approvals" value="2.1k" />
                </div>

                <div className="mt-5 rounded-3xl border border-[#D6E2F0] bg-[#F8FAFC] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-black text-[#000F22]">
                      AI Marketplace Scan
                    </p>

                    <span className="rounded-full bg-[#EEF7FF] px-3 py-1 text-xs font-black text-[#1B3554]">
                      ACTIVE
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <ActivityRow
                      title="Consultant verification completed"
                      status="Done"
                    />

                    <ActivityRow
                      title="Factory audit request received"
                      status="Live"
                    />

                    <ActivityRow
                      title="BIS expert matched successfully"
                      status="AI"
                    />
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-[#1B3554] p-5 text-white">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C0E6FD]">
                      Verification Queue
                    </p>

                    <p className="mt-3 text-4xl font-black">19</p>

                    <p className="mt-2 text-xs leading-5 text-[#DCEBFA]">
                      Pending consultant and business review requests.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-[#D6E2F0] bg-white p-5">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#5B86B6]">
                      Trust Index
                    </p>

                    <p className="mt-3 text-4xl font-black text-[#000F22]">
                      96%
                    </p>

                    <p className="mt-2 text-xs leading-5 text-[#6B7280]">
                      Marketplace trust and verification quality score.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-[30px] border border-[#D6E2F0] bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#5B86B6]">
                {item.title}
              </p>

              <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-black text-[#166534]">
                {item.growth}
              </span>
            </div>

            <h2 className="mt-6 text-5xl font-black text-[#07162D]">
              {item.value}
            </h2>
          </div>
        ))}
      </section>

      {/* LOWER GRID */}
      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        {/* ACTIVITY */}
        <div className="rounded-[34px] border border-[#D6E2F0] bg-white p-7 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
                Recent Operations
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#07162D]">
                Marketplace Activity
              </h2>
            </div>

            <button className="rounded-2xl border border-[#D6E2F0] px-5 py-3 text-sm font-black text-[#1B3554]">
              View All
            </button>
          </div>

          <div className="mt-8 space-y-4">
            {activities.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-[24px] border border-[#D6E2F0] bg-[#F8FAFC] p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1B3554] text-lg font-black text-white">
                  ✓
                </div>

                <div className="flex-1">
                  <p className="text-sm font-black text-[#000F22]">{item}</p>

                  <p className="mt-1 text-xs font-bold text-[#6B7280]">
                    Updated a few minutes ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <div className="rounded-[34px] bg-[#1B3554] p-7 text-white shadow-xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C0E6FD]">
              AI Insights
            </p>

            <h2 className="mt-4 text-3xl font-black">
              Compliance intelligence active
            </h2>

            <p className="mt-4 text-sm leading-8 text-[#DCEBFA]">
              AI systems are monitoring consultant activity, marketplace trust,
              operational workflows and verification quality.
            </p>

            <div className="mt-6 space-y-3">
              <Insight text="Trust score increased this week" />
              <Insight text="12 new consultant approvals" />
              <Insight text="BIS category showing high demand" />
            </div>
          </div>

          <div className="rounded-[34px] border border-[#D6E2F0] bg-white p-7 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
              Quick Actions
            </p>

            <div className="mt-6 grid gap-3">
              <ActionButton text="Verify Consultant" />
              <ActionButton text="Approve Marketplace Request" />
              <ActionButton text="Review Documents" />
              <ActionButton text="Generate Compliance Report" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroBadge({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black text-[#C0E6FD]">
      {text}
    </span>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#F8FAFC] p-4">
      <p className="text-3xl font-black text-[#000F22]">{value}</p>
      <p className="mt-1 text-xs font-bold text-[#6B7280]">{label}</p>
    </div>
  );
}

function ActivityRow({
  title,
  status,
}: {
  title: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3">
      <p className="text-sm font-bold text-[#1F2937]">{title}</p>

      <span className="rounded-full bg-[#EEF7FF] px-3 py-1 text-xs font-black text-[#1B3554]">
        {status}
      </span>
    </div>
  );
}

function Insight({ text }: { text: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 text-sm font-black">
      {text}
    </div>
  );
}

function ActionButton({ text }: { text: string }) {
  return (
    <button className="rounded-2xl border border-[#D6E2F0] bg-[#F8FAFC] px-5 py-4 text-left text-sm font-black text-[#1B3554] hover:bg-[#EEF7FF]">
      {text}
    </button>
  );
}