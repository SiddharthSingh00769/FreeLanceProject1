import React from 'react';
import { ContactUs } from './ContactUs';
import { BsFacebook } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";

function Footer() {
  return (
    <div className='h-auto lg:h-[70vh] w-full bg-slate-950 lg:overflow-hidden'>
      <div className='grid grid-cols-1 lg:grid-cols-2 px-2 lg:px-24 py-6 w-full h-[80%]'>
        <div className='flex flex-col justify-center items-center lg:items-start h-full'>
          <h2 className='text-lg lg:text-xl font-medium text-teal-500'>QUERIES?</h2>
          <h2 className='mt-2 text-4xl lg:text-6xl font-bold text-blue-900'>GET IN TOUCH!</h2>
          <h2 className='mt-4 text-lg lg:text-xl text-gray-500'>Partner and Thrive in Business Together.</h2>
        </div>
        <div className='text-white flex justify-center items-center mt-5 lg:mt-0'>
          <ContactUs />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-white'>
        <div className='flex justify-center items-center gap-4'>
          <a href="#"><BsFacebook className='h-6 w-6'/></a>
          <a href="#"><LuInstagram className='h-6 w-6'/></a> 
        </div>
        <p className='text-sm lg:text-base mt-4'>Copyright 2025. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;