import MainLayout from "@/components/MainLayout";

const products = [
  {
    name: "Lab Testing Equipment",
    category: "Lab Equipment",
    seller: "Verified Supplier",
    price: "₹25,000 onwards",
  },
  {
    name: "ISI Mark Product Support",
    category: "Certification Support",
    seller: "Compliance Partner",
    price: "Contact for price",
  },
  {
    name: "Industrial Safety Products",
    category: "Safety",
    seller: "Trusted Seller",
    price: "₹5,000 onwards",
  },
];

export default function MarketplacePage() {
  return (
    <MainLayout>
      <section className="rounded-[28px] border border-[#dfb6b2] bg-white p-3 shadow-sm">
        <div
          className="rounded-[24px] px-7 py-10 text-white"
          style={{
            background:
              "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
          }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#FBE4D8]">
            Marketplace
          </p>
          <h1 className="mt-3 text-4xl font-bold">Globalink Marketplace</h1>
          <p className="mt-3 text-sm text-[#FBE4D8]">
            Discover verified products, lab equipment and certification services.
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {products.map((item) => (
          <div
            key={item.name}
            className="rounded-[24px] border border-[#dfb6b2] bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-semibold text-[#854F6C]">
              {item.category}
            </p>

            <h2 className="mt-3 text-xl font-bold text-[#190019]">
              {item.name}
            </h2>

            <p className="mt-2 text-sm text-[#522B5B]">{item.seller}</p>

            <p className="mt-4 text-lg font-bold text-[#190019]">
              {item.price}
            </p>

            <button
              className="mt-5 rounded-xl px-4 py-2 text-sm font-bold text-white"
              style={{
                background:
                  "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </section>
    </MainLayout>
  );
}