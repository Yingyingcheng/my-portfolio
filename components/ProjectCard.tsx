"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { SiGithub } from "react-icons/si";

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  image: string;
  link?: string;
  demo?: string;
  git?: string;
  company?: string;
  /** Short muted clip that plays over the poster on hover. */
  video?: string;
  /** Letterbox color behind the hover clip. */
  videoBg?: string;
  /** "contain" letterboxes wide screenshots instead of cropping them. */
  imageFit?: "cover" | "contain";
  /** Letterbox color used with imageFit: "contain". */
  imageBg?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

const card: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const tagList: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const tag: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease } },
};

const buttonClass =
  "text-[12px] bg-btn text-btn-text px-4 py-3 font-bold uppercase tracking-widest hover:bg-btn-hover hover:text-btn-hover-text transition-all duration-300";

export default function ProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    videoRef.current?.play().catch(() => {});
  };
  const stopVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <motion.article
      variants={card}
      initial={reduceMotion ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      onMouseEnter={project.video ? playVideo : undefined}
      onMouseLeave={project.video ? stopVideo : undefined}
      className="group text-center flex flex-col items-center justify-center p-6 bg-card"
    >
      <motion.div
        variants={item}
        className="w-full mb-6 flex items-center justify-center transition-transform duration-700 group-hover:scale-95"
      >
        <div className="w-full bg-white p-2 border-2 border-dashed border-sage group-hover:border-blue-300 shadow-[0_12px_30px_-10px_rgba(141,163,153,0.6)] transition-colors duration-500">
          <div className="relative w-full aspect-1728/1526 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={1728}
              height={1526}
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`w-full h-full ${
                project.imageFit === "contain"
                  ? "object-contain"
                  : "object-cover"
              }`}
              style={
                project.imageFit === "contain" && project.imageBg
                  ? { backgroundColor: project.imageBg }
                  : undefined
              }
            />
            {project.video && (
              <video
                ref={videoRef}
                src={project.video}
                muted
                loop
                playsInline
                preload="none"
                aria-hidden="true"
                tabIndex={-1}
                style={{ backgroundColor: project.videoBg }}
                className="absolute inset-0 h-full w-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            )}
          </div>
        </div>
      </motion.div>

      {project.company && (
        <motion.span
          variants={item}
          className="mb-3 text-[11px] font-bold uppercase tracking-widest bg-sage text-white px-2 py-1"
        >
          Shipped at {project.company}
        </motion.span>
      )}
      <motion.h3
        variants={item}
        className="font-medium text-3xl uppercase mb-6 text-sage group-hover:scale-90 transition-all duration-500"
      >
        {project.title}
      </motion.h3>
      <motion.div
        variants={item}
        className="font-bold text-sm uppercase tracking-[0.2em] text-sage pb-2"
      >
        {project.subtitle}
      </motion.div>

      <motion.div
        variants={tagList}
        className="flex flex-wrap justify-center gap-2 pb-5"
      >
        {project.stack.map((tech) => (
          <motion.span
            key={tech}
            variants={tag}
            className="text-[11px] font-bold uppercase tracking-widest bg-orange-300 hover:bg-orange-500 text-white transition-all duration-300 px-2 py-1"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      <motion.p
        variants={item}
        className="pb-5 text-center text-base leading-relaxed text-gray-500 font-medium max-w-md whitespace-pre-line"
      >
        {project.description}
      </motion.p>

      <motion.div variants={item} className="flex gap-2 mt-auto">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            Website
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            Demo
          </a>
        )}
        {project.git && (
          <a
            href={project.git}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 ${buttonClass}`}
          >
            <SiGithub className="text-sm" />
            GitHub
          </a>
        )}
      </motion.div>
    </motion.article>
  );
}
