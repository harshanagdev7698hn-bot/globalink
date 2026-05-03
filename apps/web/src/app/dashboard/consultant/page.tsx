export default function ConsultantDashboardPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-purple-100 bg-gradient-to-r from-[#2b064f] via-[#51245f] to-[#7b3f75] p-8 text-white shadow-2xl">
        <p className="text-sm font-semibold text-purple-100">
          Globalink Consultant
        </p>

        <h1 className="mt-3 text-3xl font-extrabold">
          Consultant Dashboard
        </h1>

        <p className="mt-2 text-sm text-purple-100">
          Manage your profile, verification details, and marketplace visibility.
        </p>
      </section>

      <section className="rounded-[30px] border border-purple-100 bg-white p-6 shadow-xl">
        <h2 className="text-xl font-extrabold text-slate-950">
          Profile Setup
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          Complete your consultant profile to appear in Globalink verified
          discovery.
        </p>

        <a
          href="/dashboard/consultants/edit"
          className="mt-5 inline-block rounded-2xl bg-gradient-to-r from-[#2b064f] to-[#7b3f75] px-6 py-3 text-sm font-bold text-white shadow-lg"
        >
          Edit Consultant Profile
        </a>
      </section>
    </div>
  );
}