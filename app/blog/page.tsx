import type { Metadata } from "next";
import { ArrowRight, BookOpen, Cpu, KeyRound, LockKeyhole, Network, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Card } from "@/components/ui/card";
import { blogs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles on cryptography, AI agents, privacy-preserving AI, audit trails, and quantum-proof cryptography for enterprise AI security.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Blog | Hyper-Ox AI Security",
    description:
      "Writing on cryptography, AI agents, privacy-preserving AI, auditability, and quantum-proof security.",
    url: "/blog",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Blog | Hyper-Ox AI Security",
    description:
      "Practical writing on AI trust infrastructure, cryptographic auditability, and secure agent execution."
  }
};

const articleBodies: Record<string, string[]> = {
  "cryptography-for-ai-security": [
    "Enterprise AI cannot rely on ordinary application logs as the final source of truth. Logs show that software emitted an event; cryptography can help prove that a specific action, policy check, and execution record belong together.",
    "For AI workflows, the useful question is not only whether a model answered correctly. Teams also need to know which data was used, which permissions were checked, which tool was called, and what result was returned.",
    "The trust layer should sit close to execution. When proof records are created at the moment an agent acts, audit and compliance become part of the workflow instead of a manual reconstruction exercise."
  ],
  "ai-agents-need-execution-policy": [
    "AI agents are different from chatbots because they do not stop at text. They read internal context, choose tools, trigger workflows, update systems, and sometimes initiate transactions.",
    "That autonomy needs an execution policy layer. Prompt filters cannot define which database a model may query, which customer record it may update, or which API call must wait for human review.",
    "A practical agent security model routes every request through permission checks, abstracts sensitive inputs, logs the decision path, and verifies the final action. The model stays useful, but it never receives raw, unchecked control."
  ],
  "privacy-preserving-ai-infrastructure": [
    "Private AI starts before data reaches the model. Once raw customer, medical, financial, or operational data enters model context, the enterprise has already accepted exposure risk.",
    "Abstraction changes that boundary. Masking, tokenization, redaction, and vector-safe representations let AI systems reason over useful context without seeing the complete source of truth.",
    "The goal is not to make AI weaker. The goal is to preserve enough utility for reasoning while reducing the blast radius of every prompt, tool call, and downstream action."
  ],
  "quantum-proof-cryptography-enterprise-ai": [
    "AI audit records may need to survive for years. In regulated industries, execution proof, consent records, compliance evidence, and settlement trails can remain relevant long after the original model has changed.",
    "That time horizon is why quantum-proof cryptography matters. Enterprises should plan for cryptographic agility: systems that can rotate primitives, preserve verification history, and avoid locking critical proof into short-lived assumptions.",
    "Post-quantum readiness does not mean every AI workflow needs exotic infrastructure today. It means the trust layer should be designed so future-resistant verification can be adopted without rebuilding the execution stack."
  ],
  "agent-audit-trails": [
    "AI audit trails should capture more than a timestamp and an output. A useful trail links identity, authorization, source context, route choice, tool invocation, and result into one inspectable record.",
    "This matters because agentic systems can produce side effects that are difficult to reverse. If an agent changes a workflow, calls an external API, or initiates a regulated process, teams need a record that explains why the action was allowed.",
    "The strongest audit design is created in-line with execution. Proof should not be pasted on after the fact; it should be generated while the system still knows the policy, actor, data boundary, and action path."
  ]
};

const icons = [KeyRound, Network, LockKeyhole, Cpu, ShieldCheck];

export default function BlogPage() {
  return (
    <main>
      <SiteHeader />

      <section className="deck-shell pb-16 pt-12">
        <p className="inline-flex rounded-full border border-primary/25 bg-purple-soft px-4 py-2 text-sm font-black text-primary">
          Blog
        </p>
        <h1 className="mt-6 max-w-5xl text-[clamp(2.55rem,7vw,5.6rem)] font-black leading-[0.98] text-ink">
          Notes on AI trust infrastructure.
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted-foreground">
          Practical writing on cryptography, AI agents, privacy-preserving AI, auditability,
          and quantum-proof security for enterprise systems.
        </p>
      </section>

      <section className="deck-shell grid gap-5 pb-20 md:grid-cols-2">
        {blogs.map((post, index) => {
          const Icon = icons[index] || BookOpen;
          return (
            <a key={post.slug} href={`#${post.slug}`} className="group block">
              <Card className="h-full rounded-md p-7 transition group-hover:-translate-y-1 group-hover:border-primary">
                <Icon className="h-9 w-9 text-primary" />
                <p className="mt-7 text-sm font-black text-cyan">
                  {post.category} - {post.readTime}
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-ink">{post.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{post.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-black text-primary">
                  Read article <ArrowRight className="h-4 w-4" />
                </span>
              </Card>
            </a>
          );
        })}
      </section>

      <section className="border-y border-border bg-white py-20">
        <div className="deck-shell max-w-5xl space-y-16">
          {blogs.map((post) => (
            <article key={post.slug} id={post.slug} className="scroll-mt-28">
              <p className="text-sm font-black text-primary">{post.category}</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-ink md:text-6xl">
                {post.title}
              </h2>
              <p className="mt-4 text-sm font-bold text-muted-foreground">{post.readTime}</p>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
                {articleBodies[post.slug].map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
