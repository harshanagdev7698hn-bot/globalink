"use client";

import { useEffect, useState } from "react";
import RoleGuard from "@/components/RoleGuard";

type ConsultantProfile = {
  fullName: string;
  email: string;
  expertise: string;
  experience: string;
  city: string;
  country: string;
  hourlyRate: string;
  languages: string;
  about: string;
  gstNumber: string;
  msmeNumber: string;
  gstFileUrl: string;
  msmeFileUrl: string;
};

export default function ConsultantDashboardPage() {
  const [profile, setProfile] = useState<ConsultantProfile>({
    fullName: "",
    email: "",
    expertise: "BIS",
    experience: "",
    city: "",
    country: "",
    hourlyRate: "",
    languages: "",
    about: "",
    gstNumber: "",
    msmeNumber: "",
    gstFileUrl: "",
    msmeFileUrl: "",
  });

  const [gstFile, setGstFile] = useState<File | null>(null);
  const [msmeFile, setMsmeFile] = useState<File | null>(null);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("globalink_user");
    const oldProfile = localStorage.getItem("globalink_consultant_profile");

    if (oldProfile) {
      setProfile(JSON.parse(oldProfile));
      return;
    }

    if (user) {
      const parsedUser = JSON.parse(user);
      setProfile((prev) => ({
        ...prev,
        fullName: parsedUser.name || "",
        email: parsedUser.email || "",
        country: parsedUser.country || "",
      }));
    }
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  }

  async function uploadFile(file: File) {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Upload failed");
    }

    return data.fileUrl;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      let gstFileUrl = profile.gstFileUrl;
      let msmeFileUrl = profile.msmeFileUrl;

      if (gstFile) {
        gstFileUrl = await uploadFile(gstFile);
      }

      if (msmeFile) {
        msmeFileUrl = await uploadFile(msmeFile);
      }

      const finalProfile = {
        ...profile,
        gstFileUrl,
        msmeFileUrl,
      };

      localStorage.setItem(
        "globalink_consultant_profile",
        JSON.stringify(finalProfile)
      );

      setProfile(finalProfile);
      setSaved(true);
      alert("Consultant profile and documents saved successfully");
    } catch (error) {
      alert("Document upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <RoleGuard
      allowed={["CONSULTANT", "ADMIN"]}
      message="Only consultants can create or edit consultant profile."
    >
      <div className="space-y-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#190019] to-[#522B5B] p-8 text-white shadow">
          <p className="tracking-[0.3em] text-sm">CONSULTANT PROFILE</p>
          <h1 className="mt-3 text-4xl font-bold">
            Create & Manage Your Consultant Profile
          </h1>
          <p className="mt-3 text-white/80">
            Add expertise, GST/MSME details and upload verification documents.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold text-[#190019]">Profile Details</h2>

            <div className="mt-6 grid gap-4">
              <input
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="rounded-xl border border-[#dfb6b2] p-3"
              />

              <input
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Email"
                type="email"
                required
                className="rounded-xl border border-[#dfb6b2] p-3"
              />

              <select
                name="expertise"
                value={profile.expertise}
                onChange={handleChange}
                className="rounded-xl border border-[#dfb6b2] p-3"
              >
                <option value="BIS">BIS Consultant</option>
                <option value="ISO">ISO Consultant</option>
                <option value="GeM">GeM Consultant</option>
                <option value="Food">Food Certification</option>
                <option value="Medical">Medical Compliance</option>
                <option value="Export">Export / Import</option>
              </select>

              <input
                name="experience"
                value={profile.experience}
                onChange={handleChange}
                placeholder="Experience e.g. 5 years"
                required
                className="rounded-xl border border-[#dfb6b2] p-3"
              />

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  name="city"
                  value={profile.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                  className="rounded-xl border border-[#dfb6b2] p-3"
                />

                <input
                  name="country"
                  value={profile.country}
                  onChange={handleChange}
                  placeholder="Country"
                  required
                  className="rounded-xl border border-[#dfb6b2] p-3"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  name="hourlyRate"
                  value={profile.hourlyRate}
                  onChange={handleChange}
                  placeholder="Hourly Rate e.g. ₹1500/hr"
                  className="rounded-xl border border-[#dfb6b2] p-3"
                />

                <input
                  name="languages"
                  value={profile.languages}
                  onChange={handleChange}
                  placeholder="Languages e.g. English, Hindi"
                  className="rounded-xl border border-[#dfb6b2] p-3"
                />
              </div>

              <textarea
                name="about"
                value={profile.about}
                onChange={handleChange}
                placeholder="About your consulting services"
                rows={4}
                required
                className="rounded-xl border border-[#dfb6b2] p-3"
              />

              <h3 className="pt-4 text-xl font-bold text-[#190019]">
                Verification Documents
              </h3>

              <input
                name="gstNumber"
                value={profile.gstNumber}
                onChange={handleChange}
                placeholder="GST Number"
                className="rounded-xl border border-[#dfb6b2] p-3"
              />

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.webp"
                onChange={(e) => setGstFile(e.target.files?.[0] || null)}
                className="rounded-xl border border-[#dfb6b2] p-3"
              />

              <input
                name="msmeNumber"
                value={profile.msmeNumber}
                onChange={handleChange}
                placeholder="MSME / Udyam Number"
                className="rounded-xl border border-[#dfb6b2] p-3"
              />

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.webp"
                onChange={(e) => setMsmeFile(e.target.files?.[0] || null)}
                className="rounded-xl border border-[#dfb6b2] p-3"
              />

              <button
                disabled={loading}
                className="rounded-xl bg-gradient-to-r from-[#2B124C] to-[#522B5B] px-5 py-3 font-bold text-white"
              >
                {loading ? "Saving..." : "Save Consultant Profile"}
              </button>

              {saved && (
                <p className="rounded-xl bg-green-50 p-3 text-green-700">
                  Profile saved successfully.
                </p>
              )}
            </div>
          </form>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold text-[#190019]">Profile Preview</h2>

            <div className="mt-6 rounded-3xl border border-[#dfb6b2] p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2B124C] text-2xl font-bold text-white">
                {profile.fullName ? profile.fullName.charAt(0).toUpperCase() : "C"}
              </div>

              <h3 className="mt-4 text-2xl font-bold text-[#190019]">
                {profile.fullName || "Consultant Name"}
              </h3>

              <p className="mt-1 text-[#854F6C]">{profile.expertise}</p>

              <div className="mt-5 space-y-2 text-sm text-[#522B5B]">
                <p><b>Email:</b> {profile.email || "-"}</p>
                <p><b>Experience:</b> {profile.experience || "-"}</p>
                <p><b>Location:</b> {profile.city || "-"}, {profile.country || "-"}</p>
                <p><b>Rate:</b> {profile.hourlyRate || "-"}</p>
                <p><b>Languages:</b> {profile.languages || "-"}</p>
                <p><b>GST:</b> {profile.gstNumber || "Not added"}</p>
                <p><b>MSME:</b> {profile.msmeNumber || "Not added"}</p>
              </div>

              <div className="mt-5 space-y-2">
                <p className="font-bold text-[#190019]">Document Status</p>

                <p className={profile.gstFileUrl ? "text-green-700" : "text-red-600"}>
                  {profile.gstFileUrl ? "GST document uploaded" : "GST document not uploaded"}
                </p>

                <p className={profile.msmeFileUrl ? "text-green-700" : "text-red-600"}>
                  {profile.msmeFileUrl ? "MSME document uploaded" : "MSME document not uploaded"}
                </p>
              </div>

              <p className="mt-5 text-[#190019]">
                {profile.about || "Your about section will appear here."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </RoleGuard>
  );
}