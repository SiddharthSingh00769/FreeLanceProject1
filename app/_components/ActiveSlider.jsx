"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { createContext } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";

const ActiveSlider = () => {
  return (
    <div className="h-auto xl:h-[100vh] w-full bg-blue-950 sm:overflow-hidden p-4">
        <div className="mt-7 text-center text-lg md:text-xl font-medium text-red-400">
            TESTIMONIALS
        </div>
        <div className="mt-1 text-4xl md:text-4xl font-bold text-white text-center">Heartfelt, Open & Genuine</div>
        <div className="flex items-center justify-center flex-col h-[400px] md:h-[650px] bg-blue-950">
        <Swiper
            breakpoints={{
            // Small screens (sm)
            320: {
                slidesPerView: 1, // 1 slide
                spaceBetween: 10, // Space between slides
            },
            // Medium screens (md)
            640: {
                slidesPerView: 2, // 2 slides
                spaceBetween: 15, // Space between slides
            },
            // Large screens (lg)
            768: {
                slidesPerView: 3, // 3 slides
                spaceBetween: 20, // Space between slides
            },
            // Extra large screens (xl)
            1024: {
                slidesPerView: 2, // 3 slides
                spaceBetween: 25, // Space between slides
            },
            // Extra extra large screens (2xl)
            1280: {
                slidesPerView: 3, // 5 slides
                spaceBetween: 30, // Space between slides
            },
            }}
            freeMode={true}
            pagination={{
            clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="max-w-[90%] lg:max-w-[80%]"
        >
            {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
                <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.backgroundImage.src})` }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-1 top-40">
                    <h1 className="text-xl lg:text-2xl font-bold">{item.name}</h1>
                    <h1 className="text-base lg:text-lg font-semibold">{item.title} </h1>
                    <p className="lg:text-[18px]">{item.content} </p>
                </div>
                <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    </div>
  );
};

export default ActiveSlider;