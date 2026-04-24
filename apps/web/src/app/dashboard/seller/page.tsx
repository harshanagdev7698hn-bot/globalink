// src/app/dashboard/seller/page.tsx
import React from "react";

export default function SellerDashboardPage() {
  const products = [
    {
      name: "Food safety test kit – Basic",
      sku: "KIT-FS-01",
      price: "₹4,500",
      stock: 34,
      status: "Active",
    },
    {
      name: "Digital moisture meter",
      sku: "EQP-MST-07",
      price: "₹18,900",
      stock: 12,
      status: "Low stock",
    },
    {
      name: "pH buffer solution pack",
      sku: "CHEM-PH-03",
      price: "₹1,250",
      stock: 0,
      status: "Out of stock",
    },
  ];

  return (
    <main className="min-h-[calc(100vh-80px)] bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 px-4 py-6 text-slate-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Header */}
        <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Seller dashboard
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              Manage your <span className="text-fuchsia-400">storefront</span> &
              performance
            </h1>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              Track orders, keep stock updated and optimise your lab equipment &
              consumable listings.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-200 hover:border-fuchsia-400 hover:text-white">
              Manage listings
            </button>
            <button className="rounded-full bg-fuchsia-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-fuchsia-500/40 hover:bg-fuchsia-400">
              Add new product
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-emerald-500/30 bg-slate-950/85 p-4">
            <p className="text-xs font-medium text-slate-300">Today&apos;s orders</p>
            <p className="mt-2 text-2xl font-semibold">12</p>
            <p className="mt-1 text-xs text-slate-400">₹86,400 in GMV</p>
          </div>

          <div className="rounded-2xl border border-sky-500/35 bg-slate-950/85 p-4">
            <p className="text-xs font-medium text-slate-300">7-day performance</p>
            <p className="mt-2 text-2xl font-semibold">+18%</p>
            <p className="mt-1 text-xs text-slate-400">vs previous 7 days</p>
          </div>

          <div className="rounded-2xl border border-amber-400/40 bg-slate-950/85 p-4">
            <p className="text-xs font-medium text-slate-300">Low / out of stock</p>
            <p className="mt-2 text-2xl font-semibold">04</p>
            <p className="mt-1 text-xs text-amber-300/90">
              Restock to avoid losing visibility
            </p>
          </div>
        </section>

        {/* Products + tips */}
        <section className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          {/* Product list */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/85 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h2 className="text-sm font-semibold sm:text-base">
                  Key products & stock
                </h2>
                <p className="text-xs text-slate-500">
                  Prioritise items that drive most of your revenue.
                </p>
              </div>
              <button className="rounded-full border border-slate-700 px-3 py-1 text-[11px] text-slate-300 hover:border-fuchsia-400 hover:text-white">
                View full catalog
              </button>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="pb-2 pr-4 font-normal">Product</th>
                    <th className="pb-2 pr-4 font-normal">SKU</th>
                    <th className="pb-2 pr-4 font-normal">Price</th>
                    <th className="pb-2 pr-4 font-normal">Stock</th>
                    <th className="pb-2 font-normal">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr
                      key={p.sku}
                      className="border-b border-slate-900 last:border-0 hover:bg-slate-900/60"
                    >
                      <td className="py-2 pr-4 text-xs text-slate-100 sm:text-sm">
                        {p.name}
                      </td>
                      <td className="py-2 pr-4 font-mono text-[11px] text-slate-400 sm:text-xs">
                        {p.sku}
                      </td>
                      <td className="py-2 pr-4 text-xs text-slate-100 sm:text-sm">
                        {p.price}
                      </td>
                      <td className="py-2 pr-4 text-xs text-slate-100 sm:text-sm">
                        {p.stock}
                      </td>
                      <td className="py-2 text-[11px] sm:text-xs">
                        {p.status === "Active" && (
                          <span className="inline-flex rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-200">
                            Active
                          </span>
                        )}
                        {p.status === "Low stock" && (
                          <span className="inline-flex rounded-full border border-amber-400/60 bg-amber-500/10 px-2 py-0.5 text-[11px] text-amber-100">
                            Low stock
                          </span>
                        )}
                        {p.status === "Out of stock" && (
                          <span className="inline-flex rounded-full border border-rose-400/60 bg-rose-500/10 px-2 py-0.5 text-[11px] text-rose-100">
                            Out of stock
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Side */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-fuchsia-500/15 via-slate-950 to-slate-950 p-4">
              <h3 className="text-sm font-semibold text-slate-100">
                Listing health score
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                Optimise content, pricing and delivery for better conversion.
              </p>

              <div className="mt-4">
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Overall score</span>
                  <span className="font-medium text-fuchsia-300">81/100</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[81%] rounded-full bg-fuchsia-400" />
                </div>
              </div>

              <ul className="mt-3 space-y-2 text-xs text-slate-200">
                <li>• Add detailed specs for 3 products</li>
                <li>• Enable express delivery for high demand items</li>
                <li>• Upload 2–3 real lab photos for trust</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4">
              <h3 className="text-sm font-semibold text-slate-100">
                Customer feedback snapshot
              </h3>
              <p className="mt-1 text-xs text-slate-400">Recent highlights.</p>

              <ul className="mt-3 space-y-2 text-xs text-slate-200">
                <li>⭐ 4.8 average rating (last 50 orders)</li>
                <li>• Buyers love on-time dispatch & packaging quality</li>
                <li>• Suggested: add video for calibration process demo</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
