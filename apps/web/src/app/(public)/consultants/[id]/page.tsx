import { PrismaClient } from "@prisma/client";
import Link from "next/link";

const prisma = new PrismaClient();

interface Props {
  params: {
    id: string;
  };
}

export default async function ConsultantProfilePage({ params }: Props) {
  const consultant = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
    include: {
      consultantProfile: true,
    },
  });

  if (!consultant) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Consultant not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      {/* TOP NAV */}
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="text-4xl font-black text-[#0b1b34]"
          >
            Globalink
          </Link>

          <div className="flex items-center gap-4">
            <button className="border border-[#dbe4f0] px-6 py-3 rounded-2xl font-semibold text-[#0b1b34]">
              Share
            </button>

            <button className="bg-[#19345c] text-white px-6 py-3 rounded-2xl font-semibold">
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-[36px] border border-[#dbe4f0] overflow-hidden shadow-sm">
          {/* Banner */}
          <div className="h-56 bg-gradient-to-r from-[#07162d] to-[#19345c]" />

          <div className="px-10 pb-10">
            {/* Top Info */}
            <div className="-mt-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="flex gap-6">
                {/* Logo */}
                <div className="w-40 h-40 rounded-[32px] bg-[#eef3f9] border-8 border-white flex items-center justify-center text-5xl font-black text-[#19345c] shadow-lg">
                  {consultant.name?.charAt(0)}
                </div>

                <div className="pt-16">
                  <div className="flex items-center gap-4 flex-wrap">
                    <h1 className="text-5xl font-black text-[#07162d]">
                      {consultant.company || consultant.name}
                    </h1>

                    <div className="bg-[#dff7e8] text-[#14804a] px-4 py-2 rounded-full text-sm font-bold tracking-wide">
                      VERIFIED
                    </div>
                  </div>

                  <p className="mt-4 text-xl text-[#5c6f91] font-medium">
                    {consultant.consultantProfile?.services ||
                      "Compliance Consultant"}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <div className="bg-[#eef3f9] px-5 py-3 rounded-full text-sm font-semibold">
                      BIS
                    </div>

                    <div className="bg-[#eef3f9] px-5 py-3 rounded-full text-sm font-semibold">
                      ISO
                    </div>

                    <div className="bg-[#eef3f9] px-5 py-3 rounded-full text-sm font-semibold">
                      CDSCO
                    </div>

                    <div className="bg-[#eef3f9] px-5 py-3 rounded-full text-sm font-semibold">
                      EPR
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Score */}
              <div className="bg-[#f8fbff] border border-[#dbe4f0] rounded-[28px] p-8 min-w-[280px]">
                <p className="text-sm tracking-[4px] text-[#4e74b8] font-bold uppercase">
                  Trust Score
                </p>

                <h2 className="text-7xl font-black text-[#07162d] mt-2">
                  96%
                </h2>

                <p className="mt-4 text-[#5c6f91] leading-8">
                  Verified documents, business validation and marketplace trust
                  score.
                </p>
              </div>
            </div>

            {/* GRID */}
            <div className="grid lg:grid-cols-3 gap-8 mt-12">
              {/* LEFT */}
              <div className="lg:col-span-2 space-y-8">
                {/* ABOUT */}
                <div className="bg-[#f8fbff] border border-[#dbe4f0] rounded-[30px] p-8">
                  <h2 className="text-3xl font-black text-[#07162d]">
                    About Consultant
                  </h2>

                  <p className="mt-6 text-[#5c6f91] leading-9 text-lg">
                    {consultant.consultantProfile?.shortBio ||
                      "Professional compliance consultant helping manufacturers and importers with BIS certification, ISO systems, CDSCO approvals and regulatory compliance services across India."}
                  </p>
                </div>

                {/* SERVICES */}
                <div className="bg-[#f8fbff] border border-[#dbe4f0] rounded-[30px] p-8">
                  <h2 className="text-3xl font-black text-[#07162d]">
                    Services
                  </h2>

                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    {[
                      "BIS Certification",
                      "ISO Certification",
                      "CDSCO Registration",
                      "Factory Audit",
                      "Technical Documentation",
                      "Compliance Consulting",
                    ].map((service) => (
                      <div
                        key={service}
                        className="bg-white border border-[#dbe4f0] rounded-2xl px-5 py-4 font-semibold"
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                {/* BUSINESS DETAILS */}
                <div className="bg-[#f8fbff] border border-[#dbe4f0] rounded-[30px] p-8">
                  <h2 className="text-3xl font-black text-[#07162d]">
                    Business Information
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <p className="text-sm text-[#6b7b98] font-semibold">
                        Company
                      </p>

                      <h3 className="text-xl font-bold mt-2">
                        {consultant.company || "Not available"}
                      </h3>
                    </div>

                    <div>
                      <p className="text-sm text-[#6b7b98] font-semibold">
                        Country
                      </p>

                      <h3 className="text-xl font-bold mt-2">
                        {consultant.country || "India"}
                      </h3>
                    </div>

                    <div>
                      <p className="text-sm text-[#6b7b98] font-semibold">
                        City
                      </p>

                      <h3 className="text-xl font-bold mt-2">
                        {consultant.city || "Ahmedabad"}
                      </h3>
                    </div>

                    <div>
                      <p className="text-sm text-[#6b7b98] font-semibold">
                        Experience
                      </p>

                      <h3 className="text-xl font-bold mt-2">
                        {consultant.consultantProfile?.experience ||
                          "5+ Years"}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="space-y-8">
                {/* CONTACT */}
                <div className="bg-[#19345c] text-white rounded-[30px] p-8">
                  <p className="tracking-[4px] uppercase text-sm font-bold text-[#9fc0ff]">
                    Contact Consultant
                  </p>

                  <h2 className="text-3xl font-black mt-4">
                    Start your compliance journey
                  </h2>

                  <div className="space-y-4 mt-8">
                    <button className="w-full bg-white text-[#19345c] py-4 rounded-2xl font-bold text-lg">
                      Send Inquiry
                    </button>

                    <button className="w-full border border-white/20 py-4 rounded-2xl font-bold text-lg">
                      WhatsApp
                    </button>
                  </div>
                </div>

                {/* TRUST */}
                <div className="bg-white border border-[#dbe4f0] rounded-[30px] p-8">
                  <h2 className="text-2xl font-black text-[#07162d]">
                    Verification Status
                  </h2>

                  <div className="space-y-4 mt-8">
                    {[
                      "Business verified",
                      "GST verified",
                      "Admin approved",
                      "Documents checked",
                      "Marketplace active",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-4 bg-[#f8fbff] border border-[#dbe4f0] rounded-2xl p-4"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#dff7e8] flex items-center justify-center text-[#14804a] font-black">
                          ✓
                        </div>

                        <p className="font-semibold">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}