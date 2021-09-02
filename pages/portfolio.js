import axios from "axios";
import { useEffect, useState } from "react";
import MainLayout from "~/components/layouts/main-layout";
import Badge from "~/components/ui/badge";
import { FaGithub } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import React from "react";
import ProjectCard from "~/components/section/ProjectCard";
import AOS from "aos";
import 'aos/dist/aos.css'

export default function Portfolio() {
  const [projects, setprojects] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const fetchProject = async () => {
    try {
      const res = await axios.get("api/projects");
      setprojects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AOS.init({
      duration : 1000
    })
    AOS.refresh();
    fetchProject();
  }, []);
  return (
    <MainLayout>
      <section
        id="project"
        className="bg-black min-h-screen text-white px-7 md:px-20 py-16"
      >
        <div className="mb-10">
          <p className="text-sm text-gray-400 mb-2">ALL PROJECT</p>
          <h1 className="text-3xl md:text-4xl">Stuff I’ve Worked On 📁</h1>
          <div className="bg-gradient-to-r from-pink-600 to-green-500 h-5 w-1/4 -mt-7"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.slice(0, 6).map((p, i) => {
            return (
              <React.Fragment key={i}>
                <ProjectCard
                  data-aos="zoom-in"
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
    </MainLayout>
  );
}
