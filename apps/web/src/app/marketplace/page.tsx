import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";

type Product = {
  name: string;
  category?: string;
  seller?: string;
  country?: string;
  certification?: string;
  status?: string;
  price?: string;
};

const products: Product[] = [];

const stats = [
  { label: "Verified Products" },
  { label: "Supplier Discovery" },
  { label: "Compliance Categories" },
];

const filters = ["All", "BIS", "ISI", "NABL", "CE", "Safety", "Lab Equipment"];

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-[#F7F9FC] text-[#07162D]">
      <PublicNavbar />

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
                  <div className="text-sm font-black leading-5 text-white">
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
              aria-label="Search marketplace products or suppliers"
            />
            <select className="h-12 rounded-2xl border border-[#D6E2F0] px-5 text-sm font-bold outline-none" aria-label="Filter by product category">
              <option>All Categories</option>
              <option>Certified Products</option>
              <option>Lab Equipment</option>
              <option>Safety</option>
            </select>
            <select className="h-12 rounded-2xl border border-[#D6E2F0] px-5 text-sm font-bold outline-none" aria-label="Filter by certification">
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
          {products.length === 0 ? (
            <div className="col-span-full rounded-[18px] border border-[#D6E2F0] bg-white p-10 text-center shadow-sm">
              <h2 className="text-2xl font-black text-[#07162D]">
                No verified products available yet.
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                Join Globalink and submit your product or supplier profile for verification.
              </p>

              <Link
                href="/join"
                className="mt-6 inline-flex rounded-xl bg-[#0B1F3A] px-6 py-3 text-sm font-black text-white"
              >
                Join as Supplier
              </Link>
            </div>
          ) : (
            products.map((item) => (
              <article
                key={item.name}
                className="rounded-[18px] border border-[#D6E2F0] bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {item.category && (
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#315EFB]">
                        {item.category}
                      </p>
                    )}

                    <h2 className="mt-2 text-lg font-black text-[#07162D]">
                      {item.name}
                    </h2>

                    {(item.seller || item.country) && (
                      <p className="mt-2 text-sm font-bold text-slate-500">
                        {[item.seller, item.country].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>

                  {item.status && (
                    <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-black text-green-700">
                      {item.status}
                    </span>
                  )}
                </div>

                {(item.certification || item.seller || item.price) && (
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {item.certification && (
                      <Info label="Certification" value={item.certification} />
                    )}
                    {item.seller && <Info label="Seller" value={item.seller} />}
                    {item.price && <Info label="Price" value={item.price} />}
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="rounded-xl bg-[#0B1F3A] px-4 py-2 text-sm font-black text-white">
                    View Details
                  </button>
                  <button className="rounded-xl border border-[#D6E2F0] px-4 py-2 text-sm font-black text-[#0B1F3A]">
                    Request Quote
                  </button>
                </div>
              </article>
            ))
          )}
        </section>
      </section>
      <PublicFooter />
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