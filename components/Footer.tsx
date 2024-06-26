"use client";
import { footerData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathName = usePathname();

  if (pathName.includes("/contact")) {
    return null;
  }

  //simple footer with a pathName
  return (
    <>
      <footer className=" text-xs lg:text-sm mt-10 p-2">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-4 lg:gap-14 mb-4 md:mb-10">
          <div className="flex gap-4 lg:gap-14">
            <div className="flex flex-col gap-2 ">
              {footerData.map((item) => (
                <Link
                  href={item.href}
                  key={item.id}
                  className="uppercase flex items-center gap-1 icon"
                >
                  <p>{item.title}</p>
                  <i>{item.icon}</i>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2 ">
              <p>tuduriadelin@yahoo.com</p>
              <p>Strada Matei Corvin Nr.6</p>
              <p>+40 774 099 255</p>
            </div>
          </div>
          <h2>Copyright © 2024 Adelin Visuals. All rights reserved.</h2>
        </div>
      </footer>
    </>
  );
};

export default Footer;
