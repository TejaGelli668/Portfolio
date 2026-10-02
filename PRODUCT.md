# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary, in order of arrival:**

1. **Technical recruiters and sourcers**, screening fast. Non-technical, scanning for role fit, years of
   experience, stack keywords, and location, typically in under a minute with many tabs open. They need
   the headline identity, the current role, and the resume download without hunting.
2. **Engineering hiring managers**, reading second. Technical, and they will open the linked GitHub
   repositories and judge the code. They need project substance, architecture detail, and evidence of
   real engineering judgment.

The page must survive a 30-second skim *and* reward a deeper read. That requires a layered information
hierarchy, not one flat density applied everywhere.

## Product Purpose

A personal portfolio site whose job is to convert a cold screen into a conversation — an interview
request or a direct contact. Success is a recruiter correctly identifying the role fit within seconds,
and a hiring manager finding enough substance to open a repository.

## Positioning

**AI-augmented full-stack engineer.** Not another generic full-stack developer: the differentiator is
shipping AI-backed features and AI-assisted development as normal practice. This is corroborated by
two independent sources — the resume's dedicated "AI-Assisted Development & Tools" skills line
(GitHub Copilot, Claude Code, OpenAI Codex, Prompt Engineering), and the personal project portfolio,
where four of seven projects ship Gemini AI features and a fifth is a retrieval-augmented generation (RAG)
system built and tuned through LLM evaluation.

Confirmed by the user over three competing alternatives (Java/Spring specialist, backend-leaning
full-stack, deliberately broad). The site's incumbent copy contradicts this positioning and is
therefore an anti-reference, not authority.

## Operating Context

Visitors arrive from a job application, a LinkedIn profile, or a recruiter's link — rarely by search.
They land cold, with no prior knowledge, and are comparing this candidate against a stack of others in
the same sitting. Most will read on a laptop; recruiters frequently open links on a phone.

The resume PDF is a parallel and competing artifact: many visitors will download it instead of reading
the page. The page and the PDF must not contradict each other.

## Capabilities and Constraints

- Single-page React application, one route, six scroll-linked sections, titled in the ledger's
  vocabulary: the run header, Abstract, Service Record, Competencies, Work Orders, Dispatch. Stack is settled by the existing codebase (Vite, React 18, TypeScript,
  Tailwind, shadcn/ui).
- All copy lives inline in the section components. There is no CMS or data layer, so content edits are
  code edits.
- All seven projects are shown; the former "Load More" gate was removed. The three newest (Production
  RAG With Evals, the CSA T20 Challenge Predictor, and CineBook) are full-width featured cards.
- The resume is a static file at `public/Teja-Gelli-Resume-2026-08.pdf`; every "Print Copy" control
  is a real `<a href download>` pointing at it.
- No deploy target is configured in the repository. The public domain is undecided, which is why the
  social-preview meta tags are root-relative rather than absolute.

## Brand Commitments

- Name: Teja Gelli. Professional title on the resume: **Full Stack Developer**.
- Contact facts, confirmed identical across the site and the resume: `gelliteja1998@gmail.com`,
  +1 (913) 263-8468, LinkedIn `gelliteja1998`, GitHub `TejaGelli668`.
- **Standing preference (user-set, binding on future work):** the user rejected the austere
  Greenbar Service Ledger world for having no animation and a weak palette, and chose the
  **category standard executed at full fidelity** — a modern dark portfolio. The craft bar he set
  is **Stripe / Framer**: layered gradient meshes, colour that actually moves, scroll-driven
  sequences, and real choreography. Convention is the commitment here; it is not to be softened,
  ironized, or quietly redirected toward a more restrained interpretation.
- Motion and colour are requirements, not decoration. A design that is visually quiet reads to
  this user as unfinished, regardless of how well it scores on restraint-oriented craft rules.

## Evidence on Hand

**Authoritative source of truth for work history:**
`public/Teja-Gelli-Resume-2026-08.pdf` (2 pages), the file the site serves. Supplied directly by the user
with the instruction to use it for the experience section. It supersedes the site's current copy
wherever the two disagree.

Employment per the resume:

| Employer | Title | Dates | Location |
| --- | --- | --- | --- |
| T-Mobile | Full Stack Developer | Sep 2025 – Present | USA |
| Hartford Financial Services Group | Full Stack Developer | July 2024 – July 2025 | USA |
| Tata Consultancy Services | Full Stack Developer | Aug 2019 – Feb 2023 | India |

Within the TCS tenure, two client placements are confirmed by the user: **Proximus**
(Aug 2019 – June 2020) and **USAA** (July 2020 – Dec 2022). The site's current copy wrongly presents
these as independent employers.

Education per the resume: MS Computer Science, University of Central Missouri, Lee's Summit, Missouri.
BTech Electronics and Communication Engineering, Seshadri Rao Gudlavalleru Engineering College, India.

