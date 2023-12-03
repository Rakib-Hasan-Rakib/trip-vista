import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

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

    fetch("http://localhost:3000/book", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.replace(data?.url);
        fetch(`http://localhost:3000/booking/success/${data?.transactionId}`, {
          method: "POST",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      });
  };

  return (
    <div className="bg-gray-100 p-2 rounded-md">
      <h1 className="text-green-600 font-semibold text-center text-lg lg:text-3xl mb-6 capitalize">
        Book this tour
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm px-3">
            Full Name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Enter Your Name Here"
            className="w-full px-3 py-2 rounded-md focus:outline-none text-gray-900 bg-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm px-3">
            Phone Number
          </label>
          <input
            type="number"
            {...register("phone", { required: true })}
            placeholder="Enter Your Phone Number Here"
            className="w-full px-3 py-2 rounded-md focus:outline-none text-gray-900 bg-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm px-3">
            Number of Tickets
          </label>
          <input
            type="number"
            {...register("quantity", { required: true })}
            placeholder="Enter Your Ticket Quantity Here"
            className="w-full px-3 py-2 rounded-md focus:outline-none text-gray-900 bg-white"
          />
        </div>

        <input
          type="submit"
          value={`Pay Now`}
          className="w-full bg-green-600 py-2 rounded-lg font-semibold cursor-pointer"
        />
      </form>
    </div>
  );
};

export default DetailsForm;
