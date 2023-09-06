import React from 'react';

const Container = ({children}) => {
    return (
        <div className='w-full lg:w-11/12 mx-auto px-2'>
            {children}
        </div>
    );
};

export default Container;