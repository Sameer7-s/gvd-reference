"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

/**
 * Accessible newsletter capture with client-side validation and a honeypot.
 * Wire `onSubmit` to your provider (Mailchimp / a serverless route) in production;
 * never trust the client — validate again server-side.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Honeypot: real users never fill this hidden field.
    const trap = (e.currentTarget.elements.namedItem("company") as HTMLInputElement)?.value;
    if (trap) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setDone(true);
  };

  if (done) {
    return (
      <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-4 py-3 text-sm text-emerald-200">
        <Check className="h-4 w-4" /> Hare Krishna! You&apos;re subscribed to temple updates.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2">
      <label htmlFor="nl-email" className="sr-only">
        Email address for temple updates
      </label>
      <div className="flex overflow-hidden rounded-full border border-gold-500/30 bg-maroon-950/40 focus-within:border-gold-400">
        <input
          id="nl-email"
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Your email for darshan & festival updates"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          aria-invalid={!!error}
          aria-describedby={error ? "nl-error" : undefined}
          className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
        />
        {/* honeypot */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1.5 bg-gradient-to-br from-gold-400 to-gold-600 px-5 text-sm font-semibold text-maroon-950 transition-colors hover:from-gold-300 hover:to-gold-500 cursor-pointer"
        >
          <Send className="h-4 w-4" />
          <span className="hidden sm:inline">Subscribe</span>
        </button>
      </div>
      {error && (
        <span id="nl-error" role="alert" className="px-2 text-xs text-saffron-300">
          {error}
        </span>
      )}
    </form>
  );
}
