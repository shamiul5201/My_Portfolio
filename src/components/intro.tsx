"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/src/context/active-section-context';
import myDP from "@/public/my-dp.png";

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5);
    const {
        setActiveSection,
        setTimeOfLastClick,
    } = useActiveSectionContext();

    return (
        <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] mt-16 sm:mt-0'>
            <div className="flex items-center justify-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2
                        }}
                    >
                        <Image
                            src={myDP}
                            alt='Sample portrait'
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className='h-40 w-40 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />

                    </motion.div>

                </div>
            </div>


            <motion.h1
                className="mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <span className="font-bold">Hi, I&apos;m Shamiul Islam</span>—a passionate Computer Vision and AI Engineer turning 
                complex challenges into cutting-edge solutions. I transform innovation into impact, building intelligent 
                systems that shape the future. <span className="font-medium">Let&apos;s create something extraordinary.</span>
            </motion.h1>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-4 px-6 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Link href="#contact" className='group bg-gray-900 text-white px-8 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition mb-3 sm:mb-0'
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here
                    <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                </Link>
                <a className="group bg-white px-8 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-gray-900 dark:bg-white/10 dark:hover:bg-white/15 mb-3 sm:mb-0" href='/SHAMIUL_ISLAM.pdf' download>
                    Download Resume <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                </a>
                <div className='flex flex-row items-center justify-center gap-6 sm:gap-3'>
                    <a className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-gray-900 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/15 dark:hover:text-white/70'
                        href='https://www.linkedin.com/in/sham-islam' target='_blank'>
                        <BsLinkedin />
                    </a>
                    <a className='bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-gray-900 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/15 dark:hover:text-white/70' href='https://github.com/shamiul5201' target='_blank'>
                        <FaGithubSquare />
                    </a>
                </div>
            </motion.div>

        </section>
    );
}
