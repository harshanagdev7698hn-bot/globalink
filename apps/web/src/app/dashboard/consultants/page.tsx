"use client";

import { useEffect, useState } from "react";

type ConsultantProfile = {
  id: string;
  company?: string | null;
  expertise: string;
  country: string;
  city?: string | null;
  services: string;
  experienceYears: number;
  pricing?: string | null;
  phone?: string | null;
  whatsapp?: string | null;
  website?: string | null;
  bio?: string | null;
  averageRating: number;
  totalReviews: number;
  responseTime?: string | null;
  gstNumber?: string | null;
  msmeNumber?: string | null;
  gstFile?: string | null;
  msmeFile?: string | null;
  verificationStatus?: string | null;
  user?: { name: string; email: string };
};

export default function ConsultantsDashboardPage() {
  const [profile, setProfile] = useState<ConsultantProfile | null>(null);
  const [fetching, setFetching] = useState(true);
  const [saving, setSaving] = useState(false);

  const [company, setCompany] = useState("");
  const [expertise, setExpertise] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [services, setServices] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [pricing, setPricing] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");
  const [responseTime, setResponseTime] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [msmeNumber, setMsmeNumber] = useState("");
  const [gstFile, setGstFile] = useState<File | null>(null);
  const [msmeFile, setMsmeFile] = useState<File | null>(null);
  const [existingGstFile, setExistingGstFile] = useState("");
  const [existingMsmeFile, setExistingMsmeFile] = useState("");

  const fillForm = (data: ConsultantProfile) => {
    setCompany(data.company || "");
    setExpertise(data.expertise || "");
    setCountry(data.country || "");
    setCity(data.city || "");
    setServices(data.services || "");
    setExperienceYears(String(data.experienceYears || ""));
    setPricing(data.pricing || "");
    setPhone(data.phone || "");
    setWhatsapp(data.whatsapp || "");
    setWebsite(data.website || "");
    setBio(data.bio || "");
    setResponseTime(data.responseTime || "");
    setGstNumber(data.gstNumber || "");
    setMsmeNumber(data.msmeNumber || "");
    setExistingGstFile(data.gstFile || "");
    setExistingMsmeFile(data.msmeFile || "");
  };

  const fetchMyProfile = async () => {
    try {
      setFetching(true);
      const res = await fetch("/api/consultants/my", {
        credentials: "include",
        cache: "no-store",
      });
      const data = await res.json();

      if (res.ok && data.profile) {
        setProfile(data.profile);
        fillForm(data.profile);
      } else {
        setProfile(null);
      }
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchMyProfile();
  }, []);

  const uploadOneFile = async (file: File | null) => {
    if (!file) return "";

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.fileUrl || "";
  };

  const handleSave = async () => {
    if (!expertise || !country || !services) {
      alert("Please fill expertise, country and services");
      return;
    }

    setSaving(true);

    try {
      const newGstFileUrl = await uploadOneFile(gstFile);
      const newMsmeFileUrl = await uploadOneFile(msmeFile);

      const payload = {
        company,
        expertise,
        country,
        city,
        services,
        experienceYears,
        pricing,
        phone,
        whatsapp,
        website,
        bio,
        responseTime,
        gstNumber,
        msmeNumber,
        gstFile: newGstFileUrl || existingGstFile,
        msmeFile: newMsmeFileUrl || existingMsmeFile,
      };

      const res = await fetch(profile ? "/api/consultants/my" : "/api/consultants", {
        method: profile ? "PUT" : "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Save failed");
        return;
      }

      alert(profile ? "Profile updated successfully" : "Profile created successfully");
      fetchMyProfile();
    } finally {
      setSaving(false);
    }
  };

  if (fetching) {
    return (
      <div className="rounded-3xl border border-[#dfb6b2] bg-white p-8 shadow-sm">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-[#dfb6b2] bg-white p-3 shadow-sm">
        <div
          className="rounded-[24px] px-7 py-9 text-white shadow-md"
          style={{
            background:
              "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
          }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#FBE4D8]">
            Consultant Dashboard
          </p>
          <h1 className="mt-3 text-4xl font-bold">
            {profile ? "Edit Consultant Profile" : "Create Consultant Profile"}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-[#FBE4D8]">
            Manage your services, contact details, GST, MSME and business verification documents.
          </p>
        </div>
      </section>

      {profile && (
        <section className="rounded-[28px] border border-[#dfb6b2] bg-white p-7 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-sm font-medium text-[#854F6C]">Current Profile</p>
              <h2 className="mt-2 text-3xl font-bold text-[#190019]">
                {profile.user?.name || "Consultant"}
              </h2>
              <p className="mt-1 text-[#522B5B]">{profile.expertise}</p>
              <p className="mt-1 text-sm text-[#854F6C]">
                {profile.city}, {profile.country}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-yellow-100 px-4 py-2 text-xs font-bold text-yellow-800">
                {profile.verificationStatus || "PENDING"}
              </span>
              <span className="rounded-full bg-[#FBE4D8] px-4 py-2 text-xs font-bold text-[#190019]">
                ⭐ {profile.averageRating || 0}
              </span>
              <span className="rounded-full bg-[#fff8f7] px-4 py-2 text-xs font-bold text-[#854F6C]">
                {profile.totalReviews || 0} Reviews
              </span>
            </div>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-[#dfb6b2] bg-[#fff8f7] p-6">
              <h3 className="text-xl font-bold text-[#190019]">GST Certificate</h3>
              {existingGstFile ? (
                <a
                  href={existingGstFile}
                  target="_blank"
                  className="mt-4 inline-block rounded-xl bg-[#2B124C] px-4 py-2 text-sm font-bold text-white"
                >
                  View GST File
                </a>
              ) : (
                <p className="mt-4 text-sm text-[#854F6C]">Not uploaded</p>
              )}
            </div>

            <div className="rounded-3xl border border-[#dfb6b2] bg-[#fff8f7] p-6">
              <h3 className="text-xl font-bold text-[#190019]">MSME Certificate</h3>
              {existingMsmeFile ? (
                <a
                  href={existingMsmeFile}
                  target="_blank"
                  className="mt-4 inline-block rounded-xl bg-[#2B124C] px-4 py-2 text-sm font-bold text-white"
                >
                  View MSME File
                </a>
              ) : (
                <p className="mt-4 text-sm text-[#854F6C]">Not uploaded</p>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="rounded-[28px] border border-[#dfb6b2] bg-white p-7 shadow-sm">
        <h2 className="text-3xl font-bold text-[#190019]">Update Profile Details</h2>
        <p className="mt-2 text-sm text-[#854F6C]">
          Buyers will see these details on your public profile.
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {[
            ["Company", company, setCompany],
            ["Main expertise *", expertise, setExpertise],
            ["Country *", country, setCountry],
            ["City", city, setCity],
            ["Experience years", experienceYears, setExperienceYears],
            ["Pricing", pricing, setPricing],
            ["Phone", phone, setPhone],
            ["WhatsApp", whatsapp, setWhatsapp],
            ["Website", website, setWebsite],
            ["Response time", responseTime, setResponseTime],
            ["GST Number", gstNumber, setGstNumber],
            ["MSME Number", msmeNumber, setMsmeNumber],
          ].map(([placeholder, value, setter]: any) => (
            <input
              key={placeholder}
              placeholder={placeholder}
              value={value}
              onChange={(e) => setter(e.target.value)}
              className="h-14 rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] px-4 text-[#190019] outline-none"
            />
          ))}

          <input
            placeholder="Services *"
            value={services}
            onChange={(e) => setServices(e.target.value)}
            className="h-14 rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] px-4 text-[#190019] outline-none md:col-span-2"
          />

          <div className="rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] p-4">
            <label className="mb-2 block text-sm font-bold text-[#190019]">
              GST Certificate
            </label>
            <input type="file" onChange={(e) => setGstFile(e.target.files?.[0] || null)} />
          </div>

          <div className="rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] p-4">
            <label className="mb-2 block text-sm font-bold text-[#190019]">
              MSME Certificate
            </label>
            <input type="file" onChange={(e) => setMsmeFile(e.target.files?.[0] || null)} />
          </div>

          <textarea
            placeholder="Short bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="min-h-[130px] rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] p-4 text-[#190019] outline-none md:col-span-2"
          />
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="mt-6 rounded-2xl px-6 py-4 text-sm font-bold text-white shadow-md"
          style={{
            background:
              "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
          }}
        >
          {saving ? "Saving..." : "Update Consultant Profile"}
        </button>
      </section>
    </div>
  );
}