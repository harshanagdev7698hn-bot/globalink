"use client";

import { useState } from "react";
import { apiFetch } from "@/lib/api";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [ok, setOk] = useState<null | boolean>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiFetch("/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, message })
      });
      setOk(true);
      setName(""); setEmail(""); setMessage("");
    } catch {
      setOk(false);
    }
  };

  return (
    <div className="container-page py-10">
      <h1 className="text-2xl font-semibold">Talk to us</h1>
      <p className="text-slate-600 mt-1">
        Our compliance concierge will help you with BIS / ISO / MSCD / CRS.
      </p>

      <form onSubmit={submit} className="card p-6 mt-6 max-w-xl">
        <label className="block text-sm text-slate-700">Name</label>
        <input
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="block text-sm text-slate-700 mt-4">Email</label>
        <input
          type="email"
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block text-sm text-slate-700 mt-4">Message</label>
        <textarea
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 min-h-[120px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button
          className="mt-6 rounded-md bg-brand-600 text-white px-4 py-2 hover:bg-brand-700"
          type="submit"
        >
          Send
        </button>

        {ok === true && (
          <p className="text-green-600 text-sm mt-3">Thanks! We’ll get back soon.</p>
        )}
        {ok === false && (
          <p className="text-red-600 text-sm mt-3">Could not send. Try again.</p>
        )}
      </form>
    </div>
  );
}
