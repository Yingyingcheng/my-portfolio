"use client"; // Required for the click functionality
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Overlay */}
      <div
        aria-hidden={!isOpen}
        className={`md:hidden fixed inset-0 z-40 bg-[#fffefea2] flex flex-col justify-center items-center transition-[transform,visibility] duration-500 ${isOpen ? "translate-y-0" : "-translate-y-full invisible pointer-events-none"}`}
      >
        <div className="flex flex-col bg-butter px-10 py-8 space-y-4 text-center">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="font-bold uppercase tracking-widest"
          >
            Resume
          </Link>
          <Link
            href="#project"
            onClick={() => setIsOpen(false)}
            className="font-bold  uppercase tracking-widest"
          >
            Project
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="font-bold  uppercase tracking-widest"
          >
            Contact
          </Link>
        </div>
      </div>

      <nav className="flex justify-between items-center px-6 py-8 md:px-12 top-0 sticky z-50 bg-chrome text-chrome-text border-b-2 border-chrome-border">
        <div className="font-bold tracking-widest uppercase">
          Doris Cheng
        </div>
        <div className="hidden md:flex space-x-8 font-bold uppercase tracking-widest">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-chrome-hover transition-colors"
          >
            Resume
          </Link>
          <Link
            href="#project"
            className="hover:text-chrome-hover transition-colors"
          >
            Project
          </Link>
          <Link
            href="#contact"
            className="hover:text-chrome-hover transition-colors"
          >
            Contact
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden font-bold uppercase tracking-widest"
        >
          {isOpen ? "Close" : "Info"}{" "}
        </button>{" "}
      </nav>
    </>
  );
}
