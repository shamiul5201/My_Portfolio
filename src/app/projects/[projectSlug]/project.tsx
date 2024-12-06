"use client"

import React from 'react'
import Link from 'next/link'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { AiFillEye } from 'react-icons/ai';

const fadeInFromLeftAnimationVariants = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: {
        opacity: 1,
        x: 0,
    }
};

const fadeInFromRightAnimationVariants = {
    initial: {
        opacity: 0,
        x: 100,
    },
    animate: {
        opacity: 1,
        x: 0,
    }
};

type ProjectProps = (typeof projectsData)[number]

export default function Project({ title, slug, projectThumbnailBrief, thumbnailImageUrl, projectSnaps }: ProjectProps) {
    const projectSnapLength = projectSnaps.length;
    return (
        <div className='max-w-[60rem] mt-10 mb-3 sm:mb-28 last:mb-0'>
            <Link href={`/projects/${slug}`}>
                <motion.section
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 2,
                    }}
                    viewport={{
                        once: true
                    }}
                >
                    <div>
                        <h1 className='text-3xl font-bold'>{title}</h1>
                    </div>
                    <div>
                        <h3 className='font-semibold mt-2'>{projectThumbnailBrief}</h3>
                    </div>
                    <div className={`flex flex-col sm:flex-row ${projectSnapLength > 1 ? 'justify-between' : 'justify-center'} mt-8 gap-10`}>
                        {projectSnaps.map((snaps, index) => {
                            const animationVariants = index % 2 === 0 ? fadeInFromLeftAnimationVariants : fadeInFromRightAnimationVariants;
                            return (
                                <React.Fragment key={index}>
                                    <motion.div
                                        variants={animationVariants}
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{
                                            once: true,
                                        }}>
                                        <Image
                                            src={snaps}
                                            alt='Project Snapshot'
                                            quality={95}
                                            className='w-[30rem] h-[18rem] rounded-lg shadow-xl hover:scale-105 transition' />
                                    </motion.div>
                                </React.Fragment>
                            )
                        })}
                    </div>

                    <button className="group bg-white px-7 py-3 mt-8 max-w-48 flex items-center justify-center gap-3 rounded-full outline-none focus:scale-[1.2] hover:scale-[1.2] active:scale-[1.1] transition cursor-pointer borderBlack-2 dark:bg-white/10 dark:hover:bg-white/15 mb-1 sm:mb-0 opacity-80 hover:opacity-90 mx-auto">
                        View Detail
                        <AiFillEye className='mt-[.15rem] opacity-30 group-hover:scale-150 group-hover:opacity-60 transition duration-300' />
                    </button>
                </motion.section>
            </Link>
        </div>
    )
}
