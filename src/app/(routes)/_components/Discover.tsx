"use client"
import { Box, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Discover({ }: Props) {
    return (
        <Box component={'div'} sx={{ mt: 10, height: '38rem', paddingTop: 18 }}>
            <Container maxWidth="lg">
                <div className='grid grid-cols-2 gap-10'>
                    <div className='relative'>
                        <h1 className='text-3xl font-bold'>Discover The Tech Innovations</h1>
                        <h2 className='font-medium text-2xl pt-16 pl-12 '>
                            LTC is a comprehensive <span className='text-[#22B758]'>ICT infrastructure <br /> provider for businesses and those who</span> <br />
                            want to use ICT as a tool to strengthen <br />
                            their business competitiveness.
                        </h2>
                        <div className='absolute top-16 left-0'>
                            <Image src='/static/images/landing/simicolone.svg' alt="simicolone" width={33} height={33} />
                        </div>
                        <div className='absolute bottom-[2rem] right-0 rotate-180'>
                            <Image src='/static/images/landing/simicolone.svg' alt="simicolone" width={33} height={33} />
                        </div>
                    </div>
                    <div className='relative'>
                        <div className='border-2 border-solid border-[#861111] rounded-[0.8rem] w-[500px] h-[280px]'>
                            <Image src='/static/images/landing/ltc_com.png' alt="ltc_com" width={500} height={300} className='rounded-xl w-full h-full object-cover' />
                        </div>
                        <div className='bg-white absolute -top-10 left-12 -z-10 border-2 border-solid border-[#861111] rounded-2xl w-[500px] h-[280px]'>
                            <div className='bg-[#ED1C29] absolute top-4 left-[1.75rem] -z-10 rounded-full w-[.7rem] h-[.7rem]' />
                            <div className='bg-[#ED1C29] absolute top-4 left-[3rem] -z-10 rounded-full w-[.7rem] h-[.7rem]' />
                            <div className='bg-[#ED1C29] absolute top-4 left-[4.3rem] -z-10 rounded-full w-[.7rem] h-[.7rem]' />
                        </div>
                        <div className=' bg-white absolute -top-[5rem] left-[18rem] -z-[15] border-2 border-solid border-[#861111] rounded-2xl w-[300px] h-[190px]'>
                            <div className='bg-[#ED1C29] absolute top-4 left-[1.75rem] -z-10 rounded-full w-[.7rem] h-[.7rem]' />
                            <div className='bg-[#ED1C29] absolute top-4 left-[3rem] -z-10 rounded-full w-[.7rem] h-[.7rem]' />
                            <div className='bg-[#ED1C29] absolute top-4 left-[4.3rem] -z-10 rounded-full w-[.7rem] h-[.7rem]' />
                        </div>
                    </div>
                    <div className='col-span-2 mt-4'>
                        <p className='text-center text-xl'>The companys services range from Cloud Solutions services full Internet connection services, andn<span className='text-[#22B758]'><b> LTC-IDC (LTC Internet Data Center) </b></span> operation center services for those who need efficient services at international standards.</p>
                    </div>
                </div>
            </Container>
        </Box>
    )
}