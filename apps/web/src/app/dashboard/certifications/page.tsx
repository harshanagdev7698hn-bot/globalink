"use client";

import { useEffect, useRef, useState } from "react";

type MasterItem = {
  id: string;
  name: string;
  authority: string;
  country: string;
  category: string;
  type: string;
};

type Certification = {
  id: string;
  name: string;
  authority: string;
  category: string;
  country: string;
  documentUrl?: string | null;
  status: "PENDING" | "APPROVED" | "REJECTED";
  validTill?: string | null;
  licenseNumber?: string | null;
  certificationBody?: string | null;
  scope?: string | null;
  isNumber?: string | null;
  productType?: string | null;
  factoryLocation?: string | null;
  foodCategory?: string | null;
  state?: string | null;
  approvalType?: string | null;
  productClass?: string | null;
  adminRemark?: string | null;
};

export default function CertificationsDashboardPage() {
  const [masterItems, setMasterItems] = useState<MasterItem[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [authority, setAuthority] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [documentUrl, setDocumentUrl] = useState("");
  const [validTill, setValidTill] = useState("");

  const [licenseNumber, setLicenseNumber] = useState("");
  const [certificationBody, setCertificationBody] = useState("");
  const [scope, setScope] = useState("");
  const [isNumber, setIsNumber] = useState("");
  const [productType, setProductType] = useState("");
  const [factoryLocation, setFactoryLocation] = useState("");
  const [foodCategory, setFoodCategory] = useState("");
  const [state, setState] = useState("");
  const [approvalType, setApprovalType] = useState("");
  const [productClass, setProductClass] = useState("");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadingFile, setUploadingFile] = useState(false);

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [items, setItems] = useState<Certification[]>([]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const fetchMasterItems = async () => {
    try {
      const res = await fetch("/api/certificate-master");
      const data = await res.json();

      if (res.ok) {
        setMasterItems(data.items || []);
      }
    } catch (error) {
      console.error("Failed to fetch master list");
    }
  };

  const fetchMyCertifications = async () => {
    try {
      setFetching(true);
      const res = await fetch("/api/certifications/my");
      const data = await res.json();

      if (res.ok) {
        setItems(data.certifications || []);
      }
    } catch (error) {
      console.error("Failed to fetch certifications");
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchMasterItems();
    fetchMyCertifications();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const resetSmartFields = () => {
    setLicenseNumber("");
    setCertificationBody("");
    setScope("");
    setIsNumber("");
    setProductType("");
    setFactoryLocation("");
    setFoodCategory("");
    setState("");
    setApprovalType("");
    setProductClass("");
  };

  const handleMasterSelect = (item: MasterItem) => {
    setSelectedId(item.id);
    setName(item.name);
    setAuthority(item.authority);
    setCategory(item.category);
    setCountry(item.country);
    setSelectedType(item.type);
    setDropdownOpen(false);
    setSearch("");
    resetSmartFields();
  };

  const selectedItem = masterItems.find((item) => item.id === selectedId);

  const filteredMasterItems = masterItems.filter((item) => {
    const q = search.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q) ||
      item.authority.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  const uploadDocument = async () => {
    if (!selectedFile) return "";

    const formData = new FormData();
    formData.append("file", selectedFile);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Upload failed");
    }

    return data.fileUrl as string;
  };

  const handleAdd = async () => {
    if (!name || !authority || !category || !country) {
      alert("Please select a certificate");
      return;
    }

    try {
      setLoading(true);

      let finalDocumentUrl = documentUrl;

      if (selectedFile) {
        setUploadingFile(true);
        finalDocumentUrl = await uploadDocument();
        setUploadingFile(false);
      }

      const res = await fetch("/api/certifications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          authority,
          category,
          country,
          documentUrl: finalDocumentUrl,
          validTill,
          licenseNumber,
          certificationBody,
          scope,
          isNumber,
          productType,
          factoryLocation,
          foodCategory,
          state,
          approvalType,
          productClass,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Failed to add certification");
        return;
      }

      alert("Certification added successfully");

      setSelectedId("");
      setSelectedType("");
      setName("");
      setAuthority("");
      setCategory("");
      setCountry("");
      setDocumentUrl("");
      setValidTill("");
      setSearch("");
      setSelectedFile(null);
      resetSmartFields();

      fetchMyCertifications();
    } catch (error) {
      alert(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
      setUploadingFile(false);
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
            Certifications Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-bold">
            Add & Track Certifications
          </h1>
          <p className="mt-2 text-sm text-[#FBE4D8]">
            Structured worldwide certification flow with real document upload.
          </p>
        </div>
      </div>

      <div className="glass-panel p-6">
        <h2 className="text-2xl font-bold text-[#190019]">Add Certification</h2>
        <p className="mt-1 text-sm text-[#854F6C]">
          Choose a certification from the master list. Smart fields and real
          file upload are supported.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-lg border border-[#dfb6b2] bg-white p-3 text-left text-[#190019] shadow-sm transition hover:border-[#854F6C]"
            >
              {selectedItem ? (
                <div className="flex flex-col">
                  <span className="font-semibold text-[#190019]">
                    {selectedItem.name}
                  </span>
                  <span className="text-xs text-[#854F6C]">
                    {selectedItem.type} • {selectedItem.authority}
                  </span>
                </div>
              ) : (
                <span className="text-[#9a7a88]">Select Certificate Type</span>
              )}

              <span className="text-[#854F6C]">{dropdownOpen ? "▲" : "▼"}</span>
            </button>

            {dropdownOpen && (
              <div className="animate-fadeIn absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-[#dfb6b2] bg-white shadow-xl">
                <div className="border-b border-[#f0d7d1] p-3">
                  <input
                    type="text"
                    placeholder="Search certificate..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-xl border border-[#dfb6b2] bg-[#fff8f7] p-3 text-sm text-[#190019]"
                  />
                </div>

                <div className="max-h-72 overflow-y-auto p-2">
                  {filteredMasterItems.length === 0 ? (
                    <div className="rounded-xl px-3 py-3 text-sm text-[#854F6C]">
                      No certificates found
                    </div>
                  ) : (
                    filteredMasterItems.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleMasterSelect(item)}
                        className={`mb-1 w-full rounded-xl px-3 py-3 text-left transition ${
                          selectedId === item.id
                            ? "bg-[#2B124C] text-white"
                            : "bg-white text-[#190019] hover:bg-[#FBE4D8]"
                        }`}
                      >
                        <div className="font-semibold">{item.name}</div>
                        <div
                          className={`text-xs ${
                            selectedId === item.id
                              ? "text-[#f6d8e7]"
                              : "text-[#854F6C]"
                          }`}
                        >
                          {item.type} • {item.authority} • {item.category}
                        </div>
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          <input
            type="text"
            placeholder="Authority"
            value={authority}
            readOnly
            className="rounded-lg border border-[#dfb6b2] bg-[#fff8f7] p-3 text-[#190019]"
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            readOnly
            className="rounded-lg border border-[#dfb6b2] bg-[#fff8f7] p-3 text-[#190019]"
          />

          <input
            type="text"
            placeholder="Country"
            value={country}
            readOnly
            className="rounded-lg border border-[#dfb6b2] bg-[#fff8f7] p-3 text-[#190019]"
          />

          <input
            type="date"
            value={validTill}
            onChange={(e) => setValidTill(e.target.value)}
            className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
          />

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-[#190019]">
              Upload Document (PDF / JPG / PNG / WEBP)
            </label>
            <input
              type="file"
              accept=".pdf,.png,.jpg,.jpeg,.webp"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
              className="w-full rounded-lg border border-[#dfb6b2] bg-white p-3 text-[#190019]"
            />
            {selectedFile ? (
              <p className="mt-2 text-sm text-[#854F6C]">
                Selected file: {selectedFile.name}
              </p>
            ) : null}
          </div>
        </div>

        {selectedType === "ISO" && (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Certification Body"
              value={certificationBody}
              onChange={(e) => setCertificationBody(e.target.value)}
              className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
            />
            <input
              type="text"
              placeholder="Scope"
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
            />
          </div>
        )}

        {selectedType === "BIS" && (
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <input
              type="text"
              placeholder="IS Number"
              value={isNumber}
              onChange={(e) => setIsNumber(e.target.value)}
              className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
            />
            <input
              type="text"
              placeholder="Product Type"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
            />
            <input
              type="text"
              placeholder="Factory Location"
              value={factoryLocation}
              onChange={(e) => setFactoryLocation(e.target.value)}
              className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
            />
          </div>
        )}

        {selectedType === "FSSAI" && (
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <input
              type="text"
              placeholder="License Number"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
              className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
            />
            <input
              type="text"
              placeholder="Food Category"
              value={foodCategory}
              onChange={(e) => setFoodCategory(e.target.value)}
              className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
            />
            <input
              type="text"
              placeholder="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
            />
          </div>
        )}

        {selectedType === "FDA" && (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Approval Type"
              value={approvalType}
              onChange={(e) => setApprovalType(e.target.value)}
              className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
            />
            <input
              type="text"
              placeholder="Product Class"
              value={productClass}
              onChange={(e) => setProductClass(e.target.value)}
              className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
            />
          </div>
        )}

        {(selectedType === "CE" ||
          selectedType === "RoHS" ||
          selectedType === "GMP" ||
          selectedType === "HACCP") && (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Certification Body / Issuer"
              value={certificationBody}
              onChange={(e) => setCertificationBody(e.target.value)}
              className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
            />
            <input
              type="text"
              placeholder="Scope / Product Coverage"
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              className="rounded-lg border border-[#dfb6b2] p-3 text-[#190019]"
            />
          </div>
        )}

        {name ? (
          <div className="mt-5 rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] p-4">
            <p className="text-sm font-semibold text-[#190019]">
              Selected Certificate
            </p>
            <p className="mt-2 text-base font-bold text-[#2B124C]">{name}</p>
            <p className="mt-1 text-sm text-[#854F6C]">
              Authority: {authority} • Category: {category} • Country: {country}
            </p>
          </div>
        ) : null}

        <button
          onClick={handleAdd}
          disabled={loading || uploadingFile}
          className="mt-5 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
          style={{
            background:
              "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
          }}
        >
          {uploadingFile
            ? "Uploading document..."
            : loading
            ? "Adding..."
            : "Add Certification"}
        </button>
      </div>

      <div className="glass-panel p-6">
        <h2 className="text-2xl font-bold text-[#190019]">My Certifications</h2>
        <p className="mt-1 text-sm text-[#854F6C]">
          View your submitted certification records, remarks and approval status.
        </p>

        {fetching ? (
          <div className="mt-6 text-sm text-[#854F6C]">
            Loading certifications...
          </div>
        ) : items.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] p-6 text-sm text-[#854F6C]">
            No certifications added yet.
          </div>
        ) : (
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <div key={item.id} className="premium-card p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#854F6C]">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-[#190019]">
                      {item.name}
                    </h3>
                  </div>

                  <span
                    className={
                      item.status === "APPROVED"
                        ? "status-approved"
                        : item.status === "REJECTED"
                        ? "status-pending"
                        : "status-open"
                    }
                  >
                    {item.status}
                  </span>
                </div>

                <p className="mt-3 text-sm text-[#522B5B]">
                  Authority: {item.authority}
                </p>
                <p className="mt-1 text-sm text-[#522B5B]">
                  Country: {item.country}
                </p>

                {item.isNumber ? (
                  <p className="mt-2 text-sm text-[#854F6C]">
                    IS Number: {item.isNumber}
                  </p>
                ) : null}

                {item.licenseNumber ? (
                  <p className="mt-2 text-sm text-[#854F6C]">
                    License Number: {item.licenseNumber}
                  </p>
                ) : null}

                {item.certificationBody ? (
                  <p className="mt-2 text-sm text-[#854F6C]">
                    Body: {item.certificationBody}
                  </p>
                ) : null}

                {item.approvalType ? (
                  <p className="mt-2 text-sm text-[#854F6C]">
                    Approval Type: {item.approvalType}
                  </p>
                ) : null}

                {item.validTill ? (
                  <p className="mt-3 text-sm text-[#854F6C]">
                    Valid till: {new Date(item.validTill).toLocaleDateString()}
                  </p>
                ) : null}

                {item.documentUrl ? (
                  <a
                    href={item.documentUrl}
                    target="_blank"
                    className="mt-4 inline-block text-sm font-semibold text-[#854F6C]"
                  >
                    View Document
                  </a>
                ) : null}

                {item.adminRemark ? (
                  <div className="mt-4 rounded-2xl border border-[#dfb6b2] bg-[#fff8f7] p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#854F6C]">
                      Admin Remark
                    </p>
                    <p className="mt-1 text-sm text-[#190019]">
                      {item.adminRemark}
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}