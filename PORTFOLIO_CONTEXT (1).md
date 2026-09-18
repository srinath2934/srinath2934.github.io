# Portfolio Website --- Agent Context & Build Specification

## 1. Objective

Build and deploy a professional personal portfolio website for
**Srinath**, a 2026 B.Tech Artificial Intelligence & Data Science
graduate targeting:

-   AI Engineer
-   Machine Learning Engineer
-   Generative AI Engineer
-   RAG / AI Application Engineer
-   Data Science Engineer

The website will be deployed as a **GitHub Pages (`github.io`) site**.

Primary goal:

> Reduce recruiter uncertainty by proving that Srinath can build,
> explain, deploy, and improve real AI/ML systems.

This is **not** a generic student portfolio and must not look like an
AI-template website.

------------------------------------------------------------------------

# 2. Core Positioning

## Primary headline

**AI / ML Engineer building production-oriented AI systems**

## Supporting statement

Use a concise version such as:

> I build practical AI and machine-learning systems across semantic
> search, RAG, NLP, backend APIs, and production-oriented ML pipelines.

Do not use generic claims such as:

-   Passionate AI enthusiast
-   AI lover
-   Future AI scientist
-   Tech enthusiast
-   I have always been fascinated by computers

The copy must communicate engineering capability rather than enthusiasm.

------------------------------------------------------------------------

# 3. Design Direction

## Selected visual style

**Dark mode --- modern, sleek, minimalist**

Design inspiration should feel closer to:

-   Linear
-   Vercel
-   modern engineering portfolios
-   high-quality SaaS/product interfaces

Avoid making it look like:

-   cyberpunk
-   gaming UI
-   cryptocurrency website
-   generic AI landing page
-   college project website

## Visual rules

### Background

Use a near-black/deep charcoal background.

Example:

``` text
#0B0D10
```

### Typography

Use a clean modern sans-serif such as:

-   Inter
-   Geist
-   system-ui

Typography must have strong hierarchy.

### Colors

Use:

-   near-black background
-   white/off-white primary text
-   muted gray secondary text
-   ONE restrained accent color

Do not use multiple neon colors.

### Borders

Use subtle borders.

Avoid thick glowing borders.

### Cards

Cards should have:

-   subtle contrast against background
-   restrained border
-   clean spacing
-   small hover movement if useful

### Animation

Use minimal purposeful animation only.

Allowed:

-   subtle fade-in
-   small hover transitions
-   smooth scrolling
-   project-card hover
-   text reveal where it improves hierarchy

Avoid:

-   particle backgrounds
-   cursor trails
-   excessive parallax
-   spinning 3D objects
-   constantly moving gradients
-   excessive glow
-   distracting animations

------------------------------------------------------------------------

# 4. UX Principle

The website should communicate this progression:

``` text
Who is he?
    ↓
What does he build?
    ↓
Can he actually build it?
    ↓
What evidence exists?
    ↓
Can I inspect the code?
    ↓
Can I see a live demo?
    ↓
Can I contact him?
```

Every page section should support this funnel.

------------------------------------------------------------------------

# 5. Website Structure

Use a single polished portfolio initially.

Sections:

``` text
Home
│
├── Hero
├── Selected Work
├── Case Studies
├── Engineering Stack
├── Experience
├── Education
├── Research / Writing
├── Currently Building
└── Contact
```

Navigation should remain simple.

Recommended navigation:

``` text
Home
Work
About
Research
Contact
```

Also provide persistent access to:

-   GitHub
-   LinkedIn
-   Resume

------------------------------------------------------------------------

# 6. Hero Section

The hero must be immediately understandable.

Structure:

``` text
SRI NATH

AI / ML ENGINEER

I build production-oriented AI systems
and machine-learning applications.

[View Work] [Resume] [GitHub]
```

Optional small supporting metadata:

``` text
AI Engineering · Machine Learning · RAG · Backend Systems
```

Do not put a huge profile picture in the hero unless it materially
improves the design.

The hero should prioritize technical identity.

------------------------------------------------------------------------

# 7. Selected Work

This is the most important section.

Do NOT display a giant grid of small tutorial projects.

Show approximately 3--4 serious projects.

Each project card should contain:

``` text
Project name
1-line problem statement
Key technologies
Evidence / metric
Case Study
GitHub
Live Demo
```

