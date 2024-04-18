"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Fade } from "react-awesome-reveal";
import { carouselImages } from "@/lib/data";

const GalleryCarousel = () => {
  // a carousel of images made with Swiper and react-awesome-reveal
  return (
    <>
      <Fade big={true} triggerOnce={true} duration={2000}>
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="max-w-6xl"
        >
          {carouselImages.map((item) => (
            <SwiperSlide key={item.id}>
              <Image
                src={item.image}
                alt="gallery"
                width={3000}
                height={3000}
                priority
                className="py-10 lg:my-10"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Fade>
    </>
  );
};

export default GalleryCarousel;
