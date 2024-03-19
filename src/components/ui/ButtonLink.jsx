import React from 'react';

const ButtonLink = ({ text, link }) => {
    return (
        <div class="mt-4">
            <a
                class="flex w-full justify-center rounded-md bg-blue-500 px-3 py-2  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href={link}
            >{text}</a>
        </div>
    );
};

export default ButtonLink;