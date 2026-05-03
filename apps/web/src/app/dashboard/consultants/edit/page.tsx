"use client";

import { useEffect, useState } from "react";

export default function EditConsultantProfilePage() {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    company: "",
    city: "",
    country: "",
    phone: "",
    whatsapp: "",
    services: "",
    experience: "",
    pricing: "",
    shortBio: "",
  });

  useEffect(() => {
    const savedUser = localStorage.getItem("globalink_user");

    if (savedUser) {
      const user = JSON.parse(savedUser);
      setUserId(user.id);
      loadProfile(user.id);
    }
  }, []);

  async function loadProfile(id: string) {
    const res = await fetch(`/api/consultants/profile?userId=${id}`);
    const data = await res.json();

    if (data.user) {
      setForm({
        company: data.user.company || "",
        city: data.user.city || "",
        country: data.user.country || "",
        phone: data.user.phone || "",
        whatsapp: data.user.whatsapp || "",
        services: data.user.consultantProfile?.services || "",
        experience: data.user.consultantProfile?.experience || "",
        pricing: data.user.consultantProfile?.pricing || "",
        shortBio: data.user.consultantProfile?.shortBio || "",
      });
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch("/api/consultants/profile", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        ...form,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("Profile updated successfully.");
    } else {
      setMessage(data.error || "Failed to update profile.");
    }
  }

  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-purple-100 bg-gradient-to-r from-[#2b064f] via-[#51245f] to-[#7b3f75] p-8 text-white shadow-2xl">
        <p className="text-sm font-semibold text-purple-100">
          Consultant Profile
        </p>

        <h1 className="mt-3 text-3xl font-extrabold">
          Edit Consultant Profile
        </h1>

        <p className="mt-2 max-w-3xl text-sm text-purple-100">
          Add proper services, experience, pricing and contact details so buyers
          can trust and contact you easily.
        </p>
      </section>

      <form
        onSubmit={handleSubmit}
        className="rounded-[30px] border border-purple-100 bg-white p-6 shadow-xl"
      >
        {message && (
          <div className="mb-5 rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700">
            {message}
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            className="inputBox"
            placeholder="Company / Firm Name"
          />

          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            className="inputBox"
            placeholder="City"
          />

          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            className="inputBox"
            placeholder="Country"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="inputBox"
            placeholder="Phone"
          />

          <input
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            className="inputBox"
            placeholder="WhatsApp Number"
          />

          <input
            name="services"
            value={form.services}
            onChange={handleChange}
            className="inputBox"
            placeholder="Services: BIS, ISO, FDA, FSSAI"
            required
          />

          <input
            name="experience"
            value={form.experience}
            onChange={handleChange}
            className="inputBox"
            placeholder="Experience: 5 Years"
            required
          />

          <input
            name="pricing"
            value={form.pricing}
            onChange={handleChange}
            className="inputBox"
            placeholder="Pricing: ₹15,000 onwards"
            required
          />
        </div>

        <textarea
          name="shortBio"
          value={form.shortBio}
          onChange={handleChange}
          className="inputBox mt-4 min-h-32"
          placeholder="Short Bio"
        />

        <button className="mt-6 rounded-2xl bg-gradient-to-r from-[#2b064f] to-[#7b3f75] px-7 py-3 text-sm font-bold text-white shadow-lg">
          Save Profile
        </button>
      </form>
    </div>
  );
}