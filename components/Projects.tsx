import Image from "next/image";
import { SiGithub } from "react-icons/si";
import Reveal from "./Reveal";
type Project = {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  image: string;
  link?: string;
  demo?: string;
  git: string;
};

const projects: Project[] = [
  {
    title: "Foodie Diary",
    subtitle: "AI Calorie Tracker",
    description:
      "Snap a photo of your meal and Gemini Vision estimates protein, fat, and carbs automatically. Includes a calorie-ring dashboard, macro goal setting, and a calendar view of your eating history.",
    stack: ["React", "TypeScript", "Gemini API", "Vercel Serverless"],
    image: "/foodie-diary.png",
    link: "https://foodiediary.vercel.app",
    git: "https://github.com/Yingyingcheng/Foodie-Diary",
  },
  {
    title: "Y2K Flying Banana",
    subtitle: "Retro 3D AI Playground",
    description:
      "A Windows 98-style universe with a multilingual GPT chatbot, a spinning low-poly 3D hero built in React Three Fiber, a playable Snake game with 8-bit sound, and a built-in music player.",
    stack: ["Next.js", "TypeScript", "Three.js", "OpenAI API"],
    image: "/FlyingBanana.png",
    link: "https://y2k-flying-bananas.vercel.app/",
    git: "https://github.com/Yingyingcheng/y2k-flying-bananas",
  },
  {
    title: "NextStep AI",
    subtitle: "AI Interview Prep Platform",
    description:
      "Full-stack interview coach that generates role-specific questions and AI-guided feedback with Gemini. Dockerized MERN stack, deployed on an IBM LinuxONE VM.",
    stack: ["React", "Express", "MongoDB", "Gemini API", "Docker"],
    image: "/NextStepAI.png",
    demo: "https://www.loom.com/share/6a74e1102f1d4e0791dbd3db3762dcae",
    git: "https://github.com/Yingyingcheng/NextStep-AI",
  },
  {
    title: "MBTI Personality Test",
    subtitle: "Full-Stack Personality Test",
    description:
      "Take the 16-type MBTI test with per-dimension scoring, then revisit past results in a personal dashboard. Features JWT authentication and MySQL-backed result history.",
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

        <Reveal className="bg-[#8da399] hover:bg-orange-600 px-4 py-3 flex items-center relative ">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <h2 className="absolute inset-0 flex items-center justify-center font-bold tracking-widest text-amber-200  hover:text-white">
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
              <div className="w-full mb-6 flex items-center justify-center transition-transform duration-700 group-hover:scale-95">
                <div className="w-full bg-white p-2 border-2 border-dashed border-[#8da399] group-hover:border-blue-300 shadow-[0_12px_30px_-10px_rgba(141,163,153,0.6)] transition-colors duration-500">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1728}
                    height={1526}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full aspect-1728/1526 object-cover"
                  />
                </div>
              </div>
              <div className="font-medium text-3xl uppercase mb-6 text-[#8da399] group-hover:scale-90 transition-all duration-500">
                {project.title}
              </div>
              <div className="font-bold text-sm uppercase tracking-[0.2em]  text-[#8da399] pb-2">
                {project.subtitle}
              </div>

              <div className="flex flex-wrap justify-center gap-2 pb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-bold uppercase tracking-widest   bg-orange-300 hover:bg-orange-500  text-white  transition-all duration-300 px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="pb-5 text-center text-base leading-relaxed text-gray-500 font-medium max-w-md whitespace-pre-line">
                {project.description}
              </p>

              <div className="flex gap-2 mt-auto">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] bg-[#8da399] text-white px-4 py-3 font-bold uppercase tracking-widest hover:bg-orange-600 transition-all duration-300"
                  >
                    Website
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] bg-[#8da399] text-white px-4 py-3 font-bold uppercase tracking-widest hover:bg-orange-600 transition-all duration-300"
                  >
                    Demo
                  </a>
                )}
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-[12px] bg-[#8da399] text-white gap-2 px-4 py-3 font-bold uppercase tracking-widest hover:bg-orange-600 transition-all duration-300"
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
