"use client";
import { useState, type FormEvent } from "react";

const email = "doris82717@gmail.com";

export default function NewMessage() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const send = (event: FormEvent) => {
    event.preventDefault();
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={send} className="flex flex-col font-mono text-[12px]">
      <div className="flex items-center gap-3 px-4 py-2.5 border-b-2 border-line/20">
        <span className="w-16 text-muted">To:</span>
        <span className="flex-1 min-w-0 truncate text-ink">{email}</span>
        <button
          type="button"
          onClick={copy}
          className="shrink-0 font-bold text-heading hover:text-accent transition-colors cursor-pointer"
        >
          {copied ? "copied ✓" : "copy"}
        </button>
      </div>
      <label className="flex items-center gap-3 px-4 py-2.5 border-b-2 border-line/20">
        <span className="w-16 text-muted">Subject:</span>
        <input
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          placeholder="Hello from your portfolio"
          className="flex-1 min-w-0 bg-transparent outline-none text-ink placeholder:text-muted/50"
        />
      </label>
      <textarea
        value={body}
        onChange={(event) => setBody(event.target.value)}
        aria-label="Message"
        placeholder="Hi Doris,"
        rows={8}
        className="px-4 py-3 bg-transparent outline-none resize-none font-sans text-sm leading-relaxed text-ink placeholder:text-muted/50"
      />
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-t-2 border-line/20">
        <span className="text-[11px] text-muted">Opens in your email app</span>
        <button
          type="submit"
          className="bg-btn text-btn-text px-4 py-2 text-[12px] font-bold uppercase tracking-widest hover:bg-btn-hover hover:text-btn-hover-text transition-colors cursor-pointer"
        >
          Send
        </button>
      </div>
    </form>
  );
}
