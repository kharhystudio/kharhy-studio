import Link from "next/link";
import { FAQSection } from "@/components/FAQSection";
import { HomeToolBrowser } from "@/components/HomeToolBrowser";
import { JsonLd } from "@/components/JsonLd";
import { ToolCard } from "@/components/ToolCard";
import { guides } from "@/lib/guides";
import { faqSchema, pageMetadata } from "@/lib/seo";
import { featuredTools, toolCategories, tools } from "@/lib/tools";

const homepageFaqs = [
  {
    question: "What is DPI?",
    answer:
      "DPI means dots per inch, but many people use it when planning image pixels per printed inch. It helps connect digital image size to physical print size.",
  },
  {
    question: "What DPI should I use for printing?",
    answer:
      "300 DPI is a common target for close-view prints. Posters and large signs viewed from farther away can often use 150 to 200 DPI.",
  },
  {
    question: "What is the difference between DPI and PPI?",
    answer:
      "PPI describes image pixels per inch. DPI usually describes printer dot output. For layout planning, effective PPI is often the number you need to check.",
  },
  {
    question: "What are bleed and safe margins?",
    answer:
      "Bleed is extra artwork outside the final cut edge. Safe margins keep important text and graphics away from the edge.",
  },
  {
    question: "Which paper size should I use?",
    answer:
      "Use the paper your printer, audience, or print shop expects. A4 is common internationally, while Letter is common in the United States and Canada.",
  },
];

export const metadata = pageMetadata({
  title: "Print Layout Toolkit",
  description:
    "Free browser-based print helpers for paper sizes, DPI, images, booklets, posters, margins, and more.",
  path: "/",
});

export default function Home() {
  return (
    <main>
      <JsonLd data={faqSchema(homepageFaqs)} />
      <section className="border-b border-slate-200 bg-gradient-to-b from-cyan-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div className="min-w-0">
            <p className="w-fit rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-semibold text-cyan-800">
              Fast print calculators. No uploads.
            </p>
            <h1 className="mt-5 max-w-4xl break-words text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Print Layout Toolkit
            </h1>
            <p className="mt-5 max-w-2xl break-words text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Free browser-based print helpers for paper sizes, DPI, images,
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
                href="/dpi-vs-ppi"
              >
                Learn about DPI
              </Link>
            </div>
          </div>

          <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              How it works
            </p>
            <div className="mt-5 space-y-4">
              {[
                ["1", "Choose a print tool"],
                ["2", "Enter simple dimensions"],
                ["3", "Click Start to see results"],
              ].map(([number, text]) => (
                <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4" key={number}>
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-700 text-sm font-bold text-white">
                    {number}
                  </span>
                  <p className="font-medium text-slate-800">{text}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-950">
              These calculators run in your browser using typed values. Press
              Start when you are ready; no account creation or file uploads are
              required.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              Featured tools
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
              Start with the most common print questions
            </h2>
          </div>
          <a className="text-sm font-semibold text-cyan-700 hover:text-cyan-900" href="#tools">
            View all tools
          </a>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTools.slice(0, 6).map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      <HomeToolBrowser categories={toolCategories} tools={tools} />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              Printing Guides
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">
              Simple explanations before you print
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Learn the basics behind DPI, bleed, paper sizes, booklets, poster
              tiling, and image preparation.
            </p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <Link
                className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-cyan-200 hover:bg-white hover:shadow-sm"
                href={`/${guide.slug}`}
                key={guide.slug}
              >
                <h3 className="font-semibold text-slate-950">{guide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <FAQSection faqs={homepageFaqs} />
      </section>
    </main>
  );
}
