import Image from "next/image";
import React from "react";
import { CarouselItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const images = [
  {
    image: "/gallery3.png",
    value: 1,
  },
  {
    image: "/gallery3.png",
    value: 2,
  },
  {
    image: "/gallery3.png",
    value: 3,
  },
];

const GalleryCarousel = () => {
  return (
    <Carousel>
      {images.map((item) => (
        <CarouselItem key={item.value}>
          <Image src={item.image} alt="image" width={3000} height={1000} />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default GalleryCarousel;
