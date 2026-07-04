import { useEffect, useState } from "react";
// import { MacbookScrollDemo } from './macbookScroll'
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import githubIcon from "../assets/GitHubIcon.png";
import linkdinIcon from "../assets/LinkedInIcon.png";
import instagram from "../assets/instagram-icon.png";
import { Button } from "./ui/moving-border";
import RitikAvatar from "../assets/RitikAvatar.png";
import twitterIcon from "../assets/twitterIcon.png";

const titles = [
  "Senior Full Stack Developer",
  "AI-Powered Backend Systems",
  "Building at 100K+ User Scale",
];

const HeroSection = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const ResumeUrl =
    "https://drive.google.com/file/d/1nmQrOWdco7ajOy2R0OSWpcQ__v-KNJMO/view?usp=sharing";
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change the title every 3 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="">
      <BackgroundBeamsWithCollision>
        <div className="bg-gray-900 mt-4 h-full w-full flex items-center p-8">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-baseline">
                <div className="flex flex-col items-baseline">
                  <h1 className="text-white mt-4 text-5xl font-bold">
                    Hi, I'm <span className="text-blue-500">Ritik Dubey</span>
                  </h1>
                  <div
                    className="lg:mx-0 lg:mb-0 h-[4rem] mx-auto"
                    style={{ textAlign: "center", marginTop: "20px" }}
                  >
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
                <div className="flex flex-col lg:mt-0 mt-4 items-baseline">
                  <p className="text-gray-400 max-w-xl text-center lg:text-left text-wrap">
                    Senior Full Stack Developer with 3+ years of experience
                    building AI-powered, production-scale backend systems and
                    web platforms — currently leading a 10+ engineer team
                    shipping enterprise products on GCP at Techolution.
                  </p>

                  <div className="flex mx-auto lg:mx-0 gap-4 pt-4">
                    <Link
                      className="border border-gray-600 hover:cursor-pointer text-gray-300 px-6 py-2 rounded-md hover:border-gray-500 hover:text-gray-200 transition-colors"
                      to="ContactUs"
                      smooth={true}
                      duration={1500}
                    >
                      Hire Me
                    </Link>
                    <Link
                      className="border border-gray-600 hover:cursor-pointer text-gray-300 px-6 py-2 rounded-md hover:border-gray-500 hover:text-gray-200 transition-colors"
                      to="work"
                      smooth={true}
                      duration={800}
                    >
                      View Work
                    </Link>
                  </div>
                  <div className="pt-4 w-full flex items-center justify-center lg:justify-start">
                    <a
                      target="_blank"
                      href={ResumeUrl}
                      className="lg:w-0 w-full"
                    >
                      <Button className="">Resume</Button>
                    </a>
                  </div>
                  <div className="flex items-center justify-center mx-auto lg:mx-0 gap-4 pt-4">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/theritik-dubey/"
                    >
                      <img
                        className="rounded-xl h-10 hover:cursor-pointer"
                        width={40}
                        src={linkdinIcon}
                        alt=""
                      />
                    </a>
                    <a target="_blank" href="https://github.com/TheRitikDubey">
                      <img
                        className="rounded-xl h-10 hover:cursor-pointer"
                        width={40}
                        src={githubIcon}
                        alt=""
                      />
                    </a>
                    <a target="_blank" href="https://x.com/The_RitikDubey">
                      <img
                        className="rounded-xl h-10 hover:cursor-pointer"
                        width={40}
                        src={twitterIcon}
                        alt=""
                      />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/the_ritikdubey/"
                    >
                      <img
                        className="rounded-xl h-10 hover:cursor-pointer"
                        width={40}
                        src={instagram}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="bg-gray-800 [clip-path:circle(50%_at_60%_4%)] w-[280px] h-[160px] flex items-center justify-center">
                  <img
                    src={RitikAvatar}
                    alt="Ritik Dubey"
                    className="w-[340px] h-[440px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default HeroSection;
