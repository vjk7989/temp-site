import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactUrl } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 mx-auto flex w-[min(94vw,1500px)] items-center justify-between border-b border-border/70 bg-background/90 py-5 backdrop-blur">
      <Link href="/" className="flex items-center gap-3" aria-label="Hyper-Ox home">
        <Image
          src="/bson-logo.jpg"
          alt="Buckleson logo"
          width={42}
          height={42}
          className="rounded-sm border border-border"
          priority
        />
        <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Hyper-Ox by Buckleson
        </span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-bold uppercase tracking-widest text-muted-foreground md:flex">
        <Link href="/products" className="hover:text-primary">
          Products
        </Link>
        <Link href="/blog" className="hover:text-primary">
          Blog
        </Link>
        <Link href="/#architecture" className="hover:text-primary">
          Architecture
        </Link>
      </nav>
      <Button asChild variant="outline" className="hidden sm:inline-flex">
        <a href={contactUrl} target="_blank" rel="noreferrer">
          Contact Us <ArrowRight className="h-4 w-4" />
        </a>
      </Button>
    </header>
  );
}
