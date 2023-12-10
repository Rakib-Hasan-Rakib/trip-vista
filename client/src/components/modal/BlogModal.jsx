import Modal from "react-modal";
import { ImCross } from "react-icons/im";
import { useForm } from "react-hook-form";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const BlogModal = ({ isModalOpen, setIsModalOpen }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data) => {
    const title = data.title;
    const description = data.description;
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
            title,
            description,
            image: data.data.data.display_url,
          };
          axios
            .post(`${import.meta.env.VITE_BASE_URL}blogs`, blogData)
            .then((data) => {
              if (data.data?.insertedId) {
                reset();
                closeModal();
              }
              console.log(data.data);
            })
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-3/5">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>
          <ImCross className="text-red-600 absolute top-2 right-2" />
        </button>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div>
            <label className="font-semibold text-md md:text-lg">Title</label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Give a title to your blog"
              className="w-full outline-none px-2 py-1 rounded-sm border border-green-500"
            />
          </div>

          <div>
            <label className="font-semibold text-md md:text-lg">Blog</label>
            <textarea
              {...register("description", { required: true })}
              cols="70"
              rows="5"
              placeholder="Write about place"
              className="w-full outline-none px-2 py-1 rounded-sm border border-green-500"
            ></textarea>
          </div>
          <div>
            <label className="font-semibold text-md md:text-lg">
              Attach Image
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              accept="image/*"
              className="w-full outline-none px-2 py-1 rounded-sm border border-green-500"
            />
          </div>
          <div className="flex justify-center items-center gap-4 mt-6">
            <input type="reset" value="Reset" className="btn-danger" />
            <input type="submit" value="Publish Blog" className="btn-success" />
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default BlogModal;
