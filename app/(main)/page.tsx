import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex relative w-full">
      <Image
        src="/home-bg.jpg"
        className="opacity-50 -z-10"
        fill
        alt="Hannibal Hector Staring at Fork"
      />
      <Navbar />
      <div className="absolute flex items-center h-full w-full">
        <h1 className="font-extrabold text-9xl">RAFHAEL</h1>
      </div>
    </main>
  );
}
