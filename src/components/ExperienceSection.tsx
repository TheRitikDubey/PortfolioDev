interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  url: string;
  responsibilities: string[];
}

const ExperienceSection = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Full Stack Developer",
      company: "Techolution",
      url: "https://www.techolution.com/",
      period: "June 2023 - Present",
      responsibilities: [
        "Developed and maintained multiple full-stack web applications using TypeScript, Nextjs, React.js, Express and Node.js",
        "Implemented RESTful APIs and integrated third-party services",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Optimized application performance and improved user experience"
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Genwise",
      url: "https://www.genwise.club/",
      period: "Feb 2023 - May 2023",
      responsibilities: [
        "Assisted in developing responsive web interfaces using React.js",
        "Participated in code reviews and implemented feedback",
        "Created reusable components and implemented UI/UX designs",
        "Learned and applied best practices in frontend development"
      ]
    },
    {
        title: "AI SWE Intern",
        company: "ByteLearn.Ai",
        url: "https://bytelearn.ai/",
        period: "April 2022 - Feb 2023",
        responsibilities: [
            "Direct hands-on experience with ML model development and optimization, showing technical depth",
            "Data engineering skills essential for AI applications",
            "Production engineering capabilities with measurable improvements",
            "Cross-functional collaboration experience"
        ]
      }
  ];

  return (
    <div className="bg-gray-900 py-2 mt-4 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
          <div className="mt-2 w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

          {/* Experience Items */}
          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-16">
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900"></div>
              </div>

              {/* Experience Card */}
              <div className={`
                bg-gray-800 rounded-lg shadow-lg p-6 w-[calc(50%-40px)]
                hover:bg-gray-750 transition-colors duration-300
                ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}
              `}>
                <h3 className="text-sm font-bold text-white mb-1">
                  {experience.title}
                </h3>
                <a href={experience.url} className="text-blue-400 hover:text-blue-300 mb-1 block">
                  {experience.company}
                </a>
                <p className="text-gray-400 mb-4">{experience.period}</p>
                
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-gray-500 mt-1">•</span>
                      <span className="text-gray-300">{responsibility}</span>
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

export default ExperienceSection;