------------------------------------------------------------------------

# 8. Project 01 --- Semantic AI Support Ticket System

This should be the centerpiece project.

## Project title

**An End-to-End Semantic AI System for Automated Support Ticket
Handling**

## Short description

> An end-to-end AI system that classifies support tickets, routes them
> to teams, predicts priority and time-to-resolution, retrieves similar
> historical resolutions, and assists with response drafting.

## Known technical stack

``` text
Python
FastAPI
React
scikit-learn
Sentence Transformers
SBERT
FAISS
SQLite
```

## Known data

``` text
8,469 historical ticket resolutions
```

## Known architecture

``` text
Support Ticket
      ↓
Text Processing
      ↓
SBERT Embedding
      ↓
┌──────────────────────────────┐
│ Category Classification      │
│ Team Routing                 │
│ Priority Prediction          │
│ ETA / TTR Prediction         │
└──────────────────────────────┘
      ↓
FAISS Semantic Retrieval
      ↓
Relevant Historical Resolutions
      ↓
AI-Assisted Response
```

## Models

``` text
SBERT: all-MiniLM-L6-v2
Logistic Regression
LinearSVC
Ridge Regression
FAISS cosine similarity retrieval
```

Only state metrics that are actually verified from the project.

Never invent:

-   accuracy
-   F1 score
-   latency
-   percentage improvement
-   cost savings
-   users
-   production usage

## Case study structure

For this project, create a dedicated detailed case-study view
containing:

### 1. Problem

Explain the operational support-ticket problem.

### 2. Constraints

Explain the available historical data and practical system constraints.

### 3. Architecture

Show the pipeline visually.

### 4. Why these models?

Explain why each model was selected.

### 5. Retrieval

Explain how embeddings and FAISS are used.

### 6. API

Explain the FastAPI layer.

### 7. Frontend

Explain the React interface.

### 8. Evaluation

Only show verified metrics.

### 9. Failure modes / limitations

Include real limitations where known.

### 10. Future improvements

Examples:

``` text
Better class-imbalance handling
Improved calibration
Hybrid retrieval
Better evaluation datasets
Model monitoring
Feedback loops
```

This section is important because it demonstrates engineering judgment.

------------------------------------------------------------------------

# 9. Project 02 --- Repository Intelligence / RAG

Present the repository-intelligence project as an AI engineering
project.

Possible architecture:

``` text
Repository
    ↓
Document ingestion
    ↓
Parsing / chunking
    ↓
Embeddings
    ↓
Vector index
    ↓
Semantic retrieval
    ↓
LLM
    ↓
Grounded answer
```

Show:

-   problem
-   ingestion pipeline
-   chunking strategy
-   embedding model
-   retrieval
-   grounding
-   limitations
-   GitHub
-   live demo if available

Do not claim production usage unless verified.

------------------------------------------------------------------------

# 10. Project 03 --- Uptime Monitor

Use the uptime monitor project to demonstrate broader
software-engineering capability.

Known technologies:

``` text
FastAPI
APScheduler
PostgreSQL
Docker
AWS / cloud deployment concepts
Static frontend
```

Show the system as:

``` text
URLs
 ↓
Scheduler
 ↓
HTTP Requests
 ↓
Response Time / Status
 ↓
Database
 ↓
Dashboard
```

The purpose of this project on the portfolio is to demonstrate that
Srinath can build backend systems and infrastructure, not only ML
models.

------------------------------------------------------------------------

# 11. Project 04 --- BEACON / B2B Intent Intelligence

Present BEACON as an applied AI/business-intelligence system.

Possible conceptual pipeline:

``` text
Company Data
     ↓
Entity / Signal Extraction
     ↓
Hiring / Growth / Business Signals
     ↓
Intent Analysis
     ↓
Opportunity Intelligence
     ↓
Sales Action
```

Clearly distinguish:

-   implemented functionality
-   prototype functionality
-   research concepts
-   future ideas

Do not present an idea as a deployed product.

------------------------------------------------------------------------

# 12. Case Study Design

A project case study should feel like an engineering document, not a
marketing page.

Use this structure:

``` text
01 — Problem
02 — Constraints
03 — System Architecture
04 — Technical Decisions
05 — Implementation
06 — Evaluation
07 — What Failed
08 — What I Learned
09 — Future Improvements
10 — Source Code / Demo
```

