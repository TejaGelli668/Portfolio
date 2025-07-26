import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadResume } from "@/utils/downloadResume";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gelliteja1998@gmail.com",
      href: "mailto:gelliteja1998@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 913-263-8468",
      href: "tel:+19132638468"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/tejagelli",
      href: "https://linkedin.com/in/tejagelli"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/TejaGelli668",
      href: "https://github.com/TejaGelli668"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kansas, US",
      href: null
    }
  ];

  const downloadCV = () => {
    downloadResume();
  };

  const sendEmail = () => {
    window.open("mailto:gelliteja1998@gmail.com", "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-8 lg:px-16 py-20">
      <div className="max-w-4xl mx-auto animate-fade-in text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-green-400 mb-8">Let's Connect</h2>
        
        <p className="text-xl text-white/90 mb-12">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <Icon className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-green-400 mb-2">{contact.label}</h3>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-green-400 transition-colors break-all"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-white/90">{contact.value}</p>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={downloadCV}
            className="bg-white/20 hover:bg-white/30 text-white border-white/30 rounded-full px-8 py-3"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          
          <Button
            onClick={sendEmail}
            variant="outline"
            className="bg-white/20 hover:bg-white/30 text-white border-white/30 rounded-full px-8 py-3"
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Email
          </Button>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-white/70">
            © 2024 Teja Gelli. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};