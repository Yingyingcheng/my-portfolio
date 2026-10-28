"use client";
import { useSyncExternalStore } from "react";
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa6";

const contacts = [
  {
    label: "GitHub",
    href: "https://github.com/Yingyingcheng",
    Icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yingying-cheng/",
    Icon: FaLinkedinIn,
  },
  {
    label: "Email doris82717@gmail.com",
    href: "mailto:doris82717@gmail.com",
    Icon: FaRegEnvelope,
  },
];

const news = [
  "👻 New here? Click any file on the desktop to open it",
  "🔴 Click the red dot to close a window, just like on a Mac",
  "🎧 On repeat: 浴室 by Deca Joins",
  "👀 New on my shelf: Yesteryear by Caro Claire Burke",
  "😽 My ginger cat is sleeping",
  "💬 Psst, open Terminal in the dock and type help",
];

const sfTime = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  hour: "numeric",
  minute: "2-digit",
});

const sfDate = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  month: "long",
  day: "numeric",
});

function subscribeToClock(onChange: () => void) {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
}

export default function Navbar() {
  const time = useSyncExternalStore(
    subscribeToClock,
    () => sfTime.format(new Date()),
    () => "",
  );

  const date = useSyncExternalStore(
    subscribeToClock,
    () => sfDate.format(new Date()),
    () => "",
  );

  return (
    <header className="flex items-center justify-between gap-4 px-4 md:px-6 py-2 bg-ink font-mono text-[13px] text-chrome-text">
      <div className="flex items-center gap-2.5 font-bold whitespace-nowrap">
        <span
          aria-hidden="true"
          className="grid place-items-center w-6 h-6 rounded-full bg-highlight font-serif text-sm text-heading"
        >
          D
        </span>
        Doris Cheng
      </div>

      <div className="hidden lg:block flex-1 min-w-0 mx-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3rem,black_calc(100%_-_3rem),transparent)]">
        <div className="flex w-max motion-safe:animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 || undefined}
              className="flex shrink-0 gap-12 pr-12"
            >
              {news.map((item) => (
                <li key={item} className="whitespace-nowrap">
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <nav aria-label="Contact" className="flex items-center gap-1 lg:hidden">
          {contacts.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              {...(href.startsWith("http") && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="grid place-items-center w-7 h-7 rounded-md hover:bg-highlight hover:text-heading transition-colors"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </nav>
        {time && date && (
          <span className="pl-4 border-l border-chrome-text/30 text-highlight lg:pl-0 lg:border-l-0">
            <span className="hidden sm:inline">San Francisco · {date} · </span>
            {time}
          </span>
        )}
      </div>
    </header>
  );
}
