import MainLayout from "~/components/layouts/main-layout";
import Me from "../assets/images/me.jpg";
import { BiCodeAlt } from "react-icons/bi";
import { SiMaterialdesign } from "react-icons/si";
import { FaPhotoVideo } from "react-icons/fa";
import Graph from "../assets/images/graph.png";

export default function About() {
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
      <section className="min-h-screen text-white bg-black flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-1/2 pointer-events-none">
          <img alt="dhoniaridho" className="h-full object-cover" src={Me.src} />
        </div>
        <div className="w-full md:w-1/2 my-16 relative">
          <div className="px-10">
            <h1 className="text-8xl absolute text-gray-700 opacity-50 -mt-10 font-bold whitespace-nowrap">
              About
            </h1>
            <h1 className="text-6xl relative">
              About{" "}
              <span className="bg-gradient-to-tr text-transparent bg-clip-text from-pink-600 font-semibold to-white">
                Me
              </span>
            </h1>
            <p className="text-sm w-3/4 my-6 select-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae,
              sed sapien, sit scelerisque enim maecenas semper. Orci magna id
              bibendum quam eu mauris, sem morbi aliquam. Pharetra, consectetur
              netus pharetra mi at id. Lacus nisl cras praesent lorem a id
              facilisi.
            </p>
            <p className="text-xs text-gray-200">@dhoniaridho</p>
          </div>
          <div className="mx-10 mt-20 relative">
            <h1 className="text-8xl absolute text-gray-700 opacity-50 -mt-10 font-bold">
              Skills
            </h1>
            <h1 className="text-4xl relative">Basic Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
              <div className="w-full h-full bg-gray-900 hover:bg-indigo-800 p-5">
                <div className="h-32">
                  <BiCodeAlt size="100px" />
                </div>
                <h1 className="text-xl">Web Development</h1>
              </div>
              <div className="w-full h-full bg-gray-900 hover:bg-indigo-800 p-5">
                <div className="h-32">
                  <SiMaterialdesign size="100px" />
                </div>
                <h1 className="text-xl">Graphic Design</h1>
              </div>
              <div className="w-full h-full bg-gray-900 hover:bg-indigo-800 p-5">
                <div className="h-32">
                  <FaPhotoVideo size="100px" />
                </div>
                <h1 className="text-xl">Motion Graphic</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white">
        <div className="flex flex-col md:flex-row md:justify-between px-7 md:px-20 py-16">
          <div className="w-1/2">
            <p className="text-sm text-gray-400 mb-2 uppercase">
              Say hello world to me
            </p>
            <h1 className="text-8xl uppercase absolute text-gray-700 opacity-50 -mt-10 font-bold">
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
          <div className="flex justify-center place-items-center">
            <img draggable={false} className="w-1/2" src={Graph.src} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-gray-900 text-white px-5 md:px-20 py-16">
        <div className="flex justify-center place-items-center">
          <div className="text-center">
            <h1 className="text-4xl">What i do</h1>
            <p className="font-light mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              iure dolor accusamus accusantium officia! Neque voluptatibus
              labore voluptatum architecto, a dolorem mollitia repellendus,
              sequi ad omnis, rerum facilis distinctio consectetur.
            </p>
          </div>
        </div>
          <ul className="grid grid-cols-5 gap-4 text-center mt-5">
              <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
                  <img className="h-32 object-cover pointer-events-none" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png" alt="" />
                  <p className="mt-2">HTML</p>
              </li>
              <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
                  <img className="h-32 object-cover pointer-events-none" src="https://sujanbyanjankar.com.np/wp-content/uploads/2019/01/React.js_logo-512.png" alt="" />
                  <p className="mt-2">React JS</p>
              </li>
              <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
                  <img className="h-32 object-cover pointer-events-none" src="https://w7.pngwing.com/pngs/604/592/png-transparent-css3-cascading-style-sheets-logo-html-beautify-blue-angle-text-thumbnail.png" alt="" />
                  <p className="mt-2">CSS</p>
              </li>
              <li className="p-2 flex justify-center flex-col place-items-center bg-gray-900">
                  <img className="h-32 object-cover pointer-events-none" src="https://iconape.com/wp-content/png_logo_vector/tailwind-css-logo.png" alt="" />
                  <p className="mt-2">HTML</p>
              </li>
              <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
                  <img className="h-32 object-cover pointer-events-none" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png" alt="" />
                  <p className="mt-2">HTML</p>
              </li>
              <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
                  <img className="h-32 object-cover pointer-events-none" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png" alt="" />
                  <p className="mt-2">HTML</p>
              </li>
              <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
                  <img className="h-32 object-cover pointer-events-none" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png" alt="" />
                  <p className="mt-2">HTML</p>
              </li>
              <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
                  <img className="h-32 object-cover pointer-events-none" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png" alt="" />
                  <p className="mt-2">HTML</p>
              </li>
              <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
                  <img className="h-32 object-cover pointer-events-none" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png" alt="" />
                  <p className="mt-2">HTML</p>
              </li>
              <li className="p-5 flex justify-center flex-col place-items-center bg-gray-900">
                  <img className="h-32 object-cover pointer-events-none" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png" alt="" />
                  <p className="mt-2">HTML</p>
              </li>
          </ul>
      </section>
    </MainLayout>
  );
}
