"use client"
import { OutlinedInput, Popover, } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { ButtonLoading, ButtonSecondary } from '../../_components/ui/button';
import { UserLoginReq, UserLoginRes } from '../../api/login/user.models';
import { SquareUserRound } from 'lucide-react';
import { InputAdornment } from '@mui/material';
import { authlogin } from './api';
import { Info } from 'lucide-react';

type Props = {}

export default function Staff({ }: Props) {
    const [username, setUsername] = useState<string>('luck');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const Router = useRouter();

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        const loginData: UserLoginReq = { username };

        try {
            const response: UserLoginRes = await authlogin(loginData);
            if (response.resultCode === 200) {
                setLoading(false);
                Router.push(`/sendotp/${encodeURIComponent(username)}`)
            } else {
                setError('Login failed.');
            }
        } catch (error) {
            console.log('An error occurred during login.');
        }
    };

    return (
        <div className="mx-auto max-w-md py-28">
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
                        onClick={() => Router.push('/login')}>
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