import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";
const labs = [
  {
    name: "NABL TestLab India",
    type: "Electrical & Electronics Testing",
    city: "Ahmedabad",
    approvals: ["NABL", "BIS", "ISO 17025"],
    rating: "4.9",
  },
  {
    name: "Global Compliance Labs",
    type: "Plastic & Packaging Testing",
    city: "Mumbai",
    approvals: ["NABL", "CPCB"],
    rating: "4.8",
  },
  {
    name: "MedTech Validation Lab",
    type: "Medical Device Testing",
    city: "Delhi",
    approvals: ["NABL", "CDSCO"],
    rating: "4.7",
  },
];

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <PublicNavbar />

      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* HERO */}
        <section className="rounded-[34px] bg-[#1B3554] px-8 py-14 text-white shadow-xl md:px-14">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C0E6FD]">
            Verified Testing Labs
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Trusted labs for testing, certification and validation
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#DCEBFA]">
            Explore NABL approved testing labs for BIS, CDSCO, EPR, EMC,
            electronics, plastic, toys and industrial compliance.
          </p>
        </section>

        {/* SEARCH */}
        <section className="mt-8 rounded-[28px] border border-[#D6E2F0] bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-4">
            <input
              placeholder="Search labs or category"
              className="rounded-2xl border border-[#D6E2F0] px-4 py-4 outline-none focus:border-[#5B86B6]"
            />

            <select className="rounded-2xl border border-[#D6E2F0] px-4 py-4 font-bold outline-none">
              <option>All Categories</option>
              <option>Electrical</option>
              <option>Medical</option>
              <option>Plastic</option>
            </select>

            <select className="rounded-2xl border border-[#D6E2F0] px-4 py-4 font-bold outline-none">
              <option>All Cities</option>
              <option>Ahmedabad</option>
              <option>Mumbai</option>
              <option>Delhi</option>
            </select>

            <button className="rounded-2xl bg-[#1B3554] px-5 py-4 text-sm font-extrabold text-white hover:bg-[#000F22]">
              Search
            </button>
          </div>
        </section>

        {/* LAB CARDS */}
        <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {labs.map((lab) => (
            <article
              key={lab.name}
              className="rounded-[30px] border border-[#D6E2F0] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF7FF] text-xl font-black text-[#1B3554]">
                  {lab.name.charAt(0)}
                </div>

                <span className="rounded-full bg-[#DCFCE7] px-4 py-2 text-xs font-extrabold text-[#166534]">
                  VERIFIED
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-black text-[#000F22]">
                {lab.name}
              </h2>

              <p className="mt-2 text-sm font-bold text-[#5B86B6]">
                {lab.type}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#6B7280]">Location</p>
                  <p className="mt-1 text-sm font-black text-[#000F22]">
                    {lab.city}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-[#6B7280]">Rating</p>
                  <p className="mt-1 text-sm font-black text-[#000F22]">
                    ★ {lab.rating}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {lab.approvals.map((approval) => (
                  <span
                    key={approval}
                    className="rounded-full bg-[#F3F8FD] px-3 py-2 text-xs font-extrabold text-[#1B3554]"
                  >
                    {approval}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <Link
                  href="/join"
                  className="flex-1 rounded-2xl bg-[#1B3554] px-5 py-4 text-center text-sm font-extrabold text-white hover:bg-[#000F22]"
                >
                  Contact Lab
                </Link>

                <button className="rounded-2xl border border-[#D6E2F0] px-5 py-4 text-sm font-extrabold text-[#1B3554] hover:bg-[#EEF7FF]">
                  View
                </button>
              </div>
            </article>
          ))}
        </section>
      </div>
     <PublicFooter /> 
    </main>
  );
}