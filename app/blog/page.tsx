import type { Metadata } from "next";
import { ArrowRight, BookOpen, Cpu, KeyRound, LockKeyhole, Network } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog | Hyper-Ox AI Security",
  description:
    "Research notes on cryptography, AI agents, privacy-preserving AI, and quantum-proof cryptography for enterprise AI security.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Blog | Hyper-Ox AI Security",
    description:
      "Writing on cryptography, AI agents, privacy-preserving AI, and quantum-proof security.",
    url: "/blog",
    type: "website"
  }
};

const articleBodies: Record<string, string[]> = {
  "cryptography-for-ai-security": [
    "Enterprise AI cannot rely on ordinary application logs as the final source of truth. Logs say that a system emitted an event; cryptography can help prove that a specific action, policy check, and execution record belong together.",
    "For AI workflows, the important question is no longer only whether a model answered correctly. It is whether the system can prove which data was used, which permissions were checked, which tool was called, and what result was returned.",
    "That is why the trust layer should sit close to execution. When cryptographic records are created at the moment an agent acts, audit and compliance become part of the workflow instead of a manual reconstruction exercise."
  ],
  "ai-agents-need-execution-policy": [
    "AI agents are different from chatbots because they do not stop at text. They read internal context, choose tools, trigger workflows, update systems, and sometimes initiate transactions.",
    "That autonomy needs an execution policy layer. Prompt filters alone cannot define which database a model may query, which customer record it may update, or which API call must be blocked until a human reviews it.",
    "A practical agent security model routes every request through permission checks, abstracts sensitive inputs, logs the decision path, and verifies the final action. The model can still be useful, but it never gets raw, unchecked control."
  ],
  "privacy-preserving-ai-infrastructure": [
    "Private AI starts before data reaches the model. Once raw customer, medical, financial, or operational data enters a model context, the enterprise has already accepted exposure risk.",
    "Abstraction changes that boundary. Masking, tokenization, redaction, and vector-safe representations let AI systems reason over useful context without seeing the complete source of truth.",
    "The goal is not to make AI weaker. The goal is to preserve enough utility for reasoning while reducing the blast radius of every prompt, tool call, and downstream action."
  ],
  "quantum-proof-cryptography-enterprise-ai": [
    "AI audit records may need to survive for years. In regulated industries, execution proof, consent records, compliance evidence, and settlement trails can remain relevant long after the original model has changed.",
    "That long time horizon is why quantum-proof cryptography matters. Enterprises should plan for cryptographic agility: systems that can rotate primitives, preserve verification history, and avoid locking critical proof into short-lived assumptions.",
    "Post-quantum readiness does not mean every AI workflow needs exotic infrastructure today. It means the trust layer should be designed so that future-resistant verification can be adopted without rebuilding the entire execution stack."
  ]
};

const icons = [KeyRound, Network, LockKeyhole, Cpu];

export default function BlogPage() {
  return (
    <main>
      <SiteHeader />
      <section className="mx-auto w-[min(94vw,1500px)] pb-16 pt-8">
        <p className="text-sm font-bold uppercase tracking-widest text-primary">Blog</p>
        <h1 className="mt-4 max-w-6xl text-[clamp(3.3rem,9vw,9rem)] font-bold uppercase leading-[0.88] tracking-tight">
          Notes on AI trust infrastructure.
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-tight text-muted-foreground md:text-2xl">
          Practical writing on cryptography, AI agents, privacy-preserving AI,
          and quantum-proof security for enterprise systems.
        </p>
      </section>

      <section className="mx-auto grid w-[min(94vw,1500px)] gap-5 pb-20 md:grid-cols-2">
        {blogs.map((post, index) => {
          const Icon = icons[index] || BookOpen;
          return (
            <a key={post.slug} href={`#${post.slug}`} className="group block">
              <Card className="h-full p-7 transition group-hover:border-primary group-hover:bg-[#f7f2ff]">
                <Icon className="h-9 w-9 text-primary" />
                <CardHeader className="p-0 pt-7">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    {post.category} - {post.readTime}
                  </p>
                  <CardTitle className="text-3xl uppercase">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-4 text-lg text-muted-foreground">
                  {post.description}
                  <span className="mt-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
                    Read article <ArrowRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </a>
          );
        })}
      </section>

      <section className="border-y-2 border-border bg-[#f4f0ff] py-20">
        <div className="mx-auto w-[min(94vw,1100px)] space-y-14">
          {blogs.map((post) => (
            <article key={post.slug} id={post.slug} className="scroll-mt-8">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                {post.category}
              </p>
              <h2 className="mt-3 text-4xl font-bold uppercase leading-none md:text-6xl">
                {post.title}
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
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
