"use client";

import { useState, useRef } from "react";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "mykndnqp";

export function ContactForm() {
  const [validationError, setValidationError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value?.trim() ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value?.trim() ?? "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value?.trim() ?? "";

    if (!name || !email || !message) {
      setValidationError(true);
      return;
    }

    setValidationError(false);
    setError(false);
    setSubmitting(true);

    try {
      const formData = new FormData(form);
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ENDPOINT}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="contact-form flex flex-col gap-8"
    >
        {/* Honeypot - Formspree silently rejects submissions where bots fill this */}
        <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} aria-hidden />
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-xs uppercase tracking-[0.28em] text-white/70"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className={`w-full rounded-md bg-white/${"[0.025]"} border border-white/12 text-white placeholder:text-white/30 px-4 py-3.5 text-sm shadow-inner shadow-black/20 transition focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/30 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed`}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-[0.28em] text-white/70"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="your@email.com"
            className={`w-full rounded-md bg-white/${"[0.025]"} border border-white/12 text-white placeholder:text-white/30 px-4 py-3.5 text-sm shadow-inner shadow-black/20 transition focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/30 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed`}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-[0.28em] text-white/70"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="How can we help?"
            className={`w-full rounded-md bg-white/${"[0.025]"} border border-white/12 text-white placeholder:text-white/30 px-4 py-3.5 text-sm shadow-inner shadow-black/20 transition focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/30 focus:outline-none resize-y min-h-[140px] disabled:opacity-60 disabled:cursor-not-allowed`}
          />
        </div>

        {success && (
          <p className="text-sm text-cyan-300/90">
            Thanks for your message. We&apos;ll get back to you soon.
          </p>
        )}

        {error && (
          <p className="text-sm text-red-400/90">
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        {validationError && (
          <p className="text-sm text-red-400/90">
            Please fill out name, email, and message.
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className={`self-start mt-2 rounded-md px-10 py-3.5 border border-cyan-200/20 bg-cyan-300/${"[0.08]"} text-white text-xs uppercase tracking-[0.28em] transition hover:bg-cyan-300/${"[0.14]"} hover:border-cyan-200/35 disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          {submitting ? "Sending…" : "Send"}
        </button>
      </form>
  );
}
