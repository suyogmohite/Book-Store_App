import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";


function Signup() {
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
      <div className="flex h-screen justify-center items-center">
        {/* Signup Box */}
        <div className="border shadow-md rounded-md p-6 w-130 relative">

          {/* Close button (DaisyUI style) */}
           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
         

          <h3 className="font-bold text-lg mt-6">Signup</h3>

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

          {/* Password */}
          <div className="mt-4 space-y-1">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter your Password"
              className="outline-none w-full px-3 py-1 rounded-md border"
              {...register("password", { required: true })}
            />
            <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Signup
            </button>

            <p>
              Have an account?{" "}
              <button
                className="text-blue-500 underline"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>{" "}
              <Login/>
            </p>
          </div>
           </form>
        </div>
      </div>
      {/* ======= LOGIN MODAL ======= */}
    </>
  );
}

export default Signup;
