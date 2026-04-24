type StatCardProps = {
  title: string;
  value: string;
  helper?: string;
  tone?: "blue" | "green" | "amber" | "red" | "violet";
};

const toneMap = {
  blue: "from-[#2B124C] to-[#854F6C]",
  green: "from-[#522B5B] to-[#854F6C]",
  amber: "from-[#854F6C] to-[#DFB6B2]",
  red: "from-[#522B5B] to-[#DFB6B2]",
  violet: "from-[#190019] to-[#522B5B]",
};

export function StatCard({
  title,
  value,
  helper,
  tone = "blue",
}: StatCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#dfb6b2] bg-white shadow-sm">
      <div className={`h-1 w-full bg-gradient-to-r ${toneMap[tone]}`} />
      <div className="p-5">
        <p className="text-sm font-medium text-[#854F6C]">{title}</p>
        <p className="mt-3 text-3xl font-bold tracking-tight text-[#190019]">
          {value}
        </p>
        {helper ? (
          <p className="mt-2 text-sm text-[#854F6C]">{helper}</p>
        ) : null}
      </div>
    </div>
  );
}