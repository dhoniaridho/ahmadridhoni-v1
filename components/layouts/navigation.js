import { useState } from 'react'
import {HiMenuAlt4, HiOutlineX} from 'react-icons/hi'
import Link from 'next/link'

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

    const [isCollapse, setIsCollapse] = useState(false)

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
            <div className="bg-black px-5 text-white flex h-16 justify-between place-items-center">
                <div>a</div>
                <div>
                    <button onClick={handleCollapse}>
                        <HiMenuAlt4 size="30px" />
                    </button>
                </div>
            </div>
            <div className={`fixed flex justify-between flex-col transition-all duration-300 ${isCollapse ? 'w-3/4' : 'w-0'} top-0 left-0 h-screen bg-black`}>
            <div className="h-16 flex justify-end place-items-center px-5">
                    <button onClick={handleClose}>
                        <HiOutlineX size="30px" />
                    </button>
                </div>
                <div className="h-16 flex justify-center place-items-center">
                    <ul className="text-white">
                        {navigations.map((n, i)=> {
                            return(
                                <li key={i}>
                                    <Link href={n.href}>
                                        <a>{n.name}</a>
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
            <div className={`transform transition-all duration-300 ${isCollapse ? 'translate-x-0' : 'translate-x-full'} fixed flex justify-between flex-col top-0 right-0 w-1/4 h-screen bg-pink-500`}>
                <div className="h-16 flex justify-end place-items-center px-5">
                    <button onClick={handleClose}>
                        <HiOutlineX size="30px" />
                    </button>
                </div>
                <div className="h-16 flex justify-end place-items-center flex-1">a</div>
            </div>
        </nav>
    )
}