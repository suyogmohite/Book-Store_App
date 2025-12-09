import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 via-pink-50 to-white">
        {/* Navbar */}
        <Navbar />

        {/* Centered Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-10">
          <div className="relative w-full max-w-5xl bg-white/80 backdrop-blur shadow-xl rounded-2xl p-6 md:p-10 border border-pink-100">
            {/* Close / Back Button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
            >
              ✕
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Left: Text Content */}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-pink-500 font-semibold">
                  About BookStore
                </p>
                <h3 className="font-extrabold text-2xl md:text-3xl mt-2 text-gray-900">
                  A cozy corner on the internet for every kind of reader 📚
                </h3>

                {/* Intro */}
                <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
                  Welcome to{" "}
                  <span className="font-semibold text-pink-600">
                    BookStore
                  </span>
                  , your friendly online book store. Our goal is simple – to help
                  you discover amazing books and make reading a part of your
                  everyday life.
                </p>

                {/* Who We Are */}
                <div className="mt-4 space-y-2 text-sm md:text-base text-gray-700 leading-relaxed">
                  <p>
                    We offer a curated collection of novels, educational books,
                    self–help, tech, and more so that every type of reader finds
                    something they love.
                  </p>
                  <p>
                    From students preparing for exams to casual readers searching
                    for their next favorite story, we&apos;re here to make your
                    book–buying journey smooth and delightful.
                  </p>
                </div>

                {/* Bullet Highlights */}
                <ul className="mt-5 space-y-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">✨</span>
                    <span>Handpicked titles from trusted publishers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">⚡</span>
                    <span>Fast, hassle–free browsing and checkout.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">❤️</span>
                    <span>Built by book lovers, for book lovers.</span>
                  </li>
                </ul>

                {/* Quote / Tagline */}
                <p className="mt-6 italic text-sm md:text-base text-gray-700 border-l-4 border-pink-400 pl-4">
                  &quot;A room without books is like a body without a soul.&quot;
                </p>
              </div>

              {/* Right: Stats / Visual Side */}
              <div className="flex flex-col gap-4">
                {/* Decorative circle / illustration substitute */}
                <div className="relative w-full h-40 md:h-48 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#fff,_transparent_60%)]" />
                  <div className="relative text-center text-white px-6">
                    <p className="text-sm uppercase tracking-[0.25em]">
                      Dive into stories
                    </p>
                    <p className="mt-2 text-2xl font-bold">Read. Learn. Grow.</p>
                    <p className="mt-2 text-xs md:text-sm text-pink-100">
                      Your next favorite book is just a click away.
                    </p>
                  </div>
                </div>

                {/* Stats / Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="border rounded-xl px-4 py-3 bg-gray-50 shadow-sm">
                    <h4 className="font-bold text-lg text-gray-900">10,000+</h4>
                    <p className="text-xs mt-1 text-gray-600">
                      Books across all categories
                    </p>
                  </div>
                  <div className="border rounded-xl px-4 py-3 bg-gray-50 shadow-sm">
                    <h4 className="font-bold text-lg text-gray-900">5,000+</h4>
                    <p className="text-xs mt-1 text-gray-600">
                      Happy readers & customers
                    </p>
                  </div>
                  <div className="border rounded-xl px-4 py-3 bg-gray-50 shadow-sm">
                    <h4 className="font-bold text-lg text-gray-900">4.8★</h4>
                    <p className="text-xs mt-1 text-gray-600">
                      Average customer rating
                    </p>
                  </div>
                </div>

                {/* Small “Why choose us” card */}
                <div className="mt-2 border rounded-xl px-4 py-3 bg-white shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-pink-500 font-semibold">
                    Why readers stay
                  </p>
                  <p className="mt-2 text-sm text-gray-700">
                    We don&apos;t just sell books. We help you build a personal
                    library that matches your dreams, goals, and curiosity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
}

export default About;
