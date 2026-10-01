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
      "Building the automation, audit tooling, and service platform behind T-Mobile's Akamai WAF and edge security.",
    highlights: [
      "Zero-touch email-to-ticket pipeline for IP allowlist requests: Microsoft Graph polling, 8-stage validation, auto-filed ServiceNow tasks and in-thread replies.",
      "LLM agent (Google ADK, LiteLLM) that drafts WAF attestations, backed by a deterministic decision engine and CMDB enrichment.",
      "ServiceNow triage bot sweeping 152 tickets in 11–19s every 10 minutes, with auto-titling and round-robin on-call assignment.",
      "Attack-surface discovery pipeline (8 phases, 50 parallel workers, 40+ sources) with risk-scored WAF-bypass detection.",
      "Hourly threat correlation across Akamai SOCC alerts and Splunk: 97 alerts into 22,256 correlations, with no analyst action.",
      "Compliance audits catching geo-policy gaps in allowlists, and 674 properties audited daily against GitLab config.",
      "Platform layer: 39-service health monitor with capped auto-restart, job runner, and Terraform-backed rollouts across 365 properties.",
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
      "Refactored customer-facing React UIs into reusable components, improving state-management workflows by ~25%.",
      "Containerized legacy workloads with Docker for the cloud migration, cutting cloud costs by ~20%.",
      "Built Python REST APIs and optimized SQL schemas behind React features.",
      "Supported CI/CD and Docker deployments, with observability through CloudWatch, Grafana, Splunk, and ELK.",
    ],
  },
  {
    title: "Java Full Stack Developer",
    company: "Tata Consultancy Services",
    period: "Aug 2019 – Feb 2023",
    location: "India",
    stack: ["Java", "Spring Boot", "Microservices", "MongoDB", "REST APIs", "React", "GCP"],
    summary:
      "Java and Spring Boot services for two enterprise clients, growing into full ownership of banking and insurance features.",
    clients: [
      { name: "USAA", period: "July 2020 – Dec 2022" },
      { name: "Proximus", period: "Aug 2019 – June 2020" },
    ],
    highlights: [
      "USAA: built Spring Boot APIs for debit card ordering and declined-transaction retrieval during the legacy banking migration.",
      "USAA: designed a driving-pattern scoring feature giving customers real-time insurance discount status.",
      "Proximus: built Spring Boot microservices with MongoDB CRUD and RESTful web services.",
      "Documented APIs with Swagger/OpenAPI, automated releases through CI/CD, and kept Dev, QA, and pre-prod stable through migration.",
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

                  <ul className="mt-6 space-y-2.5">
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
