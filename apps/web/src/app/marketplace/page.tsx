import { prisma } from "@/lib/db";

export default async function MarketplacePage() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      seller: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });

  return (
    <div className="min-h-screen bg-[#FBE4D8] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-[#dfb6b2] bg-white shadow-sm">
          <div
            className="px-6 py-8 text-white"
            style={{
              background:
                "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
            }}
          >
            <p className="text-sm uppercase tracking-wide text-[#FBE4D8]">
              Marketplace
            </p>
            <h1 className="mt-2 text-3xl font-bold">
              Products, Equipment & Services
            </h1>
            <p className="mt-2 text-sm text-[#FBE4D8]">
              Browse real marketplace listings from verified Globalink sellers.
            </p>
          </div>
        </div>

        {products.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-[#dfb6b2] bg-white p-8 text-center shadow-sm">
            <p className="text-lg font-semibold text-[#190019]">
              No products available
            </p>
            <p className="mt-2 text-sm text-[#854F6C]">
              Sellers can add products from marketplace dashboard.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="premium-card p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#854F6C]">
                      {product.category}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-[#190019]">
                      {product.title}
                    </h2>
                  </div>
                  <span className="status-approved">Live</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#522B5B]">
                  {product.description}
                </p>

                <p className="mt-4 text-lg font-bold text-[#2B124C]">
                  ₹{product.price}
                </p>

                <p className="mt-2 text-sm text-[#854F6C]">
                  Seller: {product.seller.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}