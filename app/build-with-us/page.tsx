import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Build with us | Marvella Group™",
  description:
    "We design and build premium digital platforms for teams that need real-time visibility, custom workflows, and reliable data — from operations and logistics to sports, service, and beyond.",
};

export default function BuildWithUsPage() {
  return (
    <main className="min-h-screen bg-[#02040A] text-white selection:bg-white/20">
      <div className="relative isolate min-h-screen flex flex-col overflow-hidden">
        {/* Universe background layers */}
        <div className="pointer-events-none absolute inset-0 bg-[#02040A]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-100"
          style={{
            background: `
              radial-gradient(ellipse 90% 60% at 15% 85%, rgba(103,232,249,0.04) 0%, transparent 55%),
              radial-gradient(ellipse 70% 50% at 85% 15%, rgba(147,197,253,0.035) 0%, transparent 50%),
              radial-gradient(ellipse 100% 80% at 50% 50%, rgba(30,58,138,0.025) 0%, transparent 65%),
              radial-gradient(ellipse 60% 40% at 75% 75%, rgba(103,232,249,0.03) 0%, transparent 45%)
            `,
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 marvella-stars opacity-90" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-100"
          style={{
            background: `
              radial-gradient(circle 400px at 10% 90%, rgba(103,232,249,0.06) 0%, transparent 70%),
              radial-gradient(circle 350px at 90% 10%, rgba(147,197,253,0.05) 0%, transparent 70%),
              radial-gradient(circle 300px at 50% 100%, rgba(103,232,249,0.03) 0%, transparent 60%)
            `,
          }}
          aria-hidden
        />
        <Header />

        <section className="relative flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 pt-24 sm:pt-28 pb-16">
          <div className="w-full max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center space-y-8 sm:space-y-10">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70">
              Build with us
            </p>
            <h1 className="text-4xl md:text-5xl font-light uppercase tracking-[0.18em] text-white">
              Software platforms for the real world.
            </h1>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-xl lg:max-w-3xl mx-auto">
              We design and build premium digital platforms for teams that need real-time visibility, custom workflows, and reliable data — from operations and logistics to sports, service, and beyond.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block rounded-md px-10 py-3.5 border border-cyan-200/20 bg-cyan-300/[0.08] text-white text-xs uppercase tracking-[0.28em] transition hover:bg-cyan-300/[0.14] hover:border-cyan-200/35"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </section>

        <section className="relative px-4 sm:px-6 md:px-8 lg:px-10 pt-20 sm:pt-24 pb-24 sm:pb-28">
          <div className="w-full max-w-6xl xl:max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70 mb-3">
                What we build
              </p>
              <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl lg:max-w-5xl mx-auto">
                Real-time platforms, custom workflows, live tracking, and connected systems designed for high-performance teams.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Operations Dashboards",
                  description:
                    "Mission-critical visibility for live operations, status, and decision support.",
                  image: "/mockups/operations-dashboard.png",
                },
                {
                  title: "API Integrations",
                  description:
                    "Connect external systems, automate data flow, and unify fragmented tools.",
                  image: "/mockups/api-integrations.png",
                },
                {
                  title: "Asset Tracking",
                  description:
                    "Monitor fleets, shipments, equipment, or field activity in real time.",
                  image: "/mockups/asset-tracking.png",
                },
                {
                  title: "Logistics Platforms",
                  description:
                    "Coordinate movement, timing, handoffs, and operational workflows.",
                  image: "/mockups/logistics-platforms.png",
                },
                {
                  title: "Team & Sports Systems",
                  description:
                    "Build scheduling, analytics, communications, and performance tools.",
                  image: "/mockups/team-sports-systems.png",
                },
                {
                  title: "Monitoring & Command Centers",
                  description:
                    "Centralized interfaces for live oversight, alerts, and control.",
                  image: "/mockups/monitoring-command-centers.png",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group rounded-[28px] border border-white/10 bg-white/[0.02] shadow-[0_0_120px_rgba(103,232,249,0.06)] overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:border-white/20 hover:shadow-[0_0_160px_rgba(103,232,249,0.12)]"
                >
                  <div
                    className="aspect-[16/10] relative bg-white/[0.02] border-b border-white/[0.06] overflow-hidden"
                    aria-hidden
                  >
                    {card.image ? (
                      <>
                        <Image
                          src={card.image}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {/* Subtle scanline overlay */}
                        <div
                          className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0_3px,rgba(255,255,255,0.015)_3px_4px)] pointer-events-none"
                          aria-hidden
                        />
                        {/* Inner window frame */}
                        <div
                          className="absolute inset-2 sm:inset-3 ring-1 ring-inset ring-white/[0.08] rounded-sm pointer-events-none"
                          aria-hidden
                        />
                        {/* Top window chrome */}
                        <div
                          className="absolute top-0 left-0 right-0 h-5 flex items-center gap-1.5 px-3 border-b border-white/[0.06]"
                          aria-hidden
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Grid background */}
                        <div
                          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]"
                          aria-hidden
                        />
                        {/* Scanline overlay */}
                        <div
                          className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0_3px,rgba(255,255,255,0.015)_3px_4px)] pointer-events-none"
                          aria-hidden
                        />
                        {/* Inner window frame */}
                        <div
                          className="absolute inset-2 sm:inset-3 ring-1 ring-inset ring-white/[0.08] rounded-sm pointer-events-none"
                          aria-hidden
                        />
                        {/* Top window chrome */}
                        <div
                          className="absolute top-0 left-0 right-0 h-5 flex items-center gap-1.5 px-3 border-b border-white/[0.06]"
                          aria-hidden
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-white/80 mb-2 transition-colors duration-300 group-hover:text-white/95">
                      {card.title}
                    </p>
                    <p className="text-sm text-white/60 leading-relaxed transition-colors duration-300 group-hover:text-white/70">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 sm:px-6 md:px-8 lg:px-10 pb-24 sm:pb-28">
          <div className="w-full max-w-2xl md:max-w-4xl lg:max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70">
              Built for complex work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-[0.14em] sm:tracking-[0.16em] text-white">
              From airlines to logistics,<br />sports, and beyond.
            </h2>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed">
              We build software for teams that rely on timing, coordination, visibility, and dependable data. Every platform is designed around the way people actually work — then tailored to the systems, workflows, and pace of your operation.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-2">
              {[
                "Transportation",
                "Logistics",
                "Sports",
                "Field Services",
                "Operations",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-md border border-white/10 bg-white/[0.02] px-4 py-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white/70"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="relative px-4 sm:px-6 md:px-8 lg:px-10 pb-24 sm:pb-28">
          <div className="w-full max-w-2xl lg:max-w-6xl mx-auto text-center space-y-8 sm:space-y-10">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70">
              Start a project
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-[0.14em] sm:tracking-[0.16em] text-white">
              Build the platform your team actually needs.
            </h2>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed">
              From live operations to connected workflows and custom data systems, we design software around the way your organization runs.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block rounded-md px-10 py-3.5 border border-cyan-200/20 bg-cyan-300/[0.08] text-white text-xs uppercase tracking-[0.28em] transition hover:bg-cyan-300/[0.14] hover:border-cyan-200/35"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
