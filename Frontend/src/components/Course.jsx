import React from "react";
import Cards from "./Cards";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async()=>{
      try {
       const res =await axios.get("http://localhost:4001/book");
       console.log(res.data);
       setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  },[]);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit velit
            cum qui iure, recusandae et, facere minima aperiam reiciendis
            quisquam ipsam, tenetur dolorem molestiae quo facilis id soluta
            necessitatibus ullam! Dolorum voluptatem repellendus animi? Sequi
            dolore reiciendis maiores quam voluptatibus quo. Alias dolorum porro
            sunt, voluptates laborum, earum repudiandae enim voluptatem nulla,
            vel odit ad impedit amet. Amet, minus nihil.
          </p>
          <Link to='/'>
          <button className="bg-pink-500 text-white hover:bg-pink-700 px-3 py-2 rounded-md mt-6 cursor-pointer duration-200">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
