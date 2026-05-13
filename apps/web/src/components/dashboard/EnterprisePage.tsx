type Card = {
  title: string;
  desc: string;
  tag?: string;
};

export function EnterprisePage({
  label,
  title,
  desc,
  cards,
}: {
  label: string;
  title: string;
  desc: string;
  cards: Card[];
}) {
  return (
    <section className="space-y-8">
      <div className="rounded-[28px] border border-[#D6E2F0] bg-white p-8 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#5B86B6]">
          {label}
        </p>
        <h1 className="mt-4 text-4xl font-extrabold text-[#000F22]">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[#6B7280]">
          {desc}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((item) => (
          <div
            key={item.title}
            className="rounded-[24px] border border-[#D6E2F0] bg-white p-6 shadow-sm"
          >
            {item.tag && (
              <span className="rounded-full bg-[#EEF7FF] px-3 py-1 text-xs font-bold text-[#1B3554]">
                {item.tag}
              </span>
            )}
            <h2 className="mt-5 text-2xl font-extrabold text-[#000F22]">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#6B7280]">
              {item.desc}
            </p>
            <button className="mt-6 rounded-xl bg-[#1B3554] px-5 py-3 text-sm font-bold text-white hover:bg-[#000F22]">
              Open
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}