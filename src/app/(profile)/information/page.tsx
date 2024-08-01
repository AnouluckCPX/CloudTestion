"use client"
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/src/store/store';
import { getProfile, profileSelector } from '@/src/store/slices/profileSlice';
import Loading from '../loading';
import { Box, Container, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { ButtonPrimary } from '../../_components/ui/button';
import Image from 'next/image';
import cloudIcon from '@/public/static/images/profile/cloud-0.png'
import { CustomCardBorder } from '../../_components/ui/card';
import CardTransaction from './_component/CardTransaction';
import CardHeader from './_component/CardHeader';

type Props = {}

const CustomContainer = styled(Container)(({ theme }) => ({
    '&.MuiContainer-root': {
        maxWidth: '1400px',
    },
}));

export default function Information({ }: Props) {
    const dispatch = useAppDispatch()
    const { profile, loading, error } = useSelector(profileSelector)

    useEffect(() => {
        setTimeout(() => {
            dispatch(getProfile())
        }, 500);
    }, [dispatch]);

    if (loading === true) {

        return <Loading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section>
            <Box className='h-[400px] bg-header px-28'>
                <Container maxWidth="xl" className='pt-[10rem]'>
                    <h1 className='text-xl font-bold'>Hello, <span>{profile?.username}</span> <span>{profile?.lastname}!</span></h1>
                    <p>Complete the essential actions all from one page.</p>
                    <Box display='flex' justifyContent='space-between'>
                        <Box>
                            {/* Empty Layout */}
                        </Box>
                        <Box display={'flex'} gap={1}  >
                            <CardHeader />
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box className='px-28 pt-14'>
                <CustomContainer>
                    <CustomCardBorder>
                        <Grid container>
                            <Grid xs={6} className='flex justify-center' >
                                <Image src={cloudIcon} alt="plan" width={400} height={400} />
                            </Grid>
                            <Grid xs={6}>
                                <h3 className='text-lg font-bold text-center'>Start Website Builder & Web Hosting</h3>
                                <p className='text-center text-[#727586] text-sm pt-3'>
                                    Get your Web Hosting plan and build your website quickly
                                </p>
                                <Box className='my-5'>
                                    <Box display='flex' justifyContent='center'>
                                        <p className='text-[#ED1C29] bg-[#F5F5F5] text-center text-sm font-medium p-2 px-7 rounded-lg mb-2'>
                                            Free Trial
                                        </p>
                                    </Box>
                                    <p className='text-6xl font-bold text-center'>
                                        14 <span className='text-lg font-medium'>/ days</span>
                                    </p>
                                </Box>
                                <Box justifyContent="center" display="flex">
                                    <ButtonPrimary className='w-[370px] font-semibold rounded-lg'>
                                        Get Started
                                    </ButtonPrimary>
                                </Box>
                                <p className='text-center text-[#727586] text-sm pt-3'>Try Frist & decider later, no credit card required</p>
                            </Grid>
                        </Grid>
                    </CustomCardBorder>
                </CustomContainer>
                <CustomContainer className='mt-10'>
                    <CardTransaction />
                </CustomContainer>
            </Box>
        </section>
    )
}