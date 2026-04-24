"use client";

import { useState } from "react";
import { COUNTRIES, LANGS } from "@/lib/countries";

export default function ConsultantRegisterForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setMsg(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      displayName: fd.get("displayName"),
      country: fd.get("country"),
      languages: fd.getAll("languages"),
      headline: fd.get("headline") || undefined,
      about: fd.get("about") || undefined,
      categories: fd.getAll("categories"),
      currency: fd.get("currency") || "USD",
      hourlyRateCents: Number(fd.get("hourlyRate") || 0) * 100
    };

    const res = await fetch("/api/consultants/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const json = await res.json();
    if (res.ok) setMsg("Registered successfully! 🎉");
    else setMsg(json?.error ? "Error: " + JSON.stringify(json.error) : "Failed.");
    setLoading(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {msg && <p className="text-sm">{msg}</p>}

      <div>
        <label className="block text-sm font-medium">Display name</label>
        <input name="displayName" required className="input" />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium">Country</label>
          <select name="country" required className="input">
            {COUNTRIES.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Currency</label>
          <select name="currency" className="input">
            <option>USD</option><option>INR</option><option>EUR</option><option>AED</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Languages</label>
        <div className="grid sm:grid-cols-3 gap-2">
          {LANGS.map(l => (
            <label key={l.code} className="flex gap-2 items-center">
              <input type="checkbox" name="languages" value={l.code} /> {l.name}
            </label>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium">Headline</label>
          <input name="headline" placeholder="BIS / ISO / GeM Consultant" className="input" />
        </div>
        <div>
          <label className="block text-sm font-medium">Hourly Rate</label>
          <input name="hourlyRate" type="number" min="0" step="1" className="input" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">About</label>
        <textarea name="about" rows={5} className="input" />
      </div>

      <div>
        <label className="block text-sm font-medium">Categories</label>
        <div className="grid sm:grid-cols-3 gap-2">
          {/* Replace with dynamic categories from DB later */}
          {["BIS", "ISO", "GeM", "Food", "Medical", "Environmental"].map((c, i) => (
            <label key={i} className="flex gap-2 items-center">
              <input type="checkbox" name="categories" value={String(i+1)} /> {c}
            </label>
          ))}
        </div>
      </div>

      <button disabled={loading} className="btn-primary">
        {loading ? "Submitting..." : "Register as Consultant"}
      </button>
    </form>
  );
}
