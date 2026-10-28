"use client";
import Image from "next/image";
import { useState } from "react";
import { projects } from "@/lib/projects";

const clips = projects.filter((project) => project.video);

export default function NowPlaying() {
  const [index, setIndex] = useState(0);
  const clip = clips[index];
  const next = () => setIndex((current) => (current + 1) % clips.length);

  return (
    <>
      <div className="relative aspect-video bg-black overflow-hidden">
        <Image
          src={clip.image}
          alt={`${clip.title}, a party game Doris shipped at Party Monster Games`}
          fill
          loading="eager"
          sizes="(min-width: 1024px) 340px, 100vw"
          className="object-cover"
        />
        <video
          key={clip.video}
          src={clip.video}
          autoPlay
          muted
          playsInline
          onEnded={next}
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
        />
      </div>
      <div className="flex items-center justify-between gap-3 px-3 py-2 border-t-2 border-ink font-mono text-[11px] text-muted">
        <span className="flex items-center gap-2 min-w-0">
          <span
            aria-hidden="true"
            className="shrink-0 w-2 h-2 rounded-full bg-[#27C93F]"
          />
          <span className="truncate">{clip.title} · Fire TV</span>
        </span>
        <span className="flex shrink-0 items-center gap-3 font-bold text-heading">
          <button
            type="button"
            onClick={next}
            className="hover:text-accent transition-colors cursor-pointer"
          >
            next ▸
          </button>
          <a
            href={clip.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            play ↗
          </a>
        </span>
      </div>
    </>
  );
}
