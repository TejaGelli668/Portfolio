import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "Pet Adoption Management System",
      description: "A comprehensive full-stack platform for pet adoption management featuring user authentication, admin dashboard, pet listing/management, adoption workflow with payment integration, pet donation system, and vaccination tracking. Includes separate admin and user portals with role-based access control.",
      technologies: ["Spring Boot", "JavaScript (ES6)", "React", "NoSQL", "Bootstrap", "Payment Integration"],
      githubUrl: "https://github.com/TejaGelli668/pet-adoption-ui",
      backendUrl: "https://github.com/TejaGelli668/pet-adoption-api",
      features: [
        "User & Admin Authentication",
        "Pet Adoption Workflow with Payment",
        "Pet Donation Management", 
        "Vaccination Tracking System",
        "Admin Dashboard & User Management",
        "Role-based Access Control"
      ],
      image: "/lovable-uploads/db4b92e5-e2c8-4c29-a6a7-48eaa4f1b10c.png"
    },
    {
      title: "Cinema Management & Booking Platform",
      description: "A comprehensive full-stack cinema management system featuring movie booking, seat selection with dynamic pricing, payment integration, admin dashboard, and AI-powered movie assistant. Includes real-time seat locking, food ordering, and complete theater management workflow.",
      technologies: ["Spring Boot", "React", "MySQL", "Stripe API", "JWT", "WebSocket", "Gemini AI"],
      githubUrl: "https://github.com/TejaGelli668/MovieFrontend",
      backendUrl: "https://github.com/TejaGelli668/MovieBackend",
      features: [
        "Dynamic Seat Selection & Pricing",
        "Stripe Payment Integration", 
        "AI Movie Assistant Chatbot",
        "Real-time Seat Locking System",
        "Admin Dashboard & Analytics",
        "Food & Beverage Ordering"
      ],
      image: "/lovable-uploads/db4b92e5-e2c8-4c29-a6a7-48eaa4f1b10c.png"
    },
    {
      title: "Charity Donation Platform",
      description: "A comprehensive full-stack platform designed to simplify and enhance charitable giving. Features user-friendly campaign creation, secure donation processing, admin approval workflows, and complete payment integration. Deployed on AWS with DocumentDB, EC2, and API Gateway for scalability and reliability.",
      technologies: ["React", "Node.js", "MongoDB", "AWS EC2", "API Gateway", "DocumentDB", "AWS Amplify", "JWT", "Payment Integration"],
      githubUrl: "https://github.com/TejaGelli668/Charity-Donation-Platform-UI",
      backendUrl: "https://github.com/TejaGelli668/charity-donation-platform-api",
      features: [
        "Campaign Creation & Management",
        "Secure Payment Processing & Refunds",
        "Admin Approval Workflow",
        "User Authentication & Dashboards", 
        "AWS Cloud Deployment & Scaling",
        "Real-time Donation Tracking"
      ],
      image: "/lovable-uploads/6bdecb5d-e282-4f0b-a329-a8249857c973.png"
    }
  ];

  // Additional projects that will be shown when "Load More" is clicked
  const additionalProjects = [
    {
      title: "Door-to-Door Courier Service",
      description: "Developed a user-friendly platform for parcel delivery management with features including user registration, parcel creation, admin approval, and secure pickup.",
      technologies: ["NodeJS", "ReactJS", "MySQL"],
      githubUrl: "https://github.com/tejagelli/courier-service",
      image: "/lovable-uploads/32d3d051-a5b3-4c7e-9858-15d4a9f0729b.png"
    },
    {
      title: "E-Commerce Platform",
      description: "Built a full-stack e-commerce solution with payment integration and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/tejagelli/ecommerce-platform",
    },
    {
      title: "Task Management App",
      description: "Developed a collaborative task management application with real-time updates and team collaboration features.",
      technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      githubUrl: "https://github.com/tejagelli/task-manager",
    }
  ];

  const handleGithubClick = (url) => {
    window.open(url, '_blank');
  };

  const handleLoadMore = () => {
    setShowAllProjects(true);
  };

  const displayedProjects = showAllProjects ? [...projects, ...additionalProjects] : projects;

  return (
    <div className="min-h-screen flex items-center justify-center px-8 lg:px-16 py-20">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-8 text-green-400">🚀</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-green-400">Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-green-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex justify-center">
                      <Button
                        onClick={() => handleGithubClick(project.githubUrl)}
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30 rounded-full"
                        variant="outline"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-400 mb-3">{project.title}</h3>
                <p className="text-white/90 text-sm mb-4">{project.description}</p>
                
                {/* Show key features for projects that have them */}
                {project.features && (
                  <div className="mb-4">
                    <h4 className="text-green-400 text-xs font-semibold mb-2">Key Features:</h4>
                    <ul className="text-white/80 text-xs space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-green-400/20 text-green-400 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <Button
                    onClick={() => handleGithubClick(project.githubUrl)}
                    size="sm"
                    className="w-full bg-green-400 text-black hover:bg-green-500 rounded-full"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Frontend Repository
                  </Button>
                  
                  {/* Show backend repo for projects that have them */}
                  {project.backendUrl && (
                    <Button
                      onClick={() => handleGithubClick(project.backendUrl)}
                      size="sm"
                      className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 rounded-full"
                      variant="outline"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Backend Repository
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {!showAllProjects && (
          <div className="text-center mt-12">
            <Button
              onClick={handleLoadMore}
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 rounded-full px-8 py-3"
              variant="outline"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};