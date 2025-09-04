export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Scripting",
      skills: ["Java 8/11/17/21", "JavaScript (ES6+)", "NodeJS", "Python", "SQL/PL-SQL", "Shell Scripting", "Unix Scripting"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring Boot 3+", "Spring Framework", "ReactJS", "Angular", "Hibernate", "Microservices", "RESTful APIs", "JUnit", "Mockito"]
    },
    {
      title: "Databases & Messaging",
      skills: ["PostgreSQL", "Oracle", "SQL Server", "MySQL", "MongoDB", "Snowflake", "AWS DynamoDB", "Kafka", "JMS", "SQL Query Optimization"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (S3, SQS, EC2, KMS, RDS)", "Docker", "Kubernetes", "Jenkins", "GCP", "Azure", "CI/CD Pipelines", "GitLab/Bitbucket"]
    },
    {
      title: "Tools & Platforms",
      skills: ["IntelliJ IDEA", "Eclipse", "VS Code", "Postman", "Git", "GitHub", "Maven", "SonarQube"]
    },
    {
      title: "Testing & Quality",
      skills: ["JUnit", "Mockito", "TestNG", "React Testing Library", "Test-Driven Development (TDD)", "API Testing & Automation", "Code Reviews"]
    },
    {
      title: "Security & Automation",
      skills: ["Web Application Firewall (WAF)", "AI-driven Automation", "Postman Automation", "Documentation & Compliance"]
    },
    {
      title: "Methodologies",
      skills: ["Agile/Scrum", "SDLC", "Microservices Architecture", "Domain-Driven Design"]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-8 lg:px-16 py-20">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <h2 className="text-4xl lg:text-5xl font-bold text-green-400 mb-12">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-green-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-green-400 hover:text-black transition-all duration-200 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-green-400 mb-6">Education & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="mb-4">
                <h4 className="text-lg font-bold text-green-400 mb-1">Master's in Computer Science</h4>
                <p className="text-white/90">University Of Central Missouri, Warrensburg, MO</p>
                <p className="text-white/70 text-sm">GPA: 3.7/4.0</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-green-400 mb-1">Bachelor's in Electronics and Communication Engineering</h4>
                <p className="text-white/90">Gudlavalleru Engineering College, Gudlavalleru, AP</p>
                <p className="text-white/70 text-sm">GPA: 4.0/4.0</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="mb-4">
                <h4 className="text-lg font-bold text-green-400 mb-1">AWS Certified Solutions Architect</h4>
                <p className="text-white/90">Amazon Web Services</p>
                <p className="text-white/70 text-sm">In Progress</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-green-400 mb-1">Associate Cloud Engineer</h4>
                <p className="text-white/90">Google Cloud Platform</p>
                <p className="text-white/70 text-sm">Feb 2022 – Feb 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};