import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
          Page not found
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
          We could not find that page.
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          The page may have moved, or the address may be incorrect. You can go
          back to the homepage or browse all print tools.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex items-center justify-center rounded-lg bg-cyan-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-800"
            href="/"
          >
            Go home
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-300 hover:text-cyan-800"
            href="/tools"
          >
            Browse tools
          </Link>
        </div>
      </section>
    </main>
  );
}
