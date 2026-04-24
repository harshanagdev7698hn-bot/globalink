"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ConsultantsPage() {
  const [consultants, setConsultants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/consultants")
      .then((res) => res.json())
      .then((data) => {
        setConsultants(data.consultants || []);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="p-8 bg-[#f4e4d8] min-h-screen">
      
      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#2a0845] to-[#6441a5] text-white p-6 rounded-xl mb-6">
        <h1 className="text-2xl font-bold">
          Verified Global Consultants
        </h1>
        <p className="text-sm opacity-80">
          Explore experts across procurement, compliance & certification
        </p>
      </div>

      {/* NO DATA */}
      {consultants.length === 0 && (
        <div className="bg-white p-6 rounded-lg text-center">
          No consultants found
        </div>
      )}

      {/* LIST */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {consultants.map((c: any) => (
          <div
            key={c.id}
            className="bg-white rounded-xl p-5 shadow border"
          >
            <div className="flex justify-between">
              <h2 className="font-bold text-lg">
                {c.user?.name || "No Name"}
              </h2>

              <span className="text-sm bg-yellow-200 px-2 py-1 rounded">
                ⭐ {c.averageRating || 0}
              </span>
            </div>

            <p className="text-sm text-gray-600 mt-1">
              {c.city}, {c.country}
            </p>

            <p className="mt-2 text-sm">
              Experience: {c.experienceYears} yrs
            </p>

            <Link href={`/consultants/${c.id}`}>
              <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded">
                View Profile
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}