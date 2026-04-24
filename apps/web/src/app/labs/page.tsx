import MainLayout from "@/components/MainLayout";

const labs = [
  {
    name: "Global Test Lab",
    type: "Material Testing",
    city: "Ahmedabad",
    status: "Verified",
  },
  {
    name: "Prime Certification Lab",
    type: "Compliance Testing",
    city: "Mumbai",
    status: "Verified",
  },
  {
    name: "Tech Standards Lab",
    type: "Electrical Testing",
    city: "Delhi",
    status: "Pending",
  },
];

export default function LabsPage() {
  return (
    <MainLayout>
      <section className="rounded-[28px] border border-[#dfb6b2] bg-white p-3 shadow-sm">
        <div
          className="rounded-[24px] px-7 py-10 text-white"
          style={{
            background:
              "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
          }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-[#FBE4D8]">
            Labs Directory
          </p>
          <h1 className="mt-3 text-4xl font-bold">Verified Testing Labs</h1>
          <p className="mt-3 text-sm text-[#FBE4D8]">
            Find verified labs for testing, certification and standards compliance.
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {labs.map((lab) => (
          <div
            key={lab.name}
            className="rounded-[24px] border border-[#dfb6b2] bg-white p-6 shadow-sm"
          >
            <div className="flex justify-between gap-3">
              <h2 className="text-xl font-bold text-[#190019]">{lab.name}</h2>
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  lab.status === "Verified"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {lab.status}
              </span>
            </div>

            <p className="mt-3 text-[#522B5B]">{lab.type}</p>
            <p className="mt-1 text-sm text-[#854F6C]">{lab.city}</p>

            <button
              className="mt-5 rounded-xl px-4 py-2 text-sm font-bold text-white"
              style={{
                background:
                  "linear-gradient(135deg, #190019 0%, #2B124C 55%, #854F6C 100%)",
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </section>
    </MainLayout>
  );
}