import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { RESUME_PATH, RESUME_FILENAME } from "@/lib/resume";
import { Reveal } from "@/components/motion/Reveal";
import { onSpotlightMove } from "@/hooks/use-spotlight";

const channels = [
  { icon: Mail, label: "Email", value: "gelliteja1998@gmail.com", href: "mailto:gelliteja1998@gmail.com" },
  { icon: Phone, label: "Phone", value: "+1 913 263 8468", href: "tel:+19132638468" },
  { icon: Linkedin, label: "LinkedIn", value: "gelliteja1998", href: "https://www.linkedin.com/in/gelliteja1998/" },
  { icon: Github, label: "GitHub", value: "TejaGelli668", href: "https://github.com/TejaGelli668" },
  { icon: MapPin, label: "Location", value: "Kansas, United States", href: null },
];

export const Contact = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <div
          onMouseMove={onSpotlightMove}
          className="glass ring-gradient spotlight relative overflow-hidden rounded-3xl px-7 py-14 text-center lg:px-16 lg:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet/35 via-cyan/25 to-pink/30 blur-3xl"
          />

          <h2 className="relative font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold tracking-[-0.03em]">
            Let&rsquo;s build <span className="grad-text">something</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-ghost">
            Open to full-stack and AI engineering roles. The fastest way to reach me is email.
          </p>

          <div className="relative mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:gelliteja1998@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet via-indigo to-cyan bg-[length:200%_auto] px-7 py-3.5 font-semibold text-white transition-[background-position,box-shadow] duration-500 hover:bg-[position:100%_center] hover:shadow-[0_0_40px_-6px_rgba(124,92,255,0.85)]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Send an email
            </a>
            <a
              href={RESUME_PATH}
              download={RESUME_FILENAME}
              className="ring-gradient inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-white/[0.06]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download résumé
            </a>
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {channels.map((c, i) => {
          const Icon = c.icon;
          const inner = (
            <>
              <Icon className="h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-ghost/70">
                  {c.label}
                </span>
                <span className="block truncate font-medium text-white">{c.value}</span>
              </span>
            </>
          );
          return (
            <Reveal key={c.label} delay={i * 70}>
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass ring-gradient lift flex h-full items-center gap-4 rounded-2xl p-5 transition-colors hover:bg-white/[0.06]"
                >
                  {inner}
                </a>
              ) : (
                <div className="glass ring-gradient flex h-full items-center gap-4 rounded-2xl p-5">
                  {inner}
                </div>
              )}
            </Reveal>
          );
        })}
      </div>

      <p className="mt-14 text-center text-sm text-ghost/60">
        &copy; {new Date().getFullYear()} Teja Gelli
      </p>
    </div>
  );
};
