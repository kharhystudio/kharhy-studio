import Link from "next/link";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { ToolCard } from "@/components/ToolCard";
import { type Guide } from "@/lib/guides";
import { breadcrumbSchema, faqSchema, guideSchema } from "@/lib/seo";
import { getToolBySlug, type Tool } from "@/lib/tools";

type GuidePageContentProps = {
  guide: Guide;
};

export function GuidePageContent({ guide }: GuidePageContentProps) {
  const relatedTools = guide.relatedTools
    .map((slug) => getToolBySlug(slug))
    .filter((tool): tool is Tool => Boolean(tool));
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: guide.title, path: `/${guide.slug}` },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <JsonLd data={guideSchema(guide)} />
      <JsonLd data={faqSchema(guide.faqs)} />
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

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
          Print guide
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
          {guide.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">{guide.description}</p>

        <div className="mt-8 space-y-8">
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-slate-950">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-4 text-lg leading-8 text-slate-600">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-4 space-y-2 text-slate-600">
                  {section.bullets.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.table ? (
                <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
                  <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                    <thead className="bg-slate-50 text-slate-900">
                      <tr>
                        {section.table.headers.map((header) => (
                          <th className="px-4 py-3 font-semibold" key={header}>
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {section.table.rows.map((row) => (
                        <tr key={row.join("-")}>
                          {row.map((cell) => (
                            <td className="px-4 py-3 text-slate-600" key={cell}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </article>

      {relatedTools.length > 0 ? (
        <section className="mt-6">
          <h2 className="mb-4 text-2xl font-semibold text-slate-950">
            Related tools
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-6">
        <FAQSection faqs={guide.faqs} />
      </div>
    </main>
  );
}
