export default function LabDashboardPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-purple-100 bg-gradient-to-r from-[#2b064f] via-[#51245f] to-[#7b3f75] p-8 text-white shadow-2xl">
        <p className="text-sm font-semibold text-purple-100">
          Globalink Lab
        </p>

        <h1 className="mt-3 text-3xl font-extrabold">Lab Dashboard</h1>

        <p className="mt-2 text-sm text-purple-100">
          Manage your lab profile, NABL/BIS verification, and discovery
          visibility.
        </p>
      </section>

      <section className="rounded-[30px] border border-purple-100 bg-white p-6 shadow-xl">
        <h2 className="text-xl font-extrabold text-slate-950">
          Lab Profile Setup
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          Complete your lab details to appear in Globalink verified lab
          directory.
        </p>

        <a
          href="/dashboard/labs"
          className="mt-5 inline-block rounded-2xl bg-gradient-to-r from-[#2b064f] to-[#7b3f75] px-6 py-3 text-sm font-bold text-white shadow-lg"
        >
          View Lab Directory
        </a>
      </section>
    </div>
  );
}