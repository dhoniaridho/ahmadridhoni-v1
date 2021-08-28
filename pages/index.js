/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import MainLayout from "~/components/layouts/main-layout";
import Badge from "~/components/ui/badge";
import FormSubmission from "~/components/section/FormSubmission";
import ProjectCard from "~/components/section/ProjectCard";
import Link from "next/link";
import Cube from "../assets/images/cube.png";
import Box from "../assets/images/box.png";
import axios from "axios";
import SocialMedia from "~/components/section/SocialMedia";
import { FaGithub } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";

export default function Home() {
  const [isModal, setIsModal] = useState(false);
  const [projects, setprojects] = useState([]);
  const [currentSkill, setcurrentSkill] = useState(0);

  const skills = ["Designer", "Web Developer", "Motion Designer"];

  const fetchProject = async () => {
    try {
      const res = await axios.get("api/projects");
      setprojects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProject();
    const loop = setInterval(() => {
      if (currentSkill === skills.length - 1) {
        setcurrentSkill(0);
      } else {
        setcurrentSkill(currentSkill + 1);
      }
    }, 3000);
    return () => clearInterval(loop);
  }, [currentSkill]);

  return (
    <MainLayout>
      <main className="bg-opacity-70 bg-black">
      <section className="place-items-center text-white md:h-screen--h-16 flex flex-col md:flex-row place-content-center md:justify-around px-5">
        <div className="order-2 md:order-1 md:w-1/2 md:flex place-items-center flex-col">
          <div className="md:-mt-16">
            <div className="mt-4">
              <h1 className="animate-">HI THERE👋, I&apos;AM</h1>
              <h1 className="text-5xl font-bold bg-gradient-to-tl from-pink-500 via-blue-400 to-indigo-400 bg-clip-text text-transparent inline">
                DHONI.
              </h1>
            </div>
            <p className="uppercase text-pink-400">{skills[currentSkill]}</p>
            <p className="text-sm mt-2 text-gray-300 font-light">
              I&apos;am full stack web developer, basic skills PHP, Javascript.{" "}
              <br /> based in Yogyakarta, Indonesia.
            </p>
            <div className="mt-7 flex flex-wrap">
              <Link href="/contact">
                <a className="whitespace-nowrap select-none py-3 text-xs px-7 rounded-full bg-pink-500 hover:bg-transparent hover:border-white border-2 border-transparent">
                  CONTACT ME
                </a>
              </Link>
              <a
                href="https://drive.google.com/file/d/1qvkho3npbhPTB4r0R-j3CHU5AoGnalbj/view?usp=sharing"
                className="select-none py-3 mx-4 text-xs rounded-full whitespace-nowrap"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 md:w-1/2 flex justify-center place-items-center">
          <img
            className="object-fill"
            draggable="false"
            width="400"
            src={Box.src}
            alt="cube"
          />
        </div>
      </section>
      <section id="project" className="text-white px-7 md:px-20 py-16">
        <div className="mb-10">
          <p className="text-sm text-gray-400 mb-2">FEATURED PROJECT</p>
          <h1 className="text-3xl md:text-4xl">Stuff I’ve Worked On 📁</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.slice(0, 6).map((p, i) => {
            return (
              <React.Fragment key={i}>
                <ProjectCard
                  title={p.name}
                  onClick={() => {
                    setIsModal({ [i]: true });
                  }}
                >
                  {p.tech.map((t, idx) => (
                    <p key={idx} className="mx-1 text-sm whitespace-nowrap">
                      {t}
                    </p>
                  ))}
                </ProjectCard>
                <div
                  className={`fixed w-full inset-0 h-screen bg-transparent z-50 flex justify-center place-items-center transform transition ${
                    isModal[i] ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                  aria-labelledby={p.title}
                  role="dialog"
                  aria-modal={isModal[i]}
                >
                  <div
                    className={`flex place-items-center justify-center h-screen w-full text-cente z-20 transform transition-transform ${
                      isModal[i] ? "scale-100" : "scale-0"
                    }`}
                  >
                    <div className="bg-white text-black w-10/12 h-5/6 md:w-3/4 md:h-3/4 flex justify-between flex-col">
                      <div className="h-16 flex justify-end px-5">
                        <button
                          className="text-red-500"
                          onClick={() => setIsModal({ [i]: false })}
                        >
                          <HiOutlineX size="30px" />
                        </button>
                      </div>
                      <div className="flex-1 md:px-10 md:flex place-items-start">
                        <div className="p-2 bg-gray-100 w-3/4 md:w-1/2 shadow-md mx-auto hover:shadow-xl">
                          <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              draggable="false"
                              className="hover:opacity-80 transition-opacity"
                              src={p.preview}
                              alt={p.name}
                            />
                          </a>
                        </div>
                        <div className="mt-3 md:mt-0 px-5">
                          <h1 className="text-xl md:text-4xl font-semibold">
                            {p.name}
                          </h1>
                          <a
                            className="text-sm"
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {p.link}
                          </a>
                          <ul className="flex mt-3">
                            {p.tech.map((t, i) => {
                              return (
                                <li className="mr-1" key={i}>
                                  <Badge className="capitalize text-xs font-light">
                                    {t}
                                  </Badge>
                                </li>
                              );
                            })}
                          </ul>
                          <div className="mt-2">
                            <p className="text-sm font-light">
                              {p.description}
                            </p>
                          </div>
                          <div className="flex mt-3">
                            <a
                              className="hover:text-pink-600"
                              href={p.code}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub size="25px" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`bg-gray-900 w-full h-screen bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 z-0 fixed transition-all duration-300 ${
                      isModal[i] ? "opacity-100" : "opacity-0 hidden"
                    }`}
                  ></div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </section>
      <section className="text-white px-5 md:px-20 py-16">
        <div className="flex flex-col md:flex-row place-content-center md:justify-around">
          <div className="w-1/4 my-3 flex justify-center place-items-center">
            <img draggable="false" src={Cube.src} alt="" />
          </div>
          <div>
            <div className="mb-10 w-3/4 flex-1">
              <p className="text-sm text-gray-400 mb-2 uppercase">
                Say hello world to me
              </p>
              <h1 className="text-3xl md:text-4xl whitespace-nowrap">
                CONTACT ME 🤙
              </h1>
              <div className="bg-pink-500 w-40 h-4 -mt-4"></div>
            </div>
            <div>
              <FormSubmission />
            </div>
          </div>
        </div>
      </section>
      <section className="text-white px-5 md:px-20 py-16">
        <div>
          <p className="text-sm text-gray-400 mb-2 uppercase">
            Consult your problems
          </p>
          <h1 className="text-3xl md:text-4xl whitespace-nowrap">
            YOU CAN ALSO 🤙
          </h1>
          <div className="bg-pink-500 w-40 h-4 -mt-4"></div>
        </div>
        <SocialMedia />
      </section>
      </main>
    </MainLayout>
  );
}