Important:

> Always explain WHY a technology or architecture was selected.

Bad:

> Used FAISS for vector search.

Better:

> FAISS was used for efficient similarity search over historical ticket
> embeddings, allowing semantically similar resolutions to be retrieved
> without relying on exact keyword matches.

Do not fabricate reasoning if it was not actually part of the project.
Phrase retrospective reasoning as such when appropriate.

------------------------------------------------------------------------

# 13. Engineering Stack

Do not use star ratings.

Do not use:

``` text
Python ⭐⭐⭐⭐⭐
AI ⭐⭐⭐⭐⭐
ML ⭐⭐⭐⭐⭐
```

Instead group technologies.

## AI / ML

``` text
Python
PyTorch
scikit-learn
Sentence Transformers
Hugging Face Transformers
RAG
Semantic Search
Embeddings
NLP
```

Only include technologies that are genuinely supported by Srinath's
current skills/projects.

## Backend

``` text
FastAPI
Flask
REST APIs
SQLite
PostgreSQL
```

## Frontend

``` text
React
Vite
```

## Infrastructure

``` text
Docker
AWS EC2
Git
Linux
```

Do not exaggerate expertise.

------------------------------------------------------------------------

# 14. Engineering Philosophy

Include a small section titled:

**How I Build**

Suggested content:

``` text
01
Define the problem

02
Establish measurable success criteria

03
Build the simplest viable baseline

04
Evaluate failure modes

05
Improve the architecture

06
Deploy

07
Monitor

08
Iterate
```

The purpose is to demonstrate engineering thinking.

------------------------------------------------------------------------

# 15. About Section

Keep it concise.

Suggested direction:

> I'm an AI/Data Science engineer focused on building practical
> machine-learning and AI systems. My work spans semantic search, RAG,
> NLP, backend APIs, and production-oriented ML pipelines.

Then show:

``` text
Focus
AI Engineering
Machine Learning
RAG Systems
Semantic Search
Backend Systems
Cloud / Deployment
```

Do not create a long autobiography.

------------------------------------------------------------------------

# 16. Research Section

Include research/paper work.

Main research project:

**An End-to-End Semantic AI System for Automated Support Ticket
Handling**

Mention relevant conference/research work only when verified.

Provide:

``` text
Paper
GitHub
Technical Summary
```

If a PDF is available, provide a PDF link.

------------------------------------------------------------------------

# 17. Currently Building

Create a small dynamic section:

> **Currently building**

Example:

> Production-oriented RAG and AI-agent systems.

Keep this editable so it can be updated as work changes.

------------------------------------------------------------------------

# 18. Contact Section

The final CTA should be direct.

Example:

``` text
Interested in AI engineering or building an AI system?

[Email me]
[LinkedIn]
[GitHub]
[Download Resume]
```

Do not use aggressive sales copy.

------------------------------------------------------------------------

# 19. Resume

The resume should be accessible from:

-   hero
-   navigation
-   contact section

Use a clear button:

**Download Resume**

If a resume PDF exists in the repository, link to that file.

Do not embed a huge PDF viewer unless necessary.

------------------------------------------------------------------------

# 20. GitHub Integration

The portfolio should clearly link to GitHub.

For each major project:

``` text
[GitHub Repository]
```

Do not fake GitHub statistics.

If GitHub API integration is used, handle API failure gracefully.

Do not make the portfolio dependent on GitHub API availability.

------------------------------------------------------------------------

# 21. LinkedIn

Provide a clear LinkedIn link in:

-   navigation
-   contact section

Use the actual profile URL supplied by the owner.

Never invent URLs.

------------------------------------------------------------------------

# 22. Responsive Design

The site must work properly on:

-   desktop
-   laptop
-   tablet
-   mobile

Test at approximately:

``` text
1440px
1280px
1024px
768px
430px
390px
```

Mobile navigation must be usable.

Project cards must not overflow.

Code blocks must scroll horizontally rather than breaking the page.

------------------------------------------------------------------------

# 23. Accessibility

Implement:

-   semantic HTML
-   proper heading hierarchy
-   alt text for meaningful images
-   keyboard navigation
-   visible focus states
-   sufficient color contrast
-   reduced-motion support

Do not rely on color alone to communicate information.

