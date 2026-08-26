import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { RESUME_PATH, RESUME_FILENAME } from "@/lib/resume";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const Navigation = () => {
  const [active, setActive] = useState("home");
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setLifted(window.scrollY > 24);

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        setActive(links[links.length - 1].id);
        return;
      }
      const pos = window.scrollY + 140;
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= pos) current = l.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`flex items-center gap-2 rounded-full px-2 py-2 transition-all duration-500 ${
          lifted ? "glass shadow-[0_16px_50px_-24px_rgba(124,92,255,0.7)]" : "bg-transparent border border-transparent"
        }`}
      >
        <a
          href="#home"
          className="hidden sm:flex items-center pl-3 pr-2 font-display font-bold text-sm tracking-tight text-white hover:text-cyan transition-colors"
        >
          TG
        </a>

        <nav aria-label="Sections">
          <ul className="flex items-center gap-0.5">
            {links.map((l) => {
              const on = active === l.id;
              return (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    aria-current={on ? "true" : undefined}
                    className={`relative block rounded-full px-3 py-1.5 text-[0.8125rem] font-semibold transition-colors duration-300 ${
                      on ? "text-white" : "text-ghost hover:text-white"
                    }`}
                  >
                    {on && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-violet/30 to-cyan/25 border border-white/10"
                      />
                    )}
                    <span className="relative">{l.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href={RESUME_PATH}
          download={RESUME_FILENAME}
          className="group relative ml-1 inline-flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-violet to-indigo px-3.5 py-2 text-[0.8125rem] font-bold text-white transition-shadow duration-300 hover:shadow-[0_0_28px_-4px_rgba(124,92,255,0.9)]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/25 transition-none group-hover:animate-sheen"
          />
          <Download className="relative h-3.5 w-3.5" aria-hidden="true" />
          <span className="relative hidden sm:inline">Resume</span>
        </a>
      </div>
    </header>
  );
};
