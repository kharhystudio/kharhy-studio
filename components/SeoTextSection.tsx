type SeoTextSectionProps = {
  title: string;
  items: string[];
};

export function SeoTextSection({ title, items }: SeoTextSectionProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
      <ul className="mt-4 space-y-3 text-slate-600">
        {items.map((item) => (
          <li className="flex gap-3 leading-7" key={item}>
            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