------------------------------------------------------------------------

# 24. Performance

GitHub Pages is static hosting.

Prioritize:

-   small bundle size
-   optimized images
-   lazy loading where useful
-   minimal JavaScript
-   no unnecessary external scripts
-   fast first render

Do not add a library merely because it looks impressive.

------------------------------------------------------------------------

# 25. SEO

Add:

-   descriptive `<title>`
-   meta description
-   Open Graph metadata
-   canonical URL if applicable
-   semantic headings
-   descriptive project titles

Suggested title:

``` text
Srinath — AI / ML Engineer
```

Suggested description:

``` text
Srinath is an AI/Data Science engineer building machine-learning, RAG, semantic search, and AI-powered backend systems.
```

Do not keyword-stuff.

------------------------------------------------------------------------

# 26. GitHub Pages Deployment

The final project must be deployable to GitHub Pages.

Preferred setup:

``` text
GitHub repository
      ↓
Build
      ↓
GitHub Actions
      ↓
GitHub Pages
      ↓
https://<username>.github.io/
```

If using a project repository rather than a user-site repository,
account for the repository base path correctly.

Do not hard-code asset paths that only work on localhost.

Verify:

-   routing
-   CSS
-   JavaScript
-   images
-   PDF links
-   GitHub links
-   LinkedIn links

after deployment.

------------------------------------------------------------------------

# 27. Recommended Technical Stack

Choose the simplest stack that produces a polished result.

Preferred:

``` text
React
Vite
TypeScript
CSS / Tailwind CSS
```

Optional:

``` text
Framer Motion
```

Use animation libraries only where they add meaningful interaction.

If a static HTML/CSS/JS implementation is more appropriate, do not
introduce React unnecessarily.

------------------------------------------------------------------------

# 28. Code Quality Rules

The agent must:

-   keep components modular
-   avoid duplicated markup
-   use meaningful variable names
-   keep content separate from components where practical
-   use reusable project data structures
-   keep responsive styles organized
-   remove unused dependencies
-   remove console errors
-   run the production build before completion

No placeholder content should remain.

No lorem ipsum.

No fake metrics.

No fake testimonials.

No fake employment history.

No fake clients.

No fabricated achievements.

------------------------------------------------------------------------

# 29. Content Integrity Rules

This is critical.

Never invent evidence.

If a fact is unknown:

``` text
TODO: VERIFY
```

or omit it.

Do not invent:

-   project metrics
-   user counts
-   production deployments
-   revenue
-   performance improvements
-   company clients
-   awards
-   certifications
-   job titles
-   employment history
-   conference acceptance status

The website must be factually defensible during an interview.

------------------------------------------------------------------------

# 30. Visual Quality Rules

The finished website should feel:

``` text
Professional
Technical
Minimal
Fast
Evidence-driven
Engineer-focused
Modern
```

It should NOT feel:

``` text
Student template
AI gimmick
Cyberpunk
Gaming website
Marketing agency
Over-designed landing page
```

Use whitespace deliberately.

Use large typography for important statements.

Use small typography for metadata.

Use consistent spacing.

Use a consistent grid.

------------------------------------------------------------------------

# 31. Recruiter-first Rule

Assume the first visitor may spend less than one minute on the site.

Within the first screen they should understand:

``` text
WHO
Srinath

ROLE
AI / ML Engineer

WHAT
Builds AI/ML systems

PROOF
Serious engineering projects

ACTION
View work / GitHub / Resume
```

Do not force visitors to hunt for this information.

------------------------------------------------------------------------

# 32. Final Acceptance Checklist

Before declaring the website complete, verify:

## Content

-   [ ] Clear AI/ML Engineer positioning
-   [ ] No generic "passionate enthusiast" language
-   [ ] 3--4 serious projects
-   [ ] Support Ticket AI project is prominent
-   [ ] Project evidence is accurate
-   [ ] Case studies explain technical decisions
-   [ ] Limitations are included where appropriate
-   [ ] GitHub links work
-   [ ] Resume link works
-   [ ] LinkedIn link works
-   [ ] Contact information works

## Design

-   [ ] Dark modern minimalist theme
-   [ ] No excessive neon
-   [ ] No cyberpunk aesthetic
-   [ ] No unnecessary particle background
-   [ ] No excessive glassmorphism
-   [ ] No excessive animation
-   [ ] Strong typography hierarchy
-   [ ] Consistent spacing
-   [ ] Professional project cards

