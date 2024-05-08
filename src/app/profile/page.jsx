"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useState } from 'react';


const ProfilePage = () => {
    const session = useSession()
    // console.log(session);

    const [userName, setUserName] = useState(session?.data?.user?.name || '');
    const {status} = session;

    const handleProfileInfoUpdate = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/profile', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({user: userName})
        })
    }

    if(status === 'loading') {
        return 'Loading....'
    }

    if(status === 'unauthenticated') {
        return redirect('/login')
    }

    const userImage = session?.data?.user?.image;

    return (
        <section className='mt-8'>
            <h1 className='text-center text-primary text-4xl mb-4'>
                Profile
            </h1>
            <div className='max-w-md mx-auto'>
                <div className='flex gap-4 items-center'>
                    <div>
                        <div className='p-2 rounded-lg relative'>
                            <Image className='rounded-lg w-full h-full mb-1' src={userImage} width={250} height={250} alt={'avatar'}/>
                            <button type='button'>Edit</button>
                        </div>
                    </div>
                    <form className='grow' onSubmit={handleProfileInfoUpdate}>
                        <input 
                            type='text' 
                            placeholder='First and last name'
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        <input type='email' disabled={true} value={session.data.user.email}/>
                        <button type='submit'>Save</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ProfilePage