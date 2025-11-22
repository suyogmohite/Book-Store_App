import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';




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
    <div>
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
         

          <h3 className="font-bold text-lg mt-6">Contact us</h3>

          {/* Name */}
          <div className="mt-4 space-y-1">
            <span>Name</span>
            <input
              type="text"
              placeholder="Enter your Fullname"
              className="outline-none w-full px-3 py-1 rounded-md border"
              {...register("name", { required: true })}
            />
            <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
          </div>

          {/* Email */}
          <div className="mt-4 space-y-1">
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter your Email"
              className="outline-none w-full px-3 py-1 rounded-md border"
               {...register("email", { required: true })}
            />
            <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
          </div>

          {/* Message */}
          <div className="mt-4 space-y-1">
            <span>Message</span>
            <input
              type="text"
              placeholder="Enter your Message"
              className="outline-none w-full px-3 py-1 rounded-md border"
              {...register("message", { required: true })}
            />
            <br />
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
          </div>
          <div>
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
          </div>
          </form>
    </div>
    </>
  )
}

export default Contact