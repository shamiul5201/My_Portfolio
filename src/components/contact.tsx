"use client"

import React, { useState } from 'react'
import SectionHeading from '@/src/components/section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEMail } from '@/src/actions/sendEmail'
import SubmitBtn from '@/src/components/submit-btn'
import toast from 'react-hot-toast'


export default function Contact() {
    const { ref } = useSectionInView('Contact');

    const [formData, setFormData] = useState({
        senderEmail: '',
        message: ''
    });

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <motion.section
            ref={ref}
            id='contact'
            className='mb-20 scroll-mt-28 sm:mb-28 w-[min(100%,38rem)] text-center'
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true
            }}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me at <a className='font-semibold underline' href="mailto:shamislamnoyon@gmail.com">shamislamnoyon@gmail.com</a> or through this form.</p>

            <form className='mt-10 flex flex-col dark:text-black' action={async (formData) => {
                console.log("Running on client");
                const { data, error } = await sendEMail(formData);

                if (error) {
                    toast.error(error)
                    return;
                } else {
                    toast.success("Email sent successfully!");
                    // Reset form data after successful email sending
                    setFormData({
                        senderEmail: '',
                        message: ''
                    });
                }
            }}>
                <input
                    type="email"
                    name='senderEmail'
                    className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
                    value={formData.senderEmail}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    placeholder='Your email'
                />
                <textarea
                    className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={5000}
                    placeholder='Your message'
                />
                <SubmitBtn />
            </form>
        </motion.section>
    )
}
