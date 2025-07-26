import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { User, FileText, Briefcase, Code, Rocket, Link } from "lucide-react";
import { downloadResume } from "@/utils/downloadResume";

const navigationItems = [
  { id: "home", label: "Home", icon: User },
  { id: "summary", label: "Summary", icon: FileText },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Rocket },
  { id: "contact", label: "Links", icon: Link },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadCV = () => {
    downloadResume();
  };

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-3">
      {/* Navigation */}
      <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1.5 gap-1 border border-white/20">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "secondary" : "ghost"}
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className={`rounded-full text-xs px-3 py-1.5 h-8 ${
                activeSection === item.id
                  ? "bg-white text-black hover:bg-white/90"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <Icon className="w-3 h-3 mr-1.5" />
              {item.label}
            </Button>
          );
        })}
      </div>

      {/* Download CV Button */}
      <Button
        onClick={downloadCV}
        className="bg-white/20 text-white hover:bg-white/30 rounded-full px-4 py-2 text-sm font-semibold h-8 border border-white/20"
      >
        Download CV
      </Button>
    </div>
  );
};