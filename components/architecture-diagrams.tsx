import { BrainCircuit, Database, FileCheck2, ShieldCheck, Split } from "lucide-react";
import { Card } from "@/components/ui/card";

export function SecureInteractionDiagram() {
  return (
    <Card className="surface-grid p-5 md:p-8" aria-label="Secure interaction architecture diagram">
      <div className="grid gap-5 lg:grid-cols-[0.75fr_1fr_0.75fr] lg:items-center">
        <div className="space-y-4">
          <DiagramNode icon={Database} title="Enterprise Data" copy="Databases, PII, documents" />
          <DiagramNode icon={Split} title="Applications" copy="APIs, internal tools, internet" />
        </div>
        <div className="border-2 border-primary bg-muted/95 p-5 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Trust Layer</p>
          <div className="mt-4 border-2 border-primary bg-primary p-3 text-primary-foreground shadow-[0_0_36px_color-mix(in_oklch,var(--primary)_35%,transparent)]">
            <p className="font-bold uppercase">Hyper Tern</p>
          </div>
          <div className="grid gap-4 py-6 md:grid-cols-2">
            <PolicyBox title="Ingress Policy" items={["Abstraction", "Redaction"]} />
            <PolicyBox title="Egress Policy" items={["Scope Check", "Audit"]} />
          </div>
          <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
            Controlled data in, permissioned action out
          </p>
        </div>
        <DiagramNode icon={BrainCircuit} title="AI Models" copy="LLMs, agents, copilots" active />
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {["Granular permissions per action", "Immutable ledger of all flows", "Cryptographic proof of execution"].map((item) => (
          <div key={item} className="border-2 border-border bg-background/80 p-4 text-sm font-bold text-muted-foreground">
            {item}
          </div>
        ))}
      </div>
    </Card>
  );
}

export function SystemArchitectureDiagram() {
  return (
    <Card className="surface-grid p-5 md:p-8" aria-label="System architecture diagram">
      <div className="mx-auto max-w-5xl space-y-4 text-center">
        <Layer title="Model Layer" copy="Open-source LLMs, closed LLM APIs, custom models" />
        <Connector />
        <div className="border-2 border-primary bg-muted p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Routing and Control Layer</p>
          <h3 className="mt-3 text-3xl font-bold uppercase">Hyper Tern</h3>
          <p className="mt-2 text-muted-foreground">
            Intelligent router - policy enforcement - permission gating - model selection
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Layer title="Hyper-ABS" copy="Data abstraction, privacy preservation, no raw exposure" />
          <Layer title="Applications / APIs" copy="Permissioned actions and controlled side effects" />
        </div>
        <div className="border-2 border-primary bg-background p-5 text-foreground">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Hyper-Ox Blockchain</p>
              <p className="mt-2 text-2xl font-bold uppercase">Trust, settlement, and audit layer</p>
            </div>
            <p className="text-4xl font-bold text-accent">100%</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function LedgerDiagram() {
  return (
    <Card className="surface-grid p-5 md:p-8" aria-label="Blockchain ledger verification diagram">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div className="border-2 border-border bg-background p-6 text-foreground">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Hyper-Ox Ledger</p>
            <span className="border border-accent px-3 py-1 text-xs font-bold uppercase text-accent">Live</span>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {["#4921 verified", "#4922 verifying", "Hash 0x8a..."].map((item, index) => (
              <div key={item} className={`border-2 p-4 ${index === 1 ? "border-accent" : "border-white/20"}`}>
                <FileCheck2 className="mb-4 h-6 w-6 text-accent" />
                <p className="font-bold uppercase">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Proof of execution</p>
          <h3 className="mt-3 text-4xl font-bold uppercase leading-none">
            Black-box AI becomes verifiable infrastructure.
          </h3>
          <p className="mt-5 text-lg text-muted-foreground">
            Every important action can carry a durable record of who, what, when, and why.
          </p>
        </div>
      </div>
    </Card>
  );
}

function DiagramNode({
  icon: Icon,
  title,
  copy,
  active = false
}: {
  icon: typeof ShieldCheck;
  title: string;
  copy: string;
  active?: boolean;
}) {
  return (
    <div className={`border-2 p-5 ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background/85"}`}>
      <Icon className={`mb-4 h-7 w-7 ${active ? "text-primary-foreground" : "text-primary"}`} />
      <p className="text-xl font-bold uppercase">{title}</p>
      <p className={`mt-2 text-sm ${active ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {copy}
      </p>
    </div>
  );
}

function PolicyBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-2 border-border bg-background p-4">
      <p className="text-xs font-bold uppercase tracking-widest text-primary">{title}</p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {items.map((item) => (
          <span key={item} className="border border-border bg-muted px-3 py-2 text-sm font-bold text-foreground">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Layer({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="border-2 border-border bg-background/85 p-5">
      <p className="text-sm font-bold uppercase tracking-widest text-primary">{title}</p>
      <p className="mt-2 text-muted-foreground">{copy}</p>
    </div>
  );
}

function Connector() {
  return <div className="mx-auto h-8 w-1 bg-primary" aria-hidden="true" />;
}
