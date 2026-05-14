import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";

const services = [
  "BIS ISI Certification",
  "CRS Registration",
  "FMCS Support",
  "Factory Audit Preparation",
  "QCO Compliance",
  "Lab Testing Coordination",
];

const industries = [
  "Toys",
  "Electronics",
  "Steel Products",
  "Furniture",
  "Packaging",
  "Consumer Goods",
];

const reviews = [
  {
    name: "Manufacturing Client",
    text: "Professional support for BIS documentation and lab coordination. Clear guidance and fast response.",
  },
  {
    name: "Importer",
    text: "Helped us understand CRS requirements and prepare the required documents properly.",
  },
];

export default function ConsultantProfilePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <PublicNavbar />

      <div className="mx-auto max-w-7xl px-5 py-10">
        <Link
          href="/consultants"
          className="inline-flex rounded-2xl border border-[#D6E2F0] bg-white px-5 py-3 text-sm font-black text-[#1B3554] hover:bg-[#EEF7FF]"
        >
          ← Back to Consultants
        </Link>

        <section className="mt-6 overflow-hidden rounded-[40px] bg-[#000F22] text-white shadow-2xl">
          <div className="grid gap-10 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-14">
            <div>
              <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-[#C0E6FD]">
                Verified Consultant Profile
              </p>

              <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-[30px] bg-white text-4xl font-black text-[#1B3554]">
                  RK
                </div>

                <div>
                  <h1 className="text-4xl font-black leading-tight md:text-6xl">
                    RK Compliance Solutions
                  </h1>

                  <p className="mt-3 text-lg font-bold text-[#C0E6FD]">
                    BIS & Product Certification Expert
                  </p>
                </div>
              </div>

              <p className="mt-7 max-w-3xl text-base leading-8 text-[#DCEBFA]">
                Trusted consultant for BIS ISI, CRS, QCO compliance, factory
                audit preparation, lab testing coordination and product
                certification support for Indian manufacturers and importers.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <TrustPill text="GST Verified" />
                <TrustPill text="Admin Approved" />
                <TrustPill text="BIS Specialist" />
                <TrustPill text="Fast Response" />
              </div>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="rounded-[28px] bg-white p-5 text-[#1F2937]">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#5B86B6]">
                  Trust Overview
                </p>

                <div className="mt-5 grid gap-3">
                  <ProfileStat label="Trust Score" value="96%" />
                  <ProfileStat label="Rating" value="★ 4.9 / 5" />
                  <ProfileStat label="Completed Projects" value="240+" />
                  <ProfileStat label="Response Time" value="< 2 Hours" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <Card label="Service Scope" title="Compliance services offered">
              <div className="grid gap-3 md:grid-cols-2">
                {services.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#D6E2F0] bg-[#F8FAFC] p-4 text-sm font-black text-[#1B3554]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Card>

            <Card label="Industries Served" title="Industry expertise">
              <div className="grid gap-3 md:grid-cols-3">
                {industries.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#EEF7FF] p-4 text-sm font-black text-[#1B3554]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Card>

            <Card label="About Consultant" title="Professional background">
              <p className="text-sm leading-8 text-[#6B7280]">
                RK Compliance Solutions helps manufacturers, importers and
                exporters understand certification requirements and complete
                compliance workflows. The consultant supports documentation,
                product testing coordination, factory readiness and technical
                compliance planning.
              </p>
            </Card>

            <Card label="Client Reviews" title="What businesses say">
              <div className="grid gap-4 md:grid-cols-2">
                {reviews.map((review) => (
                  <div
                    key={review.name}
                    className="rounded-[24px] border border-[#D6E2F0] bg-[#F8FAFC] p-5"
                  >
                    <p className="text-sm font-black text-[#000F22]">
                      ★★★★★
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                      “{review.text}”
                    </p>
                    <p className="mt-4 text-sm font-black text-[#1B3554]">
                      {review.name}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[34px] border border-[#D6E2F0] bg-white p-7 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
                Contact Consultant
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#000F22]">
                Send requirement
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                Share your certification requirement and connect with this
                verified consultant.
              </p>

              <div className="mt-6 grid gap-3">
                <Link
                  href="/join"
                  className="rounded-2xl bg-[#1B3554] px-5 py-4 text-center text-sm font-black text-white hover:bg-[#000F22]"
                >
                  Send Inquiry
                </Link>

                <button className="rounded-2xl border border-[#D6E2F0] px-5 py-4 text-sm font-black text-[#1B3554] hover:bg-[#EEF7FF]">
                  Request Callback
                </button>

                <button className="rounded-2xl border border-[#D6E2F0] px-5 py-4 text-sm font-black text-[#1B3554] hover:bg-[#EEF7FF]">
                  Save Consultant
                </button>
              </div>
            </div>

            <div className="rounded-[34px] bg-[#1B3554] p-7 text-white shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C0E6FD]">
                Verification Checklist
              </p>

              <div className="mt-5 space-y-3">
                <CheckItem text="GST profile checked" />
                <CheckItem text="Business documents reviewed" />
                <CheckItem text="Service scope verified" />
                <CheckItem text="Admin approval completed" />
              </div>
            </div>

            <div className="rounded-[34px] border border-[#D6E2F0] bg-white p-7 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
                Business Details
              </p>

              <div className="mt-5 space-y-4">
                <Detail label="Location" value="Ahmedabad, India" />
                <Detail label="Experience" value="8+ Years" />
                <Detail label="Pricing" value="₹15,000 onwards" />
                <Detail label="Language" value="English, Hindi, Gujarati" />
              </div>
            </div>
          </aside>
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

function ProfileStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#F8FAFC] p-4">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B7280]">
        {label}
      </p>
      <p className="mt-2 text-xl font-black text-[#000F22]">{value}</p>
    </div>
  );
}

function Card({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[34px] border border-[#D6E2F0] bg-white p-7 shadow-sm">
      <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
        {label}
      </p>
      <h2 className="mt-4 text-3xl font-black text-[#000F22]">{title}</h2>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DCFCE7] text-sm font-black text-[#166534]">
        ✓
      </span>
      <p className="text-sm font-black text-white">{text}</p>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[#F8FAFC] p-4">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B7280]">
        {label}
      </p>
      <p className="mt-2 text-sm font-black text-[#000F22]">{value}</p>
    </div>
  );
}