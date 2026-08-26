import { Hero } from "@/components/Hero";
import { Summary } from "@/components/Summary";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-void text-[#F5F6FA] overflow-x-hidden">
      {/* Living ground: three drifting colour fields, then a fine grid to give it surface. */}
      <div className="mesh" aria-hidden="true">
        <span className="mesh-1 animate-mesh-a" />
        <span className="mesh-2 animate-mesh-b" />
        <span className="mesh-3 animate-mesh-a" />
      </div>
      <div className="grid-veil" aria-hidden="true" />

      <Navigation />

      <main className="relative z-10">
        <section id="home"><Hero /></section>
        <section id="about"><Summary /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
};

export default Index;
