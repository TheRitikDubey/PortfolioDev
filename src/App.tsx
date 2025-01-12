import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import { ContainerScroll } from './components/ui/container-scroll-animation'
import ContactSection from './components/ContactSection'
import { BackgroundBeams } from './components/ui/background-beams'
import ContactInfo from './components/ContactInfo'
import { Element } from 'react-scroll';
function App() {
  return (
    <div className="w-full bg-gray-900">
      {/* Hero Section */}
      <Navbar />
      <Element name='home' className="text-white text-center py-10">
        <HeroSection />
      </Element>
      {/* Experience Section */}
      <Element name='experience' className="py-0">
          <ExperienceSection />
      </Element>

      {/* Project Section */}
      <Element name='work'>
        <ProjectsSection />
      </Element> 

      {/* Contact Section */}
      <Element name='' className="p-4 bg-black">
        <ContainerScroll titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll <br /> Animations
              </span>
            </h1>
          </>
        } >
          <section className='absolute left-[15%] w-[80%] z-10'>
            {/* <div className='flex flex-row items-baseline justify-between'>
              <ContactInfo />
              <ContactSection />
            </div> */}
          </section>
          <BackgroundBeams />
        </ContainerScroll>
      </Element>

      <Element name='ContactUs'>
          <div className="text-center p-4 mb-10">
            <h2 className="text-3xl font-bold text-white">Contact Us</h2>
            <div className="mt-2 w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className='flex items-baseline justify-around'>
                  <ContactInfo />
                  <ContactSection />
          </div>
      </Element>
    </div>
  )
}

export default App
