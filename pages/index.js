import MainLayout from "~/components/layouts/main-layout";
import Link from "next/link";
import Cube from "../assets/images/cube.png";

export default function Home() {
  return (
    <MainLayout>
      <section className="bg-black place-items-center text-white h-screen--h-16 flex justify-between">
        <div className="w-1/2 flex place-items-center flex-col">
          <div className="-mt-16">
            <div className="mt-4">
              <h1 className="animate-">HI THERE👋, I’M</h1>
              <h1 className="text-5xl font-bold bg-gradient-to-tl from-pink-500 via-blue-400 to-indigo-400 bg-clip-text text-transparent inline">
                DHONI.
              </h1>
            </div>
            <p className="uppercase text-pink-400">Web Developer</p>
            <p className="text-sm mt-2 text-gray-300">
              I&apos; am full stack web developer, basic skills PHP, Javascript.{" "}
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
          <img draggable="false" className="w-1/2" src={Cube.src} alt="cube" />
        </div>
      </section>
      <section className="bg-black text-white px-20 py-10">
        <div className="mb-10">
          <p className="text-sm text-gray-400 mb-2">FEATURED PROJECT</p>
          <h1 className="text-4xl">Stuff I’ve Worked On 📁</h1>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className="animate-pulse h-80 bg-gradient-to-bl from-pink-500 to-blue-500"></div>
          <div className="animate-pulse h-80 bg-gradient-to-bl from-pink-500 to-blue-500"></div>
          <div className="animate-pulse h-80 bg-gradient-to-bl from-pink-500 to-blue-500"></div>
          <div className="animate-pulse h-80 bg-gradient-to-bl from-pink-500 to-blue-500"></div>
          <div className="animate-pulse h-80 bg-gradient-to-bl from-pink-500 to-blue-500"></div>
          <div className="animate-pulse h-80 bg-gradient-to-bl from-pink-500 to-blue-500"></div>
          <div className="animate-pulse h-80 bg-gradient-to-bl from-pink-500 to-blue-500"></div>
          <div className="animate-pulse h-80 bg-gradient-to-bl from-pink-500 to-blue-500"></div>
          <div className="animate-pulse h-80 bg-gradient-to-bl from-pink-500 to-blue-500"></div>
        </div>
      </section>
      <section className="bg-black text-white px-20 py-16">
          <div className="flex justify-around">
            <div className="w-1/4 flex justify-center place-items-center">
                <img draggable="false" src={Cube.src} alt="" />
            </div>
            <div>
          <div className="mb-10 w-3/4 flex-1">
            <p className="text-sm text-gray-400 mb-2 uppercase">
              Say hello world to me
            </p>
            <h1 className="text-4xl">CONTACT ME 🤙</h1>
            <div className="bg-pink-500 w-40 h-4 -mt-4"></div>
          </div>
          <div>
            <form>
              <fieldset className="mb-4">
                <div className="flex flex-col my-3">
                  <label className="text-sm mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="py-2 px-2 w-96 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col my-3">
                  <label className="text-sm mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Your Email"
                    className="py-2 px-2 w-96 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col my-3">
                  <label className="text-sm mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Your Phone Number"
                    className="py-2 px-2 w-96 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col my-3">
                  <label className="text-sm mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    placeholder="Message"
                    className="py-2 px-2 w-96 focus:outline-none"
                  ></textarea>
                </div>
              </fieldset>
              <button
                className="group relative h-12 inline-flex w-64 border border-white sm:w-56 focus:outline-none"
                type="submit"
              >
                <span className="absolute inset-0 inline-flex items-center justify-center self-stretch px-6 text-white text-center font-medium bg-pink-600 ring-1 ring-pink-600 ring-offset-1 ring-offset-pink-600 transform transition-transform group-hover:-translate-y-2 group-hover:-translate-x-2 group-focus:-translate-y-1 group-focus:-translate-x-1">
                  Submit
                </span>
              </button>
            </form>
          </div>
        </div>
          </div>
      </section>
    </MainLayout>
  );
}
