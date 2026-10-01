import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { onSpotlightMove } from "@/hooks/use-spotlight";

type ProjectLink = {
  label: string;
  url: string;
  live?: boolean;
};

type WorkOrder = {
  ref: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
};

const workOrders: WorkOrder[] = [
  {
    ref: "WO-01",
    title: "CSA T20 Challenge Predictor",
    subtitle: "ML forecast of South Africa's domestic T20 title",
    description:
      "Scrapes and cross-checks five data sources (Cricbuzz, Cricsheet ball-by-ball, ESPNcricinfo, CricTracker squads, Open-Meteo weather), blends four models into an ensemble, and simulates the rest of the 2026 tournament 20,000 times. A React dashboard explains every number.",
    features: [
      "542 matches since 2011-12, merged and cross-checked across sources",
      "Elo, logistic regression, random forest, and gradient boosting ensemble",
      "Season-by-season back-test: 58.5% on 330 held-out matches",
      "Player-rated lineups adjusted for squads, injuries, and Test duty",
      "Washout model built on 15 years of venue rainfall",
      "Monte Carlo simulation of pools, Super Eights, and knockouts",
    ],
    stack: ["Python", "pandas", "scikit-learn", "React", "Vite", "SVG charts", "GitHub Actions", "GitHub Pages"],
    links: [
      { label: "Live dashboard", url: "https://tejagelli668.github.io/csa-t20-2026-prediction-model/", live: true },
      { label: "Repository", url: "https://github.com/TejaGelli668/csa-t20-2026-prediction-model" },
    ],
    featured: true,
  },
  {
    ref: "WO-02",
    title: "CineBook",
    subtitle: "Cinema ticket booking with Gemini agents",
    description:
      "Movie ticket booking for Hyderabad cinemas: live seat maps, snacks, and Stripe checkout, plus two Gemini tool-calling assistants. A customer concierge finds shows, picks seats, and builds the order; a manager's assistant at /admin reports occupancy and sales and schedules shows.",
    features: [
      "Live seat maps over WebSocket with expiring seat holds",
      "Stripe checkout with webhook-confirmed bookings",
      "Gemini agents that only act after the user confirms",
      "Manager desk: occupancy, sales, film import, show scheduling",
      "JWT auth with rate limiting and login-attempt limits",
      "Supabase Postgres via Flyway, Supabase Storage, TMDB posters",
    ],
    stack: ["Spring Boot 3", "Java 17", "React", "Supabase Postgres", "Flyway", "Stripe API", "WebSocket", "Gemini AI", "JWT"],
    links: [{ label: "Repository", url: "https://github.com/TejaGelli668/CineBook" }],
    featured: true,
  },
  {
    ref: "WO-03",
    title: "RentMate AI",
    subtitle: "AI-powered rental marketplace",
    description:
      "A peer-to-peer rental platform using AI for natural-language search, automated trust and safety, recommendations, and fraud detection, with an admin console for moderation and analytics.",
    features: [
      "Intent-based search (95% accuracy, self-measured)",
      "Fraud detection and user verification",
      "Dynamic pricing and recommendation engine",
      "Admin dashboard with content moderation",
      "Real-time booking and payments",
      "Automated content moderation and analytics",
    ],
    stack: ["React", "Spring Boot", "PostgreSQL", "Redis", "Gemini AI", "JWT", "AWS S3", "WebSocket"],
    links: [
      { label: "Frontend", url: "https://github.com/TejaGelli668/RentMate-Frontend" },
      { label: "Backend", url: "https://github.com/TejaGelli668/RentMate-Backend" },
    ],
  },
  {
    ref: "WO-04",
    title: "Financial Workflow Automation",
    subtitle: "AI document processing SaaS",
    description:
      "A SaaS platform for financial workflow automation: Gemini-backed document processing, real-time analytics, and automated bill management, with duplicate detection and multi-format export.",
    features: [
      "AI document processing (90%+ accuracy, self-measured)",
      "Real-time financial analytics",
      "Automated bill management and reminders",
      "Export to CSV, Excel, and PDF",
      "Duplicate detection and anomaly analysis",
      "Multi-format document parsing",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Gemini AI", "Prisma", "JWT", "AWS S3"],
    links: [
      { label: "Frontend", url: "https://github.com/TejaGelli668/AI-Financial-Workflow-Automation" },
      { label: "Backend", url: "https://github.com/TejaGelli668/AI-Financial-Workflow-Automation/tree/main/backend" },
    ],
  },
  {
    ref: "WO-05",
    title: "Pet Adoption Management",
    subtitle: "Adoption workflow with role-based portals",
    description:
      "A platform for pet adoption management with separate admin and user portals: listings, an adoption workflow with payments, a donation system, and vaccination tracking.",
    features: [
      "User and admin authentication",
      "Adoption workflow with payment",
      "Pet donation management",
      "Vaccination tracking",
      "Admin dashboard and user management",
      "Role-based access control",
    ],
    stack: ["Spring Boot", "React", "JavaScript", "NoSQL", "Bootstrap"],
    links: [
      { label: "Frontend", url: "https://github.com/TejaGelli668/pet-adoption-ui" },
      { label: "Backend", url: "https://github.com/TejaGelli668/pet-adoption-api" },
    ],
  },
  {
    ref: "WO-06",
    title: "Charity Donation Platform",
    subtitle: "Campaigns, donations, and approval workflow",
    description:
      "A platform for charitable giving: campaign creation, secure donation processing with refunds, and admin approval, deployed on AWS with DocumentDB, EC2, and API Gateway.",
    features: [
      "Campaign creation and management",
      "Secure payment processing and refunds",
      "Admin approval workflow",
      "User authentication and dashboards",
      "AWS deployment and scaling",
      "Real-time donation tracking",
    ],
    stack: ["React", "Node.js", "MongoDB", "AWS EC2", "API Gateway", "DocumentDB", "Amplify", "JWT"],
    links: [
      { label: "Frontend", url: "https://github.com/TejaGelli668/Charity-Donation-Platform-UI" },
      { label: "Backend", url: "https://github.com/TejaGelli668/Charity-Donation-API" },
    ],
  },
];

const accents = [
  "from-cyan to-violet",
  "from-violet to-cyan",
  "from-cyan to-pink",
  "from-pink to-amber",
  "from-amber to-violet",
  "from-violet to-pink",
];

export const Projects = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-[-0.03em]">
          Things I&rsquo;ve <span className="grad-text">built</span>
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-4 max-w-2xl text-lg text-ghost">
          Six projects: an ML forecasting model with a live dashboard, and full-stack products shipping AI features.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {workOrders.map((wo, i) => (
          <Reveal
            key={wo.ref}
            delay={140 + i * 90}
            className={wo.featured ? "lg:col-span-2" : ""}
          >
            <article
              onMouseMove={onSpotlightMove}
              className="glass ring-gradient spotlight lift group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 lg:p-8"
            >
              <div
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accents[i % accents.length]} opacity-70`}
              />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white transition-colors duration-300 group-hover:text-cyan">
                    {wo.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-ghost">{wo.subtitle}</p>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-ghost transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan"
                />
              </div>

              <p className="mt-4 max-w-2xl leading-relaxed text-ghost">{wo.description}</p>

              <ul className={`mt-5 grid gap-x-6 gap-y-2 ${wo.featured ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}>
                {wo.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-ghost">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan/70"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {wo.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-xs text-ghost"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {wo.links.map((link, li) => {
                  const Icon = link.live ? ExternalLink : Github;
                  return (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        link.live
                          ? "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet via-indigo to-cyan bg-[length:200%_auto] px-4 py-2 text-sm font-semibold text-white transition-[background-position,box-shadow] duration-500 hover:bg-[position:100%_center] hover:shadow-[0_0_40px_-6px_rgba(124,92,255,0.85)]"
                          : `inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 ${li % 2 ? "hover:border-cyan/50 hover:bg-cyan/15" : "hover:border-violet/50 hover:bg-violet/15"}`
                      }
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
