

"use client"

import React from 'react'
import SectionHeading from '@/src/components/section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/src/context/theme-context';

import './exs.css';

export default function Experience() {
    const { ref } = useSectionInView('Experience');
    const { theme } = useTheme();

    return (

        <section
      ref={ref}
      id='experience'
      className='mb-28 scroll-mt-28 sm:mb-40'
    >
      <SectionHeading>
        My Experience
      </SectionHeading>

      <VerticalTimeline lineColor={theme === "light" ? "#e2e8f0" : "#374151"}>
        {
          experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                className='vertical-timeline-element--work'
                contentStyle={{
                  background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  textAlign: "left",
                  padding: "1.5rem 2rem",
                  transition: "transform 0.3s ease-in-out",
                }}
                contentArrowStyle={{
                  borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: theme === "light" ? "#ffffff" : "rgba(255, 255, 255, 0.15)",
                  color: theme === "light" ? "#000" : "#fff",
                  fontSize: "1.5rem",
                  transition: "transform 0.3s ease-in-out",
                }}
                iconOnClick={() => alert(`Clicked on ${item.company}`)}
                iconClassName='hover:scale-110'
              >
                <h2 className='text-xl font-bold capitalize dark:text-white/75'>{item.company}</h2>
                <h3 className='font-semibold capitalize'>{item.title}</h3>
                <p className='!font-normal !mt-0'>{item.location}</p>
                <p className='!font-normal !mt-0 text-gray-700 dark:text-white/75'>{item.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))
        }
      </VerticalTimeline>
    </section>


    )
}



