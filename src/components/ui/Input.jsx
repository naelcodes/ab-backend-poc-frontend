import React from 'react';

const Input = ({ name, type, labelName, isRequired }) => {
    return (
        <>
            <label htmlFor={name} className='block text-base font-medium leading-6 text-gray-900'>{labelName}</label>
            <input type={type} name={name} required={isRequired} className='block w-full rounded-md border-0 py-1.5 ps-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />

        </>
    );
};

export default Input;