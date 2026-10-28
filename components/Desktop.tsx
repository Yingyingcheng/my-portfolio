"use client";
import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type ReactNode,
} from "react";
import { AnimatePresence, MotionConfig } from "motion/react";
import DesktopWindow, { type WindowSpec } from "./DesktopWindow";
import {
  IconFace,
  IconLabel,
  glyphClass,
  iconClass,
  type Face,
} from "./DesktopIcon";
import NowPlaying from "./NowPlaying";
import ProjectDetail from "./ProjectDetail";
import ExperienceLog from "./Experience";
import SkillsGrid from "./Skills";
import BookList from "./Books";
import Dock, { AppTile, apps } from "./Dock";
import NewMessage from "./Mail";
import MapView from "./Maps";
import Playlist from "./Music";
import TerminalApp from "./Terminal";
import { projects, type Project } from "@/lib/projects";

const projectKey = (id: string) => `project:${id}`;

const games = projects.filter((project) => project.company);
const sideProjects = projects.filter((project) => !project.company);

// On large screens About Me sits in the middle of the desktop. Games and
// Gameplay are centered in the strip to its left, 1.5rem clear of its edge
// and the screen's, and the desktop icons sit 1.5rem in from the right edge.
const middleWidth = "min(460px, 36%)";
const strip = (max: number) => `min(${max}px, 50% - ${middleWidth} / 2 - 3rem)`;
const leftStripCenter = `calc(25% - ${middleWidth} / 4)`;

const aboutWindow: WindowSpec = {
  key: "about",
  title: "About Me.txt",
  face: "about",
  x: "50%",
  y: "50%",
  w: middleWidth,
  centered: "xy",
  pinned: true,
};

const gamesWindow: WindowSpec = {
  key: "games",
  title: "Games.tsx",
  face: "games",
  x: leftStripCenter,
  y: "1.5rem",
  w: strip(400),
  centered: "x",
  pinned: true,
};

// Gap between Gameplay and the bottom of the screen
const playerBottom = "5rem";

// On short screens the video narrows so the window stays 1.5rem clear of Games
// above it; the 28rem covers the navbar, Games, that gap and the window's own
// title and status bars.
const playerWidth = `min(${strip(340)}, (100svh - 28rem - ${playerBottom}) * 16 / 9)`;

const playerWindow: WindowSpec = {
  key: "player",
  title: "Gameplay.mp4",
  face: "player",
  x: leftStripCenter,
  y: playerBottom,
  w: playerWidth,
  centered: "x",
  fromBottom: true,
  pinned: true,
};

const barTileClass = "w-6 h-6 outline-[1.5px] outline-white/70";

// Windows opened from the icons and the dock appear centered in the space
// between 1.5rem below the navbar and 6rem above the bottom edge.
const centerPosition = {
  x: "50%",
  y: "calc(50% - 2.25rem)",
  centered: "xy",
} as const;

const appWindows: WindowSpec[] = [
  {
    key: "projects",
    title: "Projects",
    face: "projects",
    w: "520px",
    ...centerPosition,
  },
  {
    key: "experience",
    title: "Experience.log",
    face: "experience",
    w: "640px",
    ...centerPosition,
  },
  {
    key: "skills",
    title: "Skills.tsx",
    face: "skills",
    w: "600px",
    ...centerPosition,
  },
  {
    key: "books",
    title: "Books.tsx",
    face: "books",
    w: "520px",
    ...centerPosition,
  },
  {
    key: "mail",
    title: "New Message",
    icon: <AppTile app={apps.mail} small className={barTileClass} />,
    w: "480px",
    ...centerPosition,
  },
  {
    key: "maps",
    title: "Maps",
    icon: <AppTile app={apps.maps} small className={barTileClass} />,
    w: "560px",
    ...centerPosition,
  },
  {
    key: "music",
    title: "Music",
    icon: <AppTile app={apps.music} small className={barTileClass} />,
    w: "400px",
    ...centerPosition,
  },
  {
    key: "terminal",
    title: "Terminal",
    icon: <AppTile app={apps.terminal} small className={barTileClass} />,
    w: "620px",
    ...centerPosition,
  },
  ...projects.map((project) => ({
    key: projectKey(project.id),
    title: project.title,
    w: "560px",
    ...centerPosition,
  })),
];

