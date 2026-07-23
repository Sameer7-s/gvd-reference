import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden bg-text-primary px-6 py-32 text-center text-white">
      <div className="relative flex flex-col items-center">
        <p className="font-display text-7xl text-accent-primary">404</p>
        <h1 className="mt-4 font-display text-3xl text-white">Page Not Found</h1>
        <p className="mt-3 max-w-md text-white/70">
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
            className="border-accent-primary/40 bg-transparent text-white hover:bg-accent-primary/10"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
