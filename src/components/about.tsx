"use client";

import React from 'react';
import SectionHeading from '@/src/components/section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView('About');

    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>
                <p>About Me</p>
            </SectionHeading>
            <p className="mb-6">
                Hi, I am a <span className="font-medium">Computer Vision and AI Engineer</span>, passionate about turning 
                innovative ideas into impactful real-world solutions. I specialize in developing intelligent systems 
                that address complex challenges in industries such as <span className="italic">healthcare</span>, 
                <span className="italic">security</span>, <span className="italic">automation</span>, and 
                <span className="italic">environmental protection</span>.
            </p>
            <p className="mb-6">
                Over the years, I’ve honed my expertise in <span className="font-medium">Computer Vision</span> and 
                <span className="font-medium">Deep Learning</span>, mastering tools like OpenCV, PyTorch, and TensorFlow. 
                My focus areas include <span className="italic">pose estimation</span>, 
                <span className="italic">object detection</span>, <span className="italic">OCR</span>, and 
                <span className="italic">facial recognition</span>. I am skilled in handling complex 
                <span className="font-medium">image processing</span> tasks like segmentation, classification, and tracking.
            </p>
            <p className="mb-6">
                My journey began as a <span className="font-medium">Software Engineer</span> specializing in 
                Flutter-based mobile app development. Driven by a passion for solving real-world problems, I transitioned 
                to AI and Computer Vision, where I now focus on creating scalable and impactful solutions that bridge 
                cutting-edge technology with practical applications.
            </p>
            <p className="mb-6">
                Through my work, I’ve learned that while demonstrating an AI project may seem straightforward, the real 
                challenge—and reward—lies in transforming innovative concepts into robust, real-world systems. This ability 
                to navigate complexity has allowed me to deliver meaningful solutions to industry challenges.
            </p>
            <p>
                <span className="font-bold">🤝 Let’s Connect:</span> I’m always eager to collaborate with like-minded 
                professionals, exchange ideas, and work on projects that push boundaries. Whether you’re exploring 
                cutting-edge AI innovations or seeking solutions to complex problems, feel free to reach out. Together, 
                we can shape the future of AI.
            </p>
        </motion.section>
    );
}
