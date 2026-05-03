"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Role = "CONSULTANT" | "LAB" | "SELLER" | "BUYER";

export default function JoinPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("CONSULTANT");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const isBusinessRole =
    role === "CONSULTANT" || role === "LAB" || role === "SELLER";

  async function uploadFile(file: File | null) {
    if (!file) return "";

    const uploadData = new FormData();
    uploadData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: uploadData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "File upload failed");
    }

    return data.fileUrl || "";
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData(e.currentTarget);

      const gstFileInput = formData.get("gstFile") as File | null;
      const msmeFileInput = formData.get("msmeFile") as File | null;
      const nablFileInput = formData.get("nablFile") as File | null;
      const bisApprovalFileInput = formData.get("bisApprovalFile") as File | null;
      const bisLicenceFileInput = formData.get("bisLicenceFile") as File | null;

      const gstFile = await uploadFile(
        gstFileInput && gstFileInput.size > 0 ? gstFileInput : null
      );

      const msmeFile = await uploadFile(
        msmeFileInput && msmeFileInput.size > 0 ? msmeFileInput : null
      );

      const nablFile = await uploadFile(
        nablFileInput && nablFileInput.size > 0 ? nablFileInput : null
      );

      const bisApprovalFile = await uploadFile(
        bisApprovalFileInput && bisApprovalFileInput.size > 0
          ? bisApprovalFileInput
          : null
      );

      const bisLicenceFile = await uploadFile(
        bisLicenceFileInput && bisLicenceFileInput.size > 0
          ? bisLicenceFileInput
          : null
      );

      const payload = {
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        password: String(formData.get("password") || "").trim(),
        role,

        phone: String(formData.get("phone") || "").trim(),
        whatsapp: String(formData.get("whatsapp") || "").trim(),
        country: String(formData.get("country") || "").trim(),
        city: String(formData.get("city") || "").trim(),
        company: String(formData.get("company") || "").trim(),

        gstNumber: String(formData.get("gstNumber") || "").trim(),
        gstFile,

        services: String(formData.get("services") || "").trim(),
        experience: String(formData.get("experience") || "").trim(),
        pricing: String(formData.get("pricing") || "").trim(),
        msmeNumber: String(formData.get("msmeNumber") || "").trim(),
        msmeFile,
        shortBio: String(formData.get("shortBio") || "").trim(),

        nablFile,
        bisApprovalFile,
        labScope: String(formData.get("labScope") || "").trim(),
        testingCategories: String(formData.get("testingCategories") || "").trim(),
        contactPerson: String(formData.get("contactPerson") || "").trim(),

        bisLicenceNo: String(formData.get("bisLicenceNo") || "").trim(),
        bisLicenceFile,
        productCategory: String(formData.get("productCategory") || "").trim(),
        brandName: String(formData.get("brandName") || "").trim(),
        factoryAddress: String(formData.get("factoryAddress") || "").trim(),

        buyerRequirement: String(formData.get("buyerRequirement") || "").trim(),
      };

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Something went wrong.");
        return;
      }

      localStorage.setItem("globalink_user", JSON.stringify(data.user));
      localStorage.setItem("globalink_logged_in", "true");

      setMessage("Account submitted for verification successfully.");

      setTimeout(() => {
        router.push("/dashboard");
      }, 900);
    } catch (error) {
      console.error(error);
      setMessage("File upload or registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl rounded-3xl border border-purple-100 bg-white p-8 shadow-2xl"
      >
        <h1 className="text-2xl font-extrabold text-slate-950">
          Create Trusted Account
        </h1>

        <p className="mt-2 text-sm text-slate-600">
          Register on Globalink with verified details to build trust.
        </p>

        <div className="mt-4 rounded-2xl bg-purple-50 p-4 text-sm font-medium text-purple-800">
          All accounts are manually verified by Globalink. Unverified users will
          not be visible in the marketplace.
        </div>

        {message && (
          <div className="mt-4 rounded-2xl bg-amber-50 p-4 text-sm font-bold text-amber-800">
            {message}
          </div>
        )}

        <div className="mt-6">
          <label className="text-sm font-bold text-slate-700">
            Select Role
          </label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="inputBox mt-2"
            name="role"
          >
            <option value="CONSULTANT">Consultant</option>
            <option value="LAB">Lab</option>
            <option value="SELLER">Seller</option>
            <option value="BUYER">Buyer</option>
          </select>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <input name="name" className="inputBox" placeholder="Full Name" required />
          <input name="email" className="inputBox" placeholder="Email" type="email" required />
          <input name="password" className="inputBox" placeholder="Password" type="password" required />
          <input name="phone" className="inputBox" placeholder="Phone" />
          <input name="whatsapp" className="inputBox" placeholder="WhatsApp" />
          <input name="country" className="inputBox" placeholder="Country" />
          <input name="city" className="inputBox" placeholder="City" />
          <input
            name="company"
            className="inputBox"
            placeholder={
              role === "BUYER"
                ? "Company / Firm Name (Optional)"
                : "Company / Firm Name"
            }
          />
        </div>

        {isBusinessRole && (
          <div className="mt-6">
            <h2 className="text-lg font-bold text-slate-950">
              GST Verification Mandatory
            </h2>

            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <input
                name="gstNumber"
                className="inputBox"
                placeholder="GST Number"
                required
              />

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Upload GST Certificate
                </label>
                <input name="gstFile" type="file" className="fileBox" required />
              </div>
            </div>
          </div>
        )}

        {role === "CONSULTANT" && (
          <div className="mt-6">
            <h2 className="text-lg font-bold text-slate-950">
              Consultant Details
            </h2>

            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <input
                name="services"
                className="inputBox"
                placeholder="Services: BIS, ISO, FDA, FSSAI"
                required
              />

              <input
                name="experience"
                className="inputBox"
                placeholder="Experience: 5 Years"
                required
              />

              <input
                name="pricing"
                className="inputBox"
                placeholder="Starting Price: ₹15,000 onwards"
                required
              />

              <input
                name="msmeNumber"
                className="inputBox"
                placeholder="MSME Number Optional"
              />

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Upload MSME Certificate Optional
                </label>
                <input name="msmeFile" type="file" className="fileBox" />
              </div>
            </div>

            <textarea
              name="shortBio"
              className="inputBox mt-4 min-h-28"
              placeholder="Short Bio"
            />
          </div>
        )}

        {role === "LAB" && (
          <div className="mt-6">
            <h2 className="text-lg font-bold text-slate-950">
              Lab Verification
            </h2>

            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Upload NABL Certificate
                </label>
                <input name="nablFile" type="file" className="fileBox" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Upload BIS Approval Certificate
                </label>
                <input name="bisApprovalFile" type="file" className="fileBox" />
              </div>

              <input name="labScope" className="inputBox" placeholder="Lab Scope" />
              <input
                name="testingCategories"
                className="inputBox"
                placeholder="Testing Categories"
              />
              <input
                name="contactPerson"
                className="inputBox"
                placeholder="Contact Person Name"
              />
            </div>
          </div>
        )}

        {role === "SELLER" && (
          <div className="mt-6">
            <h2 className="text-lg font-bold text-slate-950">
              Seller Verification
            </h2>

            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <input
                name="bisLicenceNo"
                className="inputBox"
                placeholder="BIS Licence Number"
              />

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Upload BIS Licence Copy
                </label>
                <input name="bisLicenceFile" type="file" className="fileBox" />
              </div>

              <input
                name="productCategory"
                className="inputBox"
                placeholder="Product Category"
              />

              <input
                name="brandName"
                className="inputBox"
                placeholder="Brand Name"
              />

              <input
                name="factoryAddress"
                className="inputBox"
                placeholder="Factory Address"
              />
            </div>
          </div>
        )}

        {role === "BUYER" && (
          <div className="mt-6">
            <h2 className="text-lg font-bold text-slate-950">Buyer Details</h2>

            <textarea
              name="buyerRequirement"
              className="inputBox mt-3 min-h-28"
              placeholder="What are you looking for?"
            />

            <p className="mt-3 text-sm text-slate-500">
              GST is optional for buyers. Business buyers can add GST later for
              extra trust.
            </p>
          </div>
        )}

        <button
          disabled={loading}
          className="mt-8 w-full rounded-2xl bg-gradient-to-r from-[#2b064f] to-[#7b3f75] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02] disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit for Verification"}
        </button>

        <p className="mt-3 text-center text-xs text-slate-500">
          Status: Verification Pending
        </p>
      </form>
    </div>
  );
}