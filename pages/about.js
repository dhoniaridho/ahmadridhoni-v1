import MainLayout from "~/components/layouts/main-layout";
import Me from "../assets/images/me.jpg";
import { BiCodeAlt } from "react-icons/bi";
import { SiMaterialdesign } from "react-icons/si";
import { FaPhotoVideo } from "react-icons/fa";
import Graph from "../assets/images/graph.png";
import { useState } from "react";

export default function About() {

  const [selectSkill, setSelectSkill] = useState('Web Programming')

  const Interests = [
    {
      title: "Front End Developer",
      code: "FE",
    },
    {
      title: "Back End Developer",
      code: "BE",
    },
    {
      title: "UI Design",
      code: "UI",
    },
    {
      title: "Graphic Design",
      code: "GD",
    },
    {
      title: "Motion Graphic",
      code: "MG",
    },
    {
      title: "All About Technology",
      code: "ALL",
    },
  ];

  return (
    <MainLayout>
      <section className="min-h-screen text-white bg-black flex flex-col md:flex-row md:justify-between overflow-x-hidden">
        <div className="w-full md:w-1/2 pointer-events-none">
          <img alt="dhoniaridho" className="h-full object-cover" src={Me.src} />
        </div>
        <div className="w-full md:w-1/2 my-16 relative">
          <div className="px-10">
            <h1 className="text-7xl md:text-8xl absolute text-gray-700 opacity-50 -mt-10 font-bold whitespace-nowrap">
              About
            </h1>
            <h1 className="text-5xl relative whitespace-nowrap">
              About{" "}
              <span className="bg-gradient-to-tr text-transparent bg-clip-text from-pink-600 font-semibold to-white">
                Me
              </span>
            </h1>
            <p className="text-sm w-3/4 my-6 select-text">
              I’m a Full-Stack Developer located in Yogyakarta. I have a serious
              passion for UI effects, animations and creating intuitive, dynamic
              user experiences.
            </p>
            <p className="text-xs text-gray-200">@dhoniaridho</p>
          </div>
          <div className="mx-10 mt-20 relative">
            <h1 className="text-8xl absolute text-gray-700 opacity-50 -mt-10 font-bold">
              Skills
            </h1>
            <h1 className="text-4xl relative">Basic Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
              <div className="w-full h-full bg-gray-900 hover:bg-pink-500 p-5">
                <div className="h-32">
                  <BiCodeAlt size="100px" />
                </div>
                <h1 className="text-xl">Web Development</h1>
              </div>
              <div className="w-full h-full bg-gray-900 hover:bg-pink-500 p-5">
                <div className="h-32">
                  <SiMaterialdesign size="100px" />
                </div>
                <h1 className="text-xl">Graphic Design</h1>
              </div>
              <div className="w-full h-full bg-gray-900 hover:bg-pink-500 p-5">
                <div className="h-32">
                  <FaPhotoVideo size="100px" />
                </div>
                <h1 className="text-xl">Motion Graphic</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white overflow-x-hidden">
        <div className="flex flex-col md:flex-row md:justify-between px-7 md:px-20 py-16">
          <div className="md:w-1/2 order-2 md:order-1">
            <p className="text-sm text-gray-400 mb-2 uppercase">
              Say me about technology
            </p>
            <h1 className="text-5xl md:text-8xl uppercase absolute text-gray-700 opacity-50 -mt-10 font-bold">
              Interests
            </h1>
            <h1 className="text-4xl relative">My Interests</h1>
            <ul className="mt-5 grid gap-5">
              {Interests.map((i, idx) => (
                <li
                  key={idx}
                  className="h-16 group transition-all bg-gray-900 hover:bg-black border-b-2 flex place-items-center p-3 justify-between border-pink-600 w-full text-gray-400 hover:text-white"
                >
                  <div>{i.title}</div>
                  <div className="group-hover:text-pink-500">{i.code}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center place-items-center order-1 md:order-2 py-8">
            <img
              draggable={false}
              className="w-3/4 md:w-1/2"
              src={Graph.src}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-white px-5 md:px-20 py-16">
        <div className="flex justify-center place-items-center">
          <div className="text-center">
            <h1 className="text-4xl">What i do</h1>
            <p className="font-light text-sm mt-10">
              I create successful responsive websites that are fast, easy to
              use, and built with best practices. The main area of my expertise
              is front-end development, HTML, CSS, JS, building small and medium
              web apps, features, animations, and coding
              interactive layouts.
            </p>
          </div>
        </div>
        <div className="flex justify-center my-5">
          <h1 role="button" onClick={() => setSelectSkill('Web Programming')} className={`mt-5 text-center py-2 px-7 border-b-2 ${selectSkill === 'Web Programming' ? 'border-pink-500' : 'border-gray-400'}`}>Web Programming</h1>
          <h1 role="button" onClick={() => setSelectSkill('Graphic Design')} className={`mt-5 text-center py-2 px-7 border-b-2 ${selectSkill === 'Graphic Design' ? 'border-pink-500' : 'border-gray-400'}`}>Graphic Design</h1>
        </div>
        {selectSkill === 'Web Programming' ?
          <ul className="grid md:grid-cols-5 gap-4 text-center mt-5">
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"
                alt="HTML"
              />
              <p className="mt-2">HTML</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://sujanbyanjankar.com.np/wp-content/uploads/2019/01/React.js_logo-512.png"
                alt="React"
              />
              <p className="mt-2">React JS</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://i.ibb.co/MnX1tDs/c221f800-2674-11eb-9782-d802dc0e8cbb-removebg-preview.png"
                alt="CSS"
              />
              <p className="mt-2">CSS</p>
            </li>
            <li className="p-2 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://iconape.com/wp-content/png_logo_vector/tailwind-css-logo.png"
                alt="TW"
              />
              <p className="mt-2">Tailwind</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
                alt="Laravel"
              />
              <p className="mt-2">Laravel</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://decodenatura.com/static/fb8aa1bb70c9925ce1ae22dc2711b343/nextjs-logo.png"
                alt="Next"
              />
              <p className="mt-2">Next JS</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://www.php.net/images/logos/new-php-logo.svg"
                alt="PHP"
              />
              <p className="mt-2">PHP</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                alt="JS"
              />
              <p className="mt-2">Javascript</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
                alt="Node"
              />
              <p className="mt-2">Node Js</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="Github"
              />
              <p className="mt-2">Github</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
                alt="Vue"
              />
              <p className="mt-2">Vue</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
                alt="Bootstrap"
              />
              <p className="mt-2">Bootstrap</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png"
                alt="Bootstrap"
              />
              <p className="mt-2">Emotion JS</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://avatars.githubusercontent.com/u/13810373?s=280&v=4"
                alt="Bootstrap"
              />
              <p className="mt-2">Adonis JS</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://i.ibb.co/8zhq3cZ/rzyl-Ujaf-400x400-removebg-preview.png"
                alt="Bootstrap"
              />
              <p className="mt-2">Chakra UI</p>
            </li>
          </ul>
          :
          <ul className="grid md:grid-cols-5 gap-4 text-center mt-5">
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg"
                alt="AE"
              />
              <p className="mt-2">After Effect</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/616px-Adobe_Premiere_Pro_CC_icon.svg.png"
                alt="React"
              />
              <p className="mt-2">Premiere Pro</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
                alt="PR"
              />
              <p className="mt-2">Photoshop</p>
            </li>
            <li className="p-2 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                alt="TW"
              />
              <p className="mt-2">Figma</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://cdn.freelogovectors.net/wp-content/uploads/2021/01/coreldraw-logo-freelogovectors.net_.png"
                alt="Laravel"
              />
              <p className="mt-2">Corel Draw</p>
            </li>
            <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
              <img
                className="w-24 h-24 object-scale-down pointer-events-none"
                src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
                alt="Next"
              />
              <p className="mt-2">Illustrator</p>
            </li>
          </ul>
        }
      </section>
    </MainLayout>
  );
}
