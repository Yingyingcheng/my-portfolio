import Image from "next/image";
import { SiGithub } from "react-icons/si";
import Reveal from "./Reveal";
const projects = [
  {
    title: "Foodie Diary",
    subtitle: "AI Calories tracking app",
    tag: "Mobile App",
    description: "Upload your foodie picture here\nLet AI calculate your meals",
    stack: ["React", "TypeScript", "Gemini API", "Material UI"],
    image: "/foodie-diary.png",
    link: "https://foodiediary.vercel.app",
    git: "https://github.com/Yingyingcheng/Foodie-Diary",
  },

  {
    title: "Y2K Flying Banana",
    subtitle: "3D Flying Banana Bot",
    tag: "Mobile App",
    description: "Share your day in retro 3D universe",
    stack: ["Next.js", "TypeScript", "Three.js", "OpenAI API"],
    image: "/FlyingBanana.png",
    link: "https://y2k-flying-bananas.vercel.app/",
    git: "https://github.com/Yingyingcheng/y2k-flying-bananas",
  },
  {
    title: "Doris Cheng",
    subtitle: "My Portfolio",
    tag: "Mobile & Web App",
    description: "Passionate at Web dev & design 🩵",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/DorisCheng.png",
    link: "https://dorischeng.vercel.app/",
    git: "https://github.com/Yingyingcheng/my-portfolio",
  },
  {
    title: "MBTI Personality Test",
    subtitle: "Take your MBTI Test",
    tag: "Mobile & Web App",
    description: "Discover Your Personality Type",
    stack: ["React", "Node.js", "Express", "MySQL", "JWT"],
    image: "/MBTI.png",
    link: "https://mbti-personality-test-one.vercel.app/",
    git: "https://github.com/Yingyingcheng/MBTI_Personality_Test",
  },
];

export default function Projects() {
  return (
    <>
      <section
        id="project"
        className="px-6 md:px-12 max-w-7xl mx-auto pt-16 pb-16 scroll-mt-24"
      >
        {/* 1. The Title - Centered above the grid */}
        <Reveal className="flex flex-col items-center mb-12">
          <h2 className="text-5xl md:text-6xl font-medium uppercase tracking-wider leading-[0.8] text-center">
            Projects
          </h2>
        </Reveal>

        <Reveal className="bg-[#8da399] hover:bg-amber-200 px-4 py-3 flex items-center relative ">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <h2 className="absolute inset-0 flex items-center justify-center font-bold tracking-widest text-amber-200  hover:text-[#8da399]">
            Projects.tsx
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 ">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={(index % 2) * 100}
              className=" group text-center flex flex-col items-center justify-center p-6 bg-amber-100"
            >
              <div className="w-full overflow-hidden mb-6 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1728}
                  height={1566}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="border-2 border-dashed border-[#8da399] hover:border-blue-300 max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-90"
                />
              </div>
              <div className="font-medium text-3xl uppercase mb-6 text-[#8da399] group-hover:scale-90 transition-all duration-500">
                {project.title}
              </div>
              <div className="font-bold text-sm uppercase tracking-[0.2em]  text-[#8da399] pb-2">
                {project.subtitle}
              </div>
              <span className="pb-5 text-center font-bold uppercase tracking-[0.2em] text-[10px]  text-[#8da399] whitespace-pre-line">
                {project.description}
              </span>
              <div className="flex flex-wrap justify-center gap-2 pb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-bold uppercase tracking-widest  hover:text-[#8da399] bg-orange-300  text-white  transition-all duration-300 px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] bg-[#8da399] text-white px-4 py-3 font-bold uppercase tracking-widest hover:bg-orange-600 transition-all duration-300"
                >
                  Website
                </a>
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-[10px] bg-[#8da399] text-white gap-2 px-4 py-3 font-bold uppercase tracking-widest hover:bg-orange-600 transition-all duration-300"
                >
                  <SiGithub className="text-sm" />
                  GitHub
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
