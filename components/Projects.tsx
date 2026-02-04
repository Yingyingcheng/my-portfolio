import Link from "next/link";
import { SiGithub } from "react-icons/si";
const projects = [
  {
    title: "Foodie Diary",
    subtitle: "AI Calories tracking app",
    tag: "Mobile App",
    description:
      "Upload your foodie picture here!\nLet AI calculates your meals.",
    image: "/foodie-diary.png",
    link: "https://foodiediary.vercel.app",
    git: "https://github.com/Yingyingcheng/Foodie-Diary",
  },
  {
    title: "Foodie Diary",
    subtitle: "AI Calories tracking app",
    tag: "Mobile App",
    description: "Upload your foodie picture here!",
    image: "/foodie-diary.png",
    link: "https://foodiediary.vercel.app/",
    git: "https://github.com/Yingyingcheng/Foodie-Diary",
  },
  {
    title: "MBTI Personality Test",
    tag: "Mobile App",
    description: "AI Calories tracking app",
    image: "/foodie-diary.png",
    link: "https://foodiediary.vercel.app/",
    git: "https://github.com/Yingyingcheng/Foodie-Diary",
  },
  {
    title: "MBTI Personality Test",
    tag: "Mobile App",
    description: "AI Calories tracking app",
    image: "/foodie-diary.png",
    link: "https://foodiediary.vercel.app/",
    git: "https://github.com/Yingyingcheng/Foodie-Diary",
  },
];

export default function Projects() {
  return (
    <>
      <section
        id="proejct"
        className="px-6 md:px-12 max-w-7xl mx-auto pt-16 pb-16"
      >
        {/* 1. The Title - Centered above the grid */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-5xl md:text-6xl font-medium uppercase tracking-wider leading-[0.8] text-center">
            Projects
          </h2>
        </div>

        <div className="bg-[#8da399] hover:bg-amber-200 px-4 py-3 flex items-center relative ">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <h2 className="absolute inset-0 flex items-center justify-center font-bold tracking-widest text-amber-200  hover:text-[#8da399]">
            Projects.tsx
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" group text-center flex flex-col items-center justify-center p-6 transition-all duration-500 bg-amber-100"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="pb-5 w-full h-full object-cover transition-transform duration-700 group-hover:scale-90"
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
              <div className="flex gap-2 mt-auto">
                <Link
                  href={project.link}
                  className="text-[10px] bg-[#8da399] text-white px-4 py-3 font-bold uppercase tracking-widest hover:bg-orange-600 transition-all duration-300"
                >
                  Website
                </Link>
                <Link
                  href={project.git}
                  className="flex items-center justify-center text-[10px] bg-[#8da399] text-white gap-2 px-4 py-3 font-bold uppercase tracking-widest hover:bg-orange-600 transition-all duration-300"
                >
                  <SiGithub className="text-sm" />
                  GitHub
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
