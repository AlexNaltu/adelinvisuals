import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      <Link href={"/"}>
        <FaHome
          className="absolute right-0 text-white md:text-black m-4 md:m-10 hover:text-slate-400"
          size={30}
        />
      </Link>
      <div className="flex flex-col w-full h-screen md:flex-row">
        <div className="w-full h-1/2 md:h-screen">
          <Image
            src={"/photocamera.svg"}
            alt="logo"
            width={800}
            height={600}
            className="object-cover w-full h-full md:object-contain"
          />
        </div>
        <div className="w-full bg-white md:h-screen">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
