"use client";
import { galleryData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const GalleryPhotos = () => {
  const boxStyle = " rounded-xl flex flex-col items-center justify-center";

  return (
    <Fade
      triggerOnce={true}
      cascade={true}
      damping={0.5}
      duration={2000}
      direction="up"
      delay={200}
    >
      <div className="grid md:grid-cols-4 auto-rows-[300px] gap-4 my-10 md:my-16 xl:my-20  max-w-6xl mx-auto px-2 xl:px-0">
        {galleryData.map((item, i) => (
          <div
            key={i}
            className={`${boxStyle} ${
              i === 0 || i === 4 || i === 5 || i === 6 ? "md:col-span-2" : ""
            } ${i === 2 ? "md:row-span-2" : ""}`}
          >
            <Image
              src={item.image}
              alt={"image"}
              width={800}
              height={1000}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </Fade>
  );
};

export default GalleryPhotos;
