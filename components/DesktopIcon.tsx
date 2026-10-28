import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

export type Face =
  | "about"
  | "games"
  | "projects"
  | "experience"
  | "skills"
  | "books"
  | "resume"
  | "player";

export const iconClass =
  "group flex flex-col items-center gap-2 text-center outline-none cursor-pointer";

export const glyphClass =
  "flex items-end justify-center h-16 transition-transform duration-300 group-hover:-translate-y-1";

// Each tone matches the face's tile color in scripts/avatars.mjs.
const tones: Record<Face, string> = {
  about: "#ffd9b3",
  games: "#f0714f",
  projects: "#a5c6ee",
  experience: "#bfe3c9",
  skills: "#ffd969",
  books: "#f6c4cc",
  resume: "#cfe3f6",
  player: "#d9c8f0",
};

// The avatars are 16x16 pixel grids. Frame them with outlines: a border would
// shrink the image off its 16px multiple and make the pixels uneven.
export function IconFace({
  face,
  className = "w-16 h-16",
}: {
  face: Face;
  className?: string;
}) {
  return (
    <Image
      src={`/avatars/${face}.svg`}
      alt=""
      width={64}
      height={64}
      loading="eager"
      unoptimized
      className={`bg-surface [image-rendering:pixelated] ${className}`}
    />
  );
}

export function IconLabel({
  face,
  selected = false,
  children,
}: {
  face?: Face;
  selected?: boolean;
  children: ReactNode;
}) {
  const tone = face && {
    "--tone": tones[face],
    "--tone-text": "var(--color-ink)",
  };

  return (
    <span
      style={tone as CSSProperties | undefined}
      className={`px-1.5 py-0.5 whitespace-nowrap font-file text-[10px] sm:text-[11px] leading-tight transition-colors [--tone:var(--color-chrome)] [--tone-text:var(--color-chrome-text)] group-hover:bg-(--tone) group-hover:text-(--tone-text) group-focus-visible:bg-(--tone) group-focus-visible:text-(--tone-text) ${
        selected ? "bg-(--tone) text-(--tone-text)" : "bg-surface/90 text-ink"
      }`}
    >
      {children}
    </span>
  );
}
