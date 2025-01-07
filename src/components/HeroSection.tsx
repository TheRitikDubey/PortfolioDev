import React, { useEffect, useState } from 'react'
import { MacbookScrollDemo } from './macbookScroll'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'
import { motion, AnimatePresence } from "framer-motion";
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
              <div style={{ textAlign: "center", marginTop: "20px" }}>
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
              <p className="text-gray-400 max-w-xl text-left text-wrap">
                With 1.5 years of experience building modern web applications and 
                scalable solutions.
              </p>
              
              <div className="flex gap-4 pt-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Hire Me
                </button>
                <button className="border border-gray-600 text-gray-300 px-6 py-2 rounded-md hover:border-gray-500 hover:text-gray-200 transition-colors">
                  View Work
                </button>
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
        <MacbookScrollDemo />
    </div>
  )
}

export default HeroSection