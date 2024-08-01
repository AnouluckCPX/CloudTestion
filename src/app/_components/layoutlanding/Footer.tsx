"use client"
import { Box, Container } from '@mui/material'
import React from 'react'
import { ButtonSecondary } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function Footer({ }: Props) {
    return (
        <Box component={'div'} sx={{ height: '40rem' }}>
            <Box component={'div'} sx={{ backgroundColor: '#E53636' }}>
                <Container maxWidth="lg" className='pt-[6rem] pb-[4.5rem]'>
                    <div className='bg-white border-2 border-solid border-[#000] py-[2rem] px-[3.5rem] rounded-xl'>
                        <div className='flex items-center'>
                            <div className='pr-10'>
                                <Image src='/static/images/landing/computer.svg' alt="computer" width={140} height={140} />
                            </div>
                            <div >
                                <h1 className='text-3xl font-black'>We build creative website & apps</h1>
                                <p className='text-xl pt-3 text-[#777]'>Building a business to meet customer expectations quickly, safely and with
                                    quality is the heart of success</p>
                            </div>
                            <ButtonSecondary className='h-[3.5rem] w-[14rem] font-semibold bg-[#22E76A] text-[#1F2426] border-2 border-solid border-[#861111]'>
                                Get Stared Now
                            </ButtonSecondary>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 gap-5 mt-[4rem]'>
                        <div className='col-span-2'>
                            <h1 className='text-2xl font-black text-white'>Cloud LTC</h1>
                            <p className='text-white pt-[1rem] leading-7'>
                                Lorem Ipsum is simply dummy text of the <br />
                                printing and typesetting industry. Lorem Ipsum has <br />
                                been the industrys standard dummy text ever since the 1500s
                            </p>
                            <div className='flex mt-5 gap-5'>
                                <Image src='/static/images/landing/facebook.svg' alt="facebook" width={24} height={24} />
                                <Image src='/static/images/landing/tik-tok.svg' alt="tik tok" width={24} height={24} />
                                <Image src='/static/images/landing/whatsapp.svg' alt="whatsapp" width={24} height={24} />
                            </div>
                        </div>
                        <div>
                            <h5 className='text-white font-black text-xl'>Navigation</h5>
                            <div className='leading-9 text-white pt-4'>
                                <ul>
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Hosting</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Cloud</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Domains</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Service</Link>
                                    </li>
                                    <li>
                                        <Link href="/">About</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h5 className='text-white font-black text-xl'>Contact</h5>
                            <div className='leading-9 text-white pt-4'>
                                <div className='flex'>
                                    <Image src='/static/images/landing/phone-call.svg' alt="phone call" width={14} height={14} />
                                    <p className='pl-3'>021 555-555, 101 (Call Center)</p>
                                </div>
                                <div className='flex'>
                                    <Image src='/static/images/landing/mail.svg' alt="phone call" width={14} height={14} />
                                    <p className='pl-3'>Contact@laotel.com</p>
                                </div>
                                <div className='flex'>
                                    <Image src='/static/images/landing/maps-and-flags.svg' alt="phone call" width={14} height={14}
                                        className='pb-[2.3rem]' />
                                    <p className='pl-3'>Saylom Rd, Chanthabuly district, <br /> Vientiane, Lao PDR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Box>
            <Box component={'div'} sx={{ backgroundColor: '#A81616', py: '1.7rem' }}>
                <Container maxWidth="lg">
                    <p className='text-white'>© Copyrights 2024 Lao Telecommunication Public Company All Rights Reserved</p>
                </Container>
            </Box>
        </Box>
    )
}