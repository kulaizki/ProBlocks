'use client';
import SignupCard from '../../components/signupCard';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

const RegisterPage: FC = () => {
  const router = useRouter();

  return (
    <div className='flex h-screen w-screen'>
      <div className='hidden lg:block w-1/2 bg-black'></div>
      <div className='flex-grow bg-white p-8 items-center content-center'>
        <SignupCard router={router} />
      </div>
    </div>
  );
};

export default RegisterPage;
