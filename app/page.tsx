import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

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
      <div className="relative isolate overflow-x-hidden">
        <Header />

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

          <div className="relative z-10 mt-[18vh] sm:mt-[22vh] md:mt-[26vh] mx-auto flex max-w-6xl flex-col items-center text-center px-4 sm:px-6">
            <div className="relative">
              <p
                className="mb-6 sm:mb-8 text-[10px] sm:text-[11px] uppercase tracking-[0.38em] sm:tracking-[0.42em] text-white/80 marvella-reveal"
                style={{ textShadow: "0 1px 10px rgba(0,0,0,0.6)", animation: "marvella-reveal 0.9s ease-out 0.3s both" }}
              >
                Software • Platforms • Ventures
              </p>

              <h1
                className="bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(240,245,255,0.92)_25%,rgba(226,232,240,0.85)_50%,rgba(203,213,225,0.78)_75%,rgba(148,163,184,0.72)_100%)] bg-clip-text text-transparent font-light uppercase leading-none tracking-[0.16em] sm:tracking-[0.18em] md:tracking-[0.20em] text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[10rem] marvella-reveal"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.28)", animation: "marvella-reveal 1.1s ease-out 0.7s both" }}
              >
                MARVELLA
              </h1>

              <div
                className="mt-4 sm:mt-5 flex items-center justify-center gap-3 sm:gap-5 marvella-reveal"
                style={{ animation: "marvella-reveal 0.7s ease-out 1.2s both" }}
              >
                <span className="h-[3px] sm:h-[4px] w-12 sm:w-24 md:w-32 bg-white/22 shrink-0" />
                <span
                  className="text-[16px] sm:text-[18px] md:text-[20px] font-light uppercase tracking-[0.28em] sm:tracking-[0.32em] text-white/86"
                  style={{ textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
                >
                  GROUP
                </span>
                <span className="h-[3px] sm:h-[4px] w-12 sm:w-24 md:w-32 bg-white/22 shrink-0" />
              </div>

              {/* Platforms row — below main logo */}
              <div
                id="build-with-us"
                className="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center gap-3 sm:gap-4 marvella-reveal"
                style={{ animation: "marvella-reveal 0.6s ease-out 1.5s both" }}
              >
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white/50">
                  Platforms by Marvella Group™
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-[13px] sm:text-[14px] md:text-[16px] font-light text-white/75">
                  {PLATFORMS.map((platform, i) => (
                    <span key={platform.name} className="flex items-center gap-4 sm:gap-6">
                      <a
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-white/95 py-2 -my-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                      >
                        {platform.name}
                      </a>
                      {i < PLATFORMS.length - 1 && (
                        <span className="hidden sm:inline h-4 w-px bg-white/30 shrink-0" aria-hidden />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
