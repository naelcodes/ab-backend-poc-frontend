import React from 'react';
import Input from '../../components/ui/Input';

const SetPassword = () => {
    return (
        <div class="flex min-h-full w-1/2 flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800 capitalize">Create a new Password  </h2>
            </div>
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6">
                    <Input type="password" name="password" labelName="password" isRequired={true} />
                    <Input type="password" name="confirmPassword" labelName="confirmPassword" isRequired={true} />
                    <div class="mt-4">
                        <button className='flex w-full justify-center rounded-md bg-blue-500 px-3 py-2  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>Save Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SetPassword;