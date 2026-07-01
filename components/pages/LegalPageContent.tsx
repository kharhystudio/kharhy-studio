import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { type LegalPage } from "@/lib/legalPages";
import { breadcrumbSchema } from "@/lib/seo";

type LegalPageContentProps = {
  page: LegalPage;
};

export function LegalPageContent({ page }: LegalPageContentProps) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: page.title, path: `/${page.slug}` },
  ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
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
          Site information
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
          {page.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">{page.description}</p>

        <div className="mt-8 space-y-8">
          {page.sections.map((section) => (
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
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
