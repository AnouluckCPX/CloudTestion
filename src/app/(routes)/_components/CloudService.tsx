"use client"
import { Box, Container, Divider, Tab, Tabs } from '@mui/material'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'
import listCluod from './json/DataCloudServices.json'
import { useRouter } from 'next/navigation';

type Props = {
    // searchParams: {
    //     id?: string;
    // };
};

interface Cloud {
    id: number
    type: string
    des: string
    link: string
}

const tabStyles = {
    default: {
        fontWeight: 'medium',
        color: '#1F2426',
        fontSize: '16px'
    },
    active: {
        fontWeight: 'bold',
        fontSize: '16px',
        backgroundColor: '#22E76A',
        border: '1px solid #1F2426',
        borderRadius: '7px',
    }
};

export default function CloudService({ }: Props) {
    const router = useRouter();
    const [value, setValue] = useState(0);
    const [items, setItems] = useState<Cloud[]>([]);

    const [count, setCount] = useState(1);

    useEffect(() => {
        setItems(listCluod.data);
    }, []);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };



    const handleNext = () => {
        setValue((prev) => (prev + 1) % items.length);
        if (count === items.length) {
            setCount(1);
        } else {
            setCount(count + 1);
        }
    };
    // console.log(count);
    const handlePrev = () => {
        const prevValue = (value - 1 + items.length) % items.length;
        let _count = count;
        _count + 1

        setValue(prevValue);
        _count = _count > 1 ? _count - 1 : 8;
        setCount(_count);
    };


    return (
        <>
            <Box component={'div'} id='cloudservice' className='cloudservice'>
            </Box>
            <Box component={'div'} className='pb-6'>
            </Box>
            <Box component={'div'} className='h-[500px] mt-[5rem] w-full' >
                <Container maxWidth="lg">
                    <h1 className='text-3xl font-black text-center pb-7'>Cloud Service</h1>
                    <Box display={'flex'} justifyContent={'center'}>
                        <Tabs value={value}
                            onChange={handleChange}
                            TabIndicatorProps={{ style: { display: 'none' } }}
                            variant="scrollable"
                            scrollButtons="auto">
                            {items.map((item, index) => (
                                <Tab key={item.id} label={item.type} style={{ textTransform: 'none', color: '#1F2426', }}
                                    sx={value === index ? tabStyles.active : tabStyles.default} />
                            ))}
                        </Tabs>
                    </Box>
                    <Box display={'flex'} className='mt-16' gap={6}>
                        <Box>
                            <div className='bg-[#F14D58] h-[18rem] w-52 rounded-lg' />
                        </Box>
                        <Box component={'div'}>
                            {
                                items.map(({ id, des, link }, index) => {
                                    if (value === id) {
                                        return (
                                            <div className='transition duration-75 ease-in-out' key={id}>
                                                <Box className='pt-3 h-[170px]'>
                                                    <p className='text-[18px]'>{des}</p>
                                                </Box>
                                                <Link onClick={() => router.push(`${link}=${id}`)} href={link} className='cursor-pointer flex items-center pt-6'>
                                                    <p className='text-[#6366F1] font-black pr-2'>Contact for information </p>
                                                    <Image src='/static/images/landing/more.svg' alt='more' width={24} height={24} />
                                                </Link>
                                                <Divider className='my-3' />
                                                <Box display={'flex'} justifyContent={'space-between'}>
                                                    <Box>
                                                        <p className='text-[#777]'>Description Data Center</p>
                                                        <p>{count} of 8</p>
                                                    </Box>
                                                    <Box display={'flex'} gap={2}>
                                                        <button onClick={handlePrev}>
                                                            <Image src='/static/images/landing/pre.svg' alt='pre' width={44} height={44} />
                                                        </button>
                                                        <button onClick={handleNext}>
                                                            <Image src='/static/images/landing/next.svg' alt='next' width={44} height={44} />
                                                        </button>
                                                    </Box>
                                                </Box>
                                            </div>
                                        )
                                    }
                                })
                            }

                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}