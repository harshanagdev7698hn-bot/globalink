export default function SettingsPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-[28px] border border-[#D6E2F0] bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#5B86B6]">
          Settings
        </p>

        <h1 className="mt-4 text-4xl font-extrabold text-[#000F22]">
          Platform Settings
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-[#6B7280]">
          Configure profile details, account preferences, notifications and
          platform options from one clean enterprise workspace.
        </p>
      </div>

      <div className="rounded-[28px] border border-[#D6E2F0] bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-extrabold text-[#000F22]">
          Profile Settings
        </h2>

        <p className="mt-2 text-sm text-[#6B7280]">
          Update your personal details used across Globalink dashboard.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-bold text-[#000F22]">
              Full Name
            </label>
            <input
              placeholder="Enter name"
              className="mt-2 w-full rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 outline-none focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
            />
          </div>

          <div>
            <label className="text-sm font-bold text-[#000F22]">Email</label>
            <input
              placeholder="Enter email"
              className="mt-2 w-full rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 outline-none focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
            />
          </div>

          <div>
            <label className="text-sm font-bold text-[#000F22]">
              Language
            </label>
            <input
              defaultValue="English"
              className="mt-2 w-full rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 outline-none focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
            />
          </div>

          <div>
            <label className="text-sm font-bold text-[#000F22]">
              Timezone
            </label>
            <input
              defaultValue="Asia/Kolkata"
              className="mt-2 w-full rounded-2xl border border-[#D6E2F0] bg-white px-4 py-4 outline-none focus:border-[#5B86B6] focus:ring-4 focus:ring-[#C0E6FD]/40"
            />
          </div>
        </div>

        <button className="mt-8 rounded-2xl bg-[#1B3554] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#000F22]">
          Save Settings
        </button>
      </div>
    </section>
  );
}