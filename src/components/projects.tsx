'use client'

import React from 'react'
import SectionHeading from '@/src/components/section-heading'
import { projectsData } from '@/lib/data'
import Project from '@/src/components/project'
import { useSectionInView } from '@/lib/hooks'
import Link from 'next/link'
import { AiFillEye } from "react-icons/ai";

export default function Projects() {
    const { ref } = useSectionInView('Projects', 0.5);

    return (
        <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
            <SectionHeading>
                <Link href='/projects'>My Projects</Link>
            </SectionHeading>
            <div>
                {
                    

                    // Show only first 2 projects
                    (() => {
                        const newArray = [];
                        for (let index = 0; index < 3; index++) {
                            const project = projectsData[index];
                            newArray.push(
                                <React.Fragment key={index}>
                                    <Project {...project} />
                                </React.Fragment>
                            );
                        }
                        return newArray;
                    })()
                }
            </div>
            <Link className="group bg-white px-7 py-3 mt-7 max-w-48 flex items-center justify-center gap-3 rounded-full outline-none focus:scale-[1.2] hover:scale-[1.2] active:scale-[1.1] transition cursor-pointer borderBlack-2 dark:bg-white/10 dark:hover:bg-white/15 mb-1 sm:mb-0 opacity-80 hover:opacity-90 mx-auto" href='/projects'>
                Show More
                <AiFillEye className='mt-[.15rem] opacity-30 group-hover:scale-150 group-hover:opacity-60 transition duration-300' />
            </Link>
        </section>
    )
}

