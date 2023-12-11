import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  const { image, title, tagLine, description } = blog;

  axios
    .get(`${import.meta.env.VITE_BASE_URL}blogs/${id}`)
    .then((data) => setBlog(data.data))
    .catch((error) => console.log(error));

  return (
    <>
      {blog && (
        <Container>
          <div className="pt-20 space-y-3">
            <img
              src={image}
              alt="spot image"
              className="w-1/2 mx-auto rounded-lg"
            />
            <div>
              <h1 className="text-xl md:text-3xl lg:text-6xl 2xl:text-8xl font-bold tracking-widest">
                {title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl italic text-gray-700 tracking-wider">
                {tagLine}
              </p>
            </div>
            <p className="tracking-wider leading-loose text-lg text-justify">
              {description}
            </p>
          </div>
        </Container>
      )}
    </>
  );
};
export default BlogDetails;
