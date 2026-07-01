import Link from "next/link";
import { guides } from "@/lib/guides";
import { toolCategories, tools } from "@/lib/tools";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-bold text-slate-950">Print Layout Toolkit</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
            Free client-side calculators for common print layout decisions. No account,
            no uploads, no backend.
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-950">Popular tools</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {tools.slice(0, 5).map((tool) => (
              <li key={tool.slug}>
                <Link className="hover:text-cyan-700" href={`/${tool.slug}`}>
                  {tool.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-950">Guides</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {guides.slice(0, 5).map((guide) => (
              <li key={guide.slug}>
                <Link className="hover:text-cyan-700" href={`/${guide.slug}`}>
                  {guide.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-950">Site</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {[
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
              { href: "/accessibility", label: "Accessibility" },
              { href: "/sitemap.xml", label: "Sitemap" },
            ].map((link) => (
              <li key={link.href}>
                <Link className="hover:text-cyan-700" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-semibold text-slate-950">Categories</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {toolCategories.map((category) => (
              <li key={category}>
                <Link className="hover:text-cyan-700" href={`/#${category.toLowerCase().replaceAll(" ", "-").replace("&", "and")}`}>
                  {category}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-cyan-700" href="/guides">
                Printing Guides
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
