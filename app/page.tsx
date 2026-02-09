import Link from "next/link";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f2c37c] text-[#1a1a1a] selection:bg-orange-200">
      {/* Navigation Section */}
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 md:px-12 pt-16 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-6">
            <h1 className="font-medium text-6xl md:text-[90px] leading-[0.85] tracking-tighter">
              Software <br /> Designer <br />{" "}
              <span className="text-[#8da399]">&</span> Dev
            </h1>
          </div>

          {/* Intro Text & CTA */}
          <div className="md:col-span-6 pb-4">
            <p className="text-lg md:text-xl mb-8 text-gray-700 font-medium">
              Building clean, high-impact digital experiences that tell a story.
              <br></br>
              Based in San Francisco, available worldwide.
            </p>
            <Link
              href="/resume.pdf"
              className="inline-block bg-[#8da399] text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-orange-600 transition-all duration-300"
            >
              View My Protfolio
            </Link>
          </div>
        </div>
      </section>
      {/* Skills Section*/}
      <Skills />
      {/* {Project} */}
      <Projects />
      {/* --- Footer Section --- */}
      <footer className="w-full py-10 text-amber-50 bg-[#8da399]">
        <div className="flex flex-col items-center max-w-7xl mx-auto ">
          <h2 className="text-xl font-bold uppercase tracking-wider leading-[0.8] text-center">
            Contacts
          </h2>

          <div className="pt-5 text-sm flex gap-8 ">
            <a
              href="doris82717@gmail.com"
              className="font-bold uppercase tracking-widest  hover:text-orange-600 transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/yingying-cheng/"
              className="font-bold uppercase tracking-widest hover:text-orange-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Yingyingcheng"
              className="font-bold uppercase tracking-widest  hover:text-orange-600 transition-colors"
            >
              GitHub
            </a>
          </div>

          <p className="pt-5 text-[10px] uppercase tracking-[0.5em]  font-bold text-center">
            © 2026 Doris Cheng — Made With 🩵
          </p>
        </div>
      </footer>
    </main>
  );
}
