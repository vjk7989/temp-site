import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Database,
  FileCheck2,
  Fingerprint,
  HeartPulse,
  Mail,
  Phone,
  ShieldCheck,
  Split,
  Stethoscope,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SecureInteractionDiagram } from "@/components/architecture-diagrams";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { blogs, contactUrl, products } from "@/lib/site-data";

const productIcons: Record<string, LucideIcon> = {
  "hyper-tern": Split,
  "hyper-abs": Fingerprint,
  "hyper-ox-ledger": FileCheck2
};

const verticals: Array<[string, LucideIcon]> = [
  ["Medical AI", Stethoscope],
  ["Genomics", BrainCircuit],
  ["Mental Health", HeartPulse],
  ["Insurance/Risk", ShieldCheck],
  ["Fitness AI", Zap],
  ["Enterprise Copilots", Building2]
];

const failures = [
  ["Raw data exposure", "Models need context, but direct access leaks sensitive records into unpredictable execution paths."],
  ["No execution proof", "Traditional logs struggle to prove what an AI agent actually did, why it did it, and what policy allowed it."],
  ["Compliance drift", "Autonomous actions can break permissions, regulatory constraints, and audit expectations before teams notice."]
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <SiteHeader />

      <section className="mx-auto grid w-[min(94vw,1500px)] gap-10 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="lift-in">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-sm border border-border bg-muted px-3 py-2 text-sm font-bold text-muted-foreground transition hover:border-accent hover:text-accent"
          >
            v1 trust stack live <ArrowRight className="h-4 w-4" />
          </Link>
          <h1 className="mt-6 max-w-5xl text-[clamp(3.6rem,9.5vw,6rem)] font-[760] uppercase leading-[0.9] tracking-[-0.035em]">
            Escape unsafe AI execution.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            Hyper-Ox is the one-stop security layer for AI agents: private data
            access, route-level policy, controlled actions, and cryptographic
            proof in one execution plane.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={contactUrl} target="_blank" rel="noreferrer">
                Book 30 min <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/products">View products</Link>
            </Button>
          </div>
        </div>

        <Card className="surface-grid lift-in overflow-hidden p-0">
          <div className="border-b-2 border-border bg-muted p-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Execution console
            </p>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-card p-6">
              <p className="text-sm text-muted-foreground">request.intent</p>
              <p className="mt-2 text-2xl font-bold">Approve clinical summary agent</p>
              <div className="mt-8 space-y-3">
                {["PII redacted", "Scope checked", "Ledger pending"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background p-6">
              <div className="grid gap-4">
                <FlowStep icon={Database} title="Data ingress" copy="PHI, docs, records" />
                <FlowStep icon={ShieldCheck} title="Hyper Tern" copy="Policy route and scope gate" active />
                <FlowStep icon={BrainCircuit} title="AI model" copy="Protected context only" />
                <FlowStep icon={FileCheck2} title="Proof" copy="Immutable audit record" verified />
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="border-y-2 border-border bg-accent py-4 text-accent-foreground">
        <div className="marquee flex w-max gap-12 text-3xl font-[760] uppercase tracking-[-0.03em] md:text-5xl">
          {[...Array(2)].map((_, repeat) => (
            <div className="flex gap-12" key={repeat} aria-hidden={repeat === 1}>
              <span>Private context</span>
              <span>Permissioned tools</span>
              <span>Agent audit</span>
              <span>Proof of execution</span>
              <span>Quantum-ready verification</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(94vw,1500px)] py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <h2 className="text-5xl font-[740] uppercase leading-[0.95] tracking-[-0.03em] md:text-7xl">
              The problem is execution, not intelligence.
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Enterprises already know AI is capable. The open question is
              whether agents can touch real systems without exposing data,
              bypassing policy, or leaving unverifiable side effects.
            </p>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-3">
            {failures.map(([title, copy]) => (
              <div key={title} className="bg-card p-6">
                <p className="text-5xl font-[760] text-primary">!</p>
                <h3 className="mt-8 text-2xl font-bold uppercase">{title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(94vw,1500px)] pb-20">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-4xl text-5xl font-[740] uppercase leading-[0.95] tracking-[-0.03em] md:text-7xl">
              Products that click into architecture.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Each layer handles one security boundary. Click any product to see
              details and diagrams.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/products">Open products</Link>
          </Button>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = productIcons[product.slug];
            return (
              <Link key={product.slug} href={`/products#${product.slug}`} className="group block">
                <Card className="h-full overflow-hidden p-0 transition group-hover:-translate-y-1 group-hover:border-accent">
                  <div className="flex items-center justify-between border-b-2 border-border p-5">
                    <Icon className="h-8 w-8 text-cyan" />
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition group-hover:text-accent" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{product.label}</p>
                    <h3 className="mt-5 text-4xl font-[740] uppercase leading-none">{product.name}</h3>
                    <p className="mt-5 leading-relaxed text-muted-foreground">{product.copy}</p>
                    <p className="mt-8 inline-flex border border-border px-3 py-2 text-sm font-bold text-accent">
                      {product.outcome}
                    </p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section id="architecture" className="border-y-2 border-border bg-muted/60 py-20">
        <div className="mx-auto grid w-[min(94vw,1500px)] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <h2 className="text-5xl font-[740] uppercase leading-[0.95] tracking-[-0.03em] md:text-7xl">
              Architecture you can point at.
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              The diagram is no longer trapped in the pitch deck. It is rebuilt
              as page-native content for performance, SEO, and accessibility.
            </p>
          </div>
          <SecureInteractionDiagram />
        </div>
      </section>

      <section className="mx-auto w-[min(94vw,1500px)] py-20">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <h2 className="text-5xl font-[740] uppercase leading-[0.95] tracking-[-0.03em] md:text-7xl">
              Built for regulated AI teams.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Focused on markets where privacy and auditability decide whether
              an AI agent can move from prototype to production.
            </p>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map(([name, Icon]) => (
              <div key={name} className="flex min-h-32 items-end justify-between bg-card p-5">
                <span className="text-2xl font-bold uppercase leading-none">{name}</span>
                <Icon className="h-7 w-7 shrink-0 text-cyan" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-2 border-border bg-background py-20">
        <div className="mx-auto w-[min(94vw,1500px)]">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-4xl text-5xl font-[740] uppercase leading-[0.95] tracking-[-0.03em] md:text-7xl">
              Research notes, not content filler.
            </h2>
            <Button asChild variant="outline">
              <Link href="/blog">Read blog</Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {blogs.slice(0, 4).map((post) => (
              <Link key={post.slug} href={`/blog#${post.slug}`} className="group block">
                <Card className="h-full p-6 transition group-hover:border-cyan group-hover:bg-muted">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan">
                    {post.category} - {post.readTime}
                  </p>
                  <h3 className="mt-4 text-2xl font-bold uppercase">{post.title}</h3>
                  <p className="mt-4 text-muted-foreground">{post.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-20 text-accent-foreground">
        <div className="mx-auto grid w-[min(94vw,1500px)] gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <h2 className="max-w-4xl text-5xl font-[760] uppercase leading-[0.9] tracking-[-0.035em] md:text-7xl">
              Make AI actions provable.
            </h2>
            <p className="mt-6 max-w-2xl text-xl">
              Bring us the agent workflow. We will help map the trust boundary.
            </p>
          </div>
          <Card className="border-accent-foreground bg-accent-foreground p-6 text-background">
            <div className="space-y-4">
              <ContactLine icon={Mail} text="info@pavii.tec" href="mailto:info@pavii.tec" />
              <ContactLine icon={Mail} text="vijay@buckleson.com" href="mailto:vijay@buckleson.com" />
              <ContactLine icon={Phone} text="+91 7981847657" href="tel:+917981847657" />
            </div>
            <Button asChild size="lg" className="mt-6 w-full">
              <a href={contactUrl} target="_blank" rel="noreferrer">
                Contact Us <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </Card>
        </div>
      </section>
    </main>
  );
}

function FlowStep({
  icon: Icon,
  title,
  copy,
  active = false,
  verified = false
}: {
  icon: LucideIcon;
  title: string;
  copy: string;
  active?: boolean;
  verified?: boolean;
}) {
  return (
    <div className={`flex items-center gap-4 border-2 p-4 ${active ? "border-primary bg-primary/15" : verified ? "border-accent bg-accent/10" : "border-border bg-card"}`}>
      <Icon className={`h-6 w-6 ${verified ? "text-accent" : "text-cyan"}`} />
      <div>
        <p className="font-bold uppercase">{title}</p>
        <p className="text-sm text-muted-foreground">{copy}</p>
      </div>
    </div>
  );
}

function ContactLine({
  icon: Icon,
  text,
  href
}: {
  icon: LucideIcon;
  text: string;
  href: string;
}) {
  return (
    <a className="flex items-center gap-3 border-2 border-border p-4 font-bold" href={href}>
      <Icon className="h-5 w-5 text-primary" />
      {text}
    </a>
  );
}
