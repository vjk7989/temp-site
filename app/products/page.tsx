import type { Metadata } from "next";
import {
  FileCheck2,
  Fingerprint,
  ShieldCheck,
  Split,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  LedgerDiagram,
  SecureInteractionDiagram,
  SystemArchitectureDiagram
} from "@/components/architecture-diagrams";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contactUrl, products } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Products | Hyper-Ox by Buckleson",
  description:
    "Explore Hyper Tern, Hyper-ABS, and Hyper-Ox Ledger for secure, private, and verifiable enterprise AI execution.",
  alternates: {
    canonical: "/products"
  },
  openGraph: {
    title: "Products | Hyper-Ox by Buckleson",
    description:
      "Architecture diagrams and product details for the Hyper-Ox AI security stack.",
    url: "/products",
    type: "website"
  }
};

const icons: Record<string, LucideIcon> = {
  "hyper-tern": Split,
  "hyper-abs": Fingerprint,
  "hyper-ox-ledger": FileCheck2
};

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto w-[min(94vw,1500px)] pb-16 pt-10">
        <p className="inline-flex rounded-sm border border-border bg-muted px-3 py-2 text-sm font-bold uppercase tracking-widest text-cyan">
          Products
        </p>
        <h1 className="mt-5 max-w-6xl text-[clamp(3.2rem,9vw,6rem)] font-[760] uppercase leading-[0.9] tracking-[-0.035em]">
          A security stack for AI execution.
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-tight text-muted-foreground md:text-2xl">
          Hyper-Ox brings routing, data abstraction, policy enforcement, and
          cryptographic verification into one enterprise-ready control layer.
        </p>
      </section>

      <section className="mx-auto grid w-[min(94vw,1500px)] gap-6 pb-20 lg:grid-cols-3">
        {products.map((product) => {
          const Icon = icons[product.slug];
          return (
              <Card key={product.slug} id={product.slug} className="surface-grid scroll-mt-24 p-7">
              <Icon className="h-10 w-10 text-cyan" />
              <CardHeader className="p-0 pt-8">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {product.label}
                </p>
                <CardTitle className="text-4xl uppercase">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-5">
                <p className="text-lg leading-tight text-muted-foreground">
                  {product.details}
                </p>
                <div className="mt-7 grid gap-3">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 font-bold">
                      <ShieldCheck className="h-5 w-5 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="border-y-2 border-border bg-muted/60 py-20">
        <div className="mx-auto w-[min(94vw,1500px)]">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan">
            Architecture diagrams
          </p>
          <h2 className="mt-4 max-w-4xl text-5xl font-[740] uppercase leading-[0.95] tracking-[-0.03em] md:text-7xl">
            Recreated from the deck for the web.
          </h2>
          <div className="mt-10 space-y-8">
            <SecureInteractionDiagram />
            <SystemArchitectureDiagram />
            <LedgerDiagram />
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(94vw,1500px)] gap-8 py-20 lg:grid-cols-[1fr_0.7fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Why it matters
          </p>
          <h2 className="mt-4 text-5xl font-[740] uppercase leading-[0.95] tracking-[-0.03em] md:text-7xl">
            AI agents need a trust boundary.
          </h2>
        </div>
        <Card className="p-7">
          <div className="grid gap-5">
            {[
              ["Controlled", "Granular permission checks before data or action access."],
              ["Private", "Models operate on protected context instead of raw source data."],
              ["Verifiable", "Critical actions produce durable proof records."]
            ].map(([title, copy]) => (
              <div key={title} className="flex gap-4">
                <Zap className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-bold uppercase">{title}</p>
                  <p className="text-muted-foreground">{copy}</p>
                </div>
              </div>
            ))}
          </div>
          <Button asChild size="lg" className="mt-8 w-full">
            <a href={contactUrl} target="_blank" rel="noreferrer">
              Talk to Buckleson
            </a>
          </Button>
        </Card>
      </section>
    </main>
  );
}
