import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import { ContainerScroll } from './components/ui/container-scroll-animation'
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

      {/* Contact Section */}
      <section className="py-0 bg-black">
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
          <div>IPad Animation</div>
        </ContainerScroll>
      </section>
    </div>
  )
}

export default App
