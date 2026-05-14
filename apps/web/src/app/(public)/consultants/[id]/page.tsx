import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";

const services = [
  "BIS Certification",
  "ISI Mark",
  "CRS Registration",
  "Factory Audit Support",
  "QCO Guidance",
  "Lab Testing Coordination",
];

const documents = [
  "GST Verified",
  "MSME Verified",
  "Experience Proof Checked",
  "Admin Reviewed Profile",
];

export default function ConsultantProfilePage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <PublicNavbar />

      <div className="mx-auto max-w-7xl px-5 py-10">
        <Link
          href="/consultants"
          className="mb-6 inline-flex rounded-xl border border-[#D6E2F0] bg-white px-4 py-2 text-sm font-extrabold text-[#1B3554]"
        >
          ← Back to Consultants
        </Link>

        <section className="rounded-[36px] bg-[#000F22] px-8 py-12 text-white shadow-2xl md:px-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#C0E6FD]">
                Verified Consultant Profile
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-3xl font-black text-[#1B3554]">
                  R
                </div>

                <div>
                  <h1 className="text-4xl font-black leading-tight md:text-5xl">
                    RK Compliance Solutions
                  </h1>

                  <p className="mt-2 text-base font-bold text-[#C0E6FD]">
                    BIS & Product Certification Expert
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#DCEBFA]">
                Trusted compliance consultant helping manufacturers and
                importers with BIS ISI, CRS, QCO compliance, lab testing,
                documentation and factory audit support.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Badge text="GST Verified" />
                <Badge text="MSME Verified" />
                <Badge text="Admin Approved" />
                <Badge text="BIS Specialist" />
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C0E6FD]">
                Trust Summary
              </p>

              <div className="mt-6 grid gap-4">
                <TrustStat label="Rating" value="★ 4.9 / 5" />
                <TrustStat label="Experience" value="8+ Years" />
                <TrustStat label="Projects" value="240+" />
                <TrustStat label="Location" value="Ahmedabad, India" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-[30px] border border-[#D6E2F0] bg-white p-7 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
                Service Scope
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#000F22]">
                Compliance services offered
              </h2>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {services.map((service) => (
                  <div
                    key={service}
                    className="rounded-2xl border border-[#D6E2F0] bg-[#F8FAFC] p-4 text-sm font-black text-[#1B3554]"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-[#D6E2F0] bg-white p-7 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
                About Consultant
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#000F22]">
                Professional background
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#6B7280]">
                RK Compliance Solutions supports Indian manufacturers,
                importers and exporters with product certification and
                regulatory compliance. Their expertise includes BIS ISI mark,
                CRS registration, documentation preparation, testing
                coordination and inspection readiness.
              </p>
            </div>

            <div className="rounded-[30px] border border-[#D6E2F0] bg-white p-7 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
                Verification Documents
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#000F22]">
                Trust verification checklist
              </h2>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {documents.map((doc) => (
                  <div
                    key={doc}
                    className="flex items-center gap-3 rounded-2xl bg-[#F8FAFC] p-4"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DCFCE7] text-sm font-black text-[#166534]">
                      ✓
                    </span>

                    <p className="text-sm font-black text-[#000F22]">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[30px] border border-[#D6E2F0] bg-white p-7 shadow-sm">
              <h2 className="text-3xl font-black text-[#000F22]">
                Contact Consultant
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#6B7280]">
                Send your requirement and connect with this verified consultant.
              </p>

              <div className="mt-6 space-y-3">
                <Link
                  href="/join"
                  className="block rounded-2xl bg-[#1B3554] px-5 py-4 text-center text-sm font-black text-white hover:bg-[#000F22]"
                >
                  Send Inquiry
                </Link>

                <button className="w-full rounded-2xl border border-[#D6E2F0] px-5 py-4 text-sm font-black text-[#1B3554] hover:bg-[#EEF7FF]">
                  Request Callback
                </button>

                <button className="w-full rounded-2xl border border-[#D6E2F0] px-5 py-4 text-sm font-black text-[#1B3554] hover:bg-[#EEF7FF]">
                  Save Profile
                </button>
              </div>
            </div>

            <div className="rounded-[30px] bg-[#1B3554] p-7 text-white shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C0E6FD]">
                Globalink Trust Note
              </p>

              <p className="mt-4 text-sm leading-7 text-[#DCEBFA]">
                Globalink verifies consultant identity and business documents.
                Always confirm quotation, scope and timeline before starting
                work.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black text-[#C0E6FD]">
      {text}
    </span>
  );
}

function TrustStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 text-[#1F2937]">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B7280]">
        {label}
      </p>
      <p className="mt-2 text-lg font-black text-[#000F22]">{value}</p>
    </div>
  );
}