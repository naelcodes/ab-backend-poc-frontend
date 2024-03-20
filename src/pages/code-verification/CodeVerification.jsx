import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
function CodeVerification() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting }
	} = useForm();

	const navigate = useNavigate();
	const [verified, setVerified] = useState(false);

	const onSubmitHandler = async ({ code }) => {
		console.log(code);
		const { status } = await fetch(`${import.meta.env.VITE_API_URL}/auth/verification/${code}`, {
			method: 'GET',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		console.log(status);

		if (status == 202) {
			setVerified(true);
			setTimeout(() => {
				navigate('/sign-in');
			}, 5 * 1000);
		}
	};
	return (
		<div className="min-h-full w-1/2 flex flex-col justify-center items-center space-y-5">
			{!verified ? (
				<>
					<h1 className="text-3xl font-bold text-gray-800 w-2/3">Code Verification</h1>
					<p className="text-sm w-2/3">
						Enter the verification code sent to your email address
					</p>

					<form className="space-y-3 mb-8 w-2/3" onSubmit={handleSubmit(onSubmitHandler)}>
						<div className="w-full">
							<input
								{...register('code', {
									required: 'verification code is required',
									pattern: {
										value: /^[0-9]{6}$/,
										message: 'The code must be 6 digits'
									}
								})}
								type="text"
								className="block w-full rounded-md border-0 mb-1 py-1.5 ps-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-blue-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
							/>
							{errors.code && (
								<div className="text-sm text-red-400 italic pl-2">
									{errors.code.message}
								</div>
							)}
						</div>
						<div className="h-28 w-full mt-4  ">
							<button
								type="submit"
								disabled={isSubmitting}
								className="rounded-md bg-blue-500 px-3 py-2  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
								{isSubmitting ? 'Sending...' : 'Send Code'}
							</button>
						</div>
					</form>
				</>
			) : (
				<>
					<h1 className="text-3xl font-bold text-gray-800 w-2/3">
						Account Created Successfully
					</h1>
					<p className="text-sm w-2/3">You will be redirected to the Sign In page in 5sec</p>
				</>
			)}
		</div>
	);
}

export default CodeVerification;
