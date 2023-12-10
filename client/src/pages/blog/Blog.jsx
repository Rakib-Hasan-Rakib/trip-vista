import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import { MdEditDocument } from "react-icons/md";
import BlogModal from "../../components/modal/BlogModal";

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Container>
      <div className="pt-24">
        <div className="flex justify-end">
          <button onClick={openModal} className="flex justify-center items-center gap-2 text-lg font-semibold bg-green-500 hover:bg-green-600 hover:duration-300 text-white px-3 py-1 rounded-md">
            <MdEditDocument className="" size={24} />
            Write a blog
          </button>
        </div>
        <BlogModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </Container>
  );
};

export default Blog;
