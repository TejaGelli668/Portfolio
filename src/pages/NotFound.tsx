import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: no route at", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-void px-6 text-[#F5F6FA]">
      <div className="mesh" aria-hidden="true">
        <span className="mesh-1 animate-mesh-a" />
        <span className="mesh-2 animate-mesh-b" />
      </div>
      <div className="grid-veil" aria-hidden="true" />

      <div className="relative z-10 text-center">
        <h1 className="grad-text font-display text-[clamp(5rem,18vw,10rem)] font-extrabold leading-none tracking-[-0.04em]">
          404
        </h1>
        <p className="mt-4 text-xl font-semibold text-white">This page doesn&rsquo;t exist</p>
        <p className="mt-2 text-ghost">
          Nothing lives at <span className="text-cyan">{location.pathname}</span>
        </p>
        <a
          href="/"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-indigo px-6 py-3.5 font-semibold text-white transition-shadow duration-300 hover:shadow-[0_0_36px_-6px_rgba(124,92,255,0.9)]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
