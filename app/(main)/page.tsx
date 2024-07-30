import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Links from "@/data/links";
import CardDisplay from "@/components/home/CardDisplay";
import Sidebar from "@/components/Sidebar";
import { IoMdDownload } from "react-icons/io";

export default function Home() {
  return (
    <main className="flex relative w-full">
      <Image
        src="/home-bg.jpg"
        className="opacity-45 -z-10 absolute"
        fill
        alt="Hannibal Hector Staring at Fork"
      />
      <Sidebar />
      <div className="px-20 py-5 h-full flex flex-col justify-between">
        <Navbar />
        <div className="">
          <div className="h-80 flex justify-center flex-col text-primary mt-16">
            <h1>SOME DUDE WHO DEVELOP WITH JAVASCRIPT</h1>
            <h1 className="font-extrabold text-9xl -ml-2">RAFHAEL</h1>
            <h2 className="text-5xl tracking-[1rem]">FULLSTACK DEVELOPER</h2>
            <div className="flex items-center gap-4 mt-12">
              <Link
                className="w-12 h-12 text-background bg-primary rounded-full flex justify-center items-center text-3xl"
                href="https://raw.githubusercontent.com/RafhaelHailar/portfolio-assets/487aa99aa3d514218d2e53507fc1ec87a52db455/Resume-V1.pdf"
              >
                <IoMdDownload />
              </Link>
              <p>DOWNLOAD RESUME</p>
            </div>
          </div>
        </div>
        <CardDisplay />
        <div className="h-full absolute flex flex-col top-0 right-20 py-4 justify-between">
          <div className="flex-1">RH</div>
          <div className="flex-1 flex flex-col justify-end gap-y-4 my-5">
            {Links.map(({ icon: Icon, href }) => {
              return (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="text-2xl rounded-full"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
