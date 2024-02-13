import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser, FaPhoneAlt, FaTicketAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const DetailsForm = ({ tourDetails }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { _id, price } = tourDetails;

  // const [payPrice,setPayPrice]=useState(tourDetails?.price)

  // console.log(tourDetails);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    const userData = {
      ...data,
      productId: _id,
      email: user?.email,
    };

    axios
      .post(`${import.meta.env.VITE_BASE_URL}book`, userData)
      .then((data) => {
        console.log(data.data);
        window.location.replace(data.data?.url);
        // axios
        //   .post(
        //     `${import.meta.env.VITE_BASE_URL}booking/success/${
        //       data?.transactionId
        //     }`
        //   )
        //   .then((data) => console.log(data))
        //   .catch((err) => console.log(err));
        
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-gray-100 px-4 py-8 rounded-md">
      <h1 className="heading font-semibold text-center text-lg lg:text-3xl mb-6 capitalize">
        Book this tour
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="relative">
          <FaUser
            size={24}
            className="text-green-500 absolute top-1/2 -translate-y-1/2 left-2"
          />
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Your Name Here"
            className="pl-12 w-full py-2 rounded-lg outline-none"
          />
        </div>
        <div className="relative">
          <MdEmail
            size={24}
            className="text-green-500 absolute top-1/2 -translate-y-1/2 left-2"
          />
          <input
            type="email"
            {...register("mail", { required: true })}
            placeholder="Your Email Here"
            className="pl-12 w-full py-2 rounded-lg outline-none"
          />
        </div>
        <div className="relative">
          <FaPhoneAlt
            size={24}
            className="text-green-500 absolute top-1/2 -translate-y-1/2 left-2"
          />
          <input
            type="number"
            {...register("phone", { required: true })}
            placeholder="Your Phone Number Here"
            className="pl-12 w-full py-2 rounded-lg outline-none"
          />
        </div>
        <div className="relative">
          <FaTicketAlt
            size={24}
            className="text-green-500 absolute top-1/2 -translate-y-1/2 left-2"
          />
          <input
            type="number"
            {...register("quantity", { required: true })}
            placeholder="Your Ticket Quantity Here"
            className="pl-12 w-full py-2 rounded-lg outline-none"
          />
        </div>

        <input
          type="submit"
          value={`Pay Now`}
          className="w-full text-white tracking-widest gradient-bg py-2 rounded-lg font-semibold cursor-pointer"
        />
      </form>
    </div>
  );
};

export default DetailsForm;
