import Reveal from "./Reveal";
import ProjectCard, { type Project } from "./ProjectCard";

const sideProjects: Project[] = [
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

/** Professional work shown first; side projects follow. */
const shippedGames: Project[] = [
  {
    title: "Doodle Party",
    subtitle: "Dual-Screen Draw & Guess Party Game · Fire TV",
    description:
      "Players draw on their phones and guess on the TV. Built the 50ms stroke-batching pipeline that cut sync backlog 80–95% on Fire OS, and shipped subscription gating and server-side scoring.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Colyseus",
      "WebSockets",
      "Fire OS",
    ],
    image: "/doodle-party-title.jpg",
    video: "/doodle-party-loop.mp4",
    link: "https://partymonster.app/games/doodle-party",
    company: "Party Monster Games",
  },
  {
    title: "Emoji Party",
    subtitle: "Dual-Screen Emoji Puzzle Party Game · Fire TV",
    description:
      "Emoji reels spin on the TV and players race to type the answer on their phones. Built the real-time game room, server-side scoring, and subscription gating, and automated the Fire OS release pipeline.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Colyseus",
      "WebSockets",
      "Fire OS",
    ],
    image: "/emoji-party-title.jpg",
    video: "/emoji-party-loop.mp4",
    videoBg: "#000000",
    link: "https://partymonster.app/games/emoji-party",
    company: "Party Monster Games",
  },
];

const projects: Project[] = [...shippedGames, ...sideProjects];

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

        <Reveal className="group bg-bar hover:bg-bar-hover px-4 py-3 flex items-center relative transition-colors duration-300">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <h2 className="absolute inset-0 flex items-center justify-center font-bold tracking-widest text-butter group-hover:text-white">
            Projects.tsx
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
