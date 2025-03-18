'use client'
import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { CiMenuBurger } from 'react-icons/ci';
import { IoCloseSharp } from 'react-icons/io5';

const NavHome = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='w-full sm:overflow-hidden'>
            <nav className='p-4 flex bg-white justify-between items-center'>
                <a className='flex gap-2 items-center' href="#home" id='brand'>
                    <img className='object-cover w-16 h-16 lg:w-20 lg:h-20 xl:h-24 xl:w-24' src="ddi.jpg" alt="logo" />
                    <span className='text-xl lg:text-xl font-semibold'>DIRECT DIVERSE INFO.TECH</span>
                </a>
                <div className={`hidden lg:flex lg:gap-4 xl:gap-8`} id='nav-menu'>
                    <a href="#home" className='lg:text-xl font-extrabold text-teal-500'>Home</a>
                    <a href="#about" className='lg:text-xl font-medium transition-colors duration-200 ease-in-out hover:text-teal-500'>About</a>
                    <a href="#services" className='lg:text-xl font-medium transition-colors duration-200 ease-in-out hover:text-teal-500'>Services</a>
                    <a href="#slider" className='lg:text-xl font-medium transition-colors duration-200 ease-in-out hover:text-teal-500'>Testimonials</a>
                    <a href="#footer" className='lg:text-xl font-medium transition-colors duration-200 ease-in-out hover:text-teal-500'>Contact Us</a>
                </div>
                <button className='hidden md:flex items-center gap-1 p-4 border rounded-4xl bg-teal-500 text-white font-semibold cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-900'>
                    <div><FaPhoneAlt /></div>
                    <a href={'tel:+91-9305263665'}>+19294438299</a>
                </button>
                <button className='p-2 lg:hidden cursor-pointer' onClick={handleMenu}>
                    <CiMenuBurger className='text-gray-600 text-2xl'/>
                </button>
                {isMenuOpen && (
                    <div id='nav-dialog' className='fixed bg-white inset-0 p-4 z-50'>
                        <div className='flex justify-between'>
                            <a className='flex gap-2 items-center' href="#home" id='brand'>
                                <img className='object-cover w-16 h-16 lg:w-20 lg:h-20 xl:h-24 xl:w-24' src="ddi.jpg" alt="logo" />
                                <span className='text-xl lg:text-xl font-semibold'>DIRECT DIVERSE INFO.TECH</span>
                            </a>
                            <button className='p-2 lg:hidden cursor-pointer' onClick={handleMenu}>
                                <IoCloseSharp className='text-gray-600 text-2xl'/>
                            </button>
                        </div>
                        <div className='flex flex-col mt-10 items-center gap-10'>
                            <a href="#home" className='text-4xl font-extrabold text-teal-500' onClick={closeMenu}>Home</a>
                            <a href="#about" className='text-4xl font-medium' onClick={closeMenu}>About</a>
                            <a href="#services" className='text-4xl font-medium' onClick={closeMenu}>Services</a>
                            <a href="#slider" className='text-4xl font-medium' onClick={closeMenu}>Testimonials</a>
                            <a href="#footer" className='text-4xl font-medium' onClick={closeMenu}>Contact Us</a>
                        </div>
                    </div>
                )}
            </nav>
            <div className='mt-2 flex flex-col-reverse md:flex md:flex-row'>
                <div className='md:w-1/2 p-4 ml-6'>
                    <h1 className='text-lg md:text-xl font-medium text-teal-500 mt-2 sm:mt-16 motion-translate-x-in-[43%] motion-translate-y-in-[0%] motion-duration-[1500ms] motion-delay-[1000ms] motion-delay-[0ms]/translate'>We're Happy to Have You!</h1>
                    <h1 className='mt-2 text-4xl md:text-6xl font-bold text-blue-900 motion-translate-x-in-[43%] motion-translate-y-in-[0%] motion-duration-[1500ms] motion-delay-[1000ms] motion-delay-[0ms]/translate'>IT | ITES | BPO</h1>
                    <h1 className='mt-4 text-lg md:text-xl text-gray-500 motion-scale-in-[0.01] motion-opacity-in-[0%] motion-duration-[1000ms] motion-delay-[2000ms] motion-delay-[0ms]/scale motion-delay-[1200ms]/opacity motion-ease-spring-bouncier'>Boost your business by selecting the appropriate assets and industry knowledge offered by Diverse Line Impex Private Limited. Our all-encompassing platform delivers dependable IT and digital marketing solutions, along with effective revenue cycle management services.</h1>
                    <div className='mt-6 flex gap-8'>
                        <button className='p-4 px-6 sm:px-8 lg:px-12 text-sm sm:text-lg lg:text-xl border rounded-4xl bg-teal-500 text-white font-semibold cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-900 motion-translate-x-in-[-151%] motion-translate-y-in-[59%] motion-duration-[2000ms] motion-delay-[1000ms] motion-delay-[0ms]/translate'>ABOUT US</button>
                        <button className='p-4 px-6 sm:px-8 lg:px-12 text-sm sm:text-lg lg:text-xl border rounded-4xl bg-blue-900 text-white font-semibold cursor-pointer transition-colors duration-300 ease-in-out hover:bg-teal-500 motion-translate-x-in-[-200%] motion-translate-y-in-[85%] motion-duration-[2000ms] motion-delay-[1000ms] motion-delay-[0ms]/translate'>Work With Us</button>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <img src="1st.jpg" alt="image1" className='object-contain w-full h-full xl:h-8/12 motion-scale-in-[0.01] motion-opacity-in-[0%] motion-duration-[1000ms] motion-delay-[2500ms] motion-delay-[1200ms]/scale motion-delay-[0ms]/opacity motion-ease-spring-bouncier' />
                </div>
            </div>
        </div>
    );
};

export default NavHome;