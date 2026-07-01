import Link from "next/link";

const links = [
  { href: "/#tools", label: "Tools" },
  { href: "/guides", label: "Guides" },
  { href: "/#categories", label: "Categories" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-700 text-sm font-bold text-white">
            PL
          </span>
          <span className="text-base font-bold text-slate-950 sm:text-lg">
            Print Layout Toolkit
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600 md:gap-6">
          {links.map((link) => (
            <Link className="transition hover:text-cyan-700" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
