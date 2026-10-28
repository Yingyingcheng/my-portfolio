"use client";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { projects } from "@/lib/projects";
import { skills } from "./Skills";

const prompt = "doris@portfolio ~ %";

// `open <name>` opens the desktop window with that key.
const windows = [
  "about",
  "skills",
  "experience",
  "projects",
  "books",
  "games",
  "player",
  "music",
  "maps",
  "mail",
];

type Line = { command?: boolean; text: string };

export default function TerminalApp({
  onOpen,
}: {
  onOpen: (key: string) => void;
}) {
  const [lines, setLines] = useState<Line[]>([
    { text: "Type 'help' to see what I can do." },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [recall, setRecall] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // The window focuses itself when it opens; take focus back for the prompt.
  useEffect(() => {
    const frame = requestAnimationFrame(() =>
      inputRef.current?.focus({ preventScroll: true }),
    );
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "nearest" });
  }, [lines]);

  const run = (command: string): string[] | null => {
    const [name = "", target = ""] = command.trim().toLowerCase().split(/\s+/);
    switch (name) {
      case "":
        return [];
      case "help":
        return [
          "whoami      who I am",
          "skills      what I work with",
          "projects    things I've built",
          "contact     where to find me",
          "open <app>  open a desktop window, e.g. open books",
          "clear       clear the screen",
        ];
      case "whoami":
        return [
          "Doris (Ying Ying) Cheng",
          "Software Designer & Developer, San Francisco",
        ];
      case "skills":
        return [skills.map((skill) => skill.name).join(" · ")];
      case "projects":
        return projects.map(
          (project) => `${project.title.padEnd(22)}${project.subtitle}`,
        );
      case "contact":
        return [
          "email     doris82717@gmail.com",
          "github    github.com/Yingyingcheng",
          "linkedin  linkedin.com/in/yingying-cheng",
        ];
      case "open":
        if (!windows.includes(target)) {
          return [
            `open: no such app: ${target}`,
            `try one of: ${windows.join(", ")}`,
          ];
        }
        onOpen(target);
        return [`Opening ${target}…`];
      case "clear":
        return null;
      default:
        return [`zsh: command not found: ${name}`];
    }
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const output = run(input);
    setLines((current) =>
      output === null
        ? []
        : [
            ...current,
            { command: true, text: input },
            ...output.map((text) => ({ text })),
          ],
    );
    if (input.trim()) setHistory((current) => [...current, input]);
    setRecall(null);
    setInput("");
  };

  const browseHistory = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    event.preventDefault();
    if (!history.length) return;
    const from = recall ?? history.length;
    const next =
      event.key === "ArrowUp"
        ? Math.max(0, from - 1)
        : Math.min(history.length, from + 1);
    setRecall(next);
    setInput(history[next] ?? "");
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="h-80 overflow-y-auto px-4 py-3 bg-ink font-mono text-[12px] leading-relaxed text-surface/85"
    >
      {lines.map((line, index) => (
        <p key={index} className="whitespace-pre-wrap">
          {line.command && <span className="text-highlight">{prompt} </span>}
          {line.text}
        </p>
      ))}
      <form onSubmit={submit} className="flex gap-2">
        <label htmlFor="terminal-input" className="shrink-0 text-highlight">
          {prompt}
        </label>
        <input
          ref={inputRef}
          id="terminal-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={browseHistory}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className="flex-1 min-w-0 bg-transparent outline-none text-surface caret-highlight"
        />
      </form>
      <div ref={endRef} />
    </div>
  );
}
