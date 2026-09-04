import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactUrl } from "@/lib/site-data";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/#architecture", label: "Architecture" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-background/92 backdrop-blur-md">
      <div className="section-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Hyper-Ox home">
          <Image
            src="/bson-logo.jpg"
            alt="Buckleson logo"
            width={42}
            height={42}
            className="h-10 w-10 rounded-sm border border-ink bg-ink"
            priority
          />
          <span className="max-w-[11rem] text-sm font-black leading-tight text-ink sm:max-w-none">
            Hyper-Ox <span className="font-medium text-muted-foreground">by Buckleson</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-sm font-bold text-muted-foreground md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild variant="outline" className="hidden sm:inline-flex">
          <a href={contactUrl}>
            Contact <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </header>
  );
}
