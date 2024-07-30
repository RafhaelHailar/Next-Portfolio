import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Links from "@/data/links";
import CardDisplay from "@/components/home/CardDisplay";

export default function Home() {
  return (
    <main className="flex relative w-full">
      <Image
        src="/home-bg.jpg"
        className="opacity-45 -z-10 absolute"
        fill
        alt="Hannibal Hector Staring at Fork"
      />
      <div className="px-20 py-5 h-full flex flex-col justify-between">
        <Navbar />
        <div className="">
          <div className="h-80 flex justify-center flex-col text-primary">
            <h1>SOME DUDE WHO DEVELOP WITH JAVASCRIPT</h1>
            <h1 className="font-extrabold text-9xl -ml-2">RAFHAEL</h1>
            <h2 className="text-5xl tracking-[1rem]">FULLSTACK DEVELOPER</h2>
          </div>
        </div>
        <CardDisplay />
        <div className="h-full absolute flex flex-col top-0 right-20 py-4 justify-between">
          <div className="flex-1">he</div>
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
