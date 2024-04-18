"use client";

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
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
      className="flex flex-col placeholder:text-black text-black gap-4"
    >
      <input {...register("user_name")} placeholder="Name" />
      {errors.name && (
        <span className="text-red-500">
          {errors.name.message as React.ReactNode}
        </span>
      )}
      <input {...register("user_email")} placeholder="Email" />
      {errors.email && (
        <span className="text-red-500">
          {errors.email.message as React.ReactNode}
        </span>
      )}
      <textarea {...register("message")} placeholder="Message"></textarea>
      {errors.message && (
        <span className="text-red-500">
          {errors.message.message as React.ReactNode}
        </span>
      )}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ContactForm;
