"use client"; // Required for the click functionality
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0  bg-[#fffefea2] flex flex-col justify-center items-center transition-transform duration-500 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex flex-col bg-amber-200 space-y-4  text-center">
          <Link
            href="/resume.pdf"
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
            href="#work"
            onClick={() => setIsOpen(false)}
            className="font-bold  uppercase tracking-widest"
          >
            Work
          </Link>
        </div>
      </div>

      <nav className="flex justify-between items-center px-6 py-8 md:px-12 top-0 sticky bg-[#8da399]">
        <div className="font-bold text-amber-50 tracking-widest uppercase">
          Doris Cheng
        </div>
        <div className="hidden md:flex space-x-8 font-bold text-amber-50 uppercase tracking-widest">
          <Link
            href="/resume.pdf"
            className="hover:text-amber-200 transition-colors"
          >
            Resume
          </Link>
          <Link
            href="#project"
            className="hover:text-amber-200 transition-colors"
          >
            Project
          </Link>
          <Link href="#work" className="hover:text-amber-200 transition-colors">
            Work
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-bold  text-amber-50 uppercase tracking-widest]"
        >
          {isOpen ? "Close" : "Info"}{" "}
        </button>{" "}
      </nav>
    </>
  );
}
