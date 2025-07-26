export const Experience = () => {
  const experiences = [
    {
      title: "Java Full Stack Developer",
      company: "Hartford Financial Services Group",
      period: "July 2024 – Present",
      location: "USA",
      responsibilities: [
        "Architected complex UI state management solutions using component-based React applications, improving user interaction efficiency by 25%",
        "Developed serverless microservices with Node.js and AWS Lambda to resolve financial data processing bottlenecks, accelerating deployment cycles by 20%",
        "Integrated multiple downstream REST and SOAP APIs for insurance policy management, maintaining consistent business logic across applications",
        "Implemented end-to-end CI/CD setup with automated testing integration, eliminating deployment pipeline failures and achieving reliable production deployments",
        "Established comprehensive unit testing framework using JUnit and resolved SonarQube violations, meeting enterprise quality standards",
        "Validated API responses between legacy and modernized insurance applications, ensuring identical functionality across error scenarios",
        "Monitored production systems using Kibana and Splunk, proactively identifying and resolving performance issues in financial services applications"
      ]
    },
    {
      title: "Java Full Stack Developer",
      company: "United Services Automobile Association",
      period: "July 2020 – December 2022",
      location: "India",
      responsibilities: [
        "Analyzed legacy system modernization requirements by documenting Spring Boot application migration scope, ensuring 100% compliance with USAA architectural standards",
        "Built multiple APIs for debit card ordering and declined transaction retrieval, resolving critical banking functionality gaps and enabling seamless customer operations",
        "Created new discount status and scoring section, enhancing customer experience with real-time visibility into insurance benefits",
        "Designed dynamic scoring algorithm based on driving patterns, enabling personalized discount calculations for improved customer retention",
        "Supported cross-functional teams across Dev, QA, and PreProd environments, accelerating development cycles and reducing testing time",
        "Performed comprehensive scenario testing with Postman during migration, maintaining application stability and consistent API responses"
      ]
    },
    {
      title: "Java Developer",
      company: "Proximus",
      period: "August 2019 – June 2020",
      location: "India",
      responsibilities: [
        "Mastered core Java concepts including Exception handling, IO operations, and Collections Framework, strengthening application foundation for robust enterprise solutions",
        "Optimized microservice development using Spring Boot auto-configuration, accelerating service creation and saving 2 hours per development cycle",
        "Programmed MongoDB CRUD operations and RESTful web services, managing data handling inefficiencies for efficient processing",
        "Produced comprehensive API documentation with Swagger UI, improving developer integration experience and system usability",
        "Automated manual deployment processes by establishing AWS CodePipeline for streamlined deployment to Elastic Beanstalk environments"
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