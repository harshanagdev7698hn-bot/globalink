import Link from "next/link";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/consultants", label: "Consultants" },
  { href: "/labs", label: "Labs" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/certifications", label: "Certifications" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const complianceLinks = [
  "BIS Certification",
  "ISI Mark",
  "ISO Certification",
  "CE Marking",
  "FDA",
  "FSSAI",
  "CDSCO",
  "WPC Approval",
  "TEC / MTCTE",
  "EPR Registration",
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/contact", label: "Support" },
];

export default function PublicFooter() {
  return (
    <footer className="mt-12 border-t border-[#D6E2F0] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-5">
          <div className="xl:col-span-2">
            <h2 className="text-3xl font-black tracking-tight text-[#000F22]">
              Globalink
            </h2>

            <p className="mt-5 max-w-md text-sm leading-8 text-[#6B7280]">
              Trusted compliance marketplace connecting verified consultants,
              accredited labs, sellers and industries through a professional
              enterprise platform.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#EEF7FF] px-4 py-2 text-xs font-black text-[#1B3554]">
                Verified Experts
              </span>

              <span className="rounded-full bg-[#DCFCE7] px-4 py-2 text-xs font-black text-[#166534]">
                GST Verified
              </span>

              <span className="rounded-full bg-[#DCFCE7] px-4 py-2 text-xs font-black text-[#166534]">
                KYC Verified
              </span>

              <span className="rounded-full bg-[#DCFCE7] px-4 py-2 text-xs font-black text-[#166534]">
                Audited Labs
              </span>
            </div>
          </div>

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

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
              Compliance
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {complianceLinks.map((item) => (
                <p key={item} className="text-sm font-bold text-[#1F2937]">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#5B86B6]">
              Legal
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {legalLinks.map((item) => (
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
        </div>

        <div className="mt-12 rounded-[30px] bg-[#1B3554] p-7 text-white shadow-xl md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C0E6FD]">
              Join Globalink
            </p>

            <h3 className="mt-3 text-2xl font-black">
              Build trust for your compliance business
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#DCEBFA]">
              Register as a consultant, lab or seller and grow with verified
              visibility across a compliance-first marketplace.
            </p>
          </div>

          <Link
            href="/join"
            className="mt-6 inline-flex w-full justify-center rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#000F22] md:w-auto md:mt-0"
          >
            Create Account
          </Link>
        </div>

        <div className="mt-8 rounded-[24px] border border-[#F3D1D1] bg-[#FFF7F7] p-6 text-[#7A271A] shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#B42318]">
            Important Notice
          </p>
          <p className="mt-3 text-sm leading-6">
            Globalink does not issue certificates, approvals, licenses or registrations.
          </p>
          <p className="mt-3 text-sm leading-6">
            Globalink helps users discover verified consultants, laboratories, compliance partners and suppliers.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#D6E2F0] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-bold text-[#6B7280]">
            © 2026 Globalink Compliance Network. Government-grade compliance
            marketplace.
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
              href="/disclaimer"
              className="text-sm font-bold text-[#6B7280] hover:text-[#1B3554]"
            >
              Disclaimer
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