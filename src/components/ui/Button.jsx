import React from 'react';

const Button = ({ text }) => {
    return (
        <button className='flex w-full justify-center rounded-md bg-blue-600 px-3 py-2  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>{text}</button>
    );
};

export default Button;