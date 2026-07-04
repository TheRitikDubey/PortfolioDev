import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Link } from "react-scroll";
import githubIcon from "../assets/GitHubIcon.png";
import linkdinIcon from "../assets/LinkedInIcon.png";
import instagram from "../assets/instagram-icon.png";
import { Button } from "./ui/moving-border";
import { HeroHighlight } from "./ui/hero-highlight";
import RitikAvatar from "../assets/RitikAvatar.png";
import twitterIcon from "../assets/twitterIcon.png";

const titles = [
  "Senior Full Stack Developer",
  "AI-Powered Backend Systems",
  "Building at 100K+ User Scale",
];

const socials = [
  { href: "https://www.linkedin.com/in/theritik-dubey/", icon: linkdinIcon, alt: "LinkedIn" },
  { href: "https://github.com/TheRitikDubey", icon: githubIcon, alt: "GitHub" },
  { href: "https://x.com/The_RitikDubey", icon: twitterIcon, alt: "X (Twitter)" },
  { href: "https://www.instagram.com/the_ritikdubey/", icon: instagram, alt: "Instagram" },
];

const floatingChips = [
  { label: "Node.js", className: "-left-6 top-8", delay: 0 },
  { label: "React", className: "-right-4 top-24", delay: 0.8 },
  { label: "GCP", className: "-left-8 bottom-24", delay: 1.6 },
  { label: "AI / RAG", className: "-right-6 bottom-10", delay: 2.4 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

const TiltAvatar = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1000 }} className="relative">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-[270px] h-[330px]"
      >
        {/* Gradient glow behind the card */}
        <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-br from-blue-500 via-violet-500 to-rose-500 opacity-60 blur-lg" />
        {/* Avatar card */}
        <div className="relative h-full w-full rounded-3xl border border-gray-700 bg-gray-800 overflow-hidden">
          <img
            src={RitikAvatar}
            alt="Ritik Dubey"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-900/90 to-transparent" />
          {/* Open-to-work pill */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gray-900/80 backdrop-blur border border-gray-700 rounded-full px-3.5 py-1.5 whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs text-gray-200 font-medium">Open to Senior Roles</span>
          </div>
        </div>
        {/* Floating tech chips */}
        {floatingChips.map((chip) => (
          <motion.div
            key={chip.label}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: chip.delay,
            }}
            style={{ transform: "translateZ(40px)" }}
            className={`absolute ${chip.className} bg-gray-800/90 backdrop-blur border border-gray-600/60 text-gray-200 text-xs font-medium rounded-full px-3 py-1.5 shadow-lg shadow-black/30`}
          >
            {chip.label}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const HeroSection = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const ResumeUrl =
    "https://drive.google.com/file/d/1nmQrOWdco7ajOy2R0OSWpcQ__v-KNJMO/view?usp=sharing";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeroHighlight containerClassName="min-h-[34rem] md:min-h-[36rem] lg:min-h-[32rem] bg-gray-900">
      <div className="max-w-5xl mx-auto w-full px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left — intro */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-blue-400 font-medium mb-2"
            >
              👋 Hey there, I'm
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-white text-5xl md:text-6xl font-bold"
            >
              Ritik <span className="text-blue-500">Dubey</span>
            </motion.h1>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="h-9 mt-4"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text"
                >
                  {titles[currentTitleIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-gray-400 max-w-xl mt-3"
            >
              3+ years of experience building AI-powered, production-scale
              backend systems and web platforms — currently leading a 10+
              engineer team shipping enterprise products on GCP at Techolution.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-6"
            >
              <Link
                to="ContactUs"
                smooth={true}
                duration={1500}
                className="bg-blue-600 hover:bg-blue-500 hover:cursor-pointer text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
              >
                Hire Me
              </Link>
              <Link
                to="work"
                smooth={true}
                duration={800}
                className="border border-gray-600 hover:border-gray-400 hover:cursor-pointer text-gray-300 hover:text-white px-6 py-2.5 rounded-lg transition-colors"
              >
                View Work
              </Link>
              <a target="_blank" href={ResumeUrl}>
                <Button containerClassName="h-11 w-32">Resume</Button>
              </a>
            </motion.div>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center lg:justify-start gap-4 mt-6"
            >
              {socials.map((social) => (
                <a
                  key={social.alt}
                  target="_blank"
                  href={social.href}
                  className="hover:-translate-y-1 transition-transform duration-200"
                >
                  <img
                    className="rounded-xl h-10 w-10 hover:cursor-pointer"
                    src={social.icon}
                    alt={social.alt}
                  />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — interactive avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="hidden md:block shrink-0 lg:mr-6"
          >
            <TiltAvatar />
          </motion.div>
        </div>
      </div>
    </HeroHighlight>
  );
};

export default HeroSection;
