import React from 'react';

const PortfolioAbout = () => {
  const highlights = [
    "Developed and maintained multiple full-stack applications using modern technologies",
    "Collaborated with cross-functional teams to deliver high-quality software solutions",
    "Implemented responsive designs and ensured cross-browser compatibility",
    "Worked with RESTful APIs and microservices architecture"
  ];


  return (
    <div className="bg-gray-900 py-4 px-4 rounded-md">
      <div className="max-w-6xl mx-auto h-full grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-5 space-y-6">
          {/* Who I Am */}
          <div className="bg-gray-800 rounded-lg p-2 shadow-lg">
            <h2 className="text-sm font-bold text mb-3 text-[#07DADC]">Who I Am</h2>
            <p className="text-gray-300 text-xs leading-relaxed">
              I'm a passionate Full Stack Developer with 1.5 years of professional 
              experience in building web applications. I specialize in creating 
              efficient, scalable, and user-friendly solutions that solve real-world 
              problems.
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-2 shadow-lg">
              <h2 className="text-sm font-bold bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text mb-2">Frontend</h2>
              <p className="text-gray-300 text-xs">
                React, TypeScript, Next, JavaScript, HTML/CSS, Tailwind CSS
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-2 shadow-lg">
              <h2 className="text-sm font-bold bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text mb-2">Backend</h2>
              <p className="text-gray-300 text-xs">
                Node.js, Python, Express, Java, SQL, MongoDB, PostgreSQL
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-7 space-y-2">
          {/* Experience Highlights */}
          <div className="bg-gray-800 rounded-lg p-2 shadow-lg">
            <h2 className="text-sm font-bold bg-gradient-to-b from-[#e60000] to-[#fbd206] text-transparent bg-clip-text mb-4">Experience Highlights</h2>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-baseline gap-0">
                  <span className="text-blue-400 mt-1">›</span>
                  <p className="text-gray-300 text-xs">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-2 shadow-lg">
              <h2 className="text-sm font-bold bg-gradient-to-b from-[#2feaff] to-[#192ef0] text-transparent bg-clip-text mb-2">Tools</h2>
              <p className="text-gray-300 text-xs">
                Git, Docker, AWS, Jenkins, Jira, GCP
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-2 shadow-lg">
              <h2 className="text-sm font-bold bg-gradient-to-b from-[#2feaff] to-[#192ef0] text-transparent bg-clip-text mb-2">Soft Skills</h2>
              <p className="text-gray-300 text-xs">
                Team Leadership, Communication, Problem-Solving
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAbout;