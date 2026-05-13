import Link from "next/link";

const consultants = [
  {
    name: "RK Compliance Solutions",
    category: "BIS Certification",
    location: "Ahmedabad, India",
    experience: "8+ Years",
  },
  {
    name: "Global Regulatory Experts",
    category: "CDSCO Consulting",
    location: "Delhi, India",
    experience: "12+ Years",
  },
  {
    name: "EPR Green Consultants",
    category: "EPR Registration",
    location: "Mumbai, India",
    experience: "6+ Years",
  },
];

export default function ConsultantsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <section className="rounded-[36px] bg-[#000F22] px-8 py-14 text-white shadow-2xl md:px-14">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C0E6FD]">
            Verified Consultant Network
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight">
            Find trusted compliance consultants
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-9 text-[#DCEBFA]">
            Connect with verified BIS, ISO, EPR, CDSCO and global certification
            consultants through one trusted enterprise platform.
          </p>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {consultants.map((item) => (
            <div
              key={item.name}
              className="rounded-[30px] border border-[#D6E2F0] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#EEF7FF] px-4 py-2 text-xs font-extrabold text-[#1B3554]">
                  {item.category}
                </span>

                <span className="rounded-full bg-[#DCFCE7] px-4 py-2 text-xs font-extrabold text-[#166534]">
                  VERIFIED
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-black text-[#000F22]">
                {item.name}
              </h2>

              <div className="mt-5 flex flex-wrap gap-3">
                <div className="rounded-full bg-[#F3F8FD] px-4 py-2 text-sm font-bold text-[#1B3554]">
                  {item.location}
                </div>

                <div className="rounded-full bg-[#F3F8FD] px-4 py-2 text-sm font-bold text-[#1B3554]">
                  {item.experience}
                </div>
              </div>

              <p className="mt-6 text-sm leading-8 text-[#6B7280]">
                Enterprise-grade consulting support for certification,
                compliance and approval workflows.
              </p>

              <Link
                href="/join"
                className="mt-8 inline-flex rounded-2xl bg-[#1B3554] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#000F22]"
              >
                Send Inquiry
              </Link>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}