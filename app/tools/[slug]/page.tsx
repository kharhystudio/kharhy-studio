import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalculatorRenderer } from "@/components/calculators/CalculatorRenderer";
import { FAQSection } from "@/components/FAQSection";
import { SeoTextSection } from "@/components/SeoTextSection";
import { ToolCard } from "@/components/ToolCard";
import { getToolBySlug, tools } from "@/lib/tools";

type ToolPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: "Tool not found",
    };
  }

  return {
    title: tool.title,
    description: tool.metaDescription,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) notFound();

  const relatedTools = tools
    .filter((item) => item.category === tool.category && item.slug !== tool.slug)
    .slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              {tool.category}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
              {tool.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              {tool.description}
            </p>
          </section>

          <CalculatorRenderer slug={tool.slug} />

          <SeoTextSection title="How to use this tool" items={tool.howToUse} />
          <SeoTextSection title="Common use cases" items={tool.useCases} />
          <FAQSection faqs={tool.faqs} />
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-slate-950">About this calculator</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              This tool runs in your browser. It does not upload files, store data,
              or require an account.
            </p>
          </div>
          {relatedTools.length > 0 ? (
            <div>
              <h2 className="mb-3 font-semibold text-slate-950">Related tools</h2>
              <div className="space-y-3">
                {relatedTools.map((item) => (
                  <ToolCard key={item.slug} tool={item} />
                ))}
              </div>
            </div>
          ) : null}
        </aside>
      </div>
    </main>
  );
}
