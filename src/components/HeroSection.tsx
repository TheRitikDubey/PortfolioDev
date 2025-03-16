import { useEffect, useState } from 'react'
// import { MacbookScrollDemo } from './macbookScroll'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-scroll';
import githubIcon from "../assets/GitHubIcon.png"
import linkdinIcon from "../assets/LinkedInIcon.png"
import instagram from "../assets/instagram-icon.png"

const titles = [
  "Software Engineer",
  "Experienced in Frontend and Backend Development",
  "Expertise in AI and Cloud Computing",
];


const HeroSection = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change the title every 3 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=''>
      <BackgroundBeamsWithCollision>
        <div className="bg-gray-900 h-full w-full flex items-center p-8">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex justify-between items-center">
            <div className="space-y-6 flex flex-col items-baseline">
              <div className="space-y-2 flex flex-col items-baseline">
                <h1 className="text-white text-5xl font-bold">
                  Hi, I'm <span className="text-blue-500">Ritik Dubey</span>
                </h1>
                <div className='lg:mx-0 mx-auto' style={{ textAlign: "center", marginTop: "20px" }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTitleIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.8 }}
                      style={{ fontSize: "24px", fontWeight: "bold" }}
                    >
                      {titles[currentTitleIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <div className='flex flex-col items-baseline'>
                <p className="text-gray-400 max-w-xl text-center lg:text-left text-wrap">
                  With 1.5 years of experience building modern web applications and 
                  scalable solutions.
                </p>
                
                <div className="flex mx-auto lg:mx-0 gap-4 pt-4">
                  <Link className="border border-gray-600 hover:cursor-pointer text-gray-300 px-6 py-2 rounded-md hover:border-gray-500 hover:text-gray-200 transition-colors" to="ContactUs" smooth={true} duration={1500}>
                    Hire Me
                  </Link>
                  <Link className="border border-gray-600 hover:cursor-pointer text-gray-300 px-6 py-2 rounded-md hover:border-gray-500 hover:text-gray-200 transition-colors" to="work" smooth={true} duration={800}>
                    View Work
                  </Link>
                </div>
                <div className='flex items-center justify-center mx-auto lg:mx-0 gap-4 pt-4'>
                  <a target='_blank' href='https://www.linkedin.com/in/theritik-dubey/'><img className='rounded-xl h-10 hover:cursor-pointer' width={40} src={linkdinIcon} alt="" /></a>
                  <a target='_blank' href='https://github.com/TheRitikDubey'><img className='rounded-xl h-10 hover:cursor-pointer' width={40} src={githubIcon} alt="" /></a>
                  <a target='_blank' href='https://www.instagram.com/the_ritik__dubey/?hl=en'><img className='rounded-xl h-10 hover:cursor-pointer' width={40} src={instagram} alt="" /></a>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-gray-800 w-40 h-40 rounded-full flex items-center justify-center">
                <div className="text-blue-500 text-4xl font-mono">&lt;/&gt;</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  )
}

export default HeroSection