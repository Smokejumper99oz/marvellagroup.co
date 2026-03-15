import Link from "next/link";

const NAV_ITEMS = [
  { label: "Build with us", href: "/build-with-us" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/[0.04] safe-area-top">
      <div className="mx-auto flex h-12 sm:h-14 md:h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
        <Link
          href="/"
          className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] sm:tracking-[0.32em] text-white/58 transition hover:text-white/78"
        >
          Marvella Group™
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6 md:gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] sm:tracking-[0.28em] text-white/48 transition hover:text-white/78 py-2 -my-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
