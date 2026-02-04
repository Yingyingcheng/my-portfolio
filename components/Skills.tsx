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
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next", icon: <SiNextdotjs /> },
  { name: "Node", icon: <SiNodedotjs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-12 max-w-7xl mx-auto pt-16 pb-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6">
          <span className="text-[#8da399] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
            The Story
          </span>
          <h2 className="text-5xl md:text-6xl font-medium uppercase tracking-wider leading-[0.8] ">
            About
            <br />
            Me
          </h2>
          <p className="pt-5 text-lg md:text-xl mb-8 text-gray-700 font-medium">
            I'm Doris (Ying Ying) Cheng. A designer and developer loves to
            discove perfect harmony of color and space that makes a digital
            product feel alive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#8da399] uppercase tracking-widest text-xs leading-loose font-bold">
            <p>
              I specialize in building web applications using the modern stack
              to let the core message shine.
            </p>
            <p>
              I'm obsessed with the way humans interact with digital spaces.
            </p>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="bg-[#8da399] hover:bg-amber-200 px-4 py-3 flex items-center relative ">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
            </div>
            <h2 className="absolute inset-0 flex items-center justify-center font-bold tracking-widest text-amber-200  hover:text-[#8da399]">
              Skills.tsx
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-0">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-6 transition-all duration-500 bg-amber-100"
              >
                {/* Icon sizing and subtle color */}
                <div className="text-5xl mb-6 text-[#8da399] group-hover:text-orange-600 group-hover:scale-110 transition-all duration-500">
                  {skill.icon}
                </div>

                <span className="font-bold uppercase tracking-[0.2em] text-[10px] text-[#8da399] group-hover:text-orange-600 transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
