import Image from "next/image";
import Navbar from "@/components/Navbar";
import Desktop from "@/components/Desktop";
import wallpaper from "@/public/dusk.jpg";

export default function Home() {
  return (
    <main className="flex flex-col min-h-svh lg:h-svh lg:overflow-hidden text-ink selection:bg-highlight">
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#a9bcd2]">
        <Image
          src={wallpaper}
          alt=""
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-[url(/grain.svg)] opacity-30 mix-blend-overlay" />
      </div>
      <Navbar />
      <Desktop />
    </main>
  );
}
