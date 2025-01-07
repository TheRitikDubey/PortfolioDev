import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
function App() {
  return (
    <div className="w-full bg-gray-900">
      {/* Hero Section */}
      <Navbar />
      <header className="text-white text-center py-10">
        <HeroSection />
      </header>
      {/* Experience Section */}
      <section className="py-0">
          <ExperienceSection />
      </section>

      {/* Project Section */}
      <section>
        <ProjectsSection />
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                React.js
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                TypeScript
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                HTML/CSS
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Node.js
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Express
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                APIs
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
        <div className="flex justify-center space-x-8">
          <a href="mailto:your.email@example.com" 
             className="text-blue-600 hover:text-blue-800 font-semibold">
            Email
          </a>
          <a href="https://linkedin.com/in/your-profile" 
             className="text-blue-600 hover:text-blue-800 font-semibold">
            LinkedIn
          </a>
          <a href="https://github.com/your-username" 
             className="text-blue-600 hover:text-blue-800 font-semibold">
            GitHub
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
