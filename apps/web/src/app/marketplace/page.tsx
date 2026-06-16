import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "BIS Certified Industrial Components",
    category: "Certified Products",
    seller: "Verified Seller",
    country: "India",
    certification: "BIS",
    status: "Compliant",
    price: "₹25,000 onwards",
  },
  {
    name: "Lab Testing Equipment",
    category: "Lab Equipment",
    seller: "Verified Supplier",
    country: "India",
    certification: "NABL Ready",
    status: "Verified",
    price: "₹50,000 onwards",
  },
  {
    name: "ISI Mark Product Support",
    category: "Certification Support",
    seller: "Compliance Partner",
    country: "India",
    certification: "ISI",
    status: "Support Available",
    price: "Contact for price",
  },
  {
    name: "Industrial Safety Products",
    category: "Safety",
    seller: "Trusted Seller",
    country: "India",
    certification: "CE",
    status: "Compliant",
    price: "₹5,000 onwards",
  },
];

const stats = [
  { value: "250+", label: "Verified Listings" },
  { value: "80+", label: "Certified Sellers" },
  { value: "40+", label: "Compliance Categories" },
];

const filters = ["All", "BIS", "ISI", "NABL", "CE", "Safety", "Lab Equipment"];

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#07162D]">
      <header className="sticky top-0 z-50 border-b border-[#D6E2F0] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl bg-[#0B1F3A] p-1">
  <Image
    src="/images/globalink-icon.png.png"
    alt="Globalink"
    width={44}
    height={44}
    className="h-full w-full object-contain"
    priority
  />
</div>
            <div>
              <div className="text-2xl font-black tracking-tight">
                GLOBAL<span className="text-[#315EFB]">INK</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                Compliance Network
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-black text-slate-700 lg:flex">
            <Link href="/consultants">Consultants</Link>
            <Link href="/labs">Labs</Link>
            <Link href="/certifications">Certifications</Link>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/about">About</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-xl border border-[#D6E2F0] px-5 py-3 text-sm font-black"
            >
              Sign In
            </Link>
            <Link
              href="/join"
              className="rounded-xl bg-[#0B1F3A] px-5 py-3 text-sm font-black text-white shadow-lg"
            >
              Join Globalink
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-4">
        <div className="rounded-[20px] bg-[#020817] p-4 text-white shadow-xl">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#9DB8F8]">
                Verified Product Marketplace
              </p>

              <h1 className="mt-3 max-w-3xl text-2xl font-black leading-tight md:text-3xl">
                Discover compliant products, suppliers and lab equipment.
              </h1>

              <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-slate-300">
                Find verified sellers, compliance-ready industrial products,
                certification support and trusted lab equipment partners.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/10"
                >
                  <div className="text-xl font-black">{item.value}</div>
                  <div className="mt-1 text-sm font-bold text-slate-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-3 rounded-[20px] border border-[#D6E2F0] bg-white p-3 shadow-sm">
          <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr_auto]">
            <input
              placeholder="Search product, supplier or certification"
              className="h-12 rounded-2xl border border-[#D6E2F0] px-5 text-sm font-bold outline-none focus:border-[#315EFB]"
            />
            <select className="h-12 rounded-2xl border border-[#D6E2F0] px-5 text-sm font-bold outline-none">
              <option>All Categories</option>
              <option>Certified Products</option>
              <option>Lab Equipment</option>
              <option>Safety</option>
            </select>
            <select className="h-12 rounded-2xl border border-[#D6E2F0] px-5 text-sm font-bold outline-none">
              <option>All Certifications</option>
              <option>BIS</option>
              <option>ISI</option>
              <option>NABL</option>
              <option>CE</option>
            </select>
            <button className="h-12 rounded-2xl bg-[#0B1F3A] px-10 text-sm font-black text-white">
              Search
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {filters.map((item) => (
              <button
                key={item}
                className={`rounded-full px-5 py-3 text-sm font-black ${
                  item === "All"
                    ? "bg-[#0B1F3A] text-white"
                    : "bg-[#EEF7FF] text-[#0B1F3A]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-4 grid gap-4 md:grid-cols-2">
          {products.map((item) => (
            <article
              key={item.name}
              className="rounded-[18px] border border-[#D6E2F0] bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#315EFB]">
                    {item.category}
                  </p>
                  <h2 className="mt-2 text-lg font-black text-[#07162D]">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-sm font-bold text-slate-500">
                    {item.seller} · {item.country}
                  </p>
                </div>

                <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-black text-green-700">
                  {item.status}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <Info label="Certification" value={item.certification} />
                <Info label="Seller" value={item.seller} />
                <Info label="Price" value={item.price} />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button className="rounded-xl bg-[#0B1F3A] px-4 py-2 text-sm font-black text-white">
                  View Details
                </button>
                <button className="rounded-xl border border-[#D6E2F0] px-4 py-2 text-sm font-black text-[#0B1F3A]">
                  Request Quote
                </button>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#F7F9FC] p-2">
      <p className="text-xs font-black uppercase text-slate-400">{label}</p>
      <p className="mt-2 text-sm font-black text-[#07162D]">{value}</p>
    </div>
  );
}