## Engineering

-   [ ] Responsive
-   [ ] Accessible
-   [ ] No console errors
-   [ ] Production build succeeds
-   [ ] Assets work on GitHub Pages
-   [ ] No broken routes
-   [ ] No broken links
-   [ ] Fast loading
-   [ ] No unnecessary dependencies

## Deployment

-   [ ] Git repository configured
-   [ ] GitHub Actions configured if required
-   [ ] GitHub Pages enabled
-   [ ] Production URL verified
-   [ ] Mobile production URL verified

------------------------------------------------------------------------

# 33. Agent Execution Order

Follow this order:

``` text
1. Inspect the existing repository
2. Identify the current framework
3. Preserve useful existing work
4. Audit current content
5. Create the information architecture
6. Implement the visual system
7. Build the hero
8. Build selected projects
9. Build detailed case studies
10. Add engineering stack
11. Add research
12. Add contact/resume
13. Add responsive behavior
14. Add accessibility
15. Optimize performance
16. Run production build
17. Fix all errors
18. Configure GitHub Pages
19. Deploy
20. Verify the live website
21. Report the final URL and what was changed
```

Do not stop at generating code.

The objective is a **working, deployed GitHub Pages portfolio**, not
merely a source-code mockup.

------------------------------------------------------------------------

# 34. Final Design Principle

The website should communicate one idea consistently:

> **Don't tell recruiters that I can build AI systems. Show them.**

Every design and content decision should support that principle.

------------------------------------------------------------------------

# 35. STANDOUT FORMULA --- NON-NEGOTIABLE

The portfolio must stand out through **evidence, clarity, technical
depth, and engineering judgment**, not gimmicks.

Use this formula as the central design and content principle:

``` text
STANDOUT PORTFOLIO
=
CLEAR POSITIONING
+
PROOF OF REAL WORK
+
TECHNICAL DEPTH
+
QUANTIFIED EVIDENCE
+
ENGINEERING DECISIONS
+
LIVE / VERIFIABLE OUTPUT
+
STRONG VISUAL HIERARCHY
```

Every major section should contribute to at least one of these
dimensions.

## Recruiter Attention Formula

The visitor journey should intentionally follow:

``` text
ATTENTION
   ↓
CLARITY
   ↓
CREDIBILITY
   ↓
CURIOSITY
   ↓
PROOF
   ↓
TRUST
   ↓
CONTACT
```

The site must not rely on flashy visuals to create attention. The
**projects and evidence** should create curiosity.

------------------------------------------------------------------------

# 36. PERSONAL STANDOUT STACK

For Srinath specifically, structure the portfolio around:

``` text
POSITIONING
AI / ML Engineer

        +

PROOF
3–4 serious engineering projects

        +

DEPTH
Architecture + models + APIs + infrastructure

        +

EVIDENCE
Verified datasets, metrics, experiments, and technical details

        +

JUDGMENT
Why this architecture?
Why this model?
What failed?
What trade-offs existed?
What would I change?

        +

VERIFICATION
GitHub + Live Demo + Research / Paper

        +

ACTION
Resume + LinkedIn + Contact
```

This is the core identity of the website.

------------------------------------------------------------------------

# 37. STANDOUT RULE: SHOW, DON'T CLAIM

Avoid claims such as:

``` text
I'm highly skilled in AI.
I'm an expert in machine learning.
I'm passionate about innovation.
I'm a problem solver.
```

Instead, convert claims into evidence.

### Weak

> I'm skilled in NLP and semantic search.

### Strong

> Built a semantic support-ticket pipeline using SBERT embeddings,
> classical ML classifiers, and FAISS retrieval over 8,469 historical
> ticket resolutions.

### Weak

> I know backend development.

### Strong

> Built FastAPI services that expose ML inference and semantic retrieval
> through REST APIs.

### Weak

> I understand RAG.

### Strong

> Built a repository-intelligence pipeline covering document ingestion,
> chunking, embeddings, retrieval, and grounded generation.

The agent should continuously ask:

> **Can this claim be demonstrated instead of stated?**

If yes, demonstrate it.

------------------------------------------------------------------------

# 38. STANDOUT PROJECT FORMULA

