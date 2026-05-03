export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fff4ed] px-6 py-16">
      <section className="mx-auto max-w-4xl rounded-[32px] border border-purple-100 bg-white p-8 shadow-xl">
        <p className="text-sm font-bold text-purple-700">Globalink Support</p>

        <h1 className="mt-3 text-3xl font-extrabold text-slate-950">
          Contact Globalink
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          For consultant verification, lab listing, seller onboarding, or
          marketplace support, contact the Globalink team.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-xs font-extrabold uppercase text-slate-500">
              Email
            </p>
            <p className="mt-2 font-bold text-slate-950">
              support@globalink.com
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-xs font-extrabold uppercase text-slate-500">
              Phone
            </p>
            <p className="mt-2 font-bold text-slate-950">+91 00000 00000</p>
          </div>
        </div>
      </section>
    </main>
  );
}