import { useState, useEffect } from "react";
import { Instagram, Twitter, Youtube, Dribbble, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const roles = [
    "Java Full Stack Developer",
    "Software Engineer", 
    "Java Backend Developer",
    "Prompt Engineer"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentRole.slice(0, prev.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const downloadCV = () => {
    console.log("Downloading CV...");
  };

  const sendEmail = () => {
    window.open("mailto:gtnvvsunil9999@gmail.com", "_blank");
  };

  return (
    <div className="h-screen flex items-center justify-center px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Side - Profile Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 max-w-sm w-full">
            <div className="text-center space-y-6">
              {/* Profile Image */}
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/b59cfb4c-8508-4023-9695-0515d970f66d.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Available Status */}
              <div className="flex items-center justify-center gap-2 bg-white/10 rounded-full px-4 py-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-white">Available for work</span>
              </div>
              
              {/* Name */}
              <h3 className="text-2xl font-bold text-white">Teja Gelli</h3>
              
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={downloadCV}
                  variant="outline"
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 rounded-full px-8 py-3 font-semibold"
                >
                  Download CV
                </Button>
                
                <Button
                  onClick={sendEmail}
                  variant="outline"
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30 rounded-full px-8 py-3 font-semibold"
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Main Content */}
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-green-400 text-lg font-medium tracking-wide flex items-center gap-2">
              <span className="text-2xl">👋</span> Say Hello
            </p>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                I'm <span className="text-green-400">Teja Gelli</span>,
              </h1>
              <div className="h-16 flex items-center">
                <h2 className="text-2xl lg:text-3xl font-semibold text-green-400">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
              <p className="text-lg text-gray-300">
                Based in Kansas, US.
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            I specialize in creating robust, scalable web applications using Java/J2EE technologies. 
            With expertise in Spring Boot, React, and cloud technologies, I focus on delivering 
            high-quality solutions that enhance user experience and drive business success.
          </p>
        </div>
      </div>
    </div>
  );
};
