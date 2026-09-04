import Image from "next/image";
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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contactUrl = "https://cal.com/buckleson-group/30min";

const stack = [
  {
    name: "Hyper Tern",
    label: "Routing and permissions",
    icon: Split,
    copy: "Routes LLM requests, controls access scopes, and keeps models away from direct infrastructure access.",
    outcome: "Policy-controlled execution"
  },
  {
    name: "Hyper-ABS",
    label: "Data abstraction",
    icon: Fingerprint,
    copy: "Transforms sensitive records into masked, tokenized, or vector-safe representations before inference.",
    outcome: "No raw exposure"
  },
  {
    name: "Hyper-Ox Ledger",
    label: "Blockchain trust layer",
    icon: FileCheck2,
    copy: "Records AI decisions and actions as immutable proof for audit, settlement, compliance, and disputes.",
    outcome: "Verifiable audit trails"
  }
];

const risks = [
  ["Access to data", "Sensitive user, enterprise, and operational records are needed for context."],
  ["System integration", "AI agents need APIs, tools, and workflows to execute business logic."],
  ["Autonomous action", "Models can trigger updates, messages, decisions, and transactions."]
];

const verticals: Array<[string, LucideIcon]> = [
  ["Medical AI", Stethoscope],
  ["Genomics", BrainCircuit],
  ["Mental Health", HeartPulse],
  ["Insurance/Risk", ShieldCheck],
  ["Fitness AI", Zap],
  ["Enterprise Copilots", Building2]
];

