import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1F2937]">
      <PublicNavbar />

      <div className="mx-auto max-w-7xl px-5 py-10">
        <section className="rounded-[34px] bg-[#000F22] px-8 py-14 text-white shadow-xl md:px-14">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C0E6FD]">
            Contact Globalink
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Need help finding trusted compliance support?
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#DCEBFA]">
            Contact Globalink for consultant verification, lab listing, seller
            onboarding, marketplace support and platform assistance.
          </p>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[30px] border border-[#D6E2F0] bg-white p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#5B86B6]">
              Support Details
            </p>

            <h2 className="mt-4 text-3xl font-black text-[#000F22]">
              Globalink Support
            </h2>

            <div className="mt-8 space-y-4">
              <Info label="Email" value="support@globalink.com" />
              <Info label="Phone" value="+91 00000 00000" />
              <Info label="Location" value="India" />
              <Info label="Support Type" value="Consultants, Labs, Sellers" />
            </div>
          </div>

          <div className="rounded-[30px] border border-[#D6E2F0] bg-white p-7 shadow-sm">
            <h2 className="text-3xl font-black text-[#000F22]">
              Send Inquiry
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#6B7280]">
              Share your compliance requirement and Globalink will help you
              connect with the right verified expert.
            </p>

            <form className="mt-8 grid gap-5 md:grid-cols-2">
              <Input label="Full Name" placeholder="Enter name" />
              <Input label="Email" placeholder="you@company.com" />
              <Input label="Phone" placeholder="Mobile number" />
              <Input label="Company" placeholder="Company name" />

              <div className="md:col-span-2">
                <label className="text-sm font-extrabold text-[#000F22]">
                  Requirement
                </label>
                <textarea
                  placeholder="Example: Need BIS consultant for toy manufacturing"
                  className="mt-2 min-h-36 w-full rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 outline-none focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
                />
              </div>

              <button className="rounded-2xl bg-[#1B3554] px-6 py-4 text-sm font-extrabold text-white hover:bg-[#000F22] md:col-span-2">
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>

        <section className="mt-8 rounded-[30px] bg-[#1B3554] p-8 text-white">
          <h2 className="text-3xl font-black">
            Want to join as a consultant, lab or seller?
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#DCEBFA]">
            Register your business and submit verification details to become
            visible on Globalink marketplace.
          </p>

          <Link
            href="/join"
            className="mt-6 inline-flex rounded-2xl bg-white px-6 py-4 text-sm font-black text-[#000F22]"
          >
            Create Trusted Account
          </Link>
        </section>
      </div>
      <PublicFooter />
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#D6E2F0] bg-[#F8FAFC] p-5">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B7280]">
        {label}
      </p>
      <p className="mt-2 text-sm font-black text-[#000F22]">{value}</p>
    </div>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-sm font-extrabold text-[#000F22]">{label}</label>
      <input
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 outline-none focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
      />
    </div>
  );
}