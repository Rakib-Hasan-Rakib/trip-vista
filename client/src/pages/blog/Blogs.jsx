import React, { useRef, useState } from "react";
import Container from "../../components/Container";
import { MdEditDocument } from "react-icons/md";
import axios from "axios";
import Blog from "./Blog";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const inputRef = useRef("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}blogs`)
      .then((data) => {
        setBlogs(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleSearch = (e) => {
    const searchText = inputRef.current.value;
    axios
      .get(`${import.meta.env.VITE_BASE_URL}blogSerch/${searchText}`)
      .then((data) => {
        setBlogs(data.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <div className="pt-24">
        <div className="flex items-center w-full md:w-1/2 xl:w-1/3 mx-auto my-4 md:my-6 lg:my-10">
          <input
            type="text"
            name="searchText"
            placeholder="Enter a place name you want to read about"
            className="w-full p-1 border-2 border-green-500 border-r-0 rounded-s-md focus:outline-none"
            ref={inputRef}
          />
          <FaSearch
            onClick={handleSearch}
            className="bg-green-600 text-white px-2 rounded-e-md cursor-pointer"
            size={36}
          />
        </div>
        <Link to="/writeBlog">
          <MdEditDocument
            className="bg-green-600 text-white p-3 rounded-full fixed top-3/4 right-8 cursor-pointer"
            size={60}
          />
        </Link>
        <div
          className={`${
            blogs.length > 0
              ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4"
              : "text-center"
          }`}
        >
          {blogs.length > 0 ? (
            blogs?.map((blog, i) => <Blog key={i} blog={blog} />)
          ) : (
            <p className="font-semibold text-lg md:text-xl lg:text-2xl text-red-500">
              {blogs.message}
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
