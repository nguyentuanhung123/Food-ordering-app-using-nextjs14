"use client"
import Image from 'next/image'
import {signIn} from "next-auth/react";
import React, { useState } from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginInProgress, setLoginInProgress] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoginInProgress(true)
        // const response = await fetch('/api/login', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({email, password})
        // });
        // if(response.ok){

        // } else {

        // }
        await signIn('credentials', {email, password, callbackUrl: '/'})
        setLoginInProgress(false)
    }

    return (
        <section className='mt-8'>
            <h1 className='text-center text-primary text-4xl mb-4'>
                Login
            </h1>
            <form className='max-w-xs mx-auto' onSubmit={handleFormSubmit}>
                <input 
                    type='email' 
                    name="email"
                    placeholder='email'
                    disabled={loginInProgress}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type='password' 
                    name='password' 
                    placeholder='password'
                    disabled={loginInProgress}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    type='submit'
                    disabled={loginInProgress}
                >
                    Login
                </button>
                <div className='my-4 text-center text-gray-500'>
                    or login with provider
                </div>
                <button 
                    type='button' 
                    className='flex gap-4 justify-center'
                    onClick={() => signIn('google', {callbackUrl: '/'})}
                >
                    <Image src={'/google.png'} alt='' width={24} height={24}/>
                    Login with Google
                </button>
            </form>
        </section>
    )
}

export default LoginPage