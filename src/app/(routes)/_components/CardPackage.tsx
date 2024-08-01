"use client"
import React, { useEffect, useState } from 'react'
import packageList from './json/MockDataCloud.json';
import Image from 'next/image';
import { Button, Container, Divider, Stack, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation'

type Props = {}

interface Root {
    data: Package[]
}

interface Package {
    id: number
    name: string
    list: List[]
}

interface List {
    des: string
    cpu: number
    ram: number
    disk: number
    ip: number
    price: number
    firewall: string
    back: string
    bandwidth: number
    support: string
    migration: string
}



const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#fff',
    margin: '0px',
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#e11d48',
    fontSize: '16px',
    height: '40px',
    boxShadow: 'none',
    border: '2px solid #e11d48',
    borderRadius: '7px',
    '&:hover': {
        backgroundColor: '#ffe4e6',
        color: '#e11d48',
        border: '2px solid #e11d48',
    },
}));

const boxStyles = {
    marginTop: '45px',
    boxShadow: 0,
    border: '1px solid #fda4af',
    borderRadius: '10px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        boxShadow: 5,
        transform: 'scale(1.02)',
    },
    box: {
        padding: '0px 30px 20px',
        lineHeight: '1.6'
    },
};

const boxPopularStyles = {
    header: {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#ED1C29',
        height: '40px',
        fontWeight: 'bold',
        borderRadius: '6px 6px 0 0',
    },
    box: {
        lineHeight: '1.6',
        padding: '0px 30px 20px',
    },
    boxShadow: 0,
    border: '2px solid #e11d48',
    borderRadius: '10px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        boxShadow: 5,
        transform: 'scale(1.02)',
    },
};

