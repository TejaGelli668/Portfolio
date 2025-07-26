export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java 8/11/17/21", "JavaScript", "NodeJS", "SQL"]
    },
    {
      title: "Frameworks",
      skills: ["Spring", "Spring Boot", "ReactJS", "Hibernate", "Microservices", "Angular"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "AWS DynamoDB", "Oracle DB"]
    },
    {
      title: "Tools",
      skills: ["Eclipse", "IntelliJ", "VS Code", "Postman", "Git", "GitHub", "Maven", "SonarQube"]
    },
    {
      title: "Testing",
      skills: ["JUnit", "Mockito", "TestNG", "React Testing Library"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "GCP", "Azure"]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-8 lg:px-16 py-20">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <h2 className="text-4xl lg:text-5xl font-bold text-green-400 mb-12">Skills & Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-green-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-green-400 hover:text-black transition-all duration-200"
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
              <h4 className="text-lg font-bold text-green-400">Master's in Computer Science</h4>
              <p className="text-white/90">University Of Central Missouri, Warrensburg, MO (GPA: 3.7/4.0)</p>
              <h4 className="text-lg font-bold text-green-400">Bachelor's in Electronics and Communication Engineering</h4>
              <p className="text-white/90">Gudlavalleru Engineering College, Gudlavalleru, AP (GPA: 4.0/4.0)</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-bold text-green-400">Amazon Web Services</h4>
              <p className="text-white/90">Certified Solutions Architect (In Progress)</p>
              <h4 className="text-lg font-bold text-green-400">Google Cloud Platform</h4>
              <p className="text-white/90">Associate Cloud Engineer (Feb 2022 – Feb 2025)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};