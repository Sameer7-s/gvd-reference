"use client";

import { useEffect, useMemo, useState } from "react";
import { BadgeIndianRupee, ShieldCheck, Lock, CheckCircle2, Loader2 } from "lucide-react";
import { SEVAS, type Seva } from "@/lib/site";

type Frequency = "once" | "monthly";

export function DonationForm({ sevas = SEVAS }: { sevas?: Seva[] }) {
  const [sevaSlug, setSevaSlug] = useState(sevas[0].slug);
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [amount, setAmount] = useState<number>(sevas[0].amounts[1]);
  const [custom, setCustom] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", pan: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  // Deep-link support: /donate#anna-daan preselects the seva.
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const match = sevas.find((s) => s.slug === hash);
    if (match) {
      setSevaSlug(match.slug);
      setAmount(match.amounts[1]);
    }
  }, []);

  const seva = useMemo(() => sevas.find((s) => s.slug === sevaSlug) || sevas[0], [sevas, sevaSlug]);
  const finalAmount = custom ? Number(custom) : amount;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!/^[0-9+\-\s]{8,15}$/.test(form.phone)) e.phone = "Enter a valid phone number.";
    if (form.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(form.pan.toUpperCase()))
      e.pan = "PAN should look like ABCDE1234F.";
    if (!finalAmount || finalAmount < 10) e.amount = "Minimum contribution is ₹10.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if ((ev.currentTarget.elements.namedItem("website") as HTMLInputElement)?.value) return;
    if (!validate()) return;
    setStatus("submitting");
    // SIMULATED: records the donation server-side (status "simulated").
    // Tomorrow this becomes create-order → gateway redirect → verify.
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          seva: sevaSlug,
          frequency,
          amount: finalAmount,
          name: form.name,
          email: form.email,
          phone: form.phone,
        }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("done");
    } catch {
      setStatus("idle");
      setErrors((e) => ({ ...e, submit: "Something went wrong. Please try again." }));
    }
  };

  if (!sevas.length) {
    return <div className="p-8 text-center text-text-muted">No sevas available at the moment.</div>;
  }

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-emerald-600/30 bg-emerald-500/5 p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-600" />
        <h3 className="mt-4 font-display text-2xl text-text-primary">Hare Krishna, {form.name.split(" ")[0]}!</h3>
        <p className="mx-auto mt-2 max-w-md text-text-muted">
          Thank you for your <strong className="text-text-primary">{seva?.title}</strong> contribution of{" "}
          <strong className="text-text-primary">₹{finalAmount.toLocaleString("en-IN")}</strong>
          {frequency === "monthly" ? " every month" : ""}. In production you would now be redirected
          to our secure payment gateway. A tax-exempt receipt will be emailed to {form.email}.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 cursor-pointer rounded-lg border border-accent-primary/40 px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-accent-light/10"
        >
          Make another offering
        </button>
      </div>
    );
  }

  const field = "w-full rounded-xl border border-accent-primary/20 bg-bg-white px-4 py-3 text-text-primary placeholder:text-text-muted/60 focus:border-accent-primary focus:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <fieldset>
        <legend className="mb-3 font-display text-lg text-text-primary">1 · Choose a seva</legend>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sevas.map((s) => (
            <label
              key={s.slug}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm transition-colors ${
                sevaSlug === s.slug
                  ? "border-accent-primary bg-accent-light/10 text-text-primary"
                  : "border-accent-primary/20 bg-bg-secondary/60 text-text-muted hover:border-accent-primary"
              }`}
            >
              <input
                type="radio"
                name="seva"
                value={s.slug}
                checked={sevaSlug === s.slug}
                onChange={() => {
                  setSevaSlug(s.slug);
                  setAmount(s.amounts?.[1] || s.amounts?.[0] || 1001);
                  setCustom("");
                }}
                className="sr-only"
              />
              <span
                className={`grid h-4 w-4 place-items-center rounded-full border ${
                  sevaSlug === s.slug ? "border-accent-secondary" : "border-text-text-muted/40"
                }`}
              >
                {sevaSlug === s.slug && <span className="h-2 w-2 rounded-full bg-accent-secondary" />}
              </span>
              <span className="font-medium">{s.title}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-3 font-display text-lg text-text-primary">2 · Contribution</legend>
        <div className="mb-4 inline-flex rounded-lg border border-accent-primary/20 bg-bg-secondary/60 p-1">
          {(["once", "monthly"] as Frequency[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFrequency(f)}
              className={`cursor-pointer rounded-lg px-5 py-1.5 text-sm font-semibold capitalize transition-colors ${
                frequency === f ? "bg-accent-primary text-white" : "text-text-muted hover:text-text-primary"
              }`}
            >
              {f === "once" ? "One-time" : "Monthly"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {seva?.amounts?.map((amt: number) => (
            <button
              key={amt}
              type="button"
              onClick={() => {
                setAmount(amt);
                setCustom("");
              }}
              className={`inline-flex items-center justify-center gap-0.5 rounded-lg border py-3 font-semibold transition-colors ${
                !custom && amount === amt
                  ? "border-accent-primary bg-accent-light/10 text-accent-secondary"
                  : "border-accent-primary/20 bg-bg-secondary/60 text-text-primary hover:border-accent-primary"
              }`}
            >
              <BadgeIndianRupee className="h-4 w-4" />
              {amt.toLocaleString("en-IN")}
            </button>
          ))}
        </div>

        <div className="mt-3">
          <label htmlFor="custom-amount" className="sr-only">Custom amount</label>
          <div className="relative">
            <BadgeIndianRupee className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
            <input
              id="custom-amount"
              type="number"
              min={10}
              inputMode="numeric"
              placeholder="Enter a custom amount"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              className={`${field} pl-11`}
            />
          </div>
          {errors.amount && <p className="mt-1 text-sm text-red-600" role="alert">{errors.amount}</p>}
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="mb-1 font-display text-lg text-text-primary">3 · Your details</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-text-primary">Full name</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              aria-invalid={!!errors.name}
              className={field}
            />
            {errors.name && <p className="mt-1 text-sm text-red-600" role="alert">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-text-primary">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-invalid={!!errors.email}
              className={field}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600" role="alert">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm font-medium text-text-primary">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              aria-invalid={!!errors.phone}
              className={field}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600" role="alert">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="pan" className="mb-1 block text-sm font-medium text-text-primary">
              PAN <span className="font-normal text-text-muted">(for 80G receipt, optional)</span>
            </label>
            <input
              id="pan"
              name="pan"
              value={form.pan}
              onChange={(e) => setForm({ ...form, pan: e.target.value.toUpperCase() })}
              aria-invalid={!!errors.pan}
              maxLength={10}
              className={`${field} uppercase`}
            />
            {errors.pan && <p className="mt-1 text-sm text-red-600" role="alert">{errors.pan}</p>}
          </div>
        </div>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      </fieldset>

      {errors.submit && (
        <p className="text-center text-sm text-red-600" role="alert">
          {errors.submit}
        </p>
      )}

      {/* Summary + submit */}
      <div className="flex flex-col gap-4 rounded-2xl border border-accent-primary/20 bg-bg-secondary/80 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-text-muted">You are offering</p>
          <p className="font-display text-2xl text-text-primary">
            ₹{(finalAmount || 0).toLocaleString("en-IN")}
            <span className="text-base text-text-muted">
              {" "}
              · {seva?.title}
              {frequency === "monthly" ? " / month" : ""}
            </span>
          </p>
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-accent-secondary to-accent-primary px-7 py-3.5 font-semibold text-white shadow-luxury transition-all hover:from-accent-primary hover:to-accent-secondary disabled:cursor-wait disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" /> Processing…
            </>
          ) : (
            <>
              <Lock className="h-4 w-4" /> Proceed to secure payment
            </>
          )}
        </button>
      </div>

      <p className="flex items-center justify-center gap-2 text-center text-xs text-text-muted">
        <ShieldCheck className="h-4 w-4 text-emerald-600" />
        256-bit encrypted · powered by a PCI-DSS compliant gateway · your details are never shared.
      </p>
    </form>
  );
}
