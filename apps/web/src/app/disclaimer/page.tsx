export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#F6F8FB] px-5 py-20">
      <section className="mx-auto max-w-4xl rounded-[28px] border border-[#D6E2F0] bg-white p-8 shadow-sm">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5B86B6]">
          Legal Notice
        </p>

        <h1 className="mt-4 text-4xl font-black text-[#000F22]">
          Disclaimer
        </h1>

        <p className="mt-5 text-sm leading-8 text-[#4B5563]">
          Globalink is a compliance discovery and marketplace platform. We help
          users discover consultants, labs, sellers and service providers.
        </p>

        <p className="mt-4 text-sm leading-8 text-[#4B5563]">
          Globalink does not issue, approve, grant or guarantee any government
          certification, licence, approval or compliance outcome.
        </p>

        <p className="mt-4 text-sm leading-8 text-[#4B5563]">
          Consultants, labs and sellers listed on the platform are independent
          service providers. Users should verify details, credentials and
          suitability before engaging any service provider.
        </p>
      </section>
    </main>
  );
}