"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [creatingUser, setCreatingUser] = useState(false)
    const [userCreated, setUserCreated] = useState(false)

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setCreatingUser(true)
        await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        setCreatingUser(false)

    }

    return (
        <section className='mt-8'>
            <h1 className='text-center text-primary text-4xl mb-4'>
                Register
            </h1>
            <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
                <input 
                    type='email' 
                    placeholder='email'
                    disabled={creatingUser}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type='password' 
                    placeholder='password'
                    disabled={creatingUser}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    type='submit'
                    disabled={creatingUser}
                >
                    Register
                </button>
                <div className='my-4 text-center text-gray-500'>
                    or login with provider
                </div>
                <button className='flex gap-4 justify-center'>
                    <Image src={'/google.png'} alt='' width={24} height={24}/>
                    Login with Google
                </button>
            </form>
        </section>
    )
}

export default RegisterPage