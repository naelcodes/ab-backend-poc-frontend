import React from 'react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/button';
import ButtonLink from '../../components/ui/ButtonLink';

const SignIn = () => {
    return (
        <div id="sign-in-view" class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 capitalize">Welcome back, Sign in</h2>
            </div>
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6">
                    <Input type="email" name="email" labelName="Email" isRequired={true} />
                    <Input type="password" name="password" labelName="password" isRequired={true} />
                    <div class="mt-4">
                        <Button text={"sign in with email"} />
                    </div>
                </form>
                <div class="mt-4">
                    <ButtonLink text={"Sign in with Google"} link={ } />
                    {/* @components.ButtonLink{Text: "Sign in with Google", Link: "/api/auth/google/sign-in"}.View()
                    @components.ButtonLink{Text: "Sign in with Facebook", Link: "/api/auth/facebook/sign-in"}.View() */}
                </div>
                <p class="mt-10 text-center text-sm text-gray-500">Don't have an Account ? <a class="font-semibold text-blue-500 hover:text-blue-500" href="#" hx-get={string(templ.URL("/page/sign-up"))} hx-target="#sign-in-view" hx-swap="outerHTML">Sign Up</a></p>
            </div>
        </div>
    );
};

export default SignIn;;;;;