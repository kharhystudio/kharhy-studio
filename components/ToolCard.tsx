import Link from "next/link";
import type { Tool } from "@/lib/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      className="group block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
      href={`/${tool.slug}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
        {tool.category}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-slate-950">{tool.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{tool.description}</p>
      <p className="mt-4 text-sm font-semibold text-cyan-700 group-hover:text-cyan-900">
        Open calculator
      </p>
    </Link>
  );
}
