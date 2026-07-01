import type { ReactNode } from "react";

type CalculatorCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function CalculatorCard({ title, description, children }: CalculatorCardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="border-b border-slate-200 pb-5">
        <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
        <p className="mt-2 leading-7 text-slate-600">{description}</p>
      </div>
      <div className="pt-5">{children}</div>
    </section>
  );
}
