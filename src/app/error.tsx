"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RefreshCw } from "lucide-react";
import { Mandala, Lotus, ToranaArch } from "@/components/decor";
import { Button } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative grid min-h-[70vh] place-items-center overflow-hidden bg-bg-primary px-6 py-32 text-center text-text-primary">
      <Mandala className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-auto -translate-x-1/2 -translate-y-1/2 text-accent-primary/[0.04] animate-spin-slow" />
      <div className="relative flex flex-col items-center z-10">
        <div className="relative mb-6">
          <ToranaArch className="mx-auto h-40 text-accent-primary/20" />
          <Lotus className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rotate-180 text-accent-secondary" />
        </div>
        <p className="font-display text-7xl text-accent-secondary">Error</p>
        <h1 className="mt-4 font-display text-3xl text-text-primary">Something went wrong</h1>
        <p className="mt-3 max-w-md text-text-muted">
          We encountered an unexpected issue. Please try again later or return to the home page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button onClick={() => reset()} variant="primary" size="md">
            <RefreshCw className="h-4 w-4" /> Try Again
          </Button>
          <Button
            href="/"
            variant="outline"
            size="md"
            className="border-accent-primary/40 bg-transparent text-accent-primary hover:bg-accent-primary/10"
          >
            <Home className="h-4 w-4" /> Return Home
          </Button>
        </div>
        <Link href="/contact" className="mt-6 text-sm text-accent-primary underline-offset-4 hover:underline">
          Contact Support
        </Link>
      </div>
    </section>
  );
}
