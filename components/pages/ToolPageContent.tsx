import Link from "next/link";
import { CalculatorRenderer } from "@/components/calculators/CalculatorRenderer";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { SeoTextSection } from "@/components/SeoTextSection";
import { ToolCard } from "@/components/ToolCard";
import { breadcrumbSchema, faqSchema, toolSchema } from "@/lib/seo";
import { type Tool, tools } from "@/lib/tools";

type ToolPageContentProps = {
  tool: Tool;
};

export function ToolPageContent({ tool }: ToolPageContentProps) {
  const relatedTools = tools
    .filter((item) => item.category === tool.category && item.slug !== tool.slug)
    .slice(0, 3);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: tool.title, path: `/${tool.slug}` },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={toolSchema(tool)} />
      <JsonLd data={faqSchema(tool.faqs)} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-600">
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbs.map((item, index) => (
            <li className="flex items-center gap-2" key={item.path}>
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {index === breadcrumbs.length - 1 ? (
                <span aria-current="page" className="font-medium text-slate-900">
                  {item.name}
                </span>
              ) : (
                <Link className="hover:text-cyan-700" href={item.path}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

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

          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="text-xl font-semibold text-slate-950">
              {tool.education.heading}
            </h2>
            <div className="mt-4 space-y-4 leading-7 text-slate-600">
              {tool.education.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <SeoTextSection title="How to use this tool" items={tool.howToUse} />
          <SeoTextSection title="Common use cases" items={tool.useCases} />
          <FAQSection faqs={tool.faqs} />
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-semibold text-slate-950">Private by design</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              This calculator runs in your browser. It does not upload files,
              store project data, or require an account.
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
