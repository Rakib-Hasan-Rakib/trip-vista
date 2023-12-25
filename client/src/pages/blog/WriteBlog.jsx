import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import blogimgone from "../../assets/images/blog-one.png";
import blogimgtwo from "../../assets/images/blog-two.jpg";
import blogimgthree from "../../assets/images/blog-three.webp";
import blogimgfour from "../../assets/images/blog-four.webp";
import SectionTitle from "../../components/title/SectionTitle";
import axios from "axios";
import toast from "react-hot-toast";

const WriteBlog = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    } = useForm();
  const onSubmit = (data) => {
    const title = data.title;
    const tagLine = data.tagLine;
    const description = data.description;
    const facebook = data.facebookLink;
    const instagram = data.instagramLink;
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    axios
      .post(url, formData)
      .then((data) => {
        if (data.data.status == 200) {
          const blogData = {
            name: user?.displayName,
            email: user?.email,
            userPhoto: user?.photoURL,
            facebook,
            instagram,
            title,
            tagLine,
            description,
            image: data.data.data.display_url,
          };
          axios
            .post(`${import.meta.env.VITE_BASE_URL}blogs`, blogData)
            .then((data) => {
              if (data.data?.insertedId) {
                reset();
                toast.success("Your blog has been uploaded");
              }
            })
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  };
  return (
      <>
      <>
        {" "}
        <img
          src={blogimgone}
          alt="blog icon"
          className="w-20 absolute top-12 left-20 opacity-5 -rotate-45 origin-bottom-right"
        />
        <img
          src={blogimgone}
          alt="blog icon"
          className="w-20 absolute top-3/4 left-1/4 opacity-10 -z-10"
        />
        <img
          src={blogimgone}
          alt="blog icon"
          className="w-20 absolute top-1/4 left-3/4 opacity-5 rotate-45 origin-bottom-right -z-10"
        />
        <img
          src={blogimgone}
          alt="blog icon"
          className="w-20 absolute top-2/4 left-2/4 opacity-5 rotate-45 origin-bottom-right -z-10"
        />
        <img
          src={blogimgone}
          alt="blog icon"
          className="w-20 absolute bottom-4 right-4 opacity-5  -z-10"
        />
        <img
          src={blogimgtwo}
          alt="blog icon"
          className="w-20 absolute top-2/4 left-24 opacity-5 -rotate-45 origin-bottom-left"
        />
        <img
          src={blogimgtwo}
          alt="blog icon"
          className="w-20 absolute top-4 left-1/4 opacity-5 -rotate-45 origin-bottom-left -z-10"
        />
        <img
          src={blogimgtwo}
          alt="blog icon"
          className="w-20 absolute bottom-12 left-3/4 opacity-5 rotate-45 origin-bottom-left"
        />
        <img
          src={blogimgtwo}
          alt="blog icon"
          className="w-20 absolute top-1/3 left-1/4 opacity-5"
        />
        <img
          src={blogimgtwo}
          alt="blog icon"
          className="w-20 absolute top-4 right-8 opacity-5"
        />
        <img
          src={blogimgthree}
          alt="blog icon"
          className="w-20 absolute top-6 left-3/4 opacity-5 rotate-45 origin-bottom-left"
        />
        <img
          src={blogimgthree}
          alt="blog icon"
          className="w-20 absolute top-1/4 left-24 opacity-5 rotate-45 origin-bottom-left"
        />
        <img
          src={blogimgthree}
          alt="blog icon"
          className="w-20 absolute top-1/2 left-1/4 opacity-5 -rotate-45 origin-center"
        />
        <img
          src={blogimgthree}
          alt="blog icon"
          className="w-20 absolute bottom-8 left-1/2 opacity-5"
        />
        <img
          src={blogimgthree}
          alt="blog icon"
          className="w-20 absolute top-1/2 left-3/4 opacity-5 -rotate-45 origin-bottom-left"
        />
        <img
          src={blogimgfour}
          alt="blog icon"
          className="w-20 absolute top-32 left-1/4 rotate-45 origin-bottom-right -z-10 opacity-5"
        />
        <img
          src={blogimgfour}
          alt="blog icon"
          className="w-20 absolute bottom-8 left-12 rotate-45 opacity-5"
        />
        <img
          src={blogimgfour}
          alt="blog icon"
          className="w-20 absolute top-2 left-1/2 opacity-5 -z-10 rotate-45"
        />
        <img
          src={blogimgfour}
          alt="blog icon"
          className="w-20 absolute top-3/4 left-3/4 opacity-5 -rotate-45 origin-bottom-right"
        />
      </>
      {SectionTitle("Write a Blog", "something to encourage people to visit ")}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2 w-2/5 mx-auto mb-12"
      >
        <div className="flex justify-center items-center gap-4">
          <div>
            <label className="font-semibold text-md md:text-lg">Title*</label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Give a title to your blog"
              className="w-full outline-none px-2 py-1 rounded-sm border border-green-500"
            />
          </div>
          <div>
            <label className="font-semibold text-md md:text-lg">
              Tag Line <span className="text-sm text-gray-600">(optional)</span>
            </label>
            <input
              type="text"
              {...register("tagLine")}
              placeholder="Give a Tag Line to your blog"
              className="w-full outline-none px-2 py-1 rounded-sm border border-green-500"
            />
          </div>
        </div>
        <div>
          <label className="font-semibold text-md md:text-lg">
            Description*
          </label>
          <textarea
            {...register("description", { required: true })}
            cols="70"
            rows="5"
            placeholder="Write about place"
            className="w-full outline-none px-2 py-1 rounded-sm border border-green-500"
          ></textarea>
        </div>
        <div>
          <label className="font-semibold text-md md:text-lg">Photo*</label>
          <input
            type="file"
            {...register("image", { required: true })}
            accept="image/*"
            className="w-full outline-none px-2 py-1 rounded-sm border border-green-500"
          />
        </div>
        <div className="flex justify-center items-center gap-4">
          <div>
            <label htmlFor="">Facebook Profile Link (optional)</label>
            <input
              type="text"
              {...register("facebookLink")}
              placeholder="user can visit your facebook profile"
              className="w-full outline-none px-2 py-1 rounded-sm border border-green-500"
            />
          </div>
          <div>
            <label htmlFor="">Instagram Profile Link (optional)</label>
            <input
              type="text"
              {...register("instagramLink")}
              placeholder="user can visit your Instagram profile"
              className="w-full outline-none px-2 py-1 rounded-sm border border-green-500"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 mt-6">
          <input type="reset" value="Reset" className="btn-danger" />
          <input type="submit" value="Publish Blog" className="btn-success" />
        </div>
      </form>
    </>
  );
};
export default WriteBlog;
