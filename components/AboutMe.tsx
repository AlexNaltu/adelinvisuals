"use client";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <div className="flex flex-col p-4 gap-4 max-w-6xl mx-auto my-10 lg:mt-16 sm:flex-row sm:justify-center">
      <Fade triggerOnce={true} direction="left" duration={2000}>
        <h1 className="max-w-md md:text-2xl">
          Ma numesc Adelin Tuduri, sunt un pasionat al fotografiei în vârstă de
          18 ani, originar din Lipova, Arad. Cu doar doi ani în spatele
          obiectivului, fotografia a devenit mai mult decât un hobby - este
          pasiunea vieții mele.
        </h1>
      </Fade>
      <Fade triggerOnce={true} direction="right" duration={2000}>
        <Image
          src="/adelin.jpg"
          alt="adelin"
          width={300}
          height={300}
          className="aspect-square object-cover"
        />
      </Fade>
    </div>
  );
};

export default AboutMe;
