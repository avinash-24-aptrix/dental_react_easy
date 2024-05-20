import React from 'react'
import { useRef } from 'react';
import ApplicationLogo from '../Components/ApplicationLogo';
import Button from '../Components/Button';
import TextInput from '../Components/TextInput';
import LabelForInput from '../Components/LabelForInput';

const RegistrationPage = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const confirmPassRef = useRef();

    const submitData = (e) => {
        e.preventDefault();
        const nameData = nameRef.current.value;
        const emailData = emailRef.current.value;
        const passData = passRef.current.value;
        const confirmPassData = confirmPassRef.current.value;
        console.log('1', nameData, '2', emailData, '3', passData, '4', confirmPassData);
    }
    return (
        <>
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                <div>
                    <a href="/">
                        <ApplicationLogo className='text-gray-600' />
                    </a>
                </div>
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <form method='post' onSubmit={submitData}>
                        <div>
                            <LabelForInput>Name</LabelForInput>
                            <TextInput ref={nameRef} />
                        </div>
                        <div className="mt-4">
                            <LabelForInput>Email</LabelForInput>
                            <TextInput ref={emailRef} type="email" />
                        </div>
                        <div className="mt-4">
                            <LabelForInput>Password</LabelForInput>
                            <TextInput ref={passRef} type="password" />
                        </div>
                        <div className="mt-4">
                            <LabelForInput>Confirm Password</LabelForInput>
                            <TextInput ref={confirmPassRef} type="password" />
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <a className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="http://127.0.0.1:8000/login">Already registered?</a>
                            <Button variant="">Register</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegistrationPage