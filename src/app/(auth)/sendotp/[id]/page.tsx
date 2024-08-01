"use client"
import { OutlinedInput } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { Suspense, useState } from 'react'
import { ButtonLoading } from '../../../_components/ui/button';
import { OTPReq, OTPRes } from '../../../api/otp/otp.models';
import { verifyOTP } from './api';
import Image from 'next/image';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

type Props = {
    params: {
        id: string
    }
}


export default function Sendotp({ params }: Props) {
    const router = useRouter();


    const [password, setPassword] = useState<number | undefined>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const data: OTPReq = {
            username: params.id,
            password: password!,
        };

        try {
            const response: OTPRes = await verifyOTP(data);
            if (response.resultCode === 200) {
                setLoading(false);
                router.push('/information')
                // alert('Login successful!');
            } else {
                setError('Login failed.');
            }
        } catch (error) {
            console.log('An error occurred during login.');
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setPassword(isNaN(value) ? undefined : value);
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="mx-auto max-w-md py-20">
                <div className='bg-white p-10 shadow-md rounded-2xl'>
                    <div className='flex justify-center'>
                        <Image src='/static/images/landing/otp.svg' alt="otp" width={84} height={84} />
                    </div>
                    <h2 className='pt-3 mb-3 text-center font-black text-2xl'>
                        Verification Code
                    </h2>
                    <p className='text-center mb-3 text-[#777]'>Please enter Code sent to your <br /> mobile number: 02055556666</p>
                    <form onSubmit={handleSubmit}>
                        <div className="text-left">
                            <p className='mb-1.5'></p>
                            <OutlinedInput
                                fullWidth
                                className='rounded-lg'
                                size='small'
                                name="password"
                                value={password || ''}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <ButtonLoading sx={{ marginTop: '20px' }} fullWidth
                            type='submit'
                            loading={loading}
                            loadingPosition="start">
                            Comfrim
                        </ButtonLoading>
                    </form>
                    <Link href={'/login'} className='flex justify-center items-center mt-7'>
                        <span><MoveLeft size={24} className='pr-2 text-blue-700' /></span>
                        <p className='text-center text-blue-700 text-sm'>Change Login staff ID</p>
                    </Link>
                </div>
            </div>
        </Suspense>
    )
}
