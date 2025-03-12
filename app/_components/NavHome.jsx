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

    return (
        <div className='h-[100vh] w-[100vw] sm:overflow-hidden'>
            <nav className='p-4 flex bg-white justify-between items-center'>
                <a className='flex gap-2 items-center' href="#" id='brand'>
                    <img className='object-cover w-16 h-16 lg:w-20 lg:h-20 xl:h-24 xl:w-24' src="ddi.jpg" alt="logo" />
                    <span className='text-xl lg:text-xl font-semibold'>DIRECT DIVERSE INFO.TECH</span>
                </a>
                <div className={`hidden lg:flex lg:gap-4 xl:gap-8 ${isMenuOpen ? '' : 'hidden'}`} id='nav-menu'>
                    <a href="#" className='lg:text-xl font-extrabold text-red-500'>Home</a>
                    <a href="#" className='lg:text-xl font-medium transition-colors duration-200 ease-in-out hover:text-red-500'>About</a>
                    <a href="#" className='lg:text-xl font-medium transition-colors duration-200 ease-in-out hover:text-red-500'>Services</a>
                    <a href="#" className='lg:text-xl font-medium transition-colors duration-200 ease-in-out hover:text-red-500'>Testimonials</a>
                    <a href="#" className='lg:text-xl font-medium transition-colors duration-200 ease-in-out hover:text-red-500'>Contact Us</a>
                </div>
                <button className='hidden md:flex items-center gap-1 p-4 border rounded-4xl bg-red-500 text-white font-semibold cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-900'>
                    <div><FaPhoneAlt /></div>
                    <a href={'tel:+91-9305263665'}>+91-9305263665</a>
                </button>
                <button className='p-2 lg:hidden cursor-pointer' onClick={handleMenu}>
                    <CiMenuBurger className='text-gray-600 text-2xl'/>
                </button>
                {isMenuOpen && (
                    <div id='nav-dialog' className='fixed bg-white inset-0 p-4'>
                        <div className='flex justify-between'>
                            <a className='flex gap-2 items-center' href="#" id='brand'>
                                <img className='object-cover w-16 h-16 lg:w-20 lg:h-20 xl:h-24 xl:w-24' src="ddi.jpg" alt="logo" />
                                <span className='text-xl lg:text-xl font-semibold'>DIRECT DIVERSE INFO.TECH</span>
                            </a>
                            <button className='p-2 lg:hidden cursor-pointer' onClick={handleMenu}>
                                <IoCloseSharp className='text-gray-600 text-2xl'/>
                            </button>
                        </div>
                        <div className='flex flex-col mt-10 items-center gap-10'>
                            <a href="#" className='text-4xl font-extrabold text-red-500'>Home</a>
                            <a href="#" className='text-4xl font-medium'>About</a>
                            <a href="#" className='text-4xl font-medium'>Services</a>
                            <a href="#" className='text-4xl font-medium'>Testimonials</a>
                            <a href="#" className='text-4xl font-medium'>Contact Us</a>
                        </div>
                    </div>
                )}
            </nav>
            <div className='mt-2 flex flex-col-reverse md:flex md:flex-row'>
                <div className='md:w-1/2 p-4 ml-6'>
                    <h1 className='text-lg md:text-xl font-medium text-red-500 mt-2 sm:mt-16'>We're Happy to Have You!</h1>
                    <h1 className='mt-2 text-4xl md:text-6xl font-bold text-blue-900'>IT | ITES | BPO</h1>
                    <h1 className='mt-4 text-lg md:text-xl text-gray-500'>Boost your business by selecting the appropriate assets and industry knowledge offered by Diverse Line Impex Private Limited. Our all-encompassing platform delivers dependable IT and digital marketing solutions, along with effective revenue cycle management services.</h1>
                    <div className='mt-6 flex gap-8'>
                        <buton className='p-4 px-6 sm:px-8 lg:px-12 text-sm sm:text-lg lg:text-xl border rounded-4xl bg-red-500 text-white font-semibold cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-900'>ABOUT US</buton>
                        <buton className='p-4 px-6 sm:px-8 lg:px-12 text-sm sm:text-lg lg:text-xl border rounded-4xl bg-blue-900 text-white font-semibold cursor-pointer transition-colors duration-300 ease-in-out hover:bg-red-500'>Work With Us</buton>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <img src="1st.jpg" alt="image1" className='object-contain w-full h-full xl:h-8/12' />
                </div>
            </div>
        </div>
    );
};

export default NavHome;