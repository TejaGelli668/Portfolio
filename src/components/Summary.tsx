import { Reveal } from "@/components/motion/Reveal";

const pillars = [
  {
    title: "Automation that runs itself",
    body: "Zero-touch pipelines that poll, decide, and act — an 8-stage validation flow that files its own tickets and replies in-thread, guarded by idempotency gates.",
  },
  {
    title: "AI where it does real work",
    body: "An LLM agent on Google ADK and LiteLLM that drafts security attestations, tiering models by job and grounding every call in a deterministic decision engine.",
  },
  {
    title: "The platform underneath",
    body: "Fleet health monitoring, job runners with live log streaming, and credential rotation — the layer most engineers never build under their own tools.",
  },
];

export const Summary = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-[-0.03em]">
          What I actually <span className="grad-text">build</span>
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-4 max-w-2xl text-lg text-ghost">
          Full-stack, backend-leaning, with AI shipped into production rather than pinned to a
          slide.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={140 + i * 90}>
            <div className="glass ring-gradient spotlight lift h-full rounded-2xl p-7">
              <div
                aria-hidden="true"
                className="mb-5 h-1 w-12 rounded-full bg-gradient-to-r from-violet to-cyan"
              />
              <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ghost">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
