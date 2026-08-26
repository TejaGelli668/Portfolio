import { Download, Mail, ArrowDown } from "lucide-react";
import profileImage from "@/assets/profileImage.jpg";
import { RESUME_PATH, RESUME_FILENAME } from "@/lib/resume";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";

const metrics = [
  { value: 7067, label: "Subdomains discovered", source: "WAF Recon · 16 scans" },
  { value: 22256, label: "Threat correlations", source: "Akamai SOCC · 97 alerts" },
  { value: 152, label: "Tickets per sweep", source: "ServiceNow bot · 11–19s" },
  { value: 39, label: "Services monitored", source: "Fleet monitor" },
];

export const Hero = () => {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-20 pt-32 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <Reveal>
            <span className="eyebrow-pill">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              Available for work
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,4.75rem)] font-extrabold leading-[1.02] tracking-[-0.035em]">
              Teja Gelli
              <span className="mt-2 block grad-text">AI-augmented full-stack engineer</span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ghost">
              I build the automation behind T&#8209;Mobile&rsquo;s WAF and edge&#8209;security
              platform &mdash; Python pipelines, React dashboards, and an LLM agent that drafts
              security attestations. Six years shipping full&#8209;stack systems.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={RESUME_PATH}
                download={RESUME_FILENAME}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet via-indigo to-cyan bg-[length:200%_auto] px-6 py-3.5 font-semibold text-white transition-[background-position,box-shadow] duration-500 hover:bg-[position:100%_center] hover:shadow-[0_0_40px_-6px_rgba(124,92,255,0.85)]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Résumé
              </a>
              <a
                href="mailto:gelliteja1998@gmail.com"
                className="ring-gradient inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-white/[0.06]"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Get in touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-7 text-sm text-ghost/80">
              Full Stack Developer at T-Mobile &middot; Kansas, US
            </p>
          </Reveal>
        </div>

        {/* Portrait, lit by the mesh behind it */}
        <Reveal delay={200} className="justify-self-center lg:justify-self-end">
          <div className="relative animate-float">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-violet/45 via-cyan/25 to-pink/30 blur-3xl"
            />
            <div className="ring-gradient relative overflow-hidden rounded-[2rem]">
              <img
                src={profileImage}
                alt="Teja Gelli"
                className="relative h-[19rem] w-[16rem] object-cover sm:h-[22rem] sm:w-[18.5rem]"
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Live metrics — these count up as they arrive */}
      <div className="mt-16 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={380 + i * 80}>
            <div className="glass ring-gradient spotlight lift relative h-full overflow-hidden rounded-2xl p-5">
              <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                <CountUp value={m.value} />
              </div>
              <div className="mt-1.5 text-sm font-medium text-white/85">{m.label}</div>
              <div className="mt-0.5 text-xs text-ghost/70">{m.source}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={720} className="mt-14 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll to about"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ghost transition-colors hover:border-cyan/50 hover:text-cyan"
        >
          <ArrowDown className="h-4 w-4 animate-float" aria-hidden="true" />
        </a>
      </Reveal>
    </div>
  );
};
