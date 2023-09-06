import React from 'react';
import { useForm } from 'react-hook-form';

const DetailsForm = () => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    // console.log(watch("example")); 
    return (
      <div className="bg-gray-600">
        <h1 className="text-red-600 font-semibold text-center text-lg lg:text-2xl">
          Book this tour
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Full Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter Your Name Here"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
             Phone Number
            </label>
            <input
              type="number"
              {...register("phone", { required: true })}
              placeholder="Enter Your Phone Number Here"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
             Number of Tickets
            </label>
            <input
              type="number"
              {...register("ticket", { required: true })}
              placeholder="Enter Your Ticket Quantity Here"
              className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
            />
          </div>

          <input type="submit" />
        </form>
      </div>
    );
};

export default DetailsForm;