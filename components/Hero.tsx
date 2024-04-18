"use client";
import React from "react";
import { Button } from "./ui/button";
import { FaFacebookF } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Hero = () => {
  //hero section
  return (
    <Fade triggerOnce={true} cascade={true} delay={200} duration={2000}>
      <div className="p-4 max-w-6xl mx-auto mt-8 sm:mt-12 lg:my-20">
        <section className="flex flex-col">
          <h1 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl mb-2">
            Salut,eu sunt Adelin Tuduri, sunt un fotograf
            <br />
            profesionist din Lipova,Arad
          </h1>
          <h4 className="text-xs sm:text-sm lg:text-base mb-4 text-gray-400">
            Pentru mai multe detalii nu ezita sa ma contactezi
          </h4>
          <div className="flex gap-4 items-center">
            <Link href={"/contact"}>
              <Button className="rounded-full text-xs bg-white text-black hover:bg-slate-700 hover:text-white transition duration-200 ease-linear">
                Contact Me
              </Button>
            </Link>
            <div className="flex gap-4">
              <Link href={"https://www.facebook.com/luci.tuduri"}>
                <FaFacebookF size={20} className="icon" />
              </Link>
              <Link href={"https://www.instagram.com/adelinvisuals/"}>
                <BsDiscord size={20} className="icon" />
              </Link>
              <Link href={"https://www.instagram.com/adelinvisuals/"}>
                <RiInstagramFill size={20} className="icon" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default Hero;
