export const baseUrl = "https://www.pavii.tech";

export const contact = {
  email: "info@pavii.tech",
  phone: "7981847657",
  site: baseUrl
};

export const contactUrl = `mailto:${contact.email}`;

export const products = [
  {
    slug: "hyper-tern",
    name: "Hyper Tern",
    label: "Routing layer",
    eyebrow: "LLM routing and execution control",
    copy:
      "Routes model requests through policy, permission, and intent checks before they touch enterprise systems.",
    outcome: "AI never interacts with infrastructure directly.",
    details:
      "Hyper Tern sits between AI models and enterprise infrastructure. It decides where a request can go, which model or tool should handle it, and whether the action is allowed under the current policy.",
    features: [
      "Smart routing across open, closed, and custom models",
      "Access scopes checked before data or tool use",
      "Permission gates for every sensitive action",
      "Zero direct connection between models and infrastructure"
    ]
  },
  {
    slug: "hyper-abs",
    name: "Hyper-ABS",
    label: "Data layer",
    eyebrow: "Data abstraction layer",
    copy:
      "Transforms raw sensitive records into masked, tokenized, or vector-safe representations before inference.",
    outcome: "AI works on abstraction, not source data.",
    details:
      "Hyper-ABS decouples enterprise data from the models that need to reason over it. It preserves useful context while reducing exposure of PII, PHI, financial, and operational records.",
    features: [
      "Masking and redaction before model access",
      "Tokenized and vector-safe context",
      "Privacy preservation at the secure boundary",
      "Utility retained for reasoning without raw exposure"
    ]
  },
  {
    slug: "hyper-ox-blockchain",
    name: "Hyper-Ox",
    label: "Trust layer",
    eyebrow: "Blockchain verification and settlement",
    copy:
      "Turns AI decisions and actions into verifiable records for audit, settlement, compliance, and disputes.",
    outcome: "Black-box AI becomes provable infrastructure.",
    details:
      "Hyper-Ox underpins AI execution with cryptographic proof. Critical actions can produce a durable record of who acted, what changed, when it happened, and which policy allowed it.",
    features: [
      "Verifiable execution records",
      "Non-intrusive overlay for existing systems",
      "Settlement and audit trails",
      "Immutable ledger for long-lived compliance evidence"
    ]
  }
];

export const blogs = [
  {
    slug: "cryptography-for-ai-security",
    title: "Cryptography Is Becoming the Control Surface for AI",
    category: "Cryptography",
    description:
      "Enterprise AI needs proof that an action, policy check, and execution record belong together.",
    readTime: "4 min read"
  },
  {
    slug: "ai-agents-need-execution-policy",
    title: "AI Agents Need Policy Before Autonomy",
    category: "AI Agents",
    description:
      "Agentic systems read, decide, and act. The security model has to govern that action path.",
    readTime: "5 min read"
  },
  {
    slug: "privacy-preserving-ai-infrastructure",
    title: "Private AI Starts Before the Model Sees Data",
    category: "AI Security",
    description:
      "Abstraction lets enterprises preserve reasoning utility without handing raw records to probabilistic systems.",
    readTime: "4 min read"
  },
  {
    slug: "quantum-proof-cryptography-enterprise-ai",
    title: "Quantum-proof Cryptography and the AI Trust Layer",
    category: "Quantum-proof Cryptography",
    description:
      "Long-lived AI audit trails should be designed for cryptographic agility and a post-quantum horizon.",
    readTime: "5 min read"
  },
  {
    slug: "agent-audit-trails",
    title: "Why AI Agent Audit Trails Need More Than Logs",
    category: "Auditability",
    description:
      "A practical look at execution records, policy decisions, and proof for regulated AI workflows.",
    readTime: "4 min read"
  }
];

export const verticals = [
  "Medical AI",
  "Genomics",
  "Mental Health",
  "Insurance and Risk",
  "Fitness AI",
  "Enterprise Copilots"
];
