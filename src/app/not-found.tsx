import Link from "next/link";
import { Home, Heart } from "lucide-react";
import { Mandala, Lotus, ToranaArch } from "@/components/decor";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-maroon-950 px-6 py-32 text-center text-cream">
      <Mandala className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-auto -translate-x-1/2 -translate-y-1/2 text-gold-500/[0.07] animate-spin-slow" />
      <div className="relative flex flex-col items-center">
        <div className="relative mb-6">
          <ToranaArch className="mx-auto h-40 text-gold-400/40" />
          <Lotus className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rotate-180 text-gold-300" />
        </div>
        <p className="font-display text-7xl text-gold-grad">404</p>
        <h1 className="mt-4 font-display text-3xl text-cream">This path leads beyond the dham</h1>
        <p className="mt-3 max-w-md text-cream/70">
          The page you seek could not be found. Perhaps return home and continue your journey of
          devotion.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="gold" size="md">
            <Home className="h-4 w-4" /> Return Home
          </Button>
          <Button
            href="/donate"
            variant="outline"
            size="md"
            className="border-gold-300/40 bg-transparent text-cream hover:bg-gold-500/10"
          >
            <Heart className="h-4 w-4" /> Offer a Seva
          </Button>
        </div>
        <Link href="/visit" className="mt-6 text-sm text-gold-300 underline-offset-4 hover:underline">
          Plan a visit instead
        </Link>
      </div>
    </section>
  );
}
