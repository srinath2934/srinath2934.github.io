import { Project, WorkExperience, EducationItem, Certification, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Srinath S",
  role: "AI / ML Engineer",
  tagline: "Building production-oriented AI systems and machine-learning applications.",
  subheading: "I design and ship practical AI systems across multi-agent workflows, semantic search, RAG pipelines, and high-throughput ML backends. Focused on deterministic safety, context engineering, and measurable system reliability.",
  email: "srinath2934@gmail.com",
  phone: "+91 7603967977",
  location: "Bengaluru, Karnataka, India",
  github: "https://github.com/srinath2934",
  linkedin: "https://linkedin.com/in/srinath29",
  leetcode: "https://leetcode.com/u/srinath29",
  resumeUrl: "#contact", // links to contact or direct download
  currentlyBuilding: "Production-oriented multi-agent workflows with stateful checkpointers, MCP tooling, and context-compacted RAG architectures."
};

export const PROJECTS: Project[] = [
  {
    id: "support-ticket-ai",
    number: "01",
    title: "An End-to-End Semantic AI System for Automated Support Ticket Handling",
    tagline: "Multi-task ticket triage, semantic routing, and resolution-time prediction over 108k incident records.",
    shortDescription: "An operational enterprise triage backend that ingests free-text support tickets and generates 4 structured outputs: category classification, routing queue, priority urgency, and ETA to resolution, paired with embedding-driven similar resolution retrieval.",
    badge: "Centerpiece & IEEE ICIRCA 2026 Paper",
    isCenterpiece: true,
    technologies: [
      "Python 3.10+",
      "FastAPI",
      "Sentence-BERT",
      "FAISS",
      "scikit-learn",
      "React + Vite",
      "SQLite",
      "Weights & Biases"
    ],
    metrics: [
      { label: "Tickets Processed", value: "108,819", detail: "Cleaned & augmented dataset" },
      { label: "Embedding Dim", value: "384-D", detail: "all-MiniLM-L6-v2 vectors" },
      { label: "Priority Accuracy", value: "81%", detail: "Supervised head" },
      { label: "Action Accuracy", value: "80%", detail: "Retrieval recommendation" },
      { label: "ETA Prediction MAE", value: "7.73 hrs", detail: "Resolution time regression" }
    ],
    githubUrl: "https://github.com/srinath2934/An-End-to-End-Semantic-AI-System-for-Automated-Support-Ticket-Handling",
    caseStudy: {
      problem: "Large support organizations struggle with manual ticket classification and inconsistent queue routing. Customer inquiries vary drastically in tone, vocabulary, and technical specificity. Keyword-based matching breaks down on complex issues, causing misrouted tickets, missed SLA thresholds, and extended customer wait times.",
      constraints: [
        "Variable input text length ranging from single-sentence panic alerts to multi-paragraph system stack traces.",
        "Strict latency requirement: inference and similarity retrieval must complete in sub-second time for interactive UI triage.",
        "Label distribution imbalance across historical ticket resolutions requiring resilient multi-head architectures.",
        "Complete auditability required for enterprise compliance: every triage action must be logged with input embeddings and output scores."
      ],
      architectureDiagram: [
        "Incoming Free-Text Support Ticket",
        "         ↓",
        "Text Normalization & SBERT Embedding (all-MiniLM-L6-v2, 384-D)",
        "         ↓",
        "┌────────────────────────────────────────────────────────┐",
        "│ Multi-Head Inference Layer                             │",
        "│  • Category Classification (Type)                      │",
        "│  • Target Team Routing (Queue Assignment)              │",
        "│  • Priority Urgency Scoring                            │",
        "│  • ETA Resolution Time Regression (MAE: 7.73h)         │",
        "└────────────────────────────────────────────────────────┘",
        "         ↓",
        "FAISS Index Semantic Retrieval (Cosine Similarity)",
        "         ↓",
        "Top-K Relevant Historical Ticket Resolutions & Response Draft",
        "         ↓",
        "FastAPI Service → SQLite Audit Log → React + Vite Dashboard"
      ],
      technicalDecisions: [
        {
          choice: "Sentence-BERT (all-MiniLM-L6-v2) over TF-IDF / BM25",
          why: "Keyword-based algorithms fail when users describe payment bugs without saying 'billing failure'. SBERT captures semantic intent in a compact 384-dimensional dense vector with low CPU inference latency."
        },
        {
          choice: "FAISS Vector Indexing over Database String Search",
          why: "Enabled vector similarity search over historical resolution vectors in single-digit milliseconds without heavy external vector database overhead."
        },
        {
          choice: "Independent Multi-Head Classification over Monolithic LLM Prompts",
          why: "Decoupled predictions into dedicated classifiers for queue, priority, and regression for ETA, reducing inference cost to zero API tokens while ensuring deterministic structured outputs."
        },
        {
          choice: "FastAPI with Pydantic Schema Validation",
          why: "Guaranteed strict request/response data contracts, native async execution, and automatic OpenAPI documentation for seamless frontend integration."
        }
      ],
      implementationDetails: [
        "Data pipeline processed and normalized 108,819 real-world support tickets with text cleaning, deduplication, and feature engineering.",
        "Pickled model handler loads pre-trained scikit-learn models and SBERT encoders into memory on startup for warm inference.",
        "Implemented structured SQLite persistence tracking ticket description, embedding vector hash, predicted categories, and timestamps."
      ],
      evaluation: [
        { task: "Category Classification", metric: "Accuracy", score: "100%*", notes: "Verified in test split; noted in documentation as strong separability warranting continuous leakage audits." },
        { task: "Team Routing", metric: "Accuracy", score: "100%*", notes: "High class separability on benchmark queue definitions." },
        { task: "Priority Prediction", metric: "Accuracy", score: "81%", notes: "Evaluated on multi-tier SLA labels." },
        { task: "Action Recommendation", metric: "Accuracy", score: "80%", notes: "Evaluated against historical human-agent resolution actions." },
        { task: "Time-to-Resolution (ETA)", metric: "Mean Absolute Error", score: "7.73 hours", notes: "Continuous regression target across varying issue complexities." }
      ],
      failureModesAndLimitations: [
        "Class imbalance in minority support categories affected early recall on edge-case incidents.",
        "ETA regression variance increases for rare, cross-departmental infrastructure outages with limited historical samples.",
        "FAISS retrieval quality is fundamentally bounded by the breadth and depth of past historical resolution write-ups."
      ],
      nextIterations: [
        "Incorporate hybrid retrieval (dense SBERT + sparse BM25) for precision matching of exact error codes and tracebacks.",
        "Implement confidence threshold routing: fallback low-confidence predictions to senior human triagers.",
        "Deploy model monitoring hooks with automated drift detection on incoming ticket text distributions."
      ]
    }
  },
  {
    id: "closepilot",
    number: "02",
    title: "ClosePilot — Enterprise Multi-Agent AI Sales Copilot",
    tagline: "Autonomous CRM investigation, deterministic deal prioritization, and Human-in-the-Loop verified execution.",
    shortDescription: "A stateful 7-node LangGraph multi-agent copilot that audits live HubSpot CRM pipelines, scores deals using a zero-hallucination mathematical formula, reasons over deal blockers with Claude/NVIDIA LLMs, and pauses at a Human-in-the-Loop gate before executing CRM writes.",
    badge: "14/14 Pytest Passing · LangGraph · MCP",
    technologies: [
      "LangGraph (v0.2+)",
      "Model Context Protocol (MCP)",
      "Anthropic Claude / NVIDIA NIM",
      "FastAPI",
      "Streamlit",
      "Supabase PostgreSQL",
      "Docker",
      "LangSmith"
    ],
    metrics: [
      { label: "LangGraph Architecture", value: "7 Nodes", detail: "Stateful cyclic graph with checkpointer" },
      { label: "Deterministic Scoring", value: "100% Math", detail: "Zero-hallucination deal ranking formula" },
      { label: "Safety Gate", value: "HITL Gate", detail: "Interrupt before CRM write operations" },
      { label: "Test Suite", value: "14/14 Tests", detail: "Unit & end-to-end integration verified" },
      { label: "CRM Protocol", value: "MCP Standard", detail: "HubSpot JSON-RPC tool abstraction" }
    ],
    githubUrl: "https://github.com/srinath2934/closepilot",
    demoUrl: "https://closepilot-app.onrender.com",
    caseStudy: {
      problem: "In enterprise B2B sales, account executives manage dozens of concurrent deals across weeks-long cycles. High-value opportunities stall quietly due to missed follow-ups, unclear buyer blockers, or lack of timely action after proposals are dispatched. Fully autonomous AI agents risk hallucinating unapproved discounts or spamming clients, while manual sales hygiene is broken.",
      constraints: [
        "Zero-Hallucination Policy: Agents must never invent pricing, unapproved discounts, or fabricated meeting history.",
        "Autonomous Write Prohibition: No AI tool may execute an external CRM write without explicit human review and approval.",
        "Stateful Resumption: The workflow must be able to pause mid-run, persist state to database checkpointers, and safely resume days later."
      ],
      architectureDiagram: [
        "HubSpot CRM (via Model Context Protocol - MCP)",
        "         ↓",
        "Research Agent: Ingests deals, contact associations, timestamps, and notes",
        "         ↓",
        "Prioritization Engine: Deterministic Formula (Stage + Value + Inactivity - Penalties)",
        "         ↓",
        "Strategy Agent: Analyzes blockers, buyer personas (CXO vs. Director), and next steps",
        "         ↓",
        "Communication Drafter: Anti-invention grounded follow-up email synthesis",
        "         ↓",
        "══════════════════════════════════════════════════════════",
        "  HUMAN-IN-THE-LOOP SAFETY GATE (interrupt_before=['approval'])",
        "  Sales Rep reviews, edits, approves, or rejects draft in UI",
        "══════════════════════════════════════════════════════════",
        "         ↓",
        "Action Agent: Executes approved HubSpot task & note creation via MCP",
        "         ↓",
        "Verification Agent: Read-after-write verification against CRM API",
        "         ↓",
        "Immutable Telemetry & Audit Log in Supabase PostgreSQL (Traced in LangSmith)"
      ],
      technicalDecisions: [
        {
          choice: "LangGraph Stateful Checkpointing over Sequential Chains",
          why: "Provides native pause/resume capabilities (`interrupt_before=['approval']`). State persists across threads, enabling human review without losing agent context."
        },
        {
          choice: "Model Context Protocol (MCP) Tool Abstraction",
          why: "Decoupled HubSpot CRM logic from LLM prompt engineering. Exposes standardized JSON-RPC schemas, allowing tools to be audited or swapped to Salesforce without refactoring agent graphs."
        },
        {
          choice: "Deterministic Scoring Formula over LLM Ranking",
          why: "Priority Score = S_stage + V_amount + I_inactivity - P_task - P_recent + B_query. Eliminates ranking variance and token cost, guaranteeing reproducible urgency rankings."
        },
        {
          choice: "Read-After-Write Verification Node",
          why: "Validates that external CRM writes succeeded and reflect the exact approved parameters before reporting run completion."
        }
      ],
      implementationDetails: [
        "Engineered with Python 3.11, Pydantic v2 typed state schemas, and LangSmith waterfall trace trees.",
        "Built comprehensive Pytest test matrix with 14/14 passing tests covering mathematical scoring, UI deal switching, rejection safety, and human draft edits.",
        "Containerized using Docker with multi-stage python:3.12-slim container and deployed on Render."
      ],
      evaluation: [
        { task: "Scoring Determinism", metric: "Consistency", score: "100%", notes: "Mathematical formula verified via unit tests with zero drift." },
        { task: "Human Approval Enforcement", metric: "Safety Gate", score: "100%", notes: "0 unauthorized writes; verified by negative test scenarios." },
        { task: "Automated Test Matrix", metric: "Pytest Suite", score: "14/14 Pass", notes: "Covers standard flow, custom prompt targeting, deal switching, and rejection." }
      ],
      failureModesAndLimitations: [
        "Expired HubSpot OAuth tokens trigger automatic graceful degradation to sandbox mode with clear UI warnings.",
        "Complex multi-stakeholder deals with conflicting CRM notes require careful prompt context window management."
      ],
      nextIterations: [
        "Multi-channel outreach: extend beyond email drafting to LinkedIn message and calendar invite scheduling.",
        "Autonomous objection mining across historical call transcripts using vector search over call recordings."
      ]
    }
  },
  {
    id: "repo-chat",
    number: "03",
    title: "RepoChat — Semantic Repository Intelligence System",
    tagline: "Enterprise-grade RAG engine for querying large GitHub codebases with exact source citations.",
    shortDescription: "A context-engineered Retrieval-Augmented Generation system enabling developers to semantically explore, debug, and understand large codebases through natural language, benchmarked on 1,000+ files with sub-300ms retrieval and citations.",
    badge: "RAG & Vector Search · <300ms Latency",
    technologies: [
      "Python",
      "LangChain",
      "Sentence-Transformers",
      "ChromaDB",
      "Groq LPU (Llama 3.3 70B)",
      "Streamlit",
      "PyGithub"
    ],
    metrics: [
      { label: "Repository Scale", value: "1,000+ files", detail: "Benchmarked on React & LangChain" },
      { label: "Retrieval Latency", value: "< 300ms", detail: "Cosine vector search" },
      { label: "Indexed Chunks", value: "3,000–5,000", detail: "Semantic code parsing per repo" },
      { label: "Factual Grounding", value: "~95%", detail: "All answers backed by line citations" },
      { label: "Hallucination Rate", value: "< 2%", detail: "Grounded context injection" }
    ],
    githubUrl: "https://github.com/srinath2934/github-rag-chatbot",
    caseStudy: {
      problem: "Developers spend hours navigating unfamiliar codebases, deciphering dependencies, and tracing auth flows. Traditional keyword search misses functional relationships across files, while naive LLMs hallucinate non-existent imports and methods when asked about complex architectures.",
      constraints: [
        "LLMs cannot ingest 1,000+ files directly due to context window limits and token costs.",
        "Code chunks must preserve logical syntax boundaries (functions, classes) rather than arbitrary text splits.",
        "Every single answer must cite exact file paths and line numbers so developers can verify assertions."
      ],
      architectureDiagram: [
        "GitHub Repository URL",
        "         ↓",
        "PyGithub Loader: Clones and extracts all source files",
        "         ↓",
        "Code Parsing & Semantic Chunking (Boundary-Preserving AST Splitting)",
        "         ↓",
        "Embedding Generation (all-MiniLM-L6-v2, 384-D dense vectors)",
        "         ↓",
        "ChromaDB Vector Store (Persistent cosine similarity index)",
        "         ↓",
        "Semantic Query Retrieval (Top-5 relevant code snippets)",
        "         ↓",
        "Grounded LLM Inference (Groq Llama 3.3 70B, streaming response)",
        "         ↓",
        "Interactive Streamlit UI with Code Snippets, Source Citations & File Tree"
      ],
      technicalDecisions: [
        {
          choice: "ChromaDB Embedded Vector Store over Cloud SaaS DB",
          why: "Enables fast local persistence with zero recurring database infrastructure cost, ideal for rapid indexing and privacy."
        },
        {
          choice: "Sentence Transformers (all-MiniLM-L6-v2) for Local Embeddings",
          why: "Produces dense 384-dimensional code embeddings locally on CPU with zero API costs and sub-300ms similarity queries."
        },
        {
          choice: "Groq LPU Inference (Llama 3.3 70B)",
          why: "Provides lightning-fast token generation (<500ms TTFT) with 70B reasoning quality, ensuring responsive conversational debugging."
        }
      ],
      implementationDetails: [
        "Built a custom PyGithub loader to bypass known LangChain repo loader edge cases and rate limits.",
        "Engineered AST-aware chunking preserving function declarations, docstrings, and class scopes.",
        "Designed citation parser extracting file name and exact line spans into clickable GitHub references."
      ],
      evaluation: [
        { task: "Retrieval Speed", metric: "Latency", score: "< 300ms", notes: "Vector search across 5,000 code chunks." },
        { task: "Code Grounding", metric: "Accuracy", score: "~95%", notes: "Answers verified against actual repository syntax." },
        { task: "Hallucination Control", metric: "Error Rate", score: "< 2%", notes: "Prevented by strict prompt grounding and line citation enforcement." }
      ],
      failureModesAndLimitations: [
        "Deep cross-file inheritance chains and dynamic runtime imports can occasionally require multiple query hops.",
        "Large binary files or minified bundles must be filtered out during pre-indexing."
      ],
      nextIterations: [
        "Integrate tree-sitter AST parsing for fine-grained multi-language symbol dependency graphs.",
        "Add hybrid BM25 + dense retrieval to pinpoint exact variable identifier names effortlessly."
      ]
    }
  },
  {
    id: "redrob-ranking",
    number: "04",
    title: "Redrob — Intelligent Candidate Ranking Engine",
    tagline: "Offline CPU-only hybrid candidate ranking screening 100k profiles in under 8 seconds.",
    shortDescription: "A high-throughput recruitment search engine that precomputes dense candidate representations with BAAI/BGE embeddings and ranks the top 100 profiles from a 100,000-candidate pool with deterministic score breakdowns.",
    badge: "Vector Retrieval · 100k Scale",
    technologies: [
      "Python",
      "BAAI/BGE Embeddings",
      "Vector Retrieval",
      "Streamlit",
      "NumPy / pandas",
      "Hugging Face Spaces"
    ],
    metrics: [
      { label: "Candidate Pool", value: "100,000", detail: "Precomputed profile index" },
      { label: "Search Latency", value: "< 8 sec", detail: "CPU-only hybrid ranking" },
      { label: "Top-K Candidates", value: "Top 100", detail: "Deterministic tie-breaking" },
      { label: "Deployment", value: "Hugging Face", detail: "Interactive Streamlit sandbox" }
    ],
    githubUrl: "https://github.com/srinath2934",
    caseStudy: {
      problem: "Screening tens of thousands of candidate resumes against a job description is computationally prohibitive when systems recompute embeddings on every query. Keyword searches miss adjacent skills, while unconstrained models produce black-box rankings that hiring managers cannot defend.",
      constraints: [
        "Must operate on CPU-only infrastructure without expensive GPU instances.",
        "Latency must stay under 10 seconds for a full 100,000 candidate pool ranking.",
        "Rankings must be explainable with deterministic score components (skills, experience, behavioral signals)."
      ],
      architectureDiagram: [
        "100,000 Candidate Resume Pool",
        "         ↓",
        "Offline Precomputed BAAI/BGE Vector Indexing",
        "         ↓",
        "Incoming Job Description (JD)",
        "         ↓",
        "Two-Phase Architecture:",
        "  1. Vectorized Semantic Similarity Retrieval (Coarse Filter)",
        "  2. Multi-Signal Scoring: Skills Match + Experience Level + Behavioral Signals",
        "         ↓",
        "Deterministic Tie-Breaking & Score Breakdown Calculation",
        "         ↓",
        "Top 100 Ranked Candidates with Score Breakdown (Streamlit + CSV Export)"
      ],
      technicalDecisions: [
        {
          choice: "Offline Precomputation of Candidate Vectors",
          why: "Decoupled indexing from query-time execution, reducing runtime overhead from minutes to sub-8-second vectorized matrix operations."
        },
        {
          choice: "BAAI/BGE Embeddings",
          why: "State-of-the-art retrieval performance on technical text, outperforming general-purpose sentence transformers on resume semantic mapping."
        },
        {
          choice: "Deterministic Tie-Breaking Algorithm",
          why: "Guarantees reproducible rankings across consecutive runs so hiring managers always see auditable results."
        }
      ],
      implementationDetails: [
        "Implemented vectorized NumPy scoring pipelines operating in memory on CPU.",
        "Built Streamlit sandbox on Hugging Face Spaces featuring interactive filters and instant CSV export."
      ],
      evaluation: [
        { task: "Ranking Throughput", metric: "Pool Size", score: "100,000", notes: "Screened against complex tech job descriptions." },
        { task: "Inference Latency", metric: "Total Time", score: "< 8s", notes: "CPU-only environment." }
      ],
      failureModesAndLimitations: [
        "Drastic vocabulary shifts in emerging technical frameworks require periodic vector index refreshes."
      ],
      nextIterations: [
        "Add graph-based skill taxonomy mapping to correlate related skill families automatically."
      ]
    }
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: "Machine Learning Intern",
    company: "Proitbridge",
    period: "Sep 2025 – Dec 2025",
    location: "Bengaluru, India (Remote / Hybrid)",
    contributions: [
      "Engineered a Python-based CatBoost classification pipeline using pandas and NumPy to process 100+ features from a consumer dataset, predicting loan-default risk with 90% accuracy and 0.74 ROC-AUC.",
      "Optimized feature-selection and hyperparameter-tuning scripts, containerizing preprocessing and inference modules with Docker for integration testing on AWS EC2.",
      "Implemented SHAP-based interpretability modules in Python to explain feature contributions and communicate applicant-level risk drivers to business stakeholders."
    ],
    techStack: ["Python", "CatBoost", "Docker", "AWS EC2", "SHAP", "pandas", "NumPy", "scikit-learn"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "JCT College of Engineering and Technology",
    affiliation: "Affiliated with Anna University, Chennai",
    period: "2022 – 2026",
    gpa: "8.0 / 10",
    details: [
      "Specialized in Machine Learning, Deep Learning, Natural Language Processing, and Cloud Systems.",
      "Co-authored research paper on Semantic Support Ticket Intelligence submitted to IEEE ICIRCA 2026."
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Mathur Boys Higher Secondary School",
    affiliation: "Tamil Nadu State Board",
    period: "2020 – 2022",
    details: ["Mathematics, Physics, Chemistry, Computer Science"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Oracle Cloud Infrastructure 2023 AI Certified Foundations Associate",
    issuer: "Oracle University",
    date: "May 2024",
    credentialId: "100662362OCI23AIFCA",
    validUntil: "May 2026",
    link: "https://www.oracle.com/education/certification/"
  },
  {
    name: "Introduction to Model Context Protocol (MCP)",
    issuer: "Anthropic",
    date: "2024",
    link: "https://anthropic.com"
  },
  {
    name: "Foundation: Introduction to LangChain – Python",
    issuer: "LangChain Academy",
    date: "2024",
    link: "https://academy.langchain.com"
  },
  {
    name: "Python (Intermediate) Certificate",
    issuer: "HackerRank",
    date: "Verified",
    link: "https://www.hackerrank.com/certificates"
  },
  {
    name: "SQL (Basic) Certificate",
    issuer: "HackerRank",
    date: "Verified",
    link: "https://www.hackerrank.com/certificates"
  },
  {
    name: "Python for Data Science, AI & Development",
    issuer: "IBM via Coursera",
    date: "Verified",
    link: "https://coursera.org"
  },
  {
    name: "Databases and SQL for Data Science with Python",
    issuer: "IBM via Coursera",
    date: "Verified",
    link: "https://coursera.org"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Agentic AI & Orchestration",
    skills: [
      "LangGraph (v0.2+)",
      "State Machines",
      "Typed State Schemas",
      "Checkpointers & Memory",
      "Human-in-the-Loop (HITL) Gates",
      "Branching & Safe Pause/Resume",
      "Model Context Protocol (MCP)",
      "Multi-Agent Workflows",
      "CrewAI (Explored)"
    ]
  },
  {
    category: "LLM, Retrieval & Context Engineering",
    skills: [
      "Anthropic Claude",
      "OpenAI API",
      "Groq LPU / NVIDIA NIM",
      "Prompt Engineering",
      "Structured Output (Pydantic v2)",
      "Sentence-Transformers (SBERT)",
      "FAISS Vector Indexing",
      "ChromaDB",
      "BAAI/BGE Embeddings",
      "Context Compaction & Token Budgeting"
    ]
  },
  {
    category: "Machine Learning & Data Science",
    skills: [
      "PyTorch",
      "CatBoost",
      "scikit-learn",
      "SHAP (Explainable AI)",
      "Multi-Task Classification",
      "Time-to-Resolution Regression",
      "SQL (PostgreSQL / SQLite)",
      "pandas",
      "NumPy"
    ]
  },
  {
    category: "Engineering, Production & Deployment",
    skills: [
      "Python 3.10+ (async/await, typing, OOP)",
      "FastAPI (RESTful APIs)",
      "Docker & Containerization",
      "AWS EC2 Deployment",
      "LangSmith Tracing & Observability",
      "Pytest (Unit & End-to-End)",
      "React + Vite",
      "Git / GitHub Workflows",
      "Linux / Bash"
    ]
  }
];

export const HOW_I_BUILD_STEPS = [
  { step: "01", title: "Define the Problem", desc: "Isolate root operational bottlenecks and determine whether AI is truly required over deterministic heuristics." },
  { step: "02", title: "Establish Measurable Success Criteria", desc: "Define clear, quantifiable evaluation targets (e.g., latency, MAE, accuracy, token cost) before writing code." },
  { step: "03", title: "Build the Simplest Viable Baseline", desc: "Construct a lightweight non-LLM or linear baseline to establish an empirical benchmark." },
  { step: "04", title: "Evaluate Failure Modes", desc: "Actively test edge cases, class imbalances, hallucination risks, and data leakage." },
  { step: "05", title: "Engineer Robust Architecture", desc: "Combine deterministic formulas, stateful agent graphs, and semantic retrieval to eliminate risk." },
  { step: "06", title: "Deploy with Observability", desc: "Containerize services with Docker, wire LangSmith tracing, and enforce strict Pydantic contracts." },
  { step: "07", title: "Audit & Monitor", desc: "Inspect live execution traces, log structured audit records, and measure real-world performance." },
  { step: "08", title: "Iterate Continuously", desc: "Incorporate feedback loops, fine-tune retrieval chunking, and refine calibration." }
];
