import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar at top */}
        <Navbar />

        {/* Centered content */}
        <div className="flex-1 flex items-center justify-center px-4 py-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative w-full max-w-md bg-white shadow-lg rounded-lg p-6 md:p-8"
          >
            {/* Close / Back Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
            >
              ✕
            </Link>

            <h3 className="font-bold text-xl mt-6 text-center md:text-left">
              Contact us
            </h3>

            {/* Name */}
            <div className="mt-4 space-y-1">
              <span className="text-sm md:text-base">Name</span>
              <input
                type="text"
                placeholder="Enter your Fullname"
                className="outline-none w-full px-3 py-2 rounded-md border text-sm md:text-base"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-xs md:text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Email */}
            <div className="mt-4 space-y-1">
              <span className="text-sm md:text-base">Email</span>
              <input
                type="email"
                placeholder="Enter your Email"
                className="outline-none w-full px-3 py-2 rounded-md border text-sm md:text-base"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-xs md:text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Message */}
            <div className="mt-4 space-y-1">
              <span className="text-sm md:text-base">Message</span>
              <textarea
                rows="4"
                placeholder="Enter your Message"
                className="outline-none w-full px-3 py-2 rounded-md border resize-none text-sm md:text-base"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="text-xs md:text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-6 flex justify-center md:justify-start">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-5 py-2 text-sm md:text-base hover:bg-pink-700 duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
