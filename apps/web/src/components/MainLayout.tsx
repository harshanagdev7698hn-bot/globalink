import Link from "next/link";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#FBE4D8] px-8 py-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="rounded-[24px] border border-[#dfb6b2] bg-white px-6 py-4 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <Link href="/" className="text-2xl font-bold text-[#190019]">
                Globalink
              </Link>
              <p className="text-sm text-[#854F6C]">
                Government-grade consultant, lab & marketplace platform
              </p>
            </div>

            <nav className="flex flex-wrap items-center gap-3 text-sm font-bold text-[#190019]">
              <Link href="/consultants">Consultants</Link>
              <Link href="/labs">Labs</Link>
              <Link href="/marketplace">Marketplace</Link>
              <Link href="/compliance">Compliance</Link>
              <Link
                href="/login"
                className="rounded-xl border border-[#dfb6b2] px-4 py-2"
              >
                Login
              </Link>
              <Link
                href="/join"
                className="rounded-xl px-4 py-2 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
                }}
              >
                Join Globalink
              </Link>
            </nav>
          </div>
        </header>

        {children}
      </div>
    </main>
  );
}