Additional figures supplied directly by the user from live data files and logs (not from the
resume), and therefore usable with their stated provenance: 22,256 threat correlations across
485 IPs from 97 Akamai SOCC alerts; 152 tickets per triage sweep at ~144 sweeps/day; 674
properties origin-probed daily; 39 services health-monitored; 365 properties activated with GRN
header rules; ~1,700-line deterministic decision engine; 150K-event SIEM batches; 36,796 action
rows scanned in 20s; 43 systemd services and ~30 cron jobs.

Operational detail stated in the Service Record, all supplied by the user from the same live
sources and therefore usable: the allowlist mailbox is polled every 300s; validation runs as an
8-stage pipeline in three cost-tiered phases behind three idempotency gates; the attestation
agent grew the tracked estate roughly tenfold over its previous version and calls a ~1,700-line
deterministic decision engine; the triage sweep is flock-guarded every 10 minutes; attack-surface
discovery runs 8 phases with 50 parallel workers over 40+ passive recon sources and a 5,000-entry
DNS wordlist, comparing four resolvers with 0–100 risk scoring; the prohibited-location audit
joins three Splunk sources; credential rotation fans secrets to three dependent apps; threat
correlation ingests hourly and lands in under an hour; the fleet monitor runs 5-minute checks.

The user supplied two binding cautions with this material, which future work must honour:
**only the WAF attestation tool is genuine LLM work** — WAF Recon's eight "agents" are
deterministic rule-based workers and must be called multi-stage pipelines, never "AI-powered
multi-agent"; and the tool portfolio contains near-duplicate forks, so **no tool count may be
claimed** (the "~50 tools" figure does not survive scrutiny).

The internal hostname for the platform must never appear on the public site.

Quantified claims carried by the resume, and therefore usable: ~25% improvement to state-management
workflows and ~20% cloud cost reduction (Hartford); 7,067 subdomains and 1,220 security alerts across
16 scans, 11–19 second triage sweeps, and 11 reusable knowledge packs (T-Mobile).

Seven personal projects with GitHub repositories. Production RAG With Evals (public repo plus a GitHub
Pages project site with an explorer of its held-out answers), the CSA
T20 Challenge Predictor (public repo plus a live GitHub Pages dashboard) and CineBook (public monorepo)
are the newest; the other four have separate frontend and backend repos. The RAG project's figures
(held-out FinanceBench accuracy 15% → 49%, paired Δ +34 points with a 95% CI of [+24, +44]; right page
in the top 5 16% → 57%; 360 filings; eight experiments) come from that repo's committed evaluation results
(`evals/results/*__test.json`, `docs/experiments.md`), measured on a public benchmark rather than
self-reported. Its LLM judge is the same local model as its generator, a limitation the repo
documents. The predictor's figures (542 matches, 58.5% back-test accuracy on
330 held-out matches, 20,000 simulations) come from its own model output. The former stock-photography
thumbnails were removed; no screenshots of the running applications exist yet, and any added later
must be genuine captures.

**Absences that future work must not paper over:**

- The resume has **no certifications section**. The user directed that both the expired GCP
  "Associate Cloud Engineer" and the "AWS Certified Solutions Architect (In Progress)" be removed;
  neither now appears on the site. No certification may be re-added without a verifiable source.
- The resume carries **no GPA**. The site states 3.7/4.0 and 4.0/4.0 and now labels both
  "(self-reported)", matching how the project accuracy figures are treated.
- The 95% search-accuracy and 90%+ document-accuracy figures in the Projects section come from personal
  projects and appear in no resume or third-party source. Unverified.
- **Resolved (user-confirmed):** USAA and Proximus were **client placements during the Tata Consultancy
  Services tenure**, not separate employers. TCS (Aug 2019 – Feb 2023) is the employer of record;
  Proximus (Aug 2019 – June 2020) and USAA (July 2020 – Dec 2022) are the clients served within it.
  Future work must present this as one continuous TCS engagement with named clients nested beneath it —
  never as three separate jobs, which would misrepresent the employment history, and never by dropping
  the client names, which are the substantive part of the experience.
- No testimonials, references, press, employer endorsements, or third-party validation of any kind
  exist. None may be invented.
- Whether the user is actively job-seeking is unconfirmed; the hero's "Available for work" badge was
  not verified when asked.

## Product Principles

1. **The resume is the authority on employment facts.** Where the page and the PDF disagree, the PDF
   wins and the page changes. A visitor who reads both must never catch a contradiction.
2. **Recruiter-legible first, engineer-deep second.** Every section carries a scannable surface and a
   substantive layer beneath it. Neither audience is served by flattening the other's needs away.
3. **Claim only what is sourced.** Numbers, credentials, and outcomes appear only where evidence backs
   them. Unverified claims get softened or removed, never amplified for effect.
4. **AI capability is demonstrated, not asserted.** The positioning is earned by showing shipped AI
   features and real engineering behind them, not by adding "AI" to a list of skills.
5. **The incumbent look is evidence, not inheritance.** The current black-and-green scaffold aesthetic
   documents where the project started; it confers no obligation on where it goes.
