import type { PointerEvent, ReactNode } from "react";

type WindowBarProps = {
  title: string;
  /** Shown before the title, e.g. the window's face */
  icon?: ReactNode;
  /** Turns the red dot into a working close button */
  onClose?: () => void;
  /** Adds a tap-sized text close button on small screens */
  closeText?: string;
  /** Lets the bar act as a drag handle for its window */
  onPointerDown?: (event: PointerEvent<HTMLDivElement>) => void;
};

export default function WindowBar({
  title,
  icon,
  onClose,
  closeText,
  onPointerDown,
}: WindowBarProps) {
  return (
    <div
      onPointerDown={onPointerDown}
      className={`relative flex items-center px-4 py-3 bg-bar/85 backdrop-blur-md ${
        onPointerDown ? "cursor-grab active:cursor-grabbing touch-none select-none" : ""
      }`}
    >
      <div className="relative z-10 flex gap-2">
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            onPointerDown={(event) => event.stopPropagation()}
            aria-label={`Close ${title}`}
            className="grid place-items-center w-3 h-3 rounded-full bg-[#FF5F56] font-sans text-[10px] font-bold leading-none text-transparent hover:text-black/60 focus-visible:text-black/60 cursor-pointer"
          >
            X
          </button>
        ) : (
          <span
            aria-hidden="true"
            className="w-3 h-3 rounded-full bg-[#FF5F56]"
          />
        )}
        <span
          aria-hidden="true"
          className="w-3 h-3 rounded-full bg-[#FFBD2E]"
        />
        <span
          aria-hidden="true"
          className="w-3 h-3 rounded-full bg-[#27C93F]"
        />
      </div>
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center gap-2 font-file font-bold text-sm md:text-base tracking-wide text-bar-title">
        {icon}
        {title}
      </span>
      {onClose && closeText && (
        <button
          type="button"
          onClick={onClose}
          className="relative z-10 ml-auto -my-1 px-2 py-1 font-mono text-xs font-bold text-bar-title lg:hidden"
        >
          {closeText}
        </button>
      )}
    </div>
  );
}
