import MainLayout from "@/components/MainLayout";

export default function LoginPage() {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="rounded-[28px] border border-[#dfb6b2] bg-white p-3 shadow-sm">
        <div
          className="rounded-[24px] px-7 py-10 text-white"
          style={{
            background:
              "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
          }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#FBE4D8]">
            Welcome Back
          </p>
          <h1 className="mt-3 text-4xl font-bold">Login to Globalink</h1>
          <p className="mt-3 text-sm text-[#FBE4D8]">
            Access your dashboard and manage your profile.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="rounded-[28px] border border-[#dfb6b2] bg-white p-7 shadow-sm">
        <h2 className="text-2xl font-bold text-[#190019]">Login</h2>

        <div className="mt-6 grid gap-4">
          <input
            placeholder="Email"
            className="h-12 rounded-xl border border-[#dfb6b2] px-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="h-12 rounded-xl border border-[#dfb6b2] px-4"
          />
        </div>

        <button
          className="mt-6 rounded-xl px-6 py-3 text-white"
          style={{
            background:
              "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
          }}
        >
          Login
        </button>

        <p className="mt-4 text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="/join" className="text-[#2B124C] font-semibold">
            Join now
          </a>
        </p>
      </section>
    </MainLayout>
  );
}