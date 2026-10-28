import Image from "next/image";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/lib/projects";

const buttonClass =
  "inline-flex items-center gap-2 text-[12px] bg-btn text-btn-text px-4 py-2.5 font-bold uppercase tracking-widest hover:bg-btn-hover hover:text-btn-hover-text transition-colors duration-300";

function ProjectInfo({ project }: { project: Project }) {
  const links = [
    { href: project.link, label: "Website" },
    { href: project.demo, label: "Demo" },
    { href: project.git, label: "GitHub", github: true },
  ].filter((link) => link.href);

  return (
    <div className="p-6 flex flex-col items-center justify-center text-center">
      <h2 className="font-medium text-2xl uppercase leading-none text-heading">
        {project.title}
      </h2>
      <p className="mt-2 font-bold text-xs uppercase tracking-[0.2em] text-heading">
        {project.subtitle}
      </p>
      <ul className="flex flex-wrap justify-center gap-1.5 mt-4">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="text-[11px] font-bold uppercase tracking-widest bg-tag text-tag-text px-1.5 py-0.5"
          >
            {tech}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm leading-relaxed text-muted font-medium">
        {project.description}
      </p>
      <div className="flex flex-wrap justify-center gap-2 mt-5">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            {link.github && <SiGithub className="text-sm" />}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <article>
      <div className="relative aspect-video overflow-hidden border-b-2 border-ink bg-white">
        <Image
          src={project.poster ?? project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover object-top"
        />
        {project.video && (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            tabIndex={-1}
            className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
          />
        )}
      </div>
      <ProjectInfo project={project} />
    </article>
  );
}