const pinnedKeys = new Set(
  [aboutWindow, gamesWindow, playerWindow].map((spec) => spec.key),
);

// Fills the first column top to bottom, then the second.
const icons: { label: string; face: Face; opens?: string; href?: string }[] = [
  { label: "About Me.txt", face: "about", opens: "about" },
  { label: "Skills.tsx", face: "skills", opens: "skills" },
  { label: "Experience.log", face: "experience", opens: "experience" },
  { label: "Resume.pdf", face: "resume", href: "/resume.pdf" },
  { label: "Projects", face: "projects", opens: "projects" },
  { label: "Books.tsx", face: "books", opens: "books" },
  { label: "Games.tsx", face: "games", opens: "games" },
  { label: "Gameplay.mp4", face: "player", opens: "player" },
];

const desktopQuery = "(min-width: 1024px)";

function subscribeToDesktop(onChange: () => void) {
  const media = window.matchMedia(desktopQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function useIsDesktop() {
  return useSyncExternalStore(
    subscribeToDesktop,
    () => window.matchMedia(desktopQuery).matches,
    () => false,
  );
}

function AboutMe() {
  return (
    <div className="p-6 sm:p-8">
      <h1 className="font-medium text-2xl sm:text-3xl leading-[0.95] tracking-tighter">
        Software Designer
        <br />
        <span className="text-accent">&</span> Developer
      </h1>
      <p className="max-w-lg mt-5 text-base font-medium">
        Hi, I&apos;m Doris (Ying Ying) Cheng, and I love discovering the perfect
        harmony of color and space that makes a digital product feel alive.
      </p>
      <p className="max-w-lg mt-3 text-base font-medium">
        Oh, and my favorite thing is reading books with my ginger cat on weekend
        nights.
      </p>
    </div>
  );
}

function FileGrid({
  face,
  heading,
  items,
  onOpen,
  isOpen,
}: {
  face: Face;
  heading: string;
  items: Project[];
  onOpen: (key: string) => void;
  isOpen: (key: string) => boolean;
}) {
  return (
    <>
      <div className="flex items-center justify-between gap-3 px-4 py-2 border-b-2 border-line/20 font-mono text-[11px] text-muted">
        <span>{heading}</span>
        <span>{items.length} items</span>
      </div>
      <ul className="grid grid-cols-2 gap-x-3 gap-y-6 p-5">
        {items.map((project) => (
          <li key={project.id}>
            <button
              type="button"
              onClick={() => onOpen(projectKey(project.id))}
              className={`w-full ${iconClass}`}
            >
              <span className="block w-full aspect-1024/904 overflow-hidden bg-white shadow-[0_2px_8px_rgb(29_36_51/0.18)] transition-transform duration-300 group-hover:-translate-y-1">
                <Image
                  src={project.image}
                  alt=""
                  width={240}
                  height={212}
                  loading="eager"
                  className="w-full h-full object-cover object-top"
                />
              </span>
              <IconLabel face={face} selected={isOpen(projectKey(project.id))}>
                {project.title}
              </IconLabel>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Desktop() {
  const boundsRef = useRef<HTMLElement>(null);
  const isDesktop = useIsDesktop();
  const [stack, setStack] = useState<string[]>([
    gamesWindow.key,
    playerWindow.key,
    aboutWindow.key,
  ]);

  const open = (key: string) =>
    setStack((current) =>
      current[current.length - 1] === key
        ? current
        : [...current.filter((openKey) => openKey !== key), key],
    );
  const close = (key: string) =>
    setStack((current) => current.filter((openKey) => openKey !== key));
  const isOpen = (key: string) => stack.includes(key);

  const openFromIcon = (key: string) => {
    open(key);
    if (!isDesktop && pinnedKeys.has(key)) {
      requestAnimationFrame(() =>
        document
          .getElementById(`window-${key}`)
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    }
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setStack((current) => {
        const top = current.findLast((key) => !pinnedKeys.has(key));
        return top ? current.filter((key) => key !== top) : current;
      });
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const content = (key: string): ReactNode => {
    switch (key) {
      case "games":
        return (
          <FileGrid
            face="games"
            heading="Party Monster Games"
            items={games}
            onOpen={open}
            isOpen={isOpen}
          />
        );
      case "projects":
        return (
          <FileGrid
            face="projects"
            heading="~/Desktop/Projects"
            items={sideProjects}
            onOpen={open}
            isOpen={isOpen}
          />
        );
      case "experience":
        return <ExperienceLog />;
      case "skills":
        return <SkillsGrid />;
      case "books":
        return <BookList />;
      case "mail":
        return <NewMessage />;
      case "maps":
        return <MapView />;
      case "music":
        return <Playlist />;
      case "terminal":
        return <TerminalApp onOpen={open} />;
      default: {
        const project = projects.find((p) => projectKey(p.id) === key);
        return project ? <ProjectDetail project={project} /> : null;
      }
    }
  };

  const renderWindow = (spec: WindowSpec, children: ReactNode) => (
    <AnimatePresence key={spec.key}>
      {isOpen(spec.key) && (
        <DesktopWindow
          spec={spec}
          z={10 + stack.indexOf(spec.key)}
          draggable={isDesktop}
          bounds={boundsRef}
          onFocus={() => open(spec.key)}
          onClose={() => close(spec.key)}
        >
          {children}
        </DesktopWindow>
      )}
    </AnimatePresence>
  );

  return (
    <MotionConfig reducedMotion="user">
      <section
        ref={boundsRef}
        className="relative flex-1 flex flex-col gap-10 px-5 pt-6 pb-12 sm:px-8 lg:block lg:p-0"
      >
        {renderWindow(aboutWindow, <AboutMe />)}

        <nav
          aria-label="Desktop"
          style={{ "--middle": middleWidth } as CSSProperties}
          className="grid grid-cols-4 gap-x-2 gap-y-6 lg:absolute lg:inset-y-6 lg:right-6 lg:left-[calc(50%_+_var(--middle)_/_2)] lg:grid-cols-none lg:grid-flow-col lg:auto-cols-[6.5rem] lg:grid-rows-[repeat(4,6rem)] lg:content-center lg:justify-end lg:gap-x-1 lg:gap-y-0 motion-safe:animate-rise [animation-delay:300ms]"
        >
          {icons.map((icon) => {
            const body = (
              <>
                <span className={glyphClass}>
                  <IconFace
                    face={icon.face}
                    className="w-16 h-16 outline-2 outline-line shadow-[3px_3px_0_color-mix(in_oklab,var(--color-line)_30%,transparent)]"
                  />
                </span>
                <IconLabel
                  face={icon.face}
                  selected={!!icon.opens && isOpen(icon.opens)}
                >
                  {icon.label}
                </IconLabel>
              </>
            );
            const className = `${iconClass} lg:justify-start`;
            return icon.href ? (
              <a
                key={icon.label}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {body}
              </a>
            ) : (
              <button
                key={icon.label}
                type="button"
                onClick={() => icon.opens && openFromIcon(icon.opens)}
                className={className}
              >
                {body}
              </button>
            );
          })}
        </nav>

        {renderWindow(gamesWindow, content(gamesWindow.key))}

        {renderWindow(playerWindow, <NowPlaying />)}

        {appWindows.map((spec) => renderWindow(spec, content(spec.key)))}

        <Dock onOpen={open} isOpen={isOpen} />

        <p className="font-file text-[10px] uppercase tracking-[0.2em] text-center text-ink/60 lg:hidden">
          © 2026 Doris Cheng — Made With 🩵
        </p>
      </section>
    </MotionConfig>
  );
}
