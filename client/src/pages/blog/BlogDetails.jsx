import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../components/Container";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  const {
    image,
    title,
    tagLine,
    description,
    name,
    userPhoto,
    facebook,
    instagram,
  } = blog;

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
              className="w-full lg:w-3/4 mx-auto rounded-lg"
            />
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-6xl 2xl:text-8xl font-bold tracking-widest capitalize">
                {title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl italic text-gray-700 tracking-wider my-1">
                {tagLine}
              </p>
            </div>

            <p className="md:tracking-wider leading-loose text-lg text-justify">
              {description}
            </p>
            <div className="space-y-1 md:space-y-2">
              <p className="font-bold text-lg mt-12">Written By</p>
              <img
                src={userPhoto}
                alt="author's photo"
                className="w-24 md:w-32 rounded-lg"
              />
              <p className="font-semibold">{name}</p>
              <div className="flex items-center gap-3">
                {facebook && (
                  <Link
                    to={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="visit my facebook profile"
                  >
                    <img
                      src="https://i.ibb.co/Jypsrh5/facebook-icon.png"
                      alt="facebook icon"
                      className="w-8 rounded-full"
                    />
                  </Link>
                )}
                {instagram && (
                  <Link
                    to={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="visit my instagram profile"
                  >
                    <img
                      src="https://i.ibb.co/kKZQKKg/instagram-icon.png"
                      alt="facebook icon"
                      className="w-8"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
export default BlogDetails;
