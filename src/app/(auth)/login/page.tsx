"use client"
import { OutlinedInput, } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { ButtonLoading, ButtonSecondary } from '../../_components/ui/button';
import { CustomerLoginReq, CustomerLoginRes } from '../../api/logincustomer/customer.model';
import { customerlogin } from './api';
import { CircleUserRound, Lock } from 'lucide-react';
import { InputAdornment } from '@mui/material';
import Link from 'next/link';

export default function Login() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const loginData: CustomerLoginReq = { username, password };

        try {
            const response: CustomerLoginRes = await customerlogin(loginData);
            if (response.resultCode === 200) {
                router.push('/information');
            } else if (response.resultCode === 401) {
                setError('No user found for this username/password. <br /> Please try again.');
            } else {
                setError('Login failed.');
            }
        } catch (error) {
            setError('An error occurred during login.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto max-w-md py-20 ">
            <div className='bg-white p-10 rounded-2xl shadow-[0_5px_30px_-15px_rgba(255,255,255,1)]'>
                <h2 className='pt-3 mb-3 text-center font-black text-2xl'>
                    Login to Cloud LTC
                </h2>
                {
                    error && (
                        <div className=''>
                            <p
                                dangerouslySetInnerHTML={{ __html: error }}
                                className='text-center text-red-500 border-[1px] border-solid border-red-500 rounded-lg p-2 bg-red-50 text-sm'>
                            </p>
                        </div>
                    )
                }
                {/* <p className='text-center mb-3 text-[#777]'>Hello, Enter your details to get sign in <br /> to your account</p> */}
                <form onSubmit={handleSubmit} className='mt-[1rem]'>
                    <div className="text-left">
                        <p className='mb-1'>User Name</p>
                        <OutlinedInput
                            autoComplete='off'
                            className='rounded-lg'
                            fullWidth
                            size='small'
                            name="username"
                            value={username}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                            required
                            startAdornment={
                                <InputAdornment position="start">
                                    <CircleUserRound width={20} />
                                </InputAdornment>
                            }
                        />
                    </div>
                    <div className="text-left mt-3.5">
                        <p className='mb-1'>Password</p>
                        <OutlinedInput
                            autoComplete='off'
                            className='rounded-lg'
                            fullWidth
                            size='small'
                            name="password"
                            type='password'
                            value={password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            required
                            startAdornment={
                                <InputAdornment position="start">
                                    <Lock width={20} />
                                </InputAdornment>
                            }
                        />
                    </div>

                    <p className='text-right mt-3 text-blue-700 text-sm'>Forgot Password?</p>

                    <ButtonLoading sx={{ marginTop: '20px', color: '#fff' }} fullWidth
                        type='submit'
                        loading={loading}
                        loadingPosition="start"
                    >
                        Coninue
                    </ButtonLoading>

                    <div className='flex justify-center items-center py-4'>
                        <div className='h-[1px] w-[20px] bg-[#777]'></div>
                        <p className='px-4 text-sm'>Or Sign in with</p>
                        <div className='h-[1px] w-[20px] bg-[#777]'></div>
                    </div>

                    <ButtonSecondary className='w-full text-base  text-[#1F2426] border-[1px] border-solid border-[#777]'
                        onClick={() => router.push('/staff')}>
                        Staff Login
                    </ButtonSecondary>

                    <p className='text-center mt-7 text-[#777] text-sm'>Dont have an account?
                        <Link href={'/register'}>
                            <span className='text-blue-700 font-black'> Register Now</span>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