export default function CardPackage({ }: Props) {
    const checkIcon = '/static/images/landing/check.svg';
    const [listCloud, setListCloud] = useState<Package[]>([]);
    const router = useRouter();

    useEffect(() => {
        setListCloud(packageList.data);
    }, []);

    return (
        <Container maxWidth="xl" className='mt-[8rem] px-[5rem]'>
            <div className='text-3xl font-bold text-center mb-6 mt-16'>Choose hosting plan for you needs</div>
            <div className='text-center'>Get started in complete confidence. Our 30-day money-back guarantee means its risk-free</div>
            <Box sx={{ marginTop: '50px', paddingLeft: '4rem', paddingRight: '4rem' }}>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                    useFlexGap
                    flexWrap="wrap">
                    {
                        listCloud.map((item, index) => {
                            if (index === 1) {
                                return (
                                    <Box sx={boxPopularStyles} width={320} key={item.id}>
                                        <Typography variant="subtitle1" sx={boxPopularStyles.header} className='pt-[7px]'>
                                            MOST POPULAR
                                        </Typography>
                                        <Box sx={boxPopularStyles.box}>
                                            <h2 className='mt-10 mb-0 font-bold'>{item.name}</h2>
                                            {
                                                item.list.map((sub, i) => {
                                                    return (
                                                        <div key={i}>
                                                            <Typography variant='body2' className='mt-1 text-sm h-[35px] text-[#777]'>{sub.des}</Typography>
                                                            <h1 className='text-4xl mt-4 mb-3 font-extrabold'><span className='text-lg'>₭ </span>{sub.price?.toLocaleString()}<span className='ml-0.5 text-base'>/mo</span></h1>
                                                            <Divider className='border-1 border-indigo-200 mb-5' />
                                                            <CustomButton
                                                                onClick={() => router.push('/preorder')}
                                                                variant="outlined" disableRipple sx={{ textTransform: "none" }} fullWidth>
                                                                Choose Plan
                                                            </CustomButton>
                                                            <p className='flex items-center mt-4'>
                                                                <Image src={checkIcon} width={24} height={24} alt='check' className='pr-2.5' />
                                                                <span className='px-1.5 font-bold'>{sub.cpu} </span> core vCPU</p>
                                                            <p className='flex items-center'>
                                                                <Image src={checkIcon} width={24} height={24} alt='check' className='pr-2.5' />
                                                                <span className='px-1.5 font-bold'>{sub.ram}</span> GB RAM</p>
                                                            <p className='flex items-center'>
                                                                <Image src={checkIcon} width={24} height={24} alt='check' className='pr-2.5' />
                                                                <span className='px-1.5 font-bold'>{sub.disk}</span> GB Disk</p>
                                                            <p className='flex items-center'>
                                                                <Image src={checkIcon} width={24} height={24} alt='check' className='pr-2.5' />
                                                                <span className='px-1.5 font-bold'>{sub.ip}</span> IP Address</p>
                                                            <p className='flex items-center'>
                                                                <Image src={checkIcon} width={24} height={24} alt='check' className='pr-2.5' />
                                                                <span className='px-1.5'>Firewall </span>{sub.firewall}</p>
                                                            <p className='flex items-center'>
                                                                <Image src={checkIcon} width={24} height={24} alt='check' className='pr-2.5' />
                                                                <span className='px-1.5'>Backup</span> {sub.back} </p>
                                                            <p className='flex items-center'>
                                                                <Image src={checkIcon} width={24} height={24} alt='check' className='pr-2.5' />
                                                                <span className='px-1.5 font-bold'>{sub.bandwidth}</span>
                                                                Mpbs Bandwidth</p>
                                                            <p className='flex items-center'>
                                                                <Image src={checkIcon} width={24} height={24} alt='check' className='pr-2.5' />
                                                                <span className='px-1.5'>{sub.migration}</span>
                                                                Migration</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Box>
                                    </Box>
                                )
                            } else {
                                return (
                                    <Box key={item.id} sx={boxStyles} width={320}>
                                        <Box sx={boxStyles.box}>
                                            <h2 className='mt-10 mb-0 font-bold'>{item.name}</h2>
                                            {
                                                item.list.map((sub, i) => {
                                                    return (
                                                        <div key={i}>
                                                            <Typography variant='body2' className='mt-1 text-sm h-[35px] text-[#777]'>{sub.des}</Typography>
                                                            <h1 className='text-4xl mt-4 mb-3 font-extrabold'><span className='text-lg'>₭ </span>{sub.price?.toLocaleString()}<span className='ml-0.5 text-base'>/mo</span></h1>
                                                            <Divider className='border-1 border-indigo-200 mb-5' />
                                                            <CustomButton
                                                                onClick={() => router.push('/preorder')}
                                                                variant="outlined" disableRipple sx={{ textTransform: "none" }} fullWidth>
                                                                Choose Plan
                                                            </CustomButton>
                                                            <p className='flex items-center mt-4'>
                                                                <Image src={checkIcon} width={24} height={24} alt='check' className='pr-2.5' />
                                                                <span className='px-1.5 font-bold'>{sub.cpu} </span> core vCPU</p>
                                                            <p className='flex items-center'>
                                                                <Image src={checkIcon} width={24} height={24} alt='check' className='pr-2.5' />
                                                                <span className='px-1.5 font-bold'>{sub.ram}</span> GB RAM</p>
                                                            <p className='flex items-center'>
                                                                <Image src={checkIcon} width={24} height={24} alt='check' className='pr-2.5' />
                                                                <span className='px-1.5 font-bold'>{sub.disk}</span> GB Disk</p>
                                                            <p className='flex items-center'>
                                                                <Image src={checkIcon} width={24} height={24} alt='check' className='pr-2.5' />
                                                                <span className='px-1.5 font-bold'>{sub.ip}</span> IP Address</p>
                                                            <p className='flex items-center'>
                                                                <Image src={checkIcon} width={24} height={24} alt='check' className='pr-2.5' />
                                                                <span className='px-1.5'>Firewall </span>{sub.firewall}</p>
                                                            <p className='flex items-center'>
                                                                <Image src={checkIcon} width={24} height={24} alt='check' className='pr-2.5' />
                                                                <span className='px-1.5'>Backup</span> {sub.back} </p>
                                                            <p className='flex items-center'>
                                                                <Image src={checkIcon} width={24} height={24} alt='check' className='pr-2.5' />
                                                                <span className='px-1.5 font-bold'>{sub.bandwidth}</span>
                                                                Mpbs Bandwidth</p>
                                                            <p className='flex items-center'>
                                                                <Image src={checkIcon} width={24} height={24} alt='check' className='pr-2.5' />
                                                                <span className='px-1.5'>{sub.migration}</span>
                                                                Migration</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Box>
                                    </Box>
                                )
                            }
                        })
                    }
                </Stack>
            </Box>

        </Container>
    )
}