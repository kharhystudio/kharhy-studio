import type { Metadata } from "next";
import { ToolCard } from "@/components/ToolCard";
import { toolCategories, tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "All Print Tools",
  description:
    "Browse free print calculators for paper sizes, DPI, bleed, margins, booklets, posters, and layout planning.",
};

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
          Tools
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
          All print calculators
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Choose a calculator for paper sizes, DPI, print dimensions, bleed,
          margins, booklets, N-up layouts, posters, and aspect ratios.
        </p>
      </div>

      <div className="mt-10 space-y-10">
        {toolCategories.map((category) => {
          const categoryTools = tools.filter((tool) => tool.category === category);

          if (categoryTools.length === 0) return null;

          return (
            <section key={category}>
              <h2 className="text-2xl font-semibold text-slate-950">{category}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categoryTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
