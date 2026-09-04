import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
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
  TrustExecutionDiagram
} from "@/components/architecture-diagrams";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { blogs, contact, contactUrl, products, verticals } from "@/lib/site-data";

const risks = [
  {
    title: "Raw data exposure",
    copy: "Agents need context, but direct access can leak sensitive records into model prompts and tool chains."
  },
  {
    title: "Uncontrolled side effects",
    copy: "Autonomous tools can update systems, trigger workflows, or call APIs before policy has a chance to respond."
  },
  {
    title: "Weak audit evidence",
    copy: "Standard logs can describe an event, but regulated teams need proof tied to identity, policy, and action."
  }
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

      <section className="section-shell grid gap-10 pb-20 pt-12 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
        <div className="lift-in">
          <p className="inline-flex rounded-full border border-primary/25 bg-purple-soft px-4 py-2 text-sm font-black text-primary">
            A trust and execution layer for AI infrastructure
          </p>
          <h1 className="mt-7 max-w-5xl text-[clamp(3.2rem,8vw,6rem)] font-black leading-[0.92] text-ink">
            AI adoption is inevitable. Trust is not.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            Hyper-Ox controls, abstracts, and verifies enterprise AI execution so agents can use
            sensitive data and tools without receiving unchecked access to the systems beneath them.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={contactUrl}>
                Talk to Buckleson <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/products">View the stack</Link>
            </Button>
          </div>
        </div>

        <Card className="soft-panel fine-grid lift-in overflow-hidden rounded-md p-0">
          <div className="border-b border-border bg-white p-5">
            <p className="text-sm font-black text-primary">Execution trace</p>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-[0.88fr_1.12fr]">
            <div className="bg-white p-6">
              <p className="text-sm text-muted-foreground">request.intent</p>
              <p className="mt-2 text-2xl font-black text-ink">Approve clinical summary agent</p>
              <div className="mt-8 space-y-3">
                {["PII abstracted", "Scope checked", "Proof record created"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-muted p-6">
              <div className="grid gap-4">
                <FlowStep icon={Database} title="Enterprise data" copy="PHI, documents, records" />
                <FlowStep icon={ShieldCheck} title="Hyper Tern" copy="Policy route and scope gate" active />
                <FlowStep icon={BrainCircuit} title="AI model" copy="Protected context only" />
                <FlowStep icon={FileCheck2} title="Hyper-Ox proof" copy="Immutable audit record" verified />
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="border-y border-border bg-white py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <h2 className="max-w-3xl text-4xl font-black leading-tight text-ink md:text-6xl">
              The core problem is execution, not intelligence.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Enterprises can already see what AI can do. The difficult part is letting an
              agent touch real data, apps, and workflows without losing privacy, control, or proof.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {risks.map((risk) => (
              <Card key={risk.title} className="rounded-md p-6">
                <p className="text-5xl font-black text-primary">!</p>
                <h3 className="mt-8 text-2xl font-black text-ink">{risk.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{risk.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-4xl text-4xl font-black leading-tight text-ink md:text-6xl">
              Three products, one trust boundary.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Each layer handles a different security problem. Product cards open the product
              page at the matching technical detail and architecture view.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/products">Open products</Link>
          </Button>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.slug} href={`/products#${product.slug}`} className="group block">
              <Card className="h-full rounded-md p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_22px_55px_rgba(109,40,217,0.16)]">
                <p className="text-sm font-black text-primary">{product.label}</p>
                <h3 className="mt-5 text-3xl font-black text-ink">{product.name}</h3>
                <p className="mt-5 leading-relaxed text-muted-foreground">{product.copy}</p>
                <p className="mt-8 inline-flex items-center gap-2 font-black text-primary">
                  {product.outcome} <ArrowRight className="h-4 w-4" />
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section id="architecture" className="border-y border-border bg-muted/60 py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-black leading-tight text-ink md:text-6xl">
              Architecture you can inspect in the page.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The deck architecture has been rebuilt as fast, responsive web content: no image-heavy
              screenshots, no mystery boxes, and no inaccessible diagram text.
            </p>
          </div>
          <SecureInteractionDiagram />
        </div>
      </section>

      <section className="section-shell py-20">
        <TrustExecutionDiagram />
      </section>

      <section className="border-y border-border bg-white py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <h2 className="text-4xl font-black leading-tight text-ink md:text-6xl">
              Built for regulated AI teams.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Hyper-Ox starts where data sensitivity blocks adoption: healthcare, genomics,
              risk-heavy workflows, and enterprise copilots.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map((name) => {
              const Icon = verticalIcons[name] ?? Target;
              return (
                <div key={name} className="min-h-32 rounded-md border border-border bg-muted p-5">
                  <Icon className="h-7 w-7 text-primary" />
                  <p className="mt-8 text-2xl font-black leading-tight text-ink">{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-4xl text-4xl font-black leading-tight text-ink md:text-6xl">
            Research notes for technical buyers.
          </h2>
          <Button asChild variant="outline">
            <Link href="/blog">Read blog</Link>
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {blogs.slice(0, 4).map((post) => (
            <Link key={post.slug} href={`/blog#${post.slug}`} className="group block">
              <Card className="h-full rounded-md p-6 transition group-hover:border-primary">
                <p className="text-sm font-black text-cyan">
                  {post.category} - {post.readTime}
                </p>
                <h3 className="mt-4 text-2xl font-black text-ink">{post.title}</h3>
                <p className="mt-4 text-muted-foreground">{post.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <div>
            <h2 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Make AI actions provable.
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/72">
              Bring us the agent workflow. We will help map the data boundary, permission
              layer, and proof trail.
            </p>
          </div>
          <Card className="rounded-md border-white/20 bg-white p-6 text-ink">
            <div className="space-y-4">
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
    <div
      className={`flex items-center gap-4 rounded-md border p-4 ${
        active
          ? "border-primary bg-purple-soft"
          : verified
            ? "border-accent bg-emerald-50"
            : "border-border bg-white"
      }`}
    >
      <Icon className={`h-6 w-6 ${verified ? "text-accent" : "text-primary"}`} />
      <div>
        <p className="font-black text-ink">{title}</p>
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
    <a className="flex items-center gap-3 rounded-md border border-border p-4 font-black" href={href}>
      <Icon className="h-5 w-5 text-primary" />
      {text}
    </a>
  );
}
