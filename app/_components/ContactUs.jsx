"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m5trpb1', 'template_kqwan9w', form.current, {
        publicKey: '-_cRKi8syZZUQ1ouL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message sent successfully!"); // Alert on success
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast("Failed to send message. Please try again."); // Alert on failure
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-2 '>
      <div className='flex items-center gap-3'> 
        <label className='text-xl'>Name:</label>
        <input type="text" name="user_name" className='border border-white rounded-lg h-10 w-56 md:w-96 p-2' placeholder='Full Name'/>
      </div> 
      <div className='flex items-center gap-4'>
        <label className='text-xl'>Email:</label>
        <input type="email" name="user_email" className='border border-white rounded-lg h-10 w-56 md:w-96 p-2' placeholder='Email' />
      </div>
      <label className='text-xl'>Message:</label>
      <textarea name="message" className='border border-white rounded-lg h-20 w-[18rem] md:w-[28rem] p-2' placeholder='Enter your message...' />
      <input type="submit" value="Send" className='mt-2 p-4 px-6 sm:px-8 lg:px-12 text-sm sm:text-lg lg:text-xl border rounded-4xl bg-teal-500 text-white font-semibold cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-900'/>
    </form>
  );
};