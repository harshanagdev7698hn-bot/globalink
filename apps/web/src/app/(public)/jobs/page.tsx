export default function JobsPage() {
  return (
    <main className="min-h-screen bg-[#fff4ed] px-6 py-16">
      <section className="mx-auto max-w-5xl rounded-[32px] border border-purple-100 bg-white p-8 shadow-xl">
        <p className="text-sm font-bold text-purple-700">Globalink Careers</p>

        <h1 className="mt-3 text-3xl font-extrabold text-slate-950">
          Jobs & Opportunities
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Explore future opportunities with Globalink. We are building a trusted
          discovery and marketplace platform for consultants, labs, sellers and
          buyers.
        </p>

        <div className="mt-8 rounded-2xl bg-slate-50 p-6">
          <h2 className="text-lg font-extrabold text-slate-950">
            No open roles yet
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Please check again later for hiring updates.
          </p>
        </div>
      </section>
    </main>
  );
}