Every major project should follow:

``` text
PROBLEM
   ↓
CONTEXT / CONSTRAINTS
   ↓
APPROACH
   ↓
ARCHITECTURE
   ↓
TECHNICAL DECISIONS
   ↓
IMPLEMENTATION
   ↓
EVALUATION
   ↓
FAILURES / LIMITATIONS
   ↓
LEARNINGS
   ↓
NEXT ITERATION
   ↓
GITHUB / DEMO
```

This should make the project feel like a real engineering case study
rather than a GitHub README copied into a webpage.

------------------------------------------------------------------------

# 39. THE 10-SECOND TEST

When the homepage loads, a recruiter should understand the following
within approximately 10 seconds:

``` text
WHO
Srinath

ROLE
AI / ML Engineer

WHAT HE BUILDS
AI/ML systems and applications

WHY LOOK FURTHER
Real engineering projects

WHERE IS THE PROOF
Projects + GitHub + demos

WHAT CAN I DO NEXT
View Work / Resume / Contact
```

If the visitor cannot determine these things quickly, simplify the hero.

------------------------------------------------------------------------

# 40. THE 60-SECOND TEST

A recruiter who spends approximately one minute should be able to
discover:

``` text
✓ Role / positioning
✓ 2–3 strongest projects
✓ Technologies used
✓ At least one concrete project metric
✓ GitHub
✓ Resume
✓ LinkedIn
✓ Contact
```

Do not hide important evidence behind unnecessary interactions.

------------------------------------------------------------------------

# 41. THE INTERVIEW TEST

Everything shown on the portfolio must survive this question:

> **"Tell me exactly how you did this."**

Therefore:

-   Do not exaggerate.
-   Do not use fake metrics.
-   Do not claim production usage without evidence.
-   Do not list technologies that were not meaningfully used.
-   Do not describe an idea as an implemented feature.
-   Do not claim expertise merely because a library was imported once.

The portfolio should create **interviewable technical material**.

------------------------------------------------------------------------

# 42. DIFFERENTIATION PRINCIPLE

The agent must differentiate Srinath from generic AI candidates using:

``` text
REAL SYSTEMS
     +
TECHNICAL EXPLANATION
     +
ENGINEERING TRADE-OFFS
     +
FAILURE ANALYSIS
     +
VERIFIABLE CODE
```

Not through:

``` text
Neon colors
3D models
Particle effects
AI buzzwords
Huge skill lists
Fake statistics
Excessive animations
```

The website's visual sophistication should support the technical story
rather than compete with it.

------------------------------------------------------------------------

# 43. STANDOUT DESIGN HIERARCHY

Use this hierarchy:

``` text
LEVEL 1
Identity + role

LEVEL 2
Strongest engineering work

LEVEL 3
Evidence / metrics

LEVEL 4
Architecture / technical depth

LEVEL 5
Skills / supporting information

LEVEL 6
Education / secondary details
```

Do not give a giant "Skills" section more visual importance than actual
projects.

For a fresher, **demonstrated capability should dominate the page**.

------------------------------------------------------------------------

# 44. FINAL STANDOUT CHECK

Before deployment, the agent must answer YES to these questions:

-   [ ] Can a recruiter understand the role in 10 seconds?
-   [ ] Are the strongest projects immediately visible?
-   [ ] Does every major project contain evidence?
-   [ ] Are technical decisions explained?
-   [ ] Are limitations acknowledged?
-   [ ] Can the recruiter inspect the source code?
-   [ ] Can the recruiter access the resume?
-   [ ] Can the recruiter contact Srinath easily?
-   [ ] Does the design look like an engineer's portfolio rather than an
    AI template?
-   [ ] Are animations subordinate to content?
-   [ ] Are there no fabricated claims?
-   [ ] Does the website remain impressive without animation?
-   [ ] Does the portfolio give an interviewer multiple technically
    meaningful things to ask about?

If any answer is NO, improve the relevant section before considering the
portfolio finished.

------------------------------------------------------------------------

# 45. FINAL NORTH STAR

The final website should make the following impression through evidence,
without literally stating it:

``` text
"I don't just list AI technologies.

I build systems.

I can explain why I built them this way.

I understand where they fail.

I can show you the code.

And I can show you the result."
```

That is the portfolio's **standout formula**.
