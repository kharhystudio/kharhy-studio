import type { Metadata } from "next";
import Link from "next/link";
import { HomeToolBrowser } from "@/components/HomeToolBrowser";
import { guides } from "@/lib/guides";
import { toolCategories, tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Print Layout Toolkit",
  description:
    "Free print calculators and layout tools for paper sizes, DPI, booklets, posters, margins, bleed, and more.",
};

export default function Home() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-gradient-to-b from-cyan-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="w-fit rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-semibold text-cyan-800">
              Free browser-based print helpers
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Print Layout Toolkit
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Free print calculators and layout tools for paper sizes, DPI,
              booklets, posters, margins, and more.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-lg bg-cyan-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-800"
                href="#tools"
              >
                Browse tools
              </a>
              <Link
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-300 hover:text-cyan-800"
                href="/guides/what-is-dpi"
              >
                Learn about DPI
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              What you can calculate
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Paper dimensions",
                "DPI and PPI",
                "Bleed and margins",
                "Booklet page order",
                "N-up layouts",
                "Poster tiling",
              ].map((item) => (
                <div className="rounded-xl bg-slate-50 p-4 text-sm font-medium text-slate-700" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HomeToolBrowser categories={toolCategories} tools={tools} />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              Print guides
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">
              Simple explanations before you print
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Learn the basics behind DPI, bleed, paper sizes, booklets, and
              image preparation.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-cyan-200 hover:bg-white hover:shadow-sm"
                href={`/guides/${guide.slug}`}
                key={guide.slug}
              >
                <h3 className="font-semibold text-slate-950">{guide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
