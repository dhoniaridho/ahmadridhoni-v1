/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import MainLayout from "~/components/layouts/main-layout";
import Link from "next/link";
import Cube from "../assets/images/cube.png";
import Box from "../assets/images/box.png";
import { useForm } from "react-hook-form";
import Alert from "~/components/ui/alert";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiMail, HiOutlineX } from "react-icons/hi";
import emailjs from "emailjs-com";
import axios from "axios";
import Badge from "~/components/ui/badge";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [projects, setprojects] = useState([]);
  const [currentSkill, setcurrentSkill] = useState(0);

  const skills = ['Designer', 'Web Developer', 'Motion Designer']

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
	const loop = setInterval(()=>{
		if(currentSkill === skills.length-1) {
			setcurrentSkill(0)
		}else {
			setcurrentSkill(currentSkill + 1)
		}
    }, 3000)
	return () => clearInterval(loop)
  }, [currentSkill]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_0q1ymjd",
        "template_a4mhqoa",
        data,
        "user_CwxQFu4YJaOLU3gt8aMcw"
      );
      reset((data = ""));
      setIsSubmitting(false);
      alert("message has been send");
    } catch (error) {
      alert("something went wrong");
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <section className="bg-black place-items-center text-white md:h-screen--h-16 flex flex-col md:flex-row place-content-center md:justify-around px-5">
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
      <section id="project" className="bg-black text-white px-7 md:px-20 py-16">
        <div className="mb-10">
          <p className="text-sm text-gray-400 mb-2">FEATURED PROJECT</p>
          <h1 className="text-3xl md:text-4xl">Stuff I’ve Worked On 📁</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.slice(0, 6).map((p, i) => {
            return (
              <React.Fragment key={i}>
                <div
                  onMouseOver={() => setIsHover({ [i]: true })}
                  onMouseLeave={() => setIsHover({ [i]: false })}
                  role="button"
                  onClick={() => {
                    setIsModal({ [i]: true });
                  }}
                  className={`flex justify-between flex-col h-80 p-5 transition-all ${
                    isHover[i]
                      ? "bg-black border"
                      : "bg-gradient-to-tr from-pink-500 to-blue-500 border"
                  }`}
                >
                  <div className="flex-1 flex place-items-center">
                    <div className="mt-24">
                      <h1 className="text-4xl font-semibold">{p.name}</h1>
                    </div>
                  </div>
                  <div className="flex justify-center uppercase flex-wrap">
                    {p.tech.map((t, idx) => (
                      <p key={idx} className="mx-1 text-sm whitespace-nowrap">
                        {t}
                      </p>
                    ))}
                  </div>
                </div>
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
                                <a href={p.link} target="_blank" rel="noopener noreferrer">
                                <img
								draggable="false"
                            className="hover:opacity-80 transition-opacity"
                            src={p.preview}
                            alt={p.name}
                          />
                                </a>
                        </div>
                        <div className="mt-3 md:mt-0 px-5">
                          <h1 className="text-xl md:text-4xl font-semibold">{p.name}</h1>
						  <a className="text-sm" href={p.link} target="_blank" rel="noopener noreferrer">{p.link}</a>
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
								<p className="text-sm font-light">{p.description}</p>
						  </div>
                          <div className="flex mt-3">
                            <a className="hover:text-pink-600" href={p.code} target="_blank" rel="noopener noreferrer">
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
      <section className="bg-black text-white px-5 md:px-20 py-16">
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="mb-4">
                  <div className="flex flex-col my-3">
                    <label className="text-sm mb-2" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      {...register("name", {
                        required: true,
                      })}
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="py-2 text-black px-2 sm:w-96  focus:outline-none"
                    />
                    {errors.name && (
                      <Alert type="danger">This field is required</Alert>
                    )}
                  </div>
                  <div className="flex flex-col my-3">
                    <label className="text-sm mb-2" htmlFor="email">
                      Email *
                    </label>
                    <input
                      {...register("email", {
                        required: true,
                      })}
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className="py-2 text-black px-2 sm:w-96  focus:outline-none"
                    />
                    {errors.email && <Alert>This field is required</Alert>}
                  </div>
                  <div className="flex flex-col my-3">
                    <label className="text-sm mb-2" htmlFor="subject">
                      Subject *
                    </label>
                    <input
                      {...register("subject", {
                        required: true,
                      })}
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      className="py-2 text-black px-2 sm:w-96  focus:outline-none"
                    />
                    {errors.subject && <Alert>This field is required</Alert>}
                  </div>
                  <div className="flex flex-col my-3">
                    <label className="text-sm mb-2" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      {...register("message", {
                        required: true,
                      })}
                      type="text"
                      id="message"
                      placeholder="Message"
                      className="py-2 text-black px-2 sm:w-96  focus:outline-none"
                    ></textarea>
                    {errors.message && <Alert>This field is required</Alert>}
                  </div>
                  <p className="my-2 text-sm">We respect your privacy.</p>
                </fieldset>
                <button
                  disabled={isSubmitting}
                  className="group relative disabled:opacity-80 h-12 inline-flex w-64 border border-white sm:w-56 focus:outline-none"
                  type="submit"
                >
                  <span className="absolute inset-0 inline-flex items-center justify-center self-stretch px-6 text-white text-center font-medium bg-pink-600 ring-1 ring-pink-600 ring-offset-1 ring-offset-pink-600 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
                    {isSubmitting ? "loading" : "Submit"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white px-5 md:px-20 py-16">
        <div>
          <p className="text-sm text-gray-400 mb-2 uppercase">
            Consult your problems
          </p>
          <h1 className="text-3xl md:text-4xl whitespace-nowrap">
            YOU CAN ALSO 🤙
          </h1>
          <div className="bg-pink-500 w-40 h-4 -mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5">
          <a
            href="http://github.com/dhoniaridho"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-16 inline-flex w-full border border-white focus:outline-none"
          >
            <div className="absolute inset-0 p-1 flex justify-between flex-col self-stretch text-white text-center hover:bg-pink-600 hover:ring-pink-600 ring-offset-pink-600 bg-gray-900 ring-1 ring-black transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
              <div className="flex justify-end">
                <FaGithub size="20px" />
              </div>
              <div className="flex justify-start">Github</div>
            </div>
          </a>
          <a
            href="http://instagram.com/dhoniaridho"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-16 inline-flex w-full border border-white focus:outline-none"
          >
            <div className="absolute inset-0 p-1 flex justify-between flex-col self-stretch text-white text-center hover:bg-pink-600 hover:ring-pink-600 ring-offset-pink-600 bg-gray-900 ring-1 ring-black transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
              <div className="flex justify-end">
                <FaInstagram size="20px" />
              </div>
              <div className="flex justify-start">Instagram</div>
            </div>
          </a>
          <a
            href="http://facebook.com/dhoniaridho"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-16 inline-flex w-full border border-white focus:outline-none"
          >
            <div className="absolute inset-0 p-1 flex justify-between flex-col self-stretch text-white text-center hover:bg-pink-600 hover:ring-pink-600 bg-gray-900 ring-1 ring-black transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
              <div className="flex justify-end">
                <FaFacebook size="20px" />
              </div>
              <div className="flex justify-start">Facebook</div>
            </div>
          </a>
          <a
            href="http://www.linkedin.com/in/ahmad-ridhoni-921a6b205"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-16 inline-flex w-full border border-white focus:outline-none"
          >
            <div className="absolute inset-0 p-1 flex justify-between flex-col self-stretch text-white text-center hover:bg-pink-600 hover:ring-pink-600 bg-gray-900 ring-1 ring-black transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
              <div className="flex justify-end">
                <FaLinkedin size="20px" />
              </div>
              <div className="flex justify-start">LinkedIn</div>
            </div>
          </a>
          <a
            href="mailto:dhoniaridho@gmail.com"
            className="group relative h-16 inline-flex w-full border border-white focus:outline-none"
          >
            <div className="absolute inset-0 p-1 flex justify-between flex-col self-stretch text-white text-center hover:bg-pink-600 hover:ring-pink-600 bg-gray-900 ring-1 ring-black transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
              <div className="flex justify-end">
                <HiMail size="20px" />
              </div>
              <div className="flex justify-start">dhoniaridho@gmail.com</div>
            </div>
          </a>
        </div>
      </section>
    </MainLayout>
  );
}
