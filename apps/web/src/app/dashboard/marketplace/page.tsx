"use client";

import { useEffect, useState } from "react";

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  createdAt: string;
};

export default function MarketplaceDashboardPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const fetchMyProducts = async () => {
    try {
      setFetching(true);
      const res = await fetch("/api/products/my");
      const data = await res.json();

      if (res.ok) {
        setProducts(data.products || []);
      }
    } catch (error) {
      console.error("Failed to fetch products");
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchMyProducts();
  }, []);

  const handleSubmit = async () => {
    if (!title || !description || !price || !category) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          description,
          price,
          category
        })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to add product");
        return;
      }

      alert("Product added successfully");

      setTitle("");
      setDescription("");
      setPrice("");
      setCategory("");

      fetchMyProducts();
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-3xl border border-[#dfb6b2] bg-white shadow-sm">
        <div
          className="px-6 py-8 text-white"
          style={{
            background:
              "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
          }}
        >
          <p className="text-sm uppercase tracking-wide text-[#FBE4D8]">
            Marketplace Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-bold">
            Add & Manage Your Products
          </h1>
          <p className="mt-2 text-sm text-[#FBE4D8]">
            Publish listings, manage seller inventory and grow visibility.
          </p>
        </div>
      </div>

      <div className="glass-panel p-6">
        <h2 className="text-2xl font-bold text-[#190019]">Add New Product</h2>
        <p className="mt-1 text-sm text-[#854F6C]">
          Fill product details to publish it in Globalink marketplace.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Product title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
          />

          <input
            type="text"
            placeholder="Short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-5 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          style={{
            background:
              "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
          }}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </div>

      <div className="glass-panel p-6">
        <h2 className="text-2xl font-bold text-[#190019]">My Products</h2>
        <p className="mt-1 text-sm text-[#854F6C]">
          Your recently added marketplace listings.
        </p>

        {fetching ? (
          <div className="mt-6 text-sm text-[#854F6C]">Loading products...</div>
        ) : products.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] p-6 text-sm text-[#854F6C]">
            No products added yet.
          </div>
        ) : (
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="premium-card p-5"
              >
                <p className="text-xs uppercase tracking-wide text-[#854F6C]">
                  {product.category}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#190019]">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm text-[#522B5B]">
                  {product.description}
                </p>
                <p className="mt-4 text-lg font-semibold text-[#2B124C]">
                  ₹{product.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}