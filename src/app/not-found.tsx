import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-maroon-950 px-6 py-32 text-center text-cream">
      <div className="relative flex flex-col items-center">
        <p className="font-display text-7xl text-gold-grad">404</p>
        <h1 className="mt-4 font-display text-3xl text-cream">Page Not Found</h1>
        <p className="mt-3 max-w-md text-cream/70">
          We're sorry, but the page you were looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" variant="gold" size="md">
            <Home className="h-4 w-4" /> Go to Homepage
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="md"
            className="border-gold-300/40 bg-transparent text-cream hover:bg-gold-500/10"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
