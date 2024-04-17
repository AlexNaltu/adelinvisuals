"use client";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const VisualsImg = () => {
  return (
    <Fade
      triggerOnce={true}
      cascade={true}
      delay={200}
      direction="up"
      duration={2000}
    >
      <div className="max-w-6xl mx-auto">
        <Image src="/visuals.svg" alt="gallery" width={3000} height={3000} />
      </div>
    </Fade>
  );
};

export default VisualsImg;
