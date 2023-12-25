import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/Container";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  const { image, title, tagLine, description, name, userPhoto,facebook,instagram } = blog;

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
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl md:text-3xl lg:text-6xl 2xl:text-8xl font-bold tracking-widest capitalize">
                  {title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl italic text-gray-700 tracking-wider">
                  {tagLine}
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-normal items-center gap-4">
                  <p className="font-semibold text-xl">{name}</p>
                  <img
                    src={userPhoto}
                    alt="author's photo"
                    className="w-12 rounded-full"
                  />
                </div>
                <div className="flex justify-end items-center gap-3">
                  <Link to={facebook} target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://i.ibb.co/Jypsrh5/facebook-icon.png"
                      alt="facebook icon"
                      className="w-10 rounded-full"
                    />
                  </Link>
                  <Link
                    to={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://i.ibb.co/kKZQKKg/instagram-icon.png"
                      alt="facebook icon"
                      className="w-10"
                    />
                  </Link>
                </div>
              </div>
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
