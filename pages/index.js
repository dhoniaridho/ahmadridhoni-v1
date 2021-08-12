import MainLayout from "~/components/layouts/main-layout";
import Link from "next/link";
import Cube from "../assets/images/cube.png";

export default function Home() {
  return (
    <MainLayout>
      <div className="bg-black place-items-center text-white h-screen--h-16 flex justify-between">
        <div className="w-1/2 flex place-items-center flex-col">
          <div className="-mt-16">
            <div className="mt-4">
            <h1>HI THERE👋, I’M</h1>
            <h1 className="text-5xl font-bold bg-gradient-to-tl from-pink-500 via-blue-400 to-indigo-400 bg-clip-text text-transparent inline">
              DHONI.
            </h1>
            </div>
            <p className="uppercase text-pink-400">Web Developer</p>
            <p className="text-sm mt-2 text-gray-300">
              I&apos;am full stack web developer, basic skills PHP, Javascript.{" "}
              <br /> based in Yogyakarta, Indonesia.
            </p>
            <div className="mt-7">
              <Link href="/contact">
                <a className="py-3 text-xs px-5 rounded-full bg-pink-500 hover:bg-transparent hover:border-white border-2 border-transparent">
                  CONTACT ME
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center place-items-center">
          <img className="w-1/2" src={Cube.src} alt="cube" />
        </div>
      </div>
    </MainLayout>
  );
}
