import MainLayout from "~/components/layouts/main-layout";
import Me from '../assets/images/me.jpg'
import { BiCodeAlt } from 'react-icons/bi'
import { SiMaterialdesign } from 'react-icons/si'
import { FaPhotoVideo } from 'react-icons/fa'

export default function About() {
    return(
        <MainLayout>
            <div className="min-h-screen text-white bg-gray-900 flex flex-col md:flex-row md:justify-between">
                <div className="w-full md:w-1/2 pointer-events-none">
                    <img alt="dhoniaridho" className="h-full object-cover" src={Me.src} />
                </div>
                <div className="w-full md:w-1/2 my-16 relative">
                    <div className="px-10">
                        <h1 className="text-8xl absolute text-gray-700 opacity-80 -mt-10 font-bold whitespace-nowrap">About</h1>
                        <h1 className="text-6xl relative">About <span className="bg-gradient-to-tr text-transparent bg-clip-text from-pink-600 font-semibold to-white">Me</span></h1>
                        <p className="text-sm w-3/4 my-6 select-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, sed sapien, sit scelerisque enim maecenas semper. Orci magna id bibendum quam eu mauris, sem morbi aliquam. Pharetra, consectetur netus pharetra mi at id. Lacus nisl cras praesent lorem a id facilisi.
                        </p>
                        <p className="text-xs text-gray-200">
                            @dhoniaridho
                        </p>
                    </div>
                    <div className="mx-10 mt-20 relative">
                        <h1 className="text-8xl absolute text-gray-700 opacity-80 -mt-10 font-bold">Skills</h1>
                        <h1 className="text-4xl font-extralight relative">My Skills</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                            <div className="w-full h-full bg-black hover:bg-indigo-800 p-5">
                                <div className="h-32">
                                    <BiCodeAlt size="100px" />
                                </div>
                                <h1 className="text-xl">Web Development</h1>
                            </div>
                            <div className="w-full h-full bg-black hover:bg-indigo-800 p-5">
                                <div className="h-32">
                                    <SiMaterialdesign size="100px" />
                                </div>
                                <h1 className="text-xl">Graphic Design</h1>
                            </div>
                            <div className="w-full h-full bg-black hover:bg-indigo-800 p-5">
                                <div className="h-32">
                                    <FaPhotoVideo size="100px" />
                                </div>
                                <h1 className="text-xl">Motion Graphic</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}