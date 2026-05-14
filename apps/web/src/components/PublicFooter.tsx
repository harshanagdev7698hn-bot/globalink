import Link from "next/link";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/consultants", label: "Consultants" },
  { href: "/labs", label: "Labs" },
];

const complianceLinks = [
  "BIS Certification",
  "CDSCO",
  "ISO Certification",
  "EPR Registration",
  "WPC Approval",
  "TEC / MTCTE",
];

export default function PublicFooter() {
  return (
    <footer className="mt-12 border-t border-[#D6E2F0] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#000F22]">
              Globalink
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#6B7280]">
              Trusted compliance marketplace connecting consultants, labs,
              sellers and industries through a professional enterprise platform.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#EEF7FF] px-4 py-2 text-xs font-black text-[#1B3554]">
                Verified Experts
              </span>

              <span className="rounded-full bg-[#DCFCE7] px-4 py-2 text-xs font-black text-[#166534]">
                Trust-first Platform
              </span>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
              Company
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {companyLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-bold text-[#1F2937] transition hover:text-[#1B3554]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
              Compliance Services
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {complianceLinks.map((item) => (
                <p
                  key={item}
                  className="text-sm font-bold text-[#1F2937]"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-[30px] bg-[#1B3554] p-7 text-white shadow-xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C0E6FD]">
              Join Globalink
            </p>

            <h3 className="mt-4 text-2xl font-black">
              Build trust for your business
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#DCEBFA]">
              Register as consultant, lab or seller and grow with verified
              visibility.
            </p>

            <Link
              href="/join"
              className="mt-6 inline-flex rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#000F22]"
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#D6E2F0] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-bold text-[#6B7280]">
            © 2026 Globalink. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy"
              className="text-sm font-bold text-[#6B7280] hover:text-[#1B3554]"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-sm font-bold text-[#6B7280] hover:text-[#1B3554]"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="text-sm font-bold text-[#6B7280] hover:text-[#1B3554]"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}