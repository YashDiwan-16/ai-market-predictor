"use client";
import React from "react";
import ContactAnimation from "./ContactAnimation";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ShineBorder from "@/components/ui/shine-border";

const words = `Let's Connect and Create Something Amazing Together!`;

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  subject: z.string().max(100).optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type FormData = z.infer<typeof schema>;

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // Replace with your API call or logic
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6">
      {/* Sentence and Text Generate Effect */}
      <div className="w-full">
        <TextGenerateEffect words={words} />
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-16 w-full">
        {/* Left Section: SVG */}
        <div className="w-full md:w-1/2 flex justify-center">
          <ContactAnimation />
        </div>

        <div className="relative w-full h-screen flex items-start justify-end p-8">
          {/* Container for ShineBorder and Form */}
          <ShineBorder
            className="rounded-lg w-full md:w-[600px]"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-8 bg-black-800 bg-opacity-60 text-white rounded-lg space-y-6 shadow-xl w-full"
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center font-poppins">
                Contact Us
              </h2>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className="mt-2 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 dark:placeholder-gray-500 px-4 py-2"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="mt-2 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 dark:placeholder-gray-500 px-4 py-2"
                  placeholder="Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject")}
                  className="mt-2 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 dark:placeholder-gray-500 px-4 py-2"
                  placeholder="Subject"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className="mt-2 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 dark:placeholder-gray-500 px-4 py-2"
                  placeholder="Your Message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-3 px-5 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </ShineBorder>
        </div>
      </div>
    </div>
  );
};

export default Contact;
