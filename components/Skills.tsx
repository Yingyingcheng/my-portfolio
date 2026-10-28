import Reveal from "./Reveal";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiTailwindcss,
  SiNextdotjs,
  SiThreedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next", icon: <SiNextdotjs /> },
  { name: "Three.js", icon: <SiThreedotjs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Node", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Docker", icon: <SiDocker /> },
];

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4">
      {skills.map((skill, index) => (
        <Reveal
          key={skill.name}
          delay={index * 40}
          className="group flex flex-col items-center justify-center px-3 py-6 ring-1 ring-inset ring-line/20"
        >
          <div className="text-4xl mb-4 text-line group-hover:text-accent group-hover:scale-110 transition-all duration-500">
            {skill.icon}
          </div>
          <span className="font-bold uppercase tracking-[0.2em] text-[10px] text-heading group-hover:text-accent transition-colors">
            {skill.name}
          </span>
        </Reveal>
      ))}
    </div>
  );
}
