"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";

interface SevaDoc {
  _id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  amounts: number[];
  highlight: boolean;
}

/* ── Amount pill ─────────────────────────────────────────────────── */
function AmountPill({ amount, highlight }: { amount: number; highlight: boolean }) {
  return (
    <span
      className="inline-flex items-center rounded-full text-xs font-semibold tracking-wide"
      style={{
        padding: "4px 12px",
        background: highlight
          ? "rgba(255,255,255,0.07)"
          : "rgba(29,92,150,0.07)",
        color: highlight ? "rgba(180,215,255,0.90)" : "#1D5C96",
        border: highlight
          ? "1px solid rgba(255,255,255,0.10)"
          : "1px solid rgba(29,92,150,0.15)",
        letterSpacing: "0.02em",
      }}
    >
      ₹{amount.toLocaleString("en-IN")}
    </span>
  );
}

/* ── Seva Card ───────────────────────────────────────────────────── */
export function SevaCard({ seva }: { seva: SevaDoc }) {
  const isHL = !!seva.highlight;

  return (
    <article
      id={seva.slug}
      className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[28px] transition-all duration-500"
      style={
        isHL
          ? {
              background: "linear-gradient(150deg, #1C4F8C 0%, #153F75 45%, #0C2E5E 100%)",
              border: "1px solid rgba(212,175,55,0.22)",
              boxShadow:
                "0 0 0 1px rgba(212,175,55,0.08), 0 24px 64px rgba(12,46,94,0.55), inset 0 1px 0 rgba(255,255,255,0.07)",
              padding: "32px 28px 28px",
            }
          : {
              background: "#FFFFFF",
              border: "1px solid rgba(29,92,150,0.10)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)",
              padding: "32px 28px 28px",
            }
      }
      onMouseEnter={(e) => {
        if (!isHL) {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 16px 48px rgba(29,92,150,0.12), 0 4px 12px rgba(29,92,150,0.06)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(29,92,150,0.22)";
        } else {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "";
        if (!isHL) {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(29,92,150,0.10)";
        }
      }}
    >
      {isHL && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[28px]"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% 0%, rgba(120,190,255,0.12) 0%, transparent 68%)",
          }}
        />
      )}
      <div className="relative z-10 mb-5">
        {isHL ? (
          <span
            className="inline-flex items-center gap-1.5 rounded-full text-[0.58rem] font-bold uppercase tracking-[0.22em]"
            style={{
              padding: "4px 12px",
              background: "rgba(212,175,55,0.12)",
              border: "1px solid rgba(212,175,55,0.30)",
              color: "#D4AF37",
            }}
          >
            ★ Most Needed
          </span>
        ) : (
          <div
            className="h-px w-8"
            style={{ background: "linear-gradient(90deg, #1D5C96, transparent)" }}
          />
        )}
      </div>
      <h3
        className="relative z-10 font-display leading-tight"
        style={{
          fontSize: "1.4rem",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: isHL ? "#FFFFFF" : "#0F1D36",
          marginBottom: 6,
        }}
      >
        {seva.title}
      </h3>
      <p
        className="relative z-10 text-sm font-medium"
        style={{
          color: isHL ? "#7BBDE8" : "#1D5C96",
          marginBottom: 12,
          letterSpacing: "0.01em",
        }}
      >
        {seva.tagline}
      </p>
      <div
        className="relative z-10 mb-4 h-px w-full"
        style={{
          background: isHL
            ? "rgba(255,255,255,0.08)"
            : "rgba(29,92,150,0.08)",
        }}
      />
      <p
        className="relative z-10 text-sm leading-relaxed"
        style={{
          color: isHL ? "rgba(195,220,255,0.70)" : "#4F6585",
          flexGrow: 0,
        }}
      >
        {seva.description}
      </p>
      <div className="relative z-10 mt-5 flex flex-wrap gap-2">
        {seva.amounts?.map((amt) => (
          <AmountPill key={amt} amount={amt} highlight={isHL} />
        ))}
      </div>
      <div className="flex-1" />
      <div className="relative z-10 mt-6">
        <Link
          href={`/donate#${seva.slug}`}
          className="group/cta flex w-full items-center justify-center gap-2 rounded-lg font-semibold tracking-wide transition-all duration-300"
          style={
            isHL
              ? {
                  height: 48,
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "#FFFFFF",
                  fontSize: "0.88rem",
                  letterSpacing: "0.04em",
                }
              : {
                  height: 48,
                  background: "linear-gradient(135deg, #123A8C, #1D5C96)",
                  border: "none",
                  color: "#FFFFFF",
                  fontSize: "0.88rem",
                  letterSpacing: "0.04em",
                  boxShadow: "0 8px 24px rgba(18,58,140,0.25)",
                }
          }
        >
          Contribute
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

/* ── Section ─────────────────────────────────────────────────────── */
export function Seva() {
  const [sevas, setSevas] = useState<SevaDoc[]>([]);

  useEffect(() => {
    fetch("/api/admin/sevas")
      .then((res) => res.json())
      .then((data) => setSevas(Array.isArray(data) ? data : []))
      .catch((err) => console.error("Failed to load sevas", err));
  }, []);

  return (
    <section id="sevas" className="relative overflow-hidden py-20 sm:py-28" style={{ background: "#EDF2F8" }}>
      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            eyebrow="Seva — Loving Service"
            title={
              <>
                Be a part of the Lord&apos;s{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #1D5C96, #123A8C)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  service
                </span>
              </>
            }
            intro="Every contribution, however small, becomes eternal devotional service. Choose a seva close to your heart and share in the merit."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {sevas.map((seva, i) => (
            <Reveal key={seva.slug} delay={i * 70}>
              <SevaCard seva={seva} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div
            className="flex flex-col items-center justify-between gap-5 rounded-2xl px-6 py-5 text-center sm:flex-row sm:text-left"
            style={{
              background: "rgba(255,255,255,0.65)",
              border: "1px solid rgba(29,92,150,0.10)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{ background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.20)" }}
              >
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
              </div>
              <p className="text-sm" style={{ color: "#4F6585" }}>
                <strong style={{ color: "#0F1D36" }}>100% secure &amp; tax-exempt.</strong>{" "}
                All donations are processed over an encrypted connection and are eligible for tax exemption.
                A receipt is issued for every contribution.
              </p>
            </div>
            <Link
              href="/donate"
              className="shrink-0 rounded-lg border text-sm font-semibold tracking-wide transition-all duration-200 hover:bg-[rgba(29,92,150,0.06)]"
              style={{
                padding: "10px 22px",
                borderColor: "rgba(29,92,150,0.25)",
                color: "#1D5C96",
                whiteSpace: "nowrap",
              }}
            >
              View all sevas
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
