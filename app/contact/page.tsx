import type { Metadata } from "next";
import type { SVGProps } from "react";
import { Suspense } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Marvella Group™",
  description:
    "Get in touch with Marvella Group. We build innovative software, platforms and technology ventures.",
};

type IconProps = SVGProps<SVGSVGElement>;

function BusinessContactPhoneIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function BusinessContactMapPinIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function BusinessContactClockIcon({ className, ...props }: IconProps) {
  return (
    <svg
      className={className}
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

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

            <div className="space-y-5 sm:space-y-6">
              <div className="flex justify-center px-2" aria-hidden>
                <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/[0.14] to-transparent" />
              </div>

              <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.015] shadow-[0_0_48px_rgba(103,232,249,0.035)] p-6 sm:p-8 md:p-10 space-y-6">
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/55">
                  Direct contact
                </p>
                <div className="space-y-5 text-sm text-white/75 leading-[1.65]">
                  <div className="flex gap-3 items-center">
                    <BusinessContactPhoneIcon className="size-4 shrink-0 text-cyan-200/38" />
                    <a
                      href="tel:7272480998"
                      className="text-white/88 transition hover:text-cyan-200/90 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-300/40 rounded-sm"
                    >
                      727-248-0998
                    </a>
                  </div>
                  <div className="flex gap-3 items-start">
                    <BusinessContactMapPinIcon className="size-4 shrink-0 text-cyan-200/38 mt-0.5" />
                    <p className="text-white/70">
                      1901 Ulmerton Rd
                      <br />
                      Suite 625-311
                      <br />
                      Clearwater, FL 33762
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <BusinessContactClockIcon className="size-4 shrink-0 text-cyan-200/38 mt-0.5" />
                    <p className="text-white/70">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Closed Weekends and Holidays
                    </p>
                  </div>
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
