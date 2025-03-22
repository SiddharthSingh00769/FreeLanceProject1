import React from 'react';
import { ContactUs } from './ContactUs';
import { BsFacebook } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <div className='h-auto lg:h-[70vh] w-full bg-slate-950 lg:overflow-hidden'>
      <div className='grid grid-cols-1 lg:grid-cols-2 px-2 lg:px-24 py-6 w-full h-[80%]'>
        <div className='flex flex-col justify-center items-center lg:items-start h-full'>
          <div className='text-center lg:text-start'>
            <h2 className='text-lg lg:text-xl font-medium text-teal-500'>QUERIES?</h2>
            <h2 className='mt-4 text-4xl lg:text-6xl font-bold text-blue-900'>GET IN TOUCH!</h2>
            <h2 className='mt-2 text-lg lg:text-xl text-gray-500'>Partner and Thrive in Business Together.</h2>
          </div>
          <div className='mt-9 text-center lg:text-start'>
            <h2 className='text-lg lg:text-xl font-medium text-teal-500'>Contact Us</h2>
            <div className='text-gray-500 mt-4 items-center lg:items-start'>
              <div className='flex items-center justify-center lg:justify-normal'>
                <div><BsWhatsapp  className='h-5 w-5 text-blue-900'/></div>
                <div className='ml-2 text-lg'><a href={'tel:+91-9277231954'}>+91-9277231954</a></div>
              </div>
              <div className='flex items-center justify-center mt-2'>
                <div><IoIosMail  className='h-5 w-5 text-blue-900'/></div>
                <div className='ml-2 text-lg'><a href={'mailto:directdiverseinfo@gmail.com'}>directdiverseinfo@gmail.com</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-white flex justify-center items-center mt-8 lg:mt-0'>
          <ContactUs />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-white'>
        <div className='flex justify-center items-center gap-4'>
          <a href="#"><BsFacebook className='h-6 w-6 hover:scale-125'/></a>
          <a href="https://www.instagram.com/directdiverseinfo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><LuInstagram className='h-6 w-6 hover:scale-125'/></a> 
        </div>
        <p className='text-sm lg:text-base mt-4 flex justify-center items-center gap-1'><AiOutlineCopyrightCircle className='h-5 w-5'/>Copyright 2025. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;