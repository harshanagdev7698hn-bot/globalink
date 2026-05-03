export default function PublicLabsPage() {
  return (
    <main className="min-h-screen bg-[#fff4ed] px-6 py-16">
      <section className="mx-auto max-w-5xl rounded-[32px] border border-purple-100 bg-white p-8 shadow-xl">
        <p className="text-sm font-bold text-purple-700">Globalink Labs</p>

        <h1 className="mt-3 text-3xl font-extrabold text-slate-950">
          Verified Lab Directory
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Find verified NABL and BIS approved labs for testing and compliance
          support.
        </p>

        <div className="mt-8 rounded-2xl bg-slate-50 p-6">
          <h2 className="text-lg font-extrabold text-slate-950">
            Lab directory is available inside dashboard
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Login to view verified labs and contact details.
          </p>
        </div>
      </section>
    </main>
  );
}