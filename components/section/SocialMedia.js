import * as Fa from 'react-icons/fa'
import { HiMail } from 'react-icons/hi';

export default function SocialMedia() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5">
      <a
      data-aos="zoom-in"
      data-aos-delay="10"
        href="http://github.com/dhoniaridho"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative h-16 inline-flex w-full border border-white focus:outline-none"
      >
        <div className="absolute inset-0 p-1 flex justify-between flex-col self-stretch text-white text-center hover:bg-pink-600 hover:ring-pink-600 ring-offset-pink-600 bg-gray-900 ring-1 ring-black transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
          <div className="flex justify-end">
            <Fa.FaGithub size="20px" />
          </div>
          <div className="flex justify-start">Github</div>
        </div>
      </a>
      <a
      data-aos="zoom-in"
      data-aos-delay="20"
        href="http://instagram.com/dhoniaridho"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative h-16 inline-flex w-full border border-white focus:outline-none"
      >
        <div className="absolute inset-0 p-1 flex justify-between flex-col self-stretch text-white text-center hover:bg-pink-600 hover:ring-pink-600 ring-offset-pink-600 bg-gray-900 ring-1 ring-black transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
          <div className="flex justify-end">
            <Fa.FaInstagram size="20px" />
          </div>
          <div className="flex justify-start">Instagram</div>
        </div>
      </a>
      <a
      data-aos="zoom-in"
      data-aos-delay="25"
        href="http://facebook.com/dhoniaridho"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative h-16 inline-flex w-full border border-white focus:outline-none"
      >
        <div className="absolute inset-0 p-1 flex justify-between flex-col self-stretch text-white text-center hover:bg-pink-600 hover:ring-pink-600 bg-gray-900 ring-1 ring-black transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
          <div className="flex justify-end">
            <Fa.FaFacebook size="20px" />
          </div>
          <div className="flex justify-start">Facebook</div>
        </div>
      </a>
      <a
      data-aos="zoom-in"
      data-aos-delay="30"
        href="http://www.linkedin.com/in/ahmad-ridhoni-921a6b205"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative h-16 inline-flex w-full border border-white focus:outline-none"
      >
        <div className="absolute inset-0 p-1 flex justify-between flex-col self-stretch text-white text-center hover:bg-pink-600 hover:ring-pink-600 bg-gray-900 ring-1 ring-black transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
          <div className="flex justify-end">
            <Fa.FaLinkedin size="20px" />
          </div>
          <div className="flex justify-start">LinkedIn</div>
        </div>
      </a>
      <a
      data-aos="zoom-in"
      data-aos-delay="40"
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
  );
}
