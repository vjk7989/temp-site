import {
  Activity,
  Blocks,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Database,
  FileCheck2,
  Fingerprint,
  GitBranch,
  KeyRound,
  Layers3,
  Network,
  ShieldCheck,
  Split,
  Workflow,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

export function TrustExecutionDiagram() {
  const layers = [
    {
      icon: Split,
      title: "Hyper Tern",
      label: "Routing and permissions",
      points: ["Routes LLMs to applications", "Controls access scopes", "Prevents direct exposure"],
      result: "Minimize raw exposure"
    },
    {
      icon: Fingerprint,
      title: "Hyper-ABS",
      label: "Data abstraction",
      points: ["Abstracts sensitive data", "Preserves privacy layers", "Allows safe operations"],
      result: "Enforce policy control"
    },
    {
      icon: FileCheck2,
      title: "Hyper-Ox",
      label: "Blockchain trust layer",
      points: ["Verifiable execution records", "Settlement and audit", "Immutable trust log"],
      result: "Provable audit trails",
      dark: true
    }
  ];

  return (
    <Card className="soft-panel fine-grid overflow-hidden p-5 md:p-8" aria-label="Trust and execution layer diagram">
      <div className="grid gap-4 lg:grid-cols-3">
        {layers.map((layer) => (
          <div
            key={layer.title}
            className={`trace-line min-h-[19rem] rounded-md border p-6 ${
              layer.dark
                ? "border-ink bg-ink text-white"
                : "border-border bg-white/88 text-foreground"
            }`}
          >
            <layer.icon className={`h-8 w-8 ${layer.dark ? "text-accent" : "text-primary"}`} />
            <h3 className="mt-8 text-2xl font-black">{layer.title}</h3>
            <p className={`mt-2 text-sm font-bold ${layer.dark ? "text-white/58" : "text-muted-foreground"}`}>
              {layer.label}
            </p>
            <ul className="mt-7 space-y-3">
              {layer.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm font-semibold">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <p className={`mt-8 text-sm font-black ${layer.dark ? "text-accent" : "text-ink"}`}>
              {layer.result}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function SecureInteractionDiagram() {
  return (
    <Card className="soft-panel fine-grid p-5 md:p-8" aria-label="Secure interaction layer diagram">
      <div className="grid gap-5 lg:grid-cols-[0.75fr_1fr_0.75fr] lg:items-center">
        <div className="space-y-4">
          <DiagramNode icon={Database} title="Enterprise Data" copy="Databases, PII, documents" />
          <DiagramNode icon={Workflow} title="Applications" copy="APIs, internal tools, internet" />
        </div>

        <div className="rounded-md border-2 border-primary bg-white p-5 text-center shadow-[0_0_0_8px_color-mix(in_oklch,var(--primary)_8%,transparent)]">
          <p className="text-xs font-black text-primary">Trust layer</p>
          <div className="mt-4 rounded-sm bg-primary p-3 text-primary-foreground">
            <p className="font-black">Hyper Tern</p>
          </div>
          <div className="grid gap-4 py-6 md:grid-cols-2">
            <PolicyBox title="Ingress policy" items={["Abstraction", "Redaction"]} />
            <PolicyBox title="Egress policy" items={["Scope check", "Audit"]} />
          </div>
          <p className="text-sm font-bold text-muted-foreground">
            Controlled data in, permissioned action out.
          </p>
        </div>

        <DiagramNode icon={BrainCircuit} title="AI Models" copy="LLMs, agents, copilots" active />
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {[
          ["Controlled", "Granular permissions per action"],
          ["Logged", "Immutable ledger of all flows"],
          ["Verifiable", "Cryptographic proof of execution"]
        ].map(([title, copy]) => (
          <div key={title} className="rounded-md border border-border bg-white/90 p-4">
            <p className="font-black text-ink">{title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{copy}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function SystemArchitectureDiagram() {
  return (
    <Card className="soft-panel fine-grid p-5 md:p-8" aria-label="End-to-end system architecture diagram">
      <div className="mx-auto max-w-6xl space-y-4 text-center">
        <div className="rounded-md border border-border bg-white p-5">
          <p className="text-xs font-black text-muted-foreground">Model layer</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <Layer icon={BrainCircuit} title="Open-source LLMs" copy="LLaMA, Mistral, custom models" />
            <Layer icon={Cloud} title="Closed LLMs" copy="External APIs such as GPT and Claude" />
          </div>
        </div>
        <Connector label="Routing and control layer" />
        <div className="rounded-md border-2 border-primary bg-white p-6">
          <p className="text-xs font-black text-primary">Hyper Tern</p>
          <h3 className="mt-2 text-3xl font-black">Intelligent router and policy engine</h3>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Policy enforcement, permission gating, model selection, and tool access control.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Layer icon={Fingerprint} title="Hyper-ABS" copy="Data abstraction and privacy preservation" />
          <Layer icon={Blocks} title="Applications / APIs" copy="Permissioned actions and controlled side effects" />
        </div>
        <div className="rounded-md border border-ink bg-ink p-5 text-white">
          <div className="grid gap-4 md:grid-cols-[1fr_auto_auto] md:items-center">
            <div className="text-left">
              <p className="text-xs font-black text-accent">Hyper-Ox Blockchain</p>
              <p className="mt-2 text-2xl font-black">Trust, settlement, and audit layer</p>
            </div>
            <p className="rounded-sm bg-white px-5 py-3 font-black text-ink">Orchestrates execution</p>
            <p className="text-left font-black text-accent md:text-right">100% verifiable</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function BlockchainMoatDiagram() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Quantum-resistant",
      copy: "Designed for durable verification as cryptographic expectations change."
    },
    {
      icon: Layers3,
      title: "4-layer encryption",
      copy: "Protects data at rest, in transit, during computation, and at the ledger layer."
    },
    {
      icon: GitBranch,
      title: "Cross-ecosystem",
      copy: "Built to interoperate across execution environments without locking workflows into one chain."
    },
    {
      icon: KeyRound,
      title: "Account abstraction",
      copy: "Hides key and gas complexity behind enterprise-grade usability."
    },
    {
      icon: Network,
      title: "Task side-chains",
      copy: "Isolates specialized workflows for risk control and performance."
    },
    {
      icon: Zap,
      title: "High velocity",
      copy: "Targets fast finality for high-frequency agent workloads."
    }
  ];

  return (
    <Card className="soft-panel p-5 md:p-8" aria-label="Blockchain moat capability diagram">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={`min-h-48 rounded-md border p-6 ${
              index === 1
                ? "border-primary bg-purple-soft"
                : "border-border bg-white"
            }`}
          >
            <item.icon className="h-8 w-8 text-primary" />
            <h3 className="mt-7 text-2xl font-black">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{item.copy}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function ProductFlowDiagram({ product }: { product: "hyper-tern" | "hyper-abs" | "hyper-ox-blockchain" }) {
  if (product === "hyper-abs") {
    return (
      <MiniDiagram title="Hyper-ABS Engine" icon={Fingerprint}>
        <div className="rounded-md border border-border bg-white p-4 text-sm">
          <p className="font-bold">Sensitive data</p>
          <p className="mt-2 text-muted-foreground">Name, diagnosis, account, policy</p>
        </div>
        <Arrow />
        <div className="rounded-md border-2 border-primary bg-purple-soft p-4">
          <p className="font-black text-primary">Masking - Tokenize - Differential</p>
        </div>
        <Arrow />
        <div className="rounded-md bg-ink p-4 text-white">
          <p className="font-bold">AI-safe vector</p>
          <p className="mt-2 text-sm text-white/70">Entity, redacted id, protected context</p>
        </div>
      </MiniDiagram>
    );
  }

  if (product === "hyper-ox-blockchain") {
    return (
      <MiniDiagram title="Hyper-Ox Ledger" icon={FileCheck2}>
        <div className="rounded-md bg-ink p-5 text-white">
          <div className="flex items-center justify-between gap-4">
            <p className="font-black">Execution record</p>
            <span className="rounded-sm bg-accent px-2 py-1 text-xs font-black text-ink">Live</span>
          </div>
          <div className="mt-5 grid gap-2 sm:grid-cols-3">
            {["#4921", "#4922", "Hash"].map((item) => (
              <div key={item} className="rounded-sm border border-white/20 p-3 text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
        <Arrow />
        <div className="rounded-md border border-accent bg-white p-4">
          <p className="font-black">Proof of execution</p>
          <p className="mt-2 text-sm text-muted-foreground">Immutable audit trail</p>
        </div>
      </MiniDiagram>
    );
  }

  return (
    <MiniDiagram title="Hyper Tern Policy Engine" icon={Split}>
      <div className="rounded-md border border-border bg-white p-4 text-sm">
        <p className="font-bold">LLM request</p>
        <p className="mt-2 text-muted-foreground">Intent, user, resource</p>
      </div>
      <Arrow />
      <div className="rounded-md border-2 border-primary bg-purple-soft p-5 text-center">
        <p className="font-black text-primary">Guardrail active</p>
        <p className="mt-2 text-sm text-muted-foreground">Route, scope, approve, block</p>
      </div>
      <Arrow />
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700">Raw DB blocked</div>
        <div className="rounded-md border border-emerald-200 bg-emerald-50 p-3 text-sm font-bold text-emerald-700">Safe API approved</div>
      </div>
    </MiniDiagram>
  );
}

function MiniDiagram({
  title,
  icon: Icon,
  children
}: {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="fine-grid rounded-md border border-border bg-muted/60 p-5" aria-label={`${title} product flow`}>
      <div className="mb-5 flex items-center gap-3">
        <Icon className="h-6 w-6 text-primary" />
        <p className="font-black">{title}</p>
      </div>
      <div className="grid gap-3">{children}</div>
    </div>
  );
}

function DiagramNode({
  icon: Icon,
  title,
  copy,
  active = false
}: {
  icon: LucideIcon;
  title: string;
  copy: string;
  active?: boolean;
}) {
  return (
    <div className={`rounded-md border p-5 ${active ? "border-ink bg-ink text-white" : "border-border bg-white/90"}`}>
      <Icon className={`mb-4 h-7 w-7 ${active ? "text-accent" : "text-primary"}`} />
      <p className="text-xl font-black">{title}</p>
      <p className={`mt-2 text-sm ${active ? "text-white/72" : "text-muted-foreground"}`}>{copy}</p>
    </div>
  );
}

function PolicyBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md border border-border bg-muted p-4">
      <p className="text-xs font-black text-primary">{title}</p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-sm border border-border bg-white px-3 py-2 text-sm font-bold">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Layer({
  icon: Icon,
  title,
  copy
}: {
  icon: LucideIcon;
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-md border border-border bg-white/90 p-5 text-left">
      <Icon className="mb-4 h-6 w-6 text-primary" />
      <p className="font-black">{title}</p>
      <p className="mt-2 text-sm text-muted-foreground">{copy}</p>
    </div>
  );
}

function Connector({ label }: { label: string }) {
  return (
    <div className="mx-auto flex w-full max-w-xl items-center gap-3" aria-hidden="true">
      <div className="h-px flex-1 bg-border" />
      <span className="rounded-full bg-primary px-4 py-2 text-xs font-black text-primary-foreground">{label}</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center text-primary" aria-hidden="true">
      <Activity className="h-5 w-5" />
    </div>
  );
}
