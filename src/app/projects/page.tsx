import React from 'react'
import { projectsData } from '@/lib/data'
import SectionHeading from '@/src/components/section-heading'
import Project from '@/src/app/projects/[projectSlug]/project';


export default function Projects() {
    return (
        <section
            className='flex flex-col items-center px-4 min-h-screen mb-20 sm:mb-28 scroll-mt-28'>
            <SectionHeading>
                <div>My Projects</div>
            </SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}

