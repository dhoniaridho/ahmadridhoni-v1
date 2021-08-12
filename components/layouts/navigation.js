import { useState } from 'react'
import { HiMenuAlt3, HiOutlineX, HiMail, HiMenuAlt4, HiArrowRight } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Logo from '~/components/brands/logo'

const navigations = [
    {
        name: 'home',
        href: '/'
    },
    {
        name: 'portfolio',
        href: '/portfolio'
    },
    {
        name: 'contact',
        href: '/contact'
    },
]

export default function Navigation() {

    const { asPath } = useRouter()
    const [isCollapse, setIsCollapse] = useState(false)
    const [isNavHover, setIsNavHover] = useState(false)

    const handleCollapse = ()=> {
        document.body.style.overflow = 'hidden'
        setIsCollapse(true)
    }
    const handleClose = ()=> {
        document.body.style.overflow = 'auto'
        setIsCollapse(false)
    }

    return(
        <nav>
            <div className="bg-black overflow-hidden px-5 text-white flex h-16 justify-between place-items-center">
                <div>
                    <Logo />
                </div>
                <div>
                    <button onClick={handleCollapse}>
                        <HiMenuAlt4 size="30px" />
                    </button>
                </div>
            </div>
            <div className={`fixed z-50 text-white flex justify-between flex-col transition-all ease-out duration-300 ${isCollapse ? 'w-3/4' : 'delay-300 w-0'} top-0 left-0 overflow-hidden h-screen bg-black`}>
            <div className="h-16 flex justify-start place-items-center px-5">
                    <Logo />
                </div>
                <div className="overflow-hidden flex w-full place-items-center justify-start">
                    <ul className="text-white ml-28">
                        {navigations.map((n, i)=> {
                            return(
                                <li className={`text-6xl overflow-hidden transform transition-all ${isCollapse ? 'opacity-100 translate-y-0 duration-700' : 'opacity-0 translate-y-full'}`} key={i}>
                                    <Link href={n.href}>
                                        <a onClick={handleClose} onMouseOver={()=>setIsNavHover({[i]: true})} onMouseOut={()=>setIsNavHover({[i]: false})}  className={`transition-all hover:text-pink-500 ${isNavHover[i] ? 'tracking-widest' : ''} ${asPath === n.href && 'text-pink-500'}`}>{n.name}</a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="h-16 flex justify-center place-items-center">
                    <p className="text-sm text-white text-center whitespace-nowrap">&copy;{new Date().getFullYear()} dhoniaridho. All Rights Reserved</p>
                </div>
            </div>
            <div className={`z-50 transform transition-all duration-300 ${isCollapse ? 'translate-x-0' : 'translate-x-full delay-300'} fixed flex justify-between flex-col top-0 right-0 w-1/4 h-screen bg-pink-500`}>
                <div className="h-16 flex justify-end place-items-center px-5">
                    <button className={`p-1 bg-black  text-white rounded-full transform transition-all ${isCollapse ? 'scale-100' : 'scale-0'}`} onClick={handleClose}>
                        <HiOutlineX size="30px" />
                    </button>
                </div>
                <div className="flex justify-center place-items-center flex-1">
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <li className="col-span-3">
                            <h1 className="text-lg font-medium uppercase tracking-widest text-white">Social</h1>
                            <div className="border-4 -mt-4 w-1/2 border-indigo-600"></div>
                        </li>
                        <li>
                            <a href="http://facebook.com/dhoniaridho" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size="30px" />
                            </a>
                        </li>
                        <li>
                            <a href="http://instagram.com/dhoniaridho" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size="30px" />
                            </a>
                        </li>
                        <li>
                            <a href="http://www.linkedin.com/in/ahmad-ridhoni-921a6b205" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size="30px" />
                            </a>
                        </li>
                        <li>
                            <a href="http://github.com/dhoniaridho" target="_blank" rel="noopener noreferrer">
                                <FaGithub size="30px" />
                            </a>
                        </li>
                        <li className="col-span-2">
                            <a href="mailto:dhoniaridho@gmail.com">
                                <HiMail size="30px" />
                            </a>
                        </li>
                        <li className="col-span-3 text-white font-semibold text-xl hover:text-gray-800">
                            <a href="http://dhoniaridho.vercel.app" target="_blank" rel="noopener noreferrer">
                            <p className="flex place-items-center hover:translate-x-2 transform transition-transform">Resume<div className="ml-2"><HiArrowRight /></div> </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}