const proofPoints = [
  "Raw-data exposure reduction",
  "Policy-controlled execution",
  "Auditable verification records",
  "Latency and reliability benchmarks"
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="mx-auto flex w-[min(94vw,1500px)] items-center justify-between py-6">
        <a href="#top" className="flex items-center gap-3" aria-label="Hyper-Ox home">
          <Image
            src="/bson-logo.jpg"
            alt="Buckleson logo"
            width={42}
            height={42}
            className="border border-border"
            priority
          />
          <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Hyper-Ox by Buckleson
          </span>
        </a>
        <Button asChild variant="outline" className="hidden sm:inline-flex">
          <a href={contactUrl} target="_blank" rel="noreferrer">
            Contact Us <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </header>

      <section id="top" className="mx-auto w-[min(94vw,1500px)] pb-20 pt-8 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex border-2 border-primary bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest">
              One-stop security solution for AI
            </p>
            <h1 className="max-w-6xl text-[clamp(3.4rem,10vw,10.5rem)] font-bold uppercase leading-[0.85] tracking-tight">
              Secure AI runs, not just AI ideas.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-tight text-muted-foreground md:text-2xl">
              Hyper-Ox gives enterprise AI a trust and execution layer for
              data privacy, routing policy, controlled actions, and immutable
              proof.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <a href={contactUrl} target="_blank" rel="noreferrer">
                  Contact Us <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#architecture">See Architecture</a>
              </Button>
            </div>
          </div>
          <Card className="relative min-h-[430px] overflow-hidden p-6">
            <div className="absolute -right-8 -top-7 text-[10rem] font-bold leading-none text-primary/15 md:text-[14rem]">
              01
            </div>
            <p className="relative text-sm font-bold uppercase tracking-widest text-accent">
              Trust Layer Active
            </p>
            <div className="relative mt-8 space-y-5">
              <FlowNode icon={Database} title="Enterprise data" text="PII, docs, databases" />
              <div className="ml-8 h-10 w-px bg-primary" />
              <FlowNode icon={ShieldCheck} title="Hyper Tern" text="Ingress policy, scope checks, redaction" active />
              <div className="ml-8 h-10 w-px bg-primary" />
              <FlowNode icon={BrainCircuit} title="AI models" text="LLMs, agents, copilots" />
            </div>
            <div className="relative mt-8 grid grid-cols-3 gap-2 text-center text-xs font-bold uppercase text-muted-foreground">
              <span>Controlled</span>
              <span>Logged</span>
              <span>Verifiable</span>
            </div>
          </Card>
        </div>
      </section>

      <section className="border-y-2 border-border bg-accent py-4 text-accent-foreground">
        <div className="marquee flex w-max gap-10 text-3xl font-bold uppercase tracking-tight md:text-5xl">
          {[...Array(2)].map((_, repeat) => (
            <div className="flex gap-10" key={repeat} aria-hidden={repeat === 1}>
              <span>Privacy</span>
              <span>Policy</span>
              <span>Audit</span>
              <span>Settlement</span>
              <span>No raw exposure</span>
              <span>Execution proof</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(94vw,1500px)] py-20 md:py-28">
        <SectionIntro
          eyebrow="The enterprise gap"
          title="AI adoption is inevitable. Trust is not."
          copy="Modern AI needs deep access to useful systems. Without a control layer, that access creates data exposure, weak execution guarantees, and compliance risk."
        />
        <div className="mt-10 grid gap-px bg-border md:grid-cols-3">
          {risks.map(([title, copy], index) => (
            <Card key={title} className="group border-0 p-7 transition hover:bg-accent hover:text-accent-foreground">
              <span className="text-7xl font-bold text-muted group-hover:text-accent-foreground">
                0{index + 1}
              </span>
              <CardHeader className="p-0 pt-8">
                <CardTitle className="uppercase">{title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-4 text-lg text-muted-foreground group-hover:text-accent-foreground/80">
                {copy}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f2ff] py-20 text-[#10101a] md:py-28">
        <div className="mx-auto w-[min(94vw,1500px)]">
          <SectionIntro
            eyebrow="The stack"
            title="One security plane for AI data, tools, and actions."
            copy="Hyper-Ox combines routing, abstraction, execution control, and blockchain-backed proof into a single enterprise layer."
            light
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {stack.map((item) => (
              <Card key={item.name} className="border-[#d9caef] bg-white p-7 text-[#10101a]">
                <item.icon className="h-10 w-10 text-primary" />
                <CardHeader className="p-0 pt-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    {item.label}
                  </p>
                  <CardTitle className="text-4xl uppercase">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-5">
                  <p className="text-lg leading-tight text-[#55566a]">{item.copy}</p>
                  <p className="mt-8 border-t border-[#d9caef] pt-5 text-sm font-bold uppercase tracking-widest">
                    {item.outcome}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="mx-auto w-[min(94vw,1500px)] py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              End-to-end architecture
            </p>
            <h2 className="mt-4 text-5xl font-bold uppercase leading-none md:text-7xl">
              Every AI action passes through trust.
            </h2>
          </div>
          <Card className="p-5 md:p-8">
            <div className="grid gap-4 text-center md:grid-cols-3">
              <ArchitectureBox title="Models" copy="Open-source and closed LLMs" />
              <ArchitectureBox title="Hyper Tern" copy="Routing, permissions, model selection" active />
              <ArchitectureBox title="Systems" copy="Databases, APIs, tools, apps" />
            </div>
            <div className="mt-5 border-2 border-primary bg-muted p-6">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-primary">
                    Hyper-Ox Blockchain
                  </p>
                  <p className="mt-2 text-2xl font-bold uppercase">
                    Trust, settlement, and audit layer
                  </p>
                </div>
                <div className="text-right text-4xl font-bold text-accent">100%</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="border-y-2 border-border bg-muted/70 py-20 md:py-28">
        <div className="mx-auto grid w-[min(94vw,1500px)] gap-10 lg:grid-cols-2">
          <div>
            <SectionIntro
              eyebrow="Proof points"
              title="Built to validate security, privacy, latency, and auditability."
              copy="The 12-month validation roadmap turns the architecture into an enterprise-ready pilot with measurable benchmarks."
            />
            <div className="mt-8 space-y-4">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 text-lg font-bold">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  {point}
                </div>
              ))}
            </div>
          </div>
          <Card className="p-7">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Market signal
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Metric value="$3.0T" label="Global AI infrastructure TAM" />
              <Metric value="$250B" label="Secure AI and confidential compute SAM" />
              <Metric value="$2.0M" label="Near-term regulated enterprise SOM" />
            </div>
            <p className="mt-8 text-lg text-muted-foreground">
              Initial focus: high-value, privacy-sensitive teams where security is
              the adoption bottleneck.
            </p>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-[min(94vw,1500px)] py-20 md:py-28">
        <SectionIntro
          eyebrow="Target teams"
          title="For regulated AI that cannot afford blind spots."
          copy="The go-to-market focus is narrow by design: teams where data sensitivity, auditability, and deep integration decide whether AI reaches production."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map(([name, Icon]) => (
            <Card key={name} className="flex items-center gap-4 p-5">
              <Icon className="h-7 w-7 text-accent" />
              <span className="text-xl font-bold uppercase">{name}</span>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-accent py-20 text-accent-foreground md:py-28">
        <div className="mx-auto grid w-[min(94vw,1500px)] gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest">
              Let&apos;s build together
            </p>
            <h2 className="mt-5 max-w-4xl text-5xl font-bold uppercase leading-none md:text-8xl">
              Make enterprise AI provable.
            </h2>
          </div>
          <Card className="border-accent-foreground bg-accent-foreground p-7 text-background">
            <div className="space-y-5">
              <ContactLine icon={Mail} text="info@pavii.tec" href="mailto:info@pavii.tec" />
              <ContactLine icon={Mail} text="vijay@buckleson.com" href="mailto:vijay@buckleson.com" />
              <ContactLine icon={Phone} text="+91 7981847657" href="tel:+917981847657" />
            </div>
            <Button asChild size="lg" className="mt-8 w-full">
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

function SectionIntro({
  eyebrow,
  title,
  copy,
  light = false
}: {
  eyebrow: string;
  title: string;
  copy: string;
  light?: boolean;
}) {
  return (
    <div>
      <p className={`text-sm font-bold uppercase tracking-widest ${light ? "text-primary" : "text-accent"}`}>
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-5xl text-5xl font-bold uppercase leading-none md:text-7xl">
        {title}
      </h2>
      <p className={`mt-6 max-w-3xl text-xl leading-tight md:text-2xl ${light ? "text-[#55566a]" : "text-muted-foreground"}`}>
        {copy}
      </p>
    </div>
  );
}

function FlowNode({
  icon: Icon,
  title,
  text,
  active = false
}: {
  icon: typeof Database;
  title: string;
  text: string;
  active?: boolean;
}) {
  return (
    <div className={`flex items-center gap-4 border-2 p-4 ${active ? "border-primary bg-primary/20" : "border-border bg-background"}`}>
      <Icon className="h-7 w-7 text-accent" />
      <div>
        <p className="font-bold uppercase">{title}</p>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function ArchitectureBox({
  title,
  copy,
  active = false
}: {
  title: string;
  copy: string;
  active?: boolean;
}) {
  return (
    <div className={`border-2 p-5 ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background"}`}>
      <p className="text-xl font-bold uppercase">{title}</p>
      <p className={`mt-2 text-sm ${active ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {copy}
      </p>
    </div>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-2 border-border p-5">
      <p className="text-4xl font-bold text-accent">{value}</p>
      <p className="mt-3 text-sm font-bold uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

function ContactLine({
  icon: Icon,
  text,
  href
}: {
  icon: typeof Mail;
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
