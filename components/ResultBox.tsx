import type { ReactNode } from "react";

type ResultBoxProps = {
  title: string;
  children: ReactNode;
  tone?: "default" | "success" | "warning";
};

const tones = {
  default: "border-cyan-200 bg-cyan-50 text-cyan-950",
  success: "border-emerald-200 bg-emerald-50 text-emerald-950",
  warning: "border-amber-200 bg-amber-50 text-amber-950",
};

export function ResultBox({ title, children, tone = "default" }: ResultBoxProps) {
  return (
    <div className={`rounded-xl border p-4 ${tones[tone]}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.14em]">{title}</p>
      <div className="mt-3 text-sm leading-6">{children}</div>
    </div>
  );
}
