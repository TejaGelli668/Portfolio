type Client = { name: string; period: string };

type Role = {
  title: string;
  company: string;
  period: string;
  location: string;
  stack: string[];
  summary: string;
  clients?: Client[];
  highlights: string[];
};

const roles: Role[] = [
  {
    title: "Full Stack Developer",
    company: "T-Mobile",
    period: "Sep 2025 – Present",
    location: "USA",
    stack: ["Python", "Flask", "React", "TypeScript", "Terraform", "Splunk", "Akamai", "SQLite"],
    summary:
      "Building and operating the WAF and edge-security engineering platform for T-Mobile's Akamai estate — automation pipelines, audit tooling, and the service infrastructure they run on.",
    highlights: [
      "Built a zero-touch email-to-ticket pipeline for IP allowlist requests: polls a shared mailbox through Microsoft Graph every 300s, runs an 8-stage validation pipeline ordered into three cost-tiered phases so paid VPN/proxy enrichment is only reached last, then decides, files the ServiceNow task, and replies in-thread. Three idempotency gates and a parsing-confidence floor keep ordinary mailbox traffic from ever triggering a reply.",
      "Built an LLM agent for WAF attestation on Google ADK and LiteLLM over T-Mobile's internal gateway with a direct Anthropic fallback, tiering models by job — a cheap model for sub-calls, a stronger one for the security-critical main agent. It extracts hostnames from free text or spreadsheets, runs a ~1,700-line deterministic decision engine, enriches from the ServiceNow CMDB, and drafts the per-row justification an analyst would otherwise write. Grew the tracked estate roughly tenfold over the previous version.",
      "Automated ServiceNow ticket triage with a flock-guarded sweep every 10 minutes — 152 tickets scanned in 11–19 seconds, ~144 runs a day — rewriting generic titles from the parent request, round-robin assigning to the on-call roster, and posting a work note. A SQLite ledger supplies the idempotency guard, working around a service account whose comment API is write-only.",
      "Engineered an external attack-surface discovery pipeline: 8 phases, 50 parallel workers, 40+ passive recon and certificate-transparency sources, and a 5,000-entry DNS wordlist. It targets WAF bypasses specifically — IPv6 records resolving off-Akamai, plain-HTTP paths, geo-routing differences across four resolvers, non-standard ports, and subdomain takeover — with 0–100 risk scoring and a delta engine that tracks newly-lost protection.",
      "Correlated threat alerts hourly by parsing Akamai SOCC alert mail for indicators and cross-querying Splunk for the same attacker IPs across every other WAF config, including requests that returned 2xx — turning 97 alerts into 22,256 correlations across 485 IPs, idempotent on case ID and under an hour of latency, with no analyst action required.",
      "Automated compliance auditing at scale: finding allowlisted IPs that resolve to prohibited-service-location countries and were allowed rather than blocked (an allowlist quietly defeating geo-policy), pulling the authoritative country list live from a SharePoint PDF via a stdlib-only parser, joining three Splunk sources, and mailing month-over-month deltas. Related jobs sweep the SIEM in 150K-event batches with incremental watermarking, and audit 674 properties a day against authoritative GitLab config.",
      "Engineered the platform layer under the tooling: a fleet health monitor over 39 services with capped auto-restart so broken apps are never crash-looped and self-healed apps stay silent; a job-runner with live log streaming, run history, and scheduling; and a stdlib-only credential rotation job that fans OAuth secrets to three dependent apps atomically inside a hard, unrecoverable expiry window. Roughly 43 systemd services and 30 cron jobs behind a single reverse proxy.",
      "Shipped higher-risk write-path automation, not just read-only dashboards: daily vendor IP-feed activation to staging and production behind a single-writer lock with batching and retry/backoff, shelling out to Terraform because the upstream activation API is unreliable on this tenant; header rule trees added and activated across 365 properties; and geo-deny tooling deliberately scoped to write only to a test list until validated.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Hartford Financial Services Group",
    period: "July 2024 – July 2025",
    location: "USA",
    stack: ["Python", "React", "Docker", "SQL", "CI/CD", "Grafana", "Splunk"],
    summary:
      "Modernized customer-facing React interfaces and moved legacy insurance workloads onto containerized cloud infrastructure.",
    highlights: [
      "Refactored customer-facing React interfaces into reusable, component-based modules and improved state-management workflows by roughly 25%, strengthening maintainability and frontend consistency.",
      "Migrated legacy application workloads toward cloud infrastructure, containerizing services with Docker and improving deployment workflows to cut associated cloud costs by roughly 20% without sacrificing reliability.",
      "Created backend services in Python with RESTful APIs and integrated them with React interfaces to support end-to-end full-stack workflows.",
      "Optimized relational schemas and SQL queries supporting data flow between Python backend services and frontend features.",
      "Supported automated CI/CD pipelines and environment-specific Docker deployments, using CloudWatch, Grafana, Splunk, and ELK to improve observability across environments.",
    ],
  },
  {
    title: "Java Full Stack Developer",
    company: "Tata Consultancy Services",
    period: "Aug 2019 – Feb 2023",
    location: "India",
    stack: ["Java", "Spring Boot", "Microservices", "MongoDB", "REST APIs", "React", "GCP"],
    summary:
      "Delivered Java and Spring Boot services for two enterprise clients, growing from foundational development into full ownership of banking and insurance features.",
    clients: [
      { name: "USAA", period: "July 2020 – Dec 2022" },
      { name: "Proximus", period: "Aug 2019 – June 2020" },
    ],
    highlights: [
      "For USAA, analyzed and documented Spring Boot migration requirements for legacy banking systems, then built the APIs that closed real functional gaps — debit card ordering and declined-transaction retrieval — supporting customer operations across the platform.",
      "Designed a discount status and scoring feature that gave customers real-time visibility into their insurance benefits, driven by a dynamic scoring algorithm based on individual driving patterns.",
      "For Proximus, built microservices with Spring Boot auto-configuration and programmed MongoDB CRUD operations and RESTful web services, cutting repeated setup work out of each new service.",
      "Documented APIs with Swagger/OpenAPI so integrating teams could work without reverse-engineering endpoints, and automated deployment through a managed CI/CD pipeline in place of manual releases.",
      "Supported Development, QA, and pre-production environments through migration work, running scenario testing to keep applications stable while systems moved.",
    ],
  },
];

import { Reveal } from "@/components/motion/Reveal";
import { onSpotlightMove } from "@/hooks/use-spotlight";

export const Experience = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-[-0.03em]">
          Where I&rsquo;ve <span className="grad-text">shipped</span>
        </h2>
      </Reveal>

      <div className="relative mt-14">
        {/* Gradient rail threading the timeline */}
        <div
          aria-hidden="true"
          className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-violet via-cyan to-transparent md:block"
        />

        <div className="space-y-6">
          {roles.map((role, i) => (
            <Reveal key={`${role.company}-${role.period}`} delay={i * 110}>
              <div className="relative md:pl-12">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-8 hidden h-4 w-4 rounded-full border-2 border-void bg-gradient-to-br from-violet to-cyan md:block"
                >
                  {i === 0 && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-cyan opacity-60" />
                  )}
                </span>

                <article
                  onMouseMove={onSpotlightMove}
                  className="glass ring-gradient spotlight lift relative overflow-hidden rounded-2xl p-7 lg:p-8"
                >
                  <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">{role.company}</h3>
                      <p className="mt-1 text-sm font-medium text-ghost">
                        {role.title} &middot; {role.location}
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-3">
                      <span className="text-sm font-semibold text-cyan">{role.period}</span>
                      {i === 0 && (
                        <span className="rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-cyan">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl leading-relaxed text-white/85">{role.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {role.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-ghost"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {role.clients && (
                    <p className="mt-4 text-sm text-ghost">
                      <span className="font-semibold text-white/70">Clients: </span>
                      {role.clients.map((c) => `${c.name} (${c.period})`).join(" · ")}
                    </p>
                  )}

                  <ul className="mt-6 space-y-3">
                    {role.highlights.map((h, idx) => (
                      <li key={idx} className="flex gap-3 text-[0.95rem] leading-relaxed text-ghost">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-violet to-cyan"
                        />
                        <span className="max-w-3xl">{h}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
