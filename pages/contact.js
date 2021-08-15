import api from "config/api";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import MainLayout from "~/components/layouts/main-layout";
import Alert from "~/components/ui/alert";
import Ball from "../assets/images/ball.png";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await api.post("/api/contact", data);
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
      <section className="select-none bg-black text-white px-5 md:px-20 py-16">
        <div className="flex flex-col md:flex-row place-content-center md:justify-around">
          <div className="my-3 w-1/2 flex justify-center place-items-center">
            <img
              draggable="false"
              className="relative w-80 blur-2xl"
              src={Ball.src}
              alt=""
            />
            <img
              draggable="false"
              className="absolute w-44"
              src={Ball.src}
              alt=""
            />
          </div>
          <div>
            <div className="mb-10 w-3/4 flex-1">
              <h1 className="opacity-40 text-gray-600 text-7xl font-bold -mb-10">
                CONTACT
              </h1>
              <div className="relative">
                <p className="text-sm text-gray-400 mb-2 uppercase">
                  Say hello world to me
                </p>
                <h1 className="text-3xl md:text-4xl whitespace-nowrap">
                  CONTACT ME 🤙
                </h1>
                <div className="bg-pink-500 w-40 h-4 -mt-4"></div>
              </div>
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
                    <label className="text-sm mb-2" htmlFor="Subject">
                      Subject *
                    </label>
                    <input
                      {...register("subject", {
                        required: true,
                      })}
                      type="text"
                      id="Subject"
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
                  className="group disabled:opacity-80 relative h-12 inline-flex w-64 border border-white sm:w-56 focus:outline-none"
                  type="submit"
                >
                  <span className="absolute inset-0 inline-flex items-center justify-center self-stretch px-6 text-white text-center font-medium disabled:opacity-60 bg-pink-600 ring-1 ring-pink-600 ring-offset-1 ring-offset-pink-600 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
                    {isSubmitting ? "loading" : "Submit"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white px-5 md:px-20 py-16">
        <h1 className="text-7xl font-bold -mb-10 opacity-40 text-gray-600">
          SOCIAL
        </h1>
        <div className="relative">
          <p className="text-sm text-gray-400 mb-5 uppercase">
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
