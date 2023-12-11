import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  // console.log(blog)
  const { _id, image, title, tagLine, description, userPhoto } = blog;

  const str = "Bangladesh's Pristine Tropical Escape";
  let arr = str.split("");
  console.log(arr.length);

  return (
    <>
      <div className="group  border border-gray-500 rounded-md">
        <Link to={`/blog/${_id}`} className="space-y-2 ">
          <img
            src={image}
            alt="spot image"
            className="w-full h-40 md:h-48 lg:h-60 2xl:h-96 object-cover object-center rounded-md"
          />
          <div className="px-2">
            <div>
              <h2 className="font-bold text-lg md:text-xl lg:text-2xl capitalize">
                {title}
              </h2>
              <p className="capitalize text-gray-600">
                <i>{tagLine}</i>
              </p>
            </div>
            <div>
              <img
                src={userPhoto}
                alt="photo of author"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <p className="text-justify">
              {description.slice(0, 200)}{" "}
              <small className="text-blue-600">read more...</small>
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Blog;
