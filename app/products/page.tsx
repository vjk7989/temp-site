import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, Fingerprint, ShieldCheck, Split } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  BlockchainMoatDiagram,
  ProductFlowDiagram,
  SecureInteractionDiagram,
  SystemArchitectureDiagram,
  TrustExecutionDiagram
} from "@/components/architecture-diagrams";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { contactUrl, products } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Hyper Tern, Hyper-ABS, and Hyper-Ox blockchain for secure, private, and verifiable enterprise AI execution.",
  alternates: {
    canonical: "/products"
  },
  openGraph: {
    title: "Products | Hyper-Ox by Buckleson",
    description:
      "Product details and architecture diagrams for the Hyper-Ox AI security stack.",
    url: "/products",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Products | Hyper-Ox by Buckleson",
    description:
      "Hyper Tern, Hyper-ABS, and Hyper-Ox blockchain architecture for enterprise AI execution."
  }
};

const icons: Record<string, LucideIcon> = {
  "hyper-tern": Split,
  "hyper-abs": Fingerprint,
  "hyper-ox-blockchain": FileCheck2
};

export default function ProductsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="deck-shell pb-16 pt-12">
        <p className="inline-flex rounded-full border border-primary/25 bg-purple-soft px-4 py-2 text-sm font-black text-primary">
          Product stack
        </p>
        <h1 className="mt-6 max-w-5xl text-[clamp(2.55rem,7vw,5.6rem)] font-black leading-[0.98] text-ink">
          A security layer for agentic execution.
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted-foreground">
          Hyper-Ox combines routing, abstraction, and cryptographic verification so enterprise AI
          teams can move from prototypes to controlled production workflows.
        </p>
      </section>

      <section className="deck-shell grid gap-5 pb-20 lg:grid-cols-3" aria-label="Product shortcuts">
        {products.map((product) => {
          const Icon = icons[product.slug];
          return (
            <Link key={product.slug} href={`#${product.slug}`} className="group block">
              <Card className="h-full rounded-md p-6 transition group-hover:-translate-y-1 group-hover:border-primary">
                <Icon className="h-9 w-9 text-primary" />
                <p className="mt-7 text-sm font-black text-cyan">{product.label}</p>
                <h2 className="mt-3 text-3xl font-black text-ink">{product.name}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{product.copy}</p>
                <span className="mt-7 inline-flex items-center gap-2 font-black text-primary">
                  See details <ArrowRight className="h-4 w-4" />
                </span>
              </Card>
            </Link>
          );
        })}
      </section>

      <section className="border-y border-border bg-white py-20">
        <div className="deck-shell space-y-16">
          {products.map((product) => {
            const Icon = icons[product.slug];
            const slug = product.slug as "hyper-tern" | "hyper-abs" | "hyper-ox-blockchain";
            return (
              <article
                key={product.slug}
                id={product.slug}
                className="scroll-mt-28 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start"
              >
                <div>
                  <Icon className="h-10 w-10 text-primary" />
                  <p className="mt-6 text-sm font-black text-primary">{product.eyebrow}</p>
                  <h2 className="mt-3 text-4xl font-black leading-tight text-ink md:text-6xl">
                    {product.name}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{product.details}</p>
                  <div className="mt-7 grid gap-3">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex gap-3 font-bold text-ink">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 rounded-md border border-primary/25 bg-purple-soft p-4 font-black text-primary">
                    {product.outcome}
                  </p>
                </div>
                <ProductFlowDiagram product={slug} />
              </article>
            );
          })}
        </div>
      </section>

      <section className="deck-shell py-20">
        <div className="mb-9 max-w-4xl">
          <p className="text-sm font-black text-cyan">Architecture diagrams</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-ink md:text-6xl">
            Recreated from the deck for the web.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            These diagrams are static, accessible components so product details stay indexable and fast.
          </p>
        </div>
        <div className="space-y-8">
          <TrustExecutionDiagram />
          <SecureInteractionDiagram />
          <SystemArchitectureDiagram />
          <BlockchainMoatDiagram />
        </div>
      </section>

      <section className="border-y border-border bg-muted/70 py-20">
        <div className="deck-shell grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <ShieldCheck className="h-10 w-10 text-primary" />
            <h2 className="mt-6 text-4xl font-black leading-tight text-ink md:text-6xl">
              The trust boundary belongs between agents and infrastructure.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Hyper-Ox is designed to mediate data ingress, action egress, and verification without
              asking enterprises to rebuild their application stack first.
            </p>
          </div>
          <Card className="rounded-md p-6">
            <div className="grid gap-5">
              {[
                ["Controlled", "Granular permission checks before data or action access."],
                ["Private", "Models operate on protected context instead of raw source data."],
                ["Verifiable", "Critical actions produce durable proof records."]
              ].map(([title, copy]) => (
                <div key={title} className="rounded-md border border-border bg-white p-4">
                  <p className="font-black text-ink">{title}</p>
                  <p className="mt-1 text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-7 w-full">
              <a href={contactUrl}>Talk to Buckleson</a>
            </Button>
          </Card>
        </div>
      </section>
    </main>
  );
}
