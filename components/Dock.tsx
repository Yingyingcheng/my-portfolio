"use client";
import { Fragment, type ComponentType, type SVGProps } from "react";
import { BookOpen } from "pixelarticons/react/BookOpen.js";
import { Github } from "pixelarticons/react/Github.js";
import { Heart } from "pixelarticons/react/Heart.js";
import { Linkedin } from "pixelarticons/react/Linkedin.js";
import { Mail } from "pixelarticons/react/Mail.js";
import { MapPin } from "pixelarticons/react/MapPin.js";
import { Music } from "pixelarticons/react/Music.js";
import { RobotFaceHappy } from "pixelarticons/react/RobotFaceHappy.js";
import { Terminal } from "pixelarticons/react/Terminal.js";
import { projects } from "@/lib/projects";

type DockApp = {
  label: string;
  Glyph: ComponentType<SVGProps<SVGSVGElement>>;
  tone: string;
  ink?: string;
  /** Desktop window to open; apps without one link out to `href` */
  opens?: string;
  href?: string;
  /** The navbar carries this link on small screens */
  desktopOnly?: boolean;
};

const projectLink = (id: string) =>
  projects.find((project) => project.id === id)?.link;

export const apps = {
  mail: { label: "Mail", Glyph: Mail, tone: "#cfe3f6", opens: "mail" },
  linkedin: {
    label: "LinkedIn",
    Glyph: Linkedin,
    tone: "#a5c6ee",
    href: "https://www.linkedin.com/in/yingying-cheng/",
    desktopOnly: true,
  },
  github: {
    label: "GitHub",
    Glyph: Github,
    tone: "#fff8f1",
    href: "https://github.com/Yingyingcheng",
    desktopOnly: true,
  },
  maps: { label: "Maps", Glyph: MapPin, tone: "#bfe3c9", opens: "maps" },
  music: { label: "Music", Glyph: Music, tone: "#d9c8f0", opens: "music" },
  books: { label: "Books", Glyph: BookOpen, tone: "#f6c4cc", opens: "books" },
  foodie: {
    label: "Foodie Diary",
    Glyph: Heart,
    tone: "#f0714f",
    href: projectLink("foodie-diary"),
  },
  banana: {
    label: "Flying Banana",
    Glyph: RobotFaceHappy,
    tone: "#ffd969",
    href: projectLink("y2k-flying-banana"),
  },
  terminal: {
    label: "Terminal",
    Glyph: Terminal,
    tone: "#1d2433",
    ink: "#bfe3c9",
    opens: "terminal",
  },
} satisfies Record<string, DockApp>;

const groups: (keyof typeof apps)[][] = [
  ["mail", "linkedin", "github"],
  ["maps", "music", "books"],
  ["foodie", "banana", "terminal"],
];

// The glyphs are drawn on a 2px grid at 24px, so keep them at 24px or 12px for
// even pixels.
export function AppTile({
  app,
  small = false,
  className = "",
}: {
  app: DockApp;
  small?: boolean;
  className?: string;
}) {
  const { Glyph, tone, ink = "var(--color-ink)" } = app;
  return (
    <span
      style={{ background: tone, color: ink }}
      className={`grid place-items-center shrink-0 ${className}`}
    >
      <Glyph
        shapeRendering="crispEdges"
        className={small ? "w-3 h-3" : "w-6 h-6"}
      />
    </span>
  );
}

export default function Dock({
  onOpen,
  isOpen,
}: {
  onOpen: (key: string) => void;
  isOpen: (key: string) => boolean;
}) {
  return (
    <nav
      aria-label="Dock"
      className="flex flex-wrap items-end justify-center gap-1.5 self-center px-3 pt-2.5 pb-1 bg-surface/75 backdrop-blur-md border-2 border-line shadow-[6px_6px_0_color-mix(in_oklab,var(--color-line)_30%,transparent)] lg:absolute lg:z-50 lg:bottom-3 lg:left-1/2 lg:-translate-x-1/2 lg:flex-nowrap xl:gap-2 motion-safe:animate-rise [animation-delay:400ms]"
    >
      {groups.map((group, index) => (
        <Fragment key={group[0]}>
          {index > 0 && (
            <span
              aria-hidden="true"
              className="self-stretch w-0.5 mb-2 bg-line/30"
            />
          )}
          {group.map((key) => {
            const app: DockApp = apps[key];
            const running = !!app.opens && isOpen(app.opens);
            const body = (
              <>
                <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap px-2 py-0.5 bg-ink font-file text-[11px] text-surface opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  {app.label}
                </span>
                <AppTile
                  app={app}
                  className="w-9 h-9 outline-2 outline-line shadow-[2px_2px_0_color-mix(in_oklab,var(--color-line)_30%,transparent)] transition-transform duration-200 group-hover:-translate-y-1.5 xl:w-10 xl:h-10"
                />
                <span
                  aria-hidden="true"
                  className={`w-1 h-1 mt-1.5 rounded-full ${running ? "bg-ink" : ""}`}
                />
              </>
            );
            const className = `group relative flex flex-col items-center outline-none cursor-pointer ${
              app.desktopOnly ? "max-lg:hidden" : ""
            }`;
            return app.href ? (
              <a
                key={key}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${app.label} (opens in a new tab)`}
                className={className}
              >
                {body}
              </a>
            ) : (
              <button
                key={key}
                type="button"
                onClick={() => app.opens && onOpen(app.opens)}
                aria-label={app.label}
                className={className}
              >
                {body}
              </button>
            );
          })}
        </Fragment>
      ))}
    </nav>
  );
}
