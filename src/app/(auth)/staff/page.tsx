"use client"
import { OutlinedInput, Popover, } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { ButtonLoading, ButtonSecondary } from '../../_components/ui/button';
import { SquareUserRound } from 'lucide-react';
import { InputAdornment } from '@mui/material';
import { Info } from 'lucide-react';
import { useAuthStore } from '@/src/store/authStore';
import dynamic from 'next/dynamic';
import Link from 'next/link'
import { messageError } from '../../_components/notification/message';

// const DynamicMap = dynamic(
//     () => import('../../_components/common/Map'),
//     {
//         ssr: false,
//         loading: () => <p>Loading...</p>,
//     }
// )

type Props = {}

export default function Staff({ }: Props) {
    const [username, setUsername] = useState<string>('VTE4525');
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const { sendOtp } = useAuthStore();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await sendOtp(username);

            if (!response.error) {
                // router.push(`/sendotp/${username}`)
                router.push(`/sendotp/${username}`);
            } else {
                // console.error('Error:', response.error);
                messageError({
                    label: `${response.error}, Please try again later.`
                })
            }
        } catch (error) {
            console.log('An error occurred during login.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto max-w-md py-36">
            <div className='bg-white p-10 shadow-md rounded-2xl'>
                <h2 className='pt-3 mb-3 text-center font-black text-2xl'>
                    Staff Login
                </h2>

                <p className='text-center mb-3 text-[#777]'>Only enter employee ID to get sign in <br /> to your account</p>
                <form onSubmit={handleSubmit}>
                    <div className="text-left">
                        <div className='flex items-start'>
                            <p className='mb-1 pr-2'>Staff ID</p>
                            <span className='text-[#777]'
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}>
                                <Info width={18} />
                            </span>
                        </div>
                        <OutlinedInput
                            placeholder='VTExxxx'
                            className='rounded-lg'
                            fullWidth
                            size='small'
                            name="username"
                            value={username}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                            required
                            startAdornment={
                                <InputAdornment position="start">
                                    <SquareUserRound width={20} />
                                </InputAdornment>
                            }
                        />
                    </div>

                    <p className='text-left mt-3 text-blue-700 text-sm'></p>

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
                        onClick={() => router.push('/login')}>
                        Customer Login
                    </ButtonSecondary>

                    <p className='text-center mt-7 text-blue-700 text-sm'>Having trouble in sign in?</p>
                </form>
            </div>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <p className='text-sm text-[#777] px-3 py-3 rounded-md'>Ex : VTE55xx or is your staff ID.</p>
            </Popover>
        </div>
    )
}