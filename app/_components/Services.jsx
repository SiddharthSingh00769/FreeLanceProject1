"use client"
import React from 'react'
import { FaComputer } from "react-icons/fa6";
import { ImHeadphones } from "react-icons/im";
import { MdPersonSearch } from "react-icons/md";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { FaHandHoldingMedical } from "react-icons/fa6";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Services() {
  useGSAP(() => {
      gsap.from("#webdev", {
        scale: 0,
        opacity: 0,
        x: "-120%",
        delay: 0,
        duration: 0.75,
        scrollTrigger: {
            trigger: "#webdev",
            scroller: "body",
            markers: false,
            start: "top 98%",
            end: "top 10%",
        }
    }),
      gsap.from("#telemarketing", {
        scale: 0,
        opacity: 0,
        x: "120%",
        delay: 0,
        duration: 0.75,
        scrollTrigger: {
            trigger: "#webdev",
            scroller: "body",
            markers: false,
            start: "top 98%",
            end: "top 10%",
        }
    }),
      gsap.from("#digitalmarketing", {
        scale: 0,
        opacity: 0,
        y: "-120%",
        delay: 0,
        duration: 0.75,
        scrollTrigger: {
            trigger: "#webdev",
            scroller: "body",
            markers: false,
            start: "top 98%",
            end: "top 10%",
        }
    }),
      gsap.from("#it", {
        scale: 0,
        opacity: 0,
        y: "-120%",
        delay: 0,
        duration: 0.75,
        scrollTrigger: {
            trigger: "#webdev",
            scroller: "body",
            markers: false,
            start: "top 98%",
            end: "top 10%",
        }
    }),
    gsap.from("#medical", {
        scale: 0,
        opacity: 0,
        y: "-120%",
        delay: 0,
        duration: 0.75,
        scrollTrigger: {
            trigger: "#webdev",
            scroller: "body",
            markers: false,
            start: "top 98%",
            end: "top 10%",
        }
    })
  })
  return (
    <div className='h-auto xl:h-[100vh] w-full bg-blue-950 sm:overflow-hidden flex flex-col-reverse xl:flex-row'>
      <div className='w-full xl:w-[74%] p-4 grid grid-cols-1 lg:grid-cols-4 gap-4'>
        <div id='webdev' className='min-h-[18rem] min-w-[12rem] bg-teal-500 rounded-xl lg:row-span-2 flex flex-col justify-center items-center p-4'>
            <div><FaComputer className='h-[4rem] w-[4rem]'/></div>
            <div className='text-2xl font-bold'>WEB DEVELOPMENT</div>
            <div className='text-base text-center px-4'>Imagine a modern online platform designed specifically for your business, where creativity meets functionality. Our goal is to bring your vision to life by creating an interface that captivates users and enhances their experience. With a focus on intuitive navigation and engaging features, we will ensure that every interaction is seamless and enjoyable. Let us collaborate to transform your ideas into a compelling digital reality that fosters engagement and drives success.</div>
        </div>
        <div id='telemarketing' className='min-h-[18rem] min-w-[12rem] bg-teal-500 rounded-xl lg:col-span-3 flex flex-col justify-center items-center p-4'>
            <div><ImHeadphones className='h-[4rem] w-[4rem]'/></div>
            <div className='text-2xl font-bold'>TELEMARKETING</div>
            <div className='text-base text-center px-4'>Unlock the full potential of your growing business by leveraging compelling selling propositions and a strategic lead generation approach. By clearly articulating the unique benefits of your products or services, you can effectively capture the attention of your target audience. Our tailored strategies focus on identifying and nurturing leads, ensuring that you not only attract potential customers but also convert them into loyal clients. With a well-defined plan in place, you can enhance your market presence and drive sustainable growth, positioning your business for long-term success.</div>
        </div>
        <div id='it' className='min-h-[18rem] min-w-[12rem] bg-teal-500 rounded-xl flex flex-col justify-center items-center'>
            <div><MdPersonSearch className='h-[4rem] w-[4rem]'/></div>
            <div className='text-2xl font-bold'>IT RECRUITMENT</div>
            <div className='text-base text-center px-4'>Enhance your business by merging IT recruitment with digital marketing. We attract top talent and improve your online presence through SEO, PPC, and social media. Partner with us to unlock new growth opportunities.</div>
        </div>
        <div id='digitalmarketing' className='min-h-[18rem] min-w-[12rem] bg-teal-500 rounded-xl flex flex-col justify-center items-center'>
            <div><SiAmazonsimpleemailservice className='h-[4rem] w-[4rem]'/></div>
            <div className='text-2xl font-bold'>DIGITAL MARKETING</div>
            <div className='text-base text-center px-4'>Transform your business with our digital solutions for sustainable growth. We streamline operations and boost customer engagement, ensuring your success. Partner with us for lasting profitability.</div>
        </div>
        <div id='medical' className='min-h-[18rem] min-w-[12rem] bg-teal-500 rounded-xl flex flex-col justify-center items-center'>
            <div><FaHandHoldingMedical  className='h-[4rem] w-[4rem]'/></div>
            <div className='text-2xl font-bold text-center'>AND MORE...</div>
            <div className='text-base text-center px-4'></div>
        </div>
      </div>
      <div className='xl:w-[26%] p-4 flex flex-col justify-center'>
        <h1 className='text-lg md:text-xl font-medium text-red-400 mt-2 sm:mt-16 text-center xl:text-left'>Services</h1>
        <h1 className='mt-1 text-4xl md:text-4xl font-bold text-white text-center xl:text-left'>Innovative, Agile & Varied</h1>
        <h1 className='mt-4 text-lg md:text-xl text-white text-center xl:text-left'>Utilizing top resources and industry expertise, we are dedicated to transforming your organization and elevating it to new heights. Our commitment to excellence drives us to provide tailored services in telemarketing, IT solutions, digital marketing, market research, website development, and revenue management for healthcare entities, ensuring we exceed your expectations and enhance your operational efficiency.</h1>
      </div>
    </div>
  )
}

export default Services