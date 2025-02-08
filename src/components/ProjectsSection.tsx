import { ThreeDCardDemo } from "./ui/ThreeDCardDemo";
import SNimg from "../assets/SNImg.png"; //snimg is study notion image
import PortfolioImg from "../assets/DevProfile.png";
import EcomImg from "../assets/EcomImg.png";
const ProjectsSection = () => {
  const ProjectData = [
    {
      title: "StudyNotion Edtech",
      description:
        "Developed a full-stack web application using the MERN stack with Tailwind CSS for a responsive and modern user interface.Implemented secure authentication and authorization with end-to-end encryption using JWT.",
      image: SNimg,
      link: "https://study-notion-edtech-fe.vercel.app/",
      github: "https://github.com/TheRitikDubey/StudyNotionEdtech",
    },
    {
      title: "Modern Protfolio",
      description:
        "Built a responsive frontend project using TypeScript, Tailwind CSS, and AcernityUI, with backend integration via Express.js for seamless API communication.",
      image: PortfolioImg,
      link: "https://ritik-portfolio-psi.vercel.app/",
      github: "https://github.com/TheRitikDubey/PortfolioDev",
    },
    {
      title: "Ecommerce Website",
      description:
        "Developed a full-stack web app with authentication (JWT and Google Sign-In via Firebase) and authorization, featuring end-to-end encryption. Built a responsive frontend with React.js and Tailwind CSS, and a backend with Node.js, Express, and MongoDB.",
      image: EcomImg,
      link: "",
      github: "",
    },
  ];
  return (
    <div>
      <div className="text-center -mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Project Experience</h2>
        <div className="mt-2 w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>
    <div className="flex flex-col md:flex-row gap-2 justify-evenly items-center">
    {ProjectData.map((project, index) => {
        return (
        <div key={index}>
            <ThreeDCardDemo
                titile={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                github={project.github}/>
        </div>
        );
    })}
    </div>

    </div>
  );
};

export default ProjectsSection;
