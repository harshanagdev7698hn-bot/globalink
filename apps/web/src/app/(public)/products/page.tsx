export default function PublicProductsPage() {
  return (
    <main className="min-h-screen bg-[#fff4ed] px-6 py-16">
      <section className="mx-auto max-w-5xl rounded-[32px] border border-purple-100 bg-white p-8 shadow-xl">
        <p className="text-sm font-bold text-purple-700">
          Globalink Marketplace
        </p>

        <h1 className="mt-3 text-3xl font-extrabold text-slate-950">
          Certified Products & Lab Equipment
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          Explore certified products, ISI-marked products and lab equipment from
          verified sellers.
        </p>

        <div className="mt-8 rounded-2xl bg-slate-50 p-6">
          <h2 className="text-lg font-extrabold text-slate-950">
            Product marketplace is available inside dashboard
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Login to explore verified seller products and certification tags.
          </p>
        </div>
      </section>
    </main>
  );
}