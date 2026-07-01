import Link from "next/link";
import { guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Print Guides",
  description:
    "Beginner-friendly print guides covering DPI, A4 vs Letter, bleed, booklet printing, and image preparation.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
          Guides
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
          Simple print guides
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Learn the core print terms behind the calculators in plain language.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {guides.map((guide) => (
          <Link
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
            href={`/${guide.slug}`}
            key={guide.slug}
          >
            <h2 className="text-xl font-semibold text-slate-950">{guide.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{guide.description}</p>
            <p className="mt-4 text-sm font-semibold text-cyan-700">Read guide</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
