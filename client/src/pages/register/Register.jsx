import { Link, useLocation, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { saveUser } from "../../utils/auth";
import "./Register.css";

const Register = () => {
  const {
    loading,
    setLoading,
    signInWithGoogle,
    createUser,
    updateUserProfile,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    // const { name, email, password, image } = data;
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    const image = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    
    

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_ImgBB_Key
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;

        createUser(email, password)
          .then((result) => {
            updateUserProfile(name, imageUrl)
              .then(() => { 
                saveUser(result.user);
                navigate(from, { replace: true });
              })
              .catch((err) => {
                setLoading(false);
                console.log(err.message);
              });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err.message);
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });

  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        saveUser(result.user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        // toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen register-div">
      <div className="flex flex-col w-full md:w-3/5 lg:w-2/5 mx-auto p-6 sm:p-10 text-white rounded-xl bg-black bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-[1px] max-sm:px-8">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p>Welcome to Tourza</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 rounded-md focus:outline-none bg-gray-200 text-black placeholder:text-gray-500"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-md">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 rounded-md focus:outline-none bg-gray-200 text-black placeholder:text-gray-500"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 rounded-md focus:outline-none bg-gray-200 text-black placeholder:text-gray-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-green-700 w-full rounded-md py-3 text-white font-semibold"
            >
              Continue
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center pt-4 space-x-1">
          <p className="px-3 text-sm text-center dark:text-gray-400">
            Login with social accounts
          </p>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded-lg cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="hover:underline text-green-400 ">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
