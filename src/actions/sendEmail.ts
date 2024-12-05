"use server"

import React from 'react'
import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend("re_JAupTaAX_HaKvyMbGsxWUSynShP1rP6V6");

export const sendEMail = async (formData: FormData) => {
    console.log("Running on server");
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email"
        }
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message"
        }
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "shamislamnoyon@gmail.com",
            subject: "Message from portfolio contact form",
            reply_to: senderEmail as string,
            // text: message as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            })
        });
    } catch (error: unknown) {
        // Gracefully handling error
        console.log("Email error:", error);
        return {
            error: getErrorMessage(error)
        };
    }
    return {
        data
    };
}