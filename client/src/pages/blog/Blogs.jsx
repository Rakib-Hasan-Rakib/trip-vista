import React, { useState } from "react";
import Container from "../../components/Container";
import { MdEditDocument } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import Blog from "./Blog";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const { user } = useAuth();

  const handleBlogClick = () => {
    user ? setIsModalOpen(true) : toast.error("please Login to post a blog");
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}blogs`)
      .then((data) => setBlogs(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <div className="pt-24">
        <div className="flex justify-end">
          <Link
            to="/writeBlog"
            onClick={handleBlogClick}
            className="flex justify-center items-center gap-2 text-lg font-semibold bg-green-500 hover:bg-green-600 hover:duration-300 text-white px-3 py-1 rounded-md"
          >
            <MdEditDocument className="" size={24} />
            Write a blog
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
          {blogs?.map((blog, i) => (
            <Blog key={i} blog={blog} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Blogs;
