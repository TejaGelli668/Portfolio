export const Experience = () => {
  const experiences = [
    {
      title: "Java Full Stack Developer",
      company: "Hartford Financial Services Group",
      period: "June 2024 – Present",
      location: "Overland Park, USA",
      responsibilities: [
        "Leveraged Spring Boot framework and Configuration management to develop robust backend solutions mitigating gateway timeout errors",
        "Employed React library to engineer responsive and dynamic user interfaces, augmenting user experience and engagement",
        "Designed and optimized PostgreSQL database schemas, improving query performance by 30%",
        "Integrated Spring Boot backend with React frontend utilizing RESTful APIs",
        "Collaborated with cross-functional teams to deliver high-quality software solutions using Agile methodologies"
      ]
    },
    {
      title: "Java Developer",
      company: "Tata Consultancy Services Ltd",
      period: "August 2019 – December 2022",
      location: "Hyderabad, India",
      responsibilities: [
        "Developed insurance application using Spring IOC, Spring MVC Framework, and Spring Boot",
        "Implemented authentication and authorization security mechanism using Spring Security and JWT",
        "Engaged in Git code reviews, promoting team collaboration and reducing post-deployment defects by 20%",
        "Orchestrated test-driven development methodologies maintaining Sonar code coverage exceeding 80%",
        "Utilized AWS services such as EC2, S3, and DynamoDB for efficient data management"
      ]
    },
    {
      title: "Associate System Engineer",
      company: "Tata Consultancy Services Ltd",
      period: "2019 – 2022",
      location: "Hyderabad, India",
      responsibilities: [
        "Designed and executed reusable UI components and Micro Frontends utilizing React.js",
        "Implemented asynchronous call management system using Axios library, reducing loading time by 30%",
        "Established rigorous testing protocols using JUnit, Mockito, and Jest",
        "Optimized legacy SQL queries performance by up to 27% through strategic indexing",
        "Engaged in end-to-end development lifecycle using SCRUM methodology"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-8 lg:px-16 py-20">
      <div className="max-w-6xl mx-auto animate-fade-in">
        <h2 className="text-4xl lg:text-5xl font-bold text-green-400 mb-12">Work Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-green-400/30">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-green-400 rounded-full"></div>
              
              <div className="space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-green-400">{exp.title}</h3>
                    <p className="text-xl font-semibold text-white">{exp.company}</p>
                    <p className="text-white/70">{exp.location}</p>
                  </div>
                  <span className="text-green-400 font-medium">{exp.period}</span>
                </div>
                
                <ul className="space-y-2 text-white/90">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-400 mt-2 text-xs">●</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};