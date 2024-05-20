import React, { useRef } from 'react';
import ApplicationLogo from './Components/ApplicationLogo';
import Button from './Components/Button';
import TextInput from './Components/TextInput';
import LabelForInput from './Components/LabelForInput';

const LoginPage = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const submitData = (e) => {
        e.preventDefault();
        const emailData = emailRef.current.value;
        const passData = passRef.current.value;
        console.log(emailData, passData);
    }



    return (
        <>
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                <div>
                    <ApplicationLogo className='text-gray-600' />
                </div>
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <form method='post' onSubmit={submitData}>
                        <div>
                            <LabelForInput>Email</LabelForInput>
                            <TextInput ref={emailRef} name="" className="" type="email" />
                        </div>
                        <div className="mt-4">
                            <LabelForInput>Password</LabelForInput>
                            <TextInput ref={passRef} name="" className="" type="password" />
                        </div>
                        <div className="block mt-4">
                            <label className="flex items-center">
                                <input name="remember" type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500" />
                                <span className="ms-2 text-sm text-gray-600">Remember me</span>
                            </label>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <a className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="http://127.0.0.1:8000/forgot-password">
                                Forgot your password?
                            </a>

                            <Button variant="primary">Log in</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginPage;
