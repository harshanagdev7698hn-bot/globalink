export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-[#dfb6b2] bg-white p-3 shadow-sm">
        <div
          className="rounded-[24px] px-7 py-10 text-white shadow-md"
          style={{
            background:
              "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
          }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#FBE4D8]">
            Settings
          </p>
          <h1 className="mt-3 text-4xl font-bold">Platform Settings</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#FBE4D8]">
            Configure profile details, account preferences, notifications and
            platform options from one clean workspace.
          </p>
        </div>
      </section>

      <section className="rounded-[28px] border border-[#dfb6b2] bg-white p-7 shadow-sm">
        <h2 className="text-3xl font-bold text-[#190019]">Profile Settings</h2>
        <p className="mt-2 text-sm text-[#854F6C]">
          Update your personal details used across Globalink dashboard.
        </p>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-[#190019]">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="h-14 w-full rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] px-4 text-[#190019] outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#190019]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="h-14 w-full rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] px-4 text-[#190019] outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#190019]">
              Language
            </label>
            <input
              type="text"
              defaultValue="English"
              className="h-14 w-full rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] px-4 text-[#190019] outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#190019]">
              Timezone
            </label>
            <input
              type="text"
              defaultValue="Asia/Kolkata"
              className="h-14 w-full rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] px-4 text-[#190019] outline-none"
            />
          </div>
        </div>

        <button
          className="mt-7 rounded-2xl px-6 py-4 text-sm font-bold text-white shadow-md"
          style={{
            background:
              "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
          }}
        >
          Save Settings
        </button>
      </section>
    </div>
  );
}