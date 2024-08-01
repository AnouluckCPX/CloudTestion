"use client"
import { OutlinedInput, } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { ButtonLoading } from '../../_components/ui/button';
import { UserRegister, UserRegisterRes } from '@/models/register.models';
import { authRegister } from './api';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

type Props = {}

export default function Register({ }: Props) {
    const [initialValue, setInitialValue] = useState<UserRegister>({
        username: '',
        lastname: '',
        city: '',
        district: '',
        nationality: '',
        id_card: '',
        province: '',
        telephone: '',
        password: '',
        village: ''
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const rounter = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInitialValue(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response: UserRegisterRes = await authRegister(initialValue);
            if (response.resultCode === 200) {
                setLoading(false);
            } else {
                setError('Registration failed.');
            }
        } catch (error) {
            console.log('An error occurred during registration.');
        }
    };

    return (
        <div className="mx-auto max-w-7xl py-28 w-[50rem]">
            <div className='bg-white p-6 shadow-md rounded-lg'>
                <h2 className='mb-6 text-center font-bold text-xl'>
                    Register
                </h2>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid xs={6}>
                            <div className="text-left mt-2">
                                <p className='mb-1.5'>Username</p>
                                <OutlinedInput
                                    fullWidth
                                    size='small'
                                    name="username"
                                    value={initialValue.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="text-left mt-2">
                                <p className='mb-1.5'>Last Name</p>
                                <OutlinedInput
                                    fullWidth
                                    size='small'
                                    name="lastname"
                                    value={initialValue.lastname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="text-left mt-2">
                                <p className='mb-1.5'>Password</p>
                                <OutlinedInput
                                    fullWidth
                                    size='small'
                                    name="password"
                                    value={initialValue.password}
                                    onChange={handleChange}
                                    required
                                    type="password"
                                />
                            </div>
                            <div className="text-left mt-2">
                                <p className='mb-1.5'>ID Card</p>
                                <OutlinedInput
                                    fullWidth
                                    size='small'
                                    name="id_card"
                                    value={initialValue.id_card}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="text-left mt-2">
                                <p className='mb-1.5'>Nationality</p>
                                <OutlinedInput
                                    fullWidth
                                    size='small'
                                    name="nationality"
                                    value={initialValue.nationality}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </Grid>
                        <Grid xs={6}>
                            <div className="text-left mt-2">
                                <p className='mb-1.5'>City</p>
                                <OutlinedInput
                                    fullWidth
                                    size='small'
                                    name="city"
                                    value={initialValue.city}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="text-left mt-2">
                                <p className='mb-1.5'>District</p>
                                <OutlinedInput
                                    fullWidth
                                    size='small'
                                    name="district"
                                    value={initialValue.district}
                                    onChange={handleChange}
                                    required
                                />
                            </div>


                            <div className="text-left mt-2">
                                <p className='mb-1.5'>Province</p>
                                <OutlinedInput
                                    fullWidth
                                    size='small'
                                    name="province"
                                    value={initialValue.province}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="text-left mt-2">
                                <p className='mb-1.5'>Telephone</p>
                                <OutlinedInput
                                    fullWidth
                                    size='small'
                                    name="telephone"
                                    value={initialValue.telephone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="text-left mt-2">
                                <p className='mb-1.5'>Village</p>
                                <OutlinedInput
                                    fullWidth
                                    size='small'
                                    name="village"
                                    value={initialValue.village}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </Grid>
                    </Grid>
                    <p className='text-center mt-3'>
                        By creating an account, I agree with the <span className='text-blue-500'>Terms of Service</span> and <span className='text-blue-500'>Privacy Policy</span>
                    </p>

                    <ButtonLoading sx={{ marginTop: '20px', color: '#fff' }} fullWidth
                        type='submit'
                        loading={loading}
                        loadingPosition="start"
                    >
                        Continue
                    </ButtonLoading>

                    <Link href={'/login'} className='flex justify-center items-center mt-7'>
                        <span><MoveLeft size={24} className='pr-2 text-blue-700' /></span>
                        <p className='text-center text-blue-700 text-sm'>Back to Login</p>
                    </Link>

                    {error && <p className='mt-2 text-red-600'>{error}</p>}
                </form>
            </div>
        </div>
    )
}