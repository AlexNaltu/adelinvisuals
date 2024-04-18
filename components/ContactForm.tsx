"use client";

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { BsArrowRight } from "react-icons/bs";

const userSchema = z.object({
  user_name: z.string().min(3).max(50),
  user_email: z.string().email(),
  message: z.string().min(10).max(500),
});

const ContactForm = () => {
  const ref: any = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(userSchema),
  });
  const onSubmit = (data: any) => {
    emailjs
      .sendForm(
        "service_r740fpu",
        "adelin-contact",
        ref.current,
        "9kAgROYSfFf9EA5Ey"
      )
      .then((result) => console.log("Success"))
      .catch((error) => console.log("Failed"));
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      ref={ref}
      className="flex flex-col placeholder:text-black text-black  h-full gap-4 max-w-lg mx-auto py-5 uppercase placeholder:font-extralight px-10 md:py-40 xl:px-20"
    >
      <label className="contact-label">Nume/Prenume</label>
      <input
        {...register("user_name")}
        placeholder="Nume/Prenume"
        className="contact-input"
      />
      {errors.name && (
        <span className="text-slate-500">
          {errors.name.message as React.ReactNode}
        </span>
      )}
      <label className="contact-label">Email</label>
      <input
        {...register("user_email")}
        placeholder="Email"
        className="contact-input"
      />
      {errors.email && (
        <span className="text-slate-500">
          {errors.email.message as React.ReactNode}
        </span>
      )}
      <label className="contact-label">Mesaj</label>
      <textarea
        {...register("message")}
        placeholder="Cu ce te pot ajuta?"
        className="contact-input"
        rows={5}
      ></textarea>
      {errors.message && (
        <span className="text-slate-500">
          {errors.message.message as React.ReactNode}
        </span>
      )}
      <Button type="submit" className="bg-black flex gap-2 items-center ">
        Trimite <BsArrowRight size={15} />
      </Button>
      <div className="flex flex-col gap-1 text-sm">
        <p>tuduriadelin@yahoo.com</p>
        <p className="text-slate-500 lowercase">wJ5oH@example.com</p>
      </div>
    </form>
  );
};

export default ContactForm;
