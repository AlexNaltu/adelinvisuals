"use client";
import React from "react";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { latestWorkImages } from "@/lib/data";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Fade, Slide } from "react-awesome-reveal";
import Link from "next/link";

const LatestWork = () => {
  // a carousel of images made with Swiper and react-awesome-reveal
  return (
    <>
      <Fade
        direction="up"
        triggerOnce={true}
        cascade={true}
        delay={200}
        duration={2000}
      >
        <div className="max-w-6xl mx-auto p-4 my-2 sm:my-5 lg:my-8 xl:my-12">
          <h1 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">
            My Latest Work
          </h1>
          <div className="flex  flex-col sm:flex-row sm:justify-between my-2">
            <h3 className="text-xs sm:text-sm lg:text-base mb-4 text-gray-400">
              Aici gasiti cele mai recente
              <br /> fotografii
            </h3>
            <Link href={"/gallery"}>
              <Button className="w-fit text-xs sm:self-end rounded-full bg-slate-700 text-white hover:bg-white hover:text-black">
                Vezi Galeria
              </Button>
            </Link>
          </div>
        </div>
      </Fade>

      <Slide triggerOnce={true}>
        <Swiper
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className=" mb-5 sm:mb-10 lg:mb-16 max-w-6xl mx-auto"
        >
          {latestWorkImages.map((item) => (
            <SwiperSlide key={item.id} className="relative">
              <Image
                src={item.image}
                alt="latest work"
                width={3000}
                height={3000}
                className="aspect-video object-cover rounded-xl px-2"
              />
              <div className=" text-slate-300 flex items-center gap-2 justify-center absolute top-0 transform translate-x-[20%] sm:translate-x-[10%] lg:translate-x-[25%] xl:translate-x-[30%]  text-xs mt-4">
                <div className=" flex items-center gap-1 bg-black/70 rounded-3xl p-1">
                  <i>{item.icon1}</i>
                  <p>{item.camera}</p>
                </div>
                <div className=" flex items-center gap-1  bg-black/70 rounded-3xl p-1">
                  <i>{item.icon2}</i>
                  <p>{item.location}</p>
                </div>
                <div className="flex items-center gap-1  bg-black/70 rounded-3xl p-1">
                  <i>{item.icon3}</i>
                  <p>{item.data}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Slide>
    </>
  );
};

export default LatestWork;
