"use client"
import { useState } from "react"
import Link from "next/link"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { usePathname } from "next/navigation"

const Nav = () => {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav>
            <div className="bg-white grid lg:grid-cols-[200px_minmax(400px,_1fr)_200px] grid-cols-[1fr_50px] items-center lg:px-28 px-4 py-5 h-24">
                <Link href="/">
                    <p className="text-2xl font-bold text-black">Cleaner</p>
                </Link>
                <div className="justify-self-start lg:pl-16 hidden lg:flex items-center justify-center gap-2 md:gap-8">
                    <Link className={pathName === "/home" ? "" : "text-black"} href='/home'>Home</Link>
                    <Link className={pathName === "/our-services" ? "" : "text-black"} href='/our-services'>Our Services</Link>
                    <Link className={pathName === "/locations" ? "" : "text-black"} href='/locations'>Locations</Link>
                    <Link className={pathName === "/jobs" ? "" : "text-black"} href='/jobs'>Jobs</Link>
                    <Link className={pathName === "/contact-us" ? "" : "text-black"} href='/contact-us'>Contact Us</Link>
                </div>
                <Link href="/request" className="hidden lg:flex">
                    <button className="bg-primary-700 text-white font-medium p-5 h-14 w-72 text-base rounded-lg">Request An Estimate</button>
                </Link>
                <div className='lg:hidden flex justify-self-end cursor-pointer'>
                    {isOpen ? (
                        <XMarkIcon className='h-6 w-6' onClick={() => setIsOpen(false)} />
                    ) : (
                        <Bars3Icon className='h-6 w-6' onClick={() => setIsOpen(true)} />
                    )}
                </div>
            </div>
            <div className={`block lg:hidden fixed h-64 -mt-4  transform left-0 w-full bg-white transition-transform duration-300 ease-in-out overflow-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:justify-self-start lg:pl-32 lg:flex lg:items-center lg:justify-center lg:gap-2 lg:md:gap-8 lg:bg-transparent`}>
                <div className="flex flex-col space-y-5 ml-5">
                    <Link className="text-black" href='/home'>Home</Link>
                    <Link className="text-black" href='/our-services'>Our Services</Link>
                    <Link className="text-black" href='/locations'>Locations</Link>
                    <Link className="text-black" href='/jobs'>Jobs</Link>
                    <Link className="text-black" href='/contact-us'>Contact Us</Link>
                    <Link className="text-black" href="/join">
                        {/* <Button buttonType="primary" size="large" width="standard" label="Join The Waitlist" /> */}
                    </Link>
                </div>
            </div>
        </nav>

    )
}

export default Nav