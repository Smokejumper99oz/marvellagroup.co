import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Marvella Group™",
  description:
    "Get in touch with Marvella Group. We build innovative software, platforms and technology ventures.",
};

export default function ContactPage() {
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

        <section className="relative flex-1 flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-16">
          <div className="w-full max-w-2xl mx-auto space-y-10">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/70 mb-3">
                Get in touch
              </p>
              <h2 className="text-4xl md:text-5xl font-light uppercase tracking-[0.18em] text-white">
                Contact us
              </h2>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.02] shadow-[0_0_120px_rgba(103,232,249,0.06)] p-6 sm:p-8 md:p-10">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
