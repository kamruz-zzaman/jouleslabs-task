// import Image from 'next/image';
import React from 'react';
import Footer from '../Component/Footer/Footer';
import Navbar from '../Component/Header/Navbar';
import useAuth from '../Hooks/useAuth';

const profile = () => {
    const { user } = useAuth();
    return (
        <>
            <Navbar />
            <div className='flex mx-auto justify-center py-20 my-36 border-2 w-1/3'>
                <div>
                    <img className='ml-20 border border-green-500 rounded-full' src={user.photoURL} alt="" />
                    <div className='mt-10'>
                        <p className=''><span className='font-bold'>Name:</span> {user.displayName}</p>
                        <p className=''><span className='font-bold'>Email:</span> {user.email}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default profile;