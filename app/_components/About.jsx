"use client"
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.from("#about", {
        scale: 0,
        x: "-120%",
        rotate: 720,
        delay: 0,
        duration: 0.75,
        scrollTrigger: {
            trigger: "#about",
            scroller: "body",
            markers: false,
            start: "top 98%",
            end: "top 10%",
        }
    })
  })
  return (
    <div className='h-auto xl:h-[100vh] w-full sm:overflow-hidden flex flex-col md:flex-row'>
      <div id='about' className='md:w-1/2 p-4 ml-6 flex flex-col justify-center'>
        <h2 className='text-lg md:text-xl font-medium text-teal-500'>ABOUT US</h2>
        <h2 className='mt-2 text-4xl md:text-6xl font-bold text-blue-900'>A Proactive Unit Delivering Superior IT Services</h2>
        <h2 className='mt-4 text-lg md:text-xl text-gray-500'>Direct Diverse Info.Tech stands as a premier IT solutions provider in India, offering dependable IT, telemarketing, and digital marketing services, complemented by comprehensive revenue cycle management for our clients. We believe that innovation and diversity are essential drivers of change in every industry. Therefore, we foster new ideas by leveraging cutting-edge technologies and methodologies, delivering transformative solutions for businesses. Our certified team of professionals is committed to guiding clients through their digital transformation journey, providing top-notch market research, brand development, and effective revenue generation with integrity and transparency.</h2>
      </div>
      <div className='md:w-1/2'>
            <img src="2nd.jpg" alt="image1" className='object-contain w-full h-full' />
      </div>
    </div>
  )
}

export default About
