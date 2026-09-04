export const contactUrl = "https://cal.com/buckleson-group/30min";

export const products = [
  {
    slug: "hyper-tern",
    name: "Hyper Tern",
    label: "Routing and permissions",
    copy: "Routes LLM requests, controls access scopes, and keeps models away from direct infrastructure access.",
    outcome: "Policy-controlled execution",
    details:
      "Hyper Tern is the control plane between AI models, enterprise data, and internal tools. It evaluates intent, applies permissions, selects the right model or route, and blocks direct access to unsafe resources.",
    features: ["Smart routing", "Access control", "Permission gating", "Zero direct exposure"]
  },
  {
    slug: "hyper-abs",
    name: "Hyper-ABS",
    label: "Data abstraction",
    copy: "Transforms sensitive records into masked, tokenized, or vector-safe representations before inference.",
    outcome: "No raw exposure",
    details:
      "Hyper-ABS decouples sensitive enterprise data from AI model execution. Raw records become protected representations through masking, tokenization, redaction, and vector-safe abstractions.",
    features: ["PII and PHI masking", "Tokenized context", "Protected representations", "Utility-preserving privacy"]
  },
  {
    slug: "hyper-ox-ledger",
    name: "Hyper-Ox Ledger",
    label: "Blockchain trust layer",
    copy: "Records AI decisions and actions as immutable proof for audit, settlement, compliance, and disputes.",
    outcome: "Verifiable audit trails",
    details:
      "Hyper-Ox Ledger turns AI operations into cryptographically verifiable records. It creates a durable execution history for audit, billing, settlement, compliance, and dispute resolution.",
    features: ["Immutable audit log", "Proof of execution", "Settlement records", "Cross-ecosystem verification"]
  }
];

export const blogs = [
  {
    slug: "cryptography-for-ai-security",
    title: "Cryptography Is Becoming the Control Surface for AI",
    category: "Cryptography",
    description:
      "Why modern AI systems need cryptographic proof, not just application logs, to become trustworthy enterprise infrastructure.",
    readTime: "4 min read"
  },
  {
    slug: "ai-agents-need-execution-policy",
    title: "AI Agents Need Policy Before Autonomy",
    category: "AI Agents",
    description:
      "Agentic systems can read, decide, and act. The security model has to govern the action path, not only the prompt.",
    readTime: "5 min read"
  },
  {
    slug: "privacy-preserving-ai-infrastructure",
    title: "Private AI Starts Before the Model Sees Data",
    category: "AI Security",
    description:
      "Masking, tokenization, and abstraction let enterprises preserve utility without handing raw data to probabilistic systems.",
    readTime: "4 min read"
  },
  {
    slug: "quantum-proof-cryptography-enterprise-ai",
    title: "Quantum-proof Cryptography and the AI Trust Layer",
    category: "Quantum-proof Cryptography",
    description:
      "A practical view of why long-lived AI audit records should be designed for a post-quantum security horizon.",
    readTime: "5 min read"
  }
];
