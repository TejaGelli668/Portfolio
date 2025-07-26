import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "RentMate AI - AI-Powered Rental Marketplace",
      description: "An intelligent peer-to-peer rental platform using AI for natural language search, automated trust & safety, smart recommendations, and fraud detection. Features comprehensive admin dashboard with user management, content moderation, and real-time analytics for efficient platform management.",
      technologies: ["React", "Spring Boot", "PostgreSQL", "Redis", "Gemini AI", "JWT", "AWS S3", "WebSocket"],
      githubUrl: "https://github.com/TejaGelli668/RentMate-Frontend",
      backendUrl: "https://github.com/TejaGelli668/RentMate-Backend",
      features: [
        "AI-Powered Intent-Based Search (95% Accuracy)",
        "Smart Fraud Detection & User Verification",
        "Dynamic Pricing & Recommendation Engine",
        "Comprehensive Admin Dashboard",
        "Real-time Booking & Payment System",
        "Automated Content Moderation & Analytics"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "AI-Powered Financial Workflow Automation",
      description: "A comprehensive AI-powered SaaS platform for financial workflow automation featuring Google Gemini AI document processing, real-time analytics, and automated bill management. Includes advanced features like duplicate detection, export capabilities, and intelligent workflow automation.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Google Gemini AI", "Prisma", "JWT", "AWS S3"],
      githubUrl: "https://github.com/TejaGelli668/AI-Financial-Workflow-Automation",
      backendUrl: "https://github.com/TejaGelli668/AI-Financial-Workflow-Automation/tree/main/backend",
      features: [
        "AI Document Processing with 90%+ Accuracy",
        "Real-time Financial Analytics Dashboard",
        "Automated Bill Management & Reminders",
        "Professional Export System (CSV/Excel/PDF)",
        "Duplicate Detection & Anomaly Analysis",
        "Multi-format Document Support & Parsing"
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
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
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop"
    }
  ];

  // Additional projects that will be shown when "Load More" is clicked
  const additionalProjects = [
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
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop"
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
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop"
     },
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
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : null}
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