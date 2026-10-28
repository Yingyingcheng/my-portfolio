"use client";
import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";
import { motion, useDragControls, useMotionValue } from "motion/react";
import WindowBar from "./WindowBar";
import { IconFace, type Face } from "./DesktopIcon";

export type WindowSpec = {
  key: string;
  title: string;
  face?: Face;
  /** Shown in the title bar instead of a face */
  icon?: ReactNode;
  /** Left, top and width on large screens */
  x: string;
  y: string;
  w: string;
  /** Center the window on `x`, or on `x` and `y`, instead of starting it there */
  centered?: "x" | "xy";
  /** Measure `y` up from the bottom edge */
  fromBottom?: boolean;
  /** Shown inline on phones instead of as a full-screen sheet */
  pinned?: boolean;
};

type DesktopWindowProps = {
  spec: WindowSpec;
  z: number;
  draggable: boolean;
  bounds: RefObject<HTMLElement | null>;
  onFocus: () => void;
  onClose: () => void;
  children: ReactNode;
};

export default function DesktopWindow({
  spec,
  z,
  draggable,
  bounds,
  onFocus,
  onClose,
  children,
}: DesktopWindowProps) {
  const controls = useDragControls();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!draggable) {
      x.set(0);
      y.set(0);
    }
  }, [draggable, x, y]);

  useEffect(() => {
    if (!spec.pinned) windowRef.current?.focus({ preventScroll: true });
  }, [spec.pinned]);

  const style = {
    "--x": spec.x,
    "--y": spec.y,
    "--w": spec.w,
    zIndex: z,
  } as CSSProperties;

  // Windows that grow with their content stop 6rem short of the bottom, clear
  // of the dock. Centered ones also keep 1.5rem clear of the top, which assumes
  // their center sits 2.25rem above the middle.
  return (
    <div
      id={`window-${spec.key}`}
      role="dialog"
      aria-label={spec.title}
      style={style}
      onPointerDownCapture={onFocus}
      className={`lg:absolute lg:inset-auto lg:left-(--x) lg:w-(--w) lg:max-w-[calc(100%-15rem)] ${
        spec.fromBottom ? "lg:bottom-(--y)" : "lg:top-(--y)"
      } ${
        spec.centered === "xy"
          ? "lg:-translate-1/2"
          : spec.centered === "x"
            ? "lg:-translate-x-1/2"
            : ""
      } ${
        spec.pinned
          ? "relative scroll-mt-5"
          : `fixed inset-0 lg:flex lg:flex-col ${
              spec.centered === "xy"
                ? "lg:max-h-[calc(100%_-_7.5rem)]"
                : "lg:max-h-[calc(100%_-_var(--y)_-_6rem)]"
            }`
      }`}
    >
      <motion.div
        ref={windowRef}
        tabIndex={-1}
        drag={draggable}
        dragControls={controls}
        dragListener={false}
        dragMomentum={false}
        dragElastic={0}
        dragConstraints={bounds}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ x, y }}
        className={`flex flex-col outline-none ${
          spec.pinned
            ? "window-shadow"
            : "h-full lg:h-auto lg:min-h-0 lg:window-shadow"
        }`}
      >
        <WindowBar
          title={spec.title}
          icon={
            spec.icon ??
            (spec.face && (
              <IconFace
                face={spec.face}
                className="w-6 h-6 shrink-0 outline-[1.5px] outline-white/70"
              />
            ))
          }
          onClose={onClose}
          closeText={spec.pinned ? undefined : "Close"}
          onPointerDown={draggable ? (event) => controls.start(event) : undefined}
        />
        <div
          className={
            spec.pinned
              ? "bg-surface border-2 border-t-0 border-ink"
              : "flex-1 overflow-y-auto overscroll-contain bg-surface lg:flex-initial lg:border-2 lg:border-t-0 lg:border-ink"
          }
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
