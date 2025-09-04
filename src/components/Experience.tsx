export const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Hartford Financial Services Group",
      period: "July 2024 – Present",
      location: "USA",
      description: "Currently architecting and developing complex financial services applications at Hartford Financial Services Group, where I focus on building robust full-stack solutions for insurance policy management. My work involves designing sophisticated UI state management solutions using React that have improved user interaction efficiency by 25%, while simultaneously developing serverless microservices with Node.js and AWS Lambda to resolve critical financial data processing bottlenecks.\n\nI've successfully integrated multiple downstream REST and SOAP APIs to maintain consistent business logic across various insurance applications, and established a comprehensive CI/CD pipeline with automated testing that has eliminated deployment failures. My commitment to code quality is reflected in implementing thorough unit testing frameworks using JUnit and resolving SonarQube violations to meet enterprise standards. I actively monitor production systems using Kibana and Splunk, ensuring optimal performance and proactively identifying issues before they impact our financial services operations."
    },
    {
      title: "Software Engineer",
      company: "United Services Automobile Association",
      period: "July 2020 – December 2022",
      location: "India",
      description: "During my tenure at USAA, I played a crucial role in modernizing legacy banking systems by analyzing and documenting Spring Boot application migration requirements, ensuring 100% compliance with USAA's architectural standards. I developed multiple critical APIs for debit card ordering and declined transaction retrieval, which resolved significant banking functionality gaps and enabled seamless customer operations across the platform.\n\nOne of my key contributions was creating an innovative discount status and scoring section that enhanced the customer experience by providing real-time visibility into insurance benefits. I designed and implemented a dynamic scoring algorithm based on individual driving patterns, enabling personalized discount calculations that significantly improved customer retention rates. Throughout this role, I supported cross-functional teams across Development, QA, and PreProduction environments, accelerating development cycles and performing comprehensive scenario testing with Postman to maintain application stability during system migrations."
    },
    {
      title: "Java Developer",
      company: "Proximus",
      period: "August 2019 – June 2020",
      location: "India",
      description: "At Proximus, I strengthened my foundation in enterprise Java development by mastering core concepts including Exception handling, IO operations, and Collections Framework, which became the cornerstone for building robust enterprise solutions. I optimized microservice development processes using Spring Boot auto-configuration, which accelerated service creation and saved an average of 2 hours per development cycle.\n\nMy technical contributions included programming efficient MongoDB CRUD operations and developing RESTful web services that resolved significant data handling inefficiencies. I took initiative in improving developer experience by producing comprehensive API documentation with Swagger UI, which greatly enhanced system usability and integration processes. Additionally, I automated manual deployment workflows by establishing AWS CodePipeline for streamlined deployment to Elastic Beanstalk environments, significantly reducing deployment time and human error in the release process."
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
                <div className="text-white/90 leading-relaxed space-y-4">
                  {exp.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};