const NAV_ITEMS = [
  { label: "Build with us", href: "#build-with-us" },
  { label: "Contact", href: "mailto:hello@marvellagroup.com" },
];

const PLATFORMS = [
  { name: "CrewRules™", href: "https://crewrules.com" },
  { name: "HOTcalc™", href: "https://hotcalc.com" },
  { name: "FastMX™", href: "https://fastmx.us" },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#02040A] text-white selection:bg-white/20">
      <style>{`
        @keyframes marvella-ken-burns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.06) translate(-1.5%, -1%); }
        }
        @keyframes marvella-reveal {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marvella-radar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marvella-ken-burns, .marvella-reveal { animation: none !important; opacity: 1 !important; transform: none !important; }
          .marvella-radar-sweep { animation: none !important; opacity: 0 !important; }
        }
      `}</style>
      <div className="relative isolate overflow-hidden">
        <header className="absolute inset-x-0 top-0 z-30 border-b border-white/[0.04]">
          <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-6 lg:px-10">
            <a
              href="#top"
              className="text-[11px] uppercase tracking-[0.32em] text-white/58 transition hover:text-white/78"
            >
              Marvella Group™
            </a>
            <nav className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[11px] uppercase tracking-[0.28em] text-white/48 transition hover:text-white/78"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section
          id="top"
          className="relative flex min-h-screen items-center justify-center text-center overflow-hidden"
        >
          <div
            className="absolute inset-0 marvella-ken-burns"
            style={{
              backgroundImage: "url('/hero/marvella-hero.png')",
              backgroundSize: "cover",
              backgroundPosition: "center 62%",
              backgroundRepeat: "no-repeat",
              animation: "marvella-ken-burns 45s ease-in-out infinite alternate",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(0,0,0,0.30)_34%,rgba(0,0,0,0.56)_68%,rgba(0,0,0,0.78)_100%)]" />

          <div
            className="pointer-events-none absolute inset-0 z-[5] marvella-radar-sweep"
            style={{
              background: "conic-gradient(from 0deg at 48% 38%, transparent 0deg, rgba(255,255,255,0.04) 6deg, rgba(147,197,253,0.025) 12deg, transparent 25deg)",
              animation: "marvella-radar-sweep 18s linear infinite",
              transformOrigin: "48% 38%",
            }}
          />

          <div className="relative z-10 mt-[26vh] mx-auto flex max-w-6xl flex-col items-center text-center">
            <div className="relative">
              <p
                className="mb-8 text-[11px] uppercase tracking-[0.42em] text-white/80 sm:text-xs marvella-reveal"
                style={{ textShadow: "0 1px 10px rgba(0,0,0,0.6)", animation: "marvella-reveal 0.9s ease-out 0.3s both" }}
              >
                Software • Platforms • Ventures
              </p>

              <h1
                className="bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(240,245,255,0.92)_25%,rgba(226,232,240,0.85)_50%,rgba(203,213,225,0.78)_75%,rgba(148,163,184,0.72)_100%)] bg-clip-text text-transparent font-light uppercase leading-none tracking-[0.20em] text-[4.5rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[10rem] marvella-reveal"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.28)", animation: "marvella-reveal 1.1s ease-out 0.7s both" }}
              >
                MARVELLA
              </h1>

              <div
                className="mt-5 flex items-center justify-center gap-5 marvella-reveal"
                style={{ animation: "marvella-reveal 0.7s ease-out 1.2s both" }}
              >
                <span className="h-[4px] w-24 bg-white/22 sm:w-32" />
                <span
                  className="text-[20px] font-light uppercase tracking-[0.32em] text-white/86 sm:text-[20px]"
                  style={{ textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
                >
                  GROUP
                </span>
                <span className="h-[4px] w-24 bg-white/22 sm:w-32" />
              </div>

              {/* Platforms row — below main logo */}
              <div
                id="platforms"
                className="mt-12 flex flex-col items-center gap-4 marvella-reveal"
                style={{ animation: "marvella-reveal 0.6s ease-out 1.5s both" }}
              >
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">
                  Platforms by Marvella Group™
                </p>
                <div className="flex items-center gap-6 text-[14px] font-light text-white/75 sm:text-[16px]">
                  {PLATFORMS.map((platform, i) => (
                    <span key={platform.name} className="flex items-center gap-6">
                      <a
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-white/95"
                      >
                        {platform.name}
                      </a>
                      {i < PLATFORMS.length - 1 && (
                        <span className="h-4 w-px bg-white/30" aria-hidden />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        <footer className="relative z-20 px-6 pt-24 pb-10 lg:px-10">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/34">
              © 2026 Marvella Group. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
