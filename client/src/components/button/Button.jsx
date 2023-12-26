import React from 'react';

const Button = ({children}) => {
    return (
      <button className="text-md md:text-xl xl:text-2xl 2xl:text-4xl text-sky-500 border border-sky-500 px-2 rounded-md md:rounded-xl md:px-6 md:py-1 lg:px-8 xl:px-10 xl:py-2 my-2 md:my-3 lg:my-4 xl:my-5 2xl:my-7 capitalize hover:bg-sky-500 hover:text-white hover:duration-200">
        {children}
      </button>
    );
};

export default Button;