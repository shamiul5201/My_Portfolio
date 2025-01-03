

"use client"

import React from 'react';
import { motion } from "framer-motion";
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from "clsx";
import { useActiveSectionContext } from '@/src/context/active-section-context';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'

export default function Header() {
    // TODO: Check if this is the landing page/homepage, then use the nomal section-based-hashed link. Otherwise, use the link-addredd based links.
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const pathname = usePathname(); // Track the current browser path
    const [currentRoute, setCurrentRoute] = useState('');

    // Based on tracking the URL-path, use the side effect to change the value of currentRoute state-variable
    useEffect(() => {
        setCurrentRoute(pathname);
    }, [pathname]);

    return (
        <header className='z-[999] relative'>
            <motion.div className="fixed top-0 left-1/2 h-[6.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>

            <nav className='flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
                <ul className='flex w-[20rem] flex-wrap items-center justify-center gap-y-0 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
                    {


                        links.map(link => (
                            <motion.li className='h-3/6 flex items-center justify-center relative' key={link.hash}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                            >
                                <Link className={clsx('flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300',
                                    {
                                        "text-gray-950 dark:text-gray-300": activeSection === link.name
                                    })}

                                    // COnditionally changing the href url based on current url-path
                                    href={
                                        currentRoute === "/" ? (
                                            link.hash
                                        ) : (
                                            link.url
                                        )
                                    }

                                    onClick={() => {
                                        setActiveSection(link.name)
                                        setTimeOfLastClick(Date.now())
                                    }}
                                >
                                    {link.name}
                                    {
                                        link.name === activeSection && (
                                            <motion.span className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
                                                layoutId='activeSection'
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30,
                                                }}
                                            ></motion.span>
                                        )
                                    }
                                </Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}
