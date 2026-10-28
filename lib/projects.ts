export type Project = {
  /** Stable key for the project's desktop window */
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  image: string;
  /** 16:9 screenshot for the project's window; falls back to `image` */
  poster?: string;
  link?: string;
  demo?: string;
  git?: string;
  company?: string;
  /** Muted gameplay loop, shown in the player and the project's window */
  video?: string;
};

export const projects: Project[] = [
  {
    id: "doodle-party",
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
    id: "emoji-party",
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
    link: "https://partymonster.app/games/emoji-party",
    company: "Party Monster Games",
  },
  {
    id: "foodie-diary",
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
    id: "y2k-flying-banana",
    title: "Y2K Flying Banana",
    subtitle: "Retro 3D AI Playground",
    description:
      "A Windows 98-style universe with a multilingual GPT chatbot, a spinning low-poly 3D hero built in React Three Fiber, a playable Snake game with 8-bit sound, and a built-in music player.",
    stack: ["Next.js", "TypeScript", "Three.js", "OpenAI API"],
    image: "/FlyingBanana.png",
    poster: "/posters/y2k-flying-banana.jpg",
    link: "https://y2k-flying-bananas.vercel.app/",
    git: "https://github.com/Yingyingcheng/y2k-flying-bananas",
  },
  {
    id: "nextstep-ai",
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
    id: "mbti-personality-test",
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
