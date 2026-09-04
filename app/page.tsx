import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Database,
  FileCheck2,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Target,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  SecureInteractionDiagram,
  SystemArchitectureDiagram,
  TrustExecutionDiagram
} from "@/components/architecture-diagrams";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { blogs, contact, contactUrl, products, verticals } from "@/lib/site-data";

const aiContext = [
  ["AI explosion", "New AI startups launch every hour. Marginal differences in product quality are collapsing."],
  ["Enterprise reality", "Sensitive data, regulatory pressure, and high-cost workflows still block real adoption."]
];

const failures = [
  ["Access to data", "AI models need context, but raw enterprise data cannot be exposed without policy and abstraction."],
  ["Systems integration", "Connecting agents to APIs and workflows creates uncontrolled action paths."],
  ["Autonomous action", "A useful agent must execute, but every action needs a verifiable boundary."]
];

const verticalIcons: Record<string, LucideIcon> = {
  "Medical AI": Stethoscope,
  Genomics: BrainCircuit,
  "Mental Health": HeartPulse,
  "Insurance and Risk": ShieldCheck,
  "Fitness AI": Zap,
  "Enterprise Copilots": Building2
};

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="deck-shell py-8 md:py-12">
        <div className="hero-board fine-grid grid min-h-[calc(100vh-8rem)] overflow-hidden lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-between border-b border-border bg-white/78 p-6 md:p-10 lg:border-b-0 lg:border-r">
            <div>
              <p className="deck-label">Investor pitch deck to product website</p>
              <h1 className="mt-7 max-w-4xl text-[clamp(3.4rem,8.8vw,7.4rem)] font-black leading-[0.86] text-ink">
                Hyper-Ox.
              </h1>
              <div className="purple-rail mt-7">
                <p className="max-w-2xl text-[clamp(1.35rem,2.6vw,2.35rem)] font-black leading-tight text-ink">
                  A trust and execution layer for AI infrastructure.
                </p>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Hyper-Ox controls, abstracts, and verifies agentic execution so enterprises can
                  let AI use sensitive data and real tools without handing models unchecked access.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={contactUrl}>
                    Build the trust layer <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/products">Inspect products</Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {["Routes", "Abstracts", "Verifies"].map((item) => (
                <div key={item} className="rounded-md border border-border bg-white p-4">
                  <p className="text-2xl font-black text-primary">{item}</p>
                  <p className="mt-1 text-sm font-bold text-muted-foreground">AI execution</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center p-5 md:p-10">
            <div className="w-full">
              <div className="dark-board p-5 text-white md:p-7">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm font-black text-accent">Secure interaction layer</p>
                    <p className="mt-1 text-white/58">Bidirectional control for ingress and egress.</p>
                  </div>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-black text-ink">ACTIVE</span>
                </div>
                <div className="grid gap-4 py-6 md:grid-cols-[0.8fr_1fr_0.8fr] md:items-center">
                  <HeroNode icon={Database} title="Enterprise data" copy="PII, docs, records" />
                  <div className="rounded-md border-2 border-primary bg-white p-5 text-center text-ink">
                    <ShieldCheck className="mx-auto h-8 w-8 text-primary" />
                    <p className="mt-4 text-xs font-black text-primary">HYPER TERN</p>
                    <h2 className="mt-1 text-2xl font-black">Policy Engine</h2>
                    <div className="mt-5 grid gap-2">
                      <span className="rounded-sm bg-purple-soft px-3 py-2 text-sm font-black text-primary">Ingress: abstraction + redaction</span>
                      <span className="rounded-sm bg-purple-soft px-3 py-2 text-sm font-black text-primary">Egress: scope check + audit</span>
                    </div>
                  </div>
                  <HeroNode icon={BrainCircuit} title="AI models" copy="LLMs, agents, copilots" dark />
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {["Controlled", "Logged", "Verifiable"].map((item) => (
                    <div key={item} className="rounded-md border border-white/12 bg-white/7 p-4">
                      <p className="font-black">{item}</p>
                      <p className="mt-1 text-sm text-white/58">Execution proof</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {aiContext.map(([title, copy]) => (
                  <div key={title} className="rounded-md border border-border bg-white p-5">
                    <p className="text-sm font-black text-primary">{title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-strip py-4">
        <div className="deck-shell flex flex-wrap items-center justify-between gap-4 text-sm font-black md:text-base">
          <span>Minimize raw exposure</span>
          <span>Enforce policy control</span>
          <span>Provide audit trails</span>
          <span>Orchestrate AI execution</span>
        </div>
      </section>

      <section className="deck-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="purple-rail">
            <p className="deck-label">The core problem</p>
            <h2 className="mt-6 text-4xl font-black leading-tight text-ink md:text-6xl">
              Trust breaks when agents leave the chat box.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              The moment an AI system touches live data or executes a real action, the product
              problem becomes a security architecture problem.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {failures.map(([title, copy]) => (
              <Card key={title} className="rounded-xl p-6">
                <p className="text-4xl font-black text-primary">0{failures.findIndex((item) => item[0] === title) + 1}</p>
                <h3 className="mt-10 text-2xl font-black text-ink">{title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white py-20">
        <div className="deck-shell">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="deck-label">Solution overview</p>
              <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-ink md:text-6xl">
                Three layers that turn AI actions into controlled execution.
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/products">Open product details</Link>
            </Button>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {products.map((product, index) => (
              <Link key={product.slug} href={`/products#${product.slug}`} className="group block">
                <Card
                  className={`h-full rounded-xl p-7 transition duration-300 group-hover:-translate-y-1 ${
                    index === 2 ? "bg-ink text-white group-hover:border-primary" : "group-hover:border-primary"
                  }`}
                >
                  <p className={`text-sm font-black ${index === 2 ? "text-accent" : "text-primary"}`}>{product.label}</p>
                  <h3 className={`mt-6 text-4xl font-black ${index === 2 ? "text-white" : "text-ink"}`}>{product.name}</h3>
                  <p className={`mt-5 leading-relaxed ${index === 2 ? "text-white/68" : "text-muted-foreground"}`}>{product.copy}</p>
                  <p className={`mt-9 inline-flex items-center gap-2 font-black ${index === 2 ? "text-accent" : "text-primary"}`}>
                    {product.outcome} <ArrowRight className="h-4 w-4" />
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="deck-shell py-20">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="deck-label">Security architecture</p>
            <h2 className="mt-6 text-4xl font-black leading-tight text-ink md:text-6xl">
              The deck diagrams are now native web systems.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Recreated as responsive HTML components so buyers can read the architecture, search
            engines can understand it, and the page stays fast.
          </p>
        </div>
        <SecureInteractionDiagram />
      </section>

      <section className="deck-shell pb-20">
        <TrustExecutionDiagram />
      </section>

      <section className="border-y border-border bg-white py-20">
        <div className="deck-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="deck-label">End-to-end architecture</p>
            <h2 className="mt-6 text-4xl font-black leading-tight text-ink md:text-6xl">
              One route from model intent to verifiable action.
            </h2>
          </div>
          <SystemArchitectureDiagram />
        </div>
      </section>

      <section className="deck-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="purple-rail">
            <p className="deck-label">Market focus</p>
            <h2 className="mt-6 text-4xl font-black leading-tight text-ink md:text-6xl">
              Start where data sensitivity blocks adoption.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Regulated teams do not need another wrapper around a model. They need a trust
              boundary that lets AI touch workflows safely.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map((name) => {
              const Icon = verticalIcons[name] ?? Target;
              return (
                <div key={name} className="rounded-xl border border-border bg-white p-5">
                  <Icon className="h-7 w-7 text-primary" />
                  <p className="mt-10 text-2xl font-black leading-tight text-ink">{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/70 py-20">
        <div className="deck-shell">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="deck-label">Technical content</p>
              <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-ink md:text-6xl">
                Blog posts that match the buyer&apos;s questions.
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/blog">Read blog</Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {blogs.slice(0, 4).map((post) => (
              <Link key={post.slug} href={`/blog#${post.slug}`} className="group block">
                <Card className="h-full rounded-xl bg-white p-6 transition group-hover:-translate-y-1 group-hover:border-primary">
                  <p className="text-sm font-black text-cyan">
                    {post.category} - {post.readTime}
                  </p>
                  <h3 className="mt-4 text-2xl font-black leading-tight text-ink">{post.title}</h3>
                  <p className="mt-4 text-muted-foreground">{post.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="deck-shell grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div className="purple-rail border-primary">
            <h2 className="max-w-4xl text-4xl font-black leading-tight md:text-7xl">
              AI adoption is inevitable. Trust is not.
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/70">
              We are building the execution, security, and trust layer that AI must have to scale
              safely in the enterprise.
            </p>
          </div>
          <Card className="rounded-xl border-white/15 bg-white p-6 text-ink">
            <p className="text-sm font-black text-primary">Let&apos;s build together</p>
            <div className="mt-5 space-y-3">
              <ContactLine icon={FileCheck2} text={contact.email} href={`mailto:${contact.email}`} />
              <ContactLine icon={Zap} text={contact.phone} href={`tel:+91${contact.phone}`} />
              <ContactLine icon={ArrowRight} text={contact.site} href={contact.site} />
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}

function HeroNode({
  icon: Icon,
  title,
  copy,
  dark = false
}: {
  icon: LucideIcon;
  title: string;
  copy: string;
  dark?: boolean;
}) {
  return (
    <div className={`rounded-md border p-4 text-center ${dark ? "border-white/10 bg-white/8 text-white" : "border-white/10 bg-white/8 text-white"}`}>
      <Icon className="mx-auto h-7 w-7 text-accent" />
      <p className="mt-4 font-black">{title}</p>
      <p className="mt-1 text-sm text-white/58">{copy}</p>
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
    <a className="flex items-center gap-3 rounded-md border border-border p-4 font-black" href={href}>
      <Icon className="h-5 w-5 text-primary" />
      {text}
    </a>
  );
}
