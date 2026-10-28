type Entry = {
  date: string;
  role: string;
  org: string;
  note: string;
  current?: boolean;
};

const entries: Entry[] = [
  {
    date: "Jul 2026 — Now",
    role: "Software Engineer",
    org: "Party Monster Games",
    note: "Partnering with the founder on Doodle Party & Emoji Party.",
    current: true,
  },
  {
    date: "Jan — Jul 2026",
    role: "Software Engineer Intern",
    org: "Party Monster Games",
    note: "Real-time WebSocket game sync with Colyseus.",
  },
  {
    date: "2024 — 2026",
    role: "M.S. Computer Science",
    org: "San Francisco Bay University",
    note: "Web Programming & Data Modeling. GPA 3.9.",
  },
  {
    date: "2019 — 2024",
    role: "Member of Technical Staff",
    org: "Taipei City Government",
    note: "Owned a Python geospatial remote-sensing pipeline.",
  },
  {
    date: "2017 — 2019",
    role: "M.S. Civil Engineering · ML Research",
    org: "National Taiwan University",
    note: "Hyperspectral image classification research, published as a peer-reviewed conference paper.",
  },
];

export default function ExperienceLog() {
  return (
    <div className="p-6 md:p-8">
      <ol className="relative space-y-7 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:border-l-2 before:border-dashed before:border-line/50">
        {entries.map((entry) => (
          <li key={entry.date} className="relative flex gap-5">
            <span
              aria-hidden="true"
              className={`relative z-10 mt-1 shrink-0 w-4 h-4 rounded-full border-2 border-line ${
                entry.current ? "bg-accent" : "bg-surface"
              }`}
            />
            <div>
              <p className="font-mono text-xs text-heading">
                {entry.date}
                {entry.current && (
                  <span className="ml-2 px-1.5 py-0.5 bg-tag text-tag-text">
                    current
                  </span>
                )}
              </p>
              <h3 className="mt-1 font-bold text-base md:text-lg leading-snug">
                {entry.role}
                <span className="font-medium text-muted"> @ {entry.org}</span>
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {entry.note}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
