import { Reveal } from "@/components/motion/Reveal";
import { onSpotlightMove } from "@/hooks/use-spotlight";

const groups = [
  {
    title: "AI-assisted development",
    accent: "from-violet to-pink",
    items: ["Claude Code", "GitHub Copilot", "OpenAI Codex", "Google ADK", "LiteLLM", "Prompt engineering"],
  },
  {
    title: "Languages",
    accent: "from-cyan to-violet",
    items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    title: "Frameworks",
    accent: "from-pink to-amber",
    items: ["React", "Flask", "FastAPI", "Node.js", "Spring Boot", "REST APIs", "GraphQL"],
  },
  {
    title: "Cloud & infrastructure",
    accent: "from-amber to-cyan",
    items: ["Google Cloud", "Cloud Run", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Data & operations",
    accent: "from-violet to-cyan",
    items: ["PostgreSQL", "SQLite", "Splunk", "Grafana", "ELK", "CloudWatch"],
  },
  {
    title: "Security & networking",
    accent: "from-cyan to-pink",
    items: ["Akamai WAF", "RBAC", "HTTP/S", "DNS", "Load balancing", "Attack-surface discovery"],
  },
];

const marquee = [
  "Python", "React", "TypeScript", "Terraform", "Google Cloud", "Docker", "Flask",
  "Splunk", "Akamai", "Kubernetes", "PostgreSQL", "Claude Code", "FastAPI", "Spring Boot",
];

const education = [
  { degree: "M.S. Computer Science", school: "University of Central Missouri", detail: "Lee's Summit, Missouri · GPA 3.7/4.0 (self-reported)" },
  { degree: "B.Tech, Electronics & Communication", school: "Seshadri Rao Gudlavalleru Engineering College", detail: "India · GPA 4.0/4.0 (self-reported)" },
];

export const Skills = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-[-0.03em]">
          The <span className="grad-text">toolkit</span>
        </h2>
      </Reveal>

      {/* Continuous marquee — the stack, always moving */}
      <Reveal delay={90}>
        <div className="marquee-mask mt-10 overflow-hidden py-2">
          <div className="marquee-track flex w-max animate-marquee gap-3">
            {[...marquee, ...marquee].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="glass whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold text-white/85"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={140 + i * 70}>
            <div
              onMouseMove={onSpotlightMove}
              className="glass ring-gradient spotlight lift relative h-full overflow-hidden rounded-2xl p-6"
            >
              <div aria-hidden="true" className={`h-1 w-12 rounded-full bg-gradient-to-r ${g.accent}`} />
              <h3 className="mt-4 font-display text-base font-bold text-white">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[0.8125rem] text-ghost transition-colors duration-300 hover:border-violet/40 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <h3 className="mt-16 font-display text-xl font-bold text-white">Education</h3>
      </Reveal>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={240 + i * 80}>
            <div className="glass ring-gradient lift h-full rounded-2xl p-6">
              <h4 className="font-display font-bold text-white">{e.degree}</h4>
              <p className="mt-1.5 text-ghost">{e.school}</p>
              <p className="mt-1 text-sm text-ghost/70">{e.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
