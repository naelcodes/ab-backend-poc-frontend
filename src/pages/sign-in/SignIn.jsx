import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignIn = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting }
	} = useForm();

	const onSubmit = async ({ email, password }) => {
		//await new Promise((resolve) => setTimeout(resolve, 1000));
		console.log(email, password);

		const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/sign-in`, {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email, password })
		});

		console.log(await response.json());
	};

	return (
		<div
			id="sign-in-view"
			className="flex min-h-full w-1/2 flex-col justify-center px-6 py-12 lg:px-8 ">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-800 capitalize">
					Let's get started, Sign In{' '}
				</h2>
			</div>
			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6 mb-8" onSubmit={handleSubmit(onSubmit)}>
					<div>
						<input
							{...register('email', {
								required: 'email is required',
								pattern: {
									value: /^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
									message: 'please enter a valid email'
								}
							})}
							type="email"
							placeholder="Email"
							className="block w-full rounded-md border-0 mb-1 py-1.5 ps-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   focus:ring-1 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
						/>
						{errors.email && (
							<div className="text-sm text-red-400 italic pl-2">
								{errors.email.message}
							</div>
						)}
					</div>

					<div>
						<input
							{...register('password', {
								required: 'password is required',
								minLength: {
									value: 8,
									message: 'The password must have at least 8 characters'
								}
							})}
							type="password"
							placeholder="Password"
							className="block w-full rounded-md border-0 py-1.5 mb-1 ps-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   focus:ring-1 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
						/>
						{errors.password && (
							<div className="text-sm text-red-400 italic pl-2">
								{errors.password.message}
							</div>
						)}
					</div>

					<div>
						<button
							type="submit"
							disabled={isSubmitting}
							className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-2  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
							{isSubmitting ? 'Submitting...' : 'Sign in with Email'}
						</button>
					</div>
				</form>
				<div>
					<p className="block font-bold text-center">or</p>
				</div>
				<div className="mt-6">
					<a
						href={`${import.meta.env.VITE_API_URL}/auth/google`}
						className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-2  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
						Sign in with Google
					</a>
				</div>
				<div className="mt-4">
					<a
						href={`${import.meta.env.VITE_API_URL}/auth/facebook`}
						className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-2  text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
						Sign in with Facebook
					</a>
				</div>
				<p className="mt-10 text-center text-sm text-gray-500">
					Don't have an Account ?{' '}
					<Link className="font-semibold text-blue-500 hover:text-blue-500" to="/sign-up">
						Sign Up
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignIn;
