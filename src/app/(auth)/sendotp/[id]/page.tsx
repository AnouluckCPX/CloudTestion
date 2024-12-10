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
import { useAuthStore } from '@/src/store/authStore';
import { messageError } from '@/src/app/_components/notification/message';

type Props = {
    params: {
        id: string
        context: {
            query: {
                username: string,
                message: number
            }
        }
    }
}


export default function Sendotp({ params }: Props) {
    const [password, setPassword] = useState<string>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const { description, logIn } = useAuthStore();
    // console.log(description);


    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await logIn(params.id, password!);
            if (!response.error) {
                // console.log(response);
                router.push('/information')
                setLoading(false);
            } else {
                messageError({
                    label: `${response.error}, Please try again later.`
                })
            }
        } catch (error) {
            console.log('An error occurred during login.');
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = (e.target.value);
        setPassword(value);
        // setPassword(isNaN(value) ? undefined : value);
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="mx-auto max-w-md py-36">
                <div className='bg-white p-10 shadow-md rounded-2xl'>
                    <div className='flex justify-center'>
                        <Image src='/static/images/landing/otp.svg' alt="otp" width={84} height={84} />
                    </div>
                    <h2 className='pt-3 mb-3 text-center font-black text-2xl'>
                        Verification Code
                    </h2>
                    <p className='text-center mb-3 '>Please enter Code sent to your <br /> mobile number: {description}</p>
                    <form onSubmit={handleSubmit}>
                        <div className="text-left">
                            <p className='mb-1.5'></p>
                            <OutlinedInput
                                fullWidth
                                autoComplete='off'
                                className='rounded-lg'
                                size='small'
                                name="password"
                                value={password}
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
