import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import { Element } from 'react-scroll';
import AboutBento from './components/AboutBento'
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="w-full bg-gray-900 scroll-smooth">
      {/* Hero Section */}
      <Navbar />
      <Element name='home' className="text-white text-center py-10">
        <HeroSection />
      </Element>
      {/* About Me  */}
      <Element name='about' className="p-4 bg-black">
        <div className="text-center mt-2">
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <div className="mt-2 w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        <AboutBento />
      </Element>

      {/* Experience Section */}
      <Element name='experience' className="py-0">
          <ExperienceSection />
      </Element>

      {/* Project Section */}
      <Element className='p-4 lg:p-0' name='work'>
        <ProjectsSection />
      </Element> 

      {/* Skills */}

      <Element name="skills">

      </Element>

        {/* Contact Us */}
      <Element name='ContactUs' className="pt-10">
          <ContactSection />
      </Element>
      <Toaster />
    </div>
  )
}

export default App
