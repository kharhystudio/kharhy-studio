"use client";

import { useMemo, useState } from "react";
import { ToolCard } from "@/components/ToolCard";
import type { Tool, ToolCategory } from "@/lib/tools";

type HomeToolBrowserProps = {
  categories: ToolCategory[];
  tools: Tool[];
};

export function HomeToolBrowser({ categories, tools }: HomeToolBrowserProps) {
  const [query, setQuery] = useState("");

  const filteredTools = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return tools;

    return tools.filter((tool) => {
      return [tool.title, tool.description, tool.category]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    });
  }, [query, tools]);

  return (
    <section id="tools" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
        <label className="block text-sm font-semibold text-slate-800" htmlFor="tool-search">
          Search tools
        </label>
        <input
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
          id="tool-search"
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try DPI, booklet, bleed, poster, margin..."
          type="search"
          value={query}
        />
        <p className="mt-2 text-sm text-slate-500">
          Filter by tool name, category, or print task.
        </p>
      </div>

      <div id="categories" className="mt-10 space-y-10">
        {categories.map((category) => {
          const categoryTools = filteredTools.filter((tool) => tool.category === category);

          if (categoryTools.length === 0) return null;

          return (
            <section key={category}>
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
                    {category}
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-slate-950">
                    {categoryTools.length} {categoryTools.length === 1 ? "tool" : "tools"}
                  </h2>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categoryTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {filteredTools.length === 0 ? (
        <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
          <p className="font-semibold">No matching tools found.</p>
          <p className="mt-1 text-sm">
            Try a simpler word like paper, DPI, bleed, booklet, or poster.
          </p>
        </div>
      ) : null}
    </section>
  );
}
