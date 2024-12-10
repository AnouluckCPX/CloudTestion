"use client"
import { Box } from '@mui/material'
import React from 'react'
import { ButtonPrimary } from '../../_components/ui/button'
import cloudIcon from '@/public/static/images/landing/Cloud-ss.svg'
import Image from 'next/image'
import ShiningButton from '../../_components/ui/shining-button'

type Props = {}

export default function HeaderAds({ }: Props) {
    return (
        <Box className=' h-[65rem] relative'>
            {/* ----- backgroud */}
            <div className='bg-[#FDF0F0] w-full h-[65rem] absolute -z-10' />
            <div className='absolute -z-10 h-[65rem] w-full opacity-10'>
                <Image src='/static/images/landing/bggg.png' alt="cloud icon" width={1500} height={1500} />
            </div>

            {/* ----- content */}
            <div className='text-center pt-[4rem]'>
                <h2 className='text-3xl font-black'>Cloud Storage Elevated</h2>
                <h1 className='text-4xl font-black pt-2'>For Your Work</h1>
                <p className='leading-6 pt-3 mb-4'>Share processes and data securely on a need to know basis without <br />
                    the need for reconciliation it combines a permission</p>

                <ShiningButton label='Start Free Trial 14 days' />

                <Box display={'flex'} justifyContent={'center'} mt={4}>
                    <div className='relative'>
                        <div className='z-10 flex absolute top-10 -left-14 bg-white border-[#ED1C29] border-solid border-[1px] rounded-lg py-3 px-4'>
                            <Image src='/static/images/landing/heart.svg' alt="cloud icon" width={44} height={44} />
                            <p className='text-left pl-3 text-lg leading-6'>Uptime <br />Guarantee</p>
                        </div>
                        <div className='z-10 flex absolute bottom-10 -left-20 bg-white border-[#ED1C29] border-solid border-[1px] rounded-lg py-2 px-4 items-center'>
                            <Image src='/static/images/landing/secure.svg' alt="cloud icon" width={34} height={34} />
                            <p className='text-left pl-2 text-lg'>SSL certificate</p>
                        </div>
                        <div className='z-10 absolute -bottom-6 -right-20 bg-white border-[#ED1C29] border-solid border-[1px] rounded-lg py-4 px-6'>
                            <div className='flex items-center'>
                                <Image src='/static/images/landing/check.svg' alt="cloud icon" width={28} height={28} />
                                <p className='text-left pl-2 text-[1.7rem]'>Safe and Secured</p>
                            </div>
                            <p className='mt-1 text-[#0FA044]'>The data center, SLA uptime 99.9%</p>
                        </div>
                        <div className='bg-[#fff] border-[#ED1C29] border-[1px] border-solid rounded-lg py-16 px-40'>
                            <Image src={cloudIcon} alt="cloud icon" width={550} height={200} />
                        </div>
                        <div className='absolute -z-10 -bottom-14 -right-10 border-[#ED1C29] border-solid border-[1px] rounded-lg '>
                            <div className='w-[53rem] h-[28rem]'></div>
                        </div>

                        {/* ----- border line */}
                        <div className='absolute -z-10 top-14 -right-20 h-[1px] w-20 bg-[#ED1C29]' />
                        <div className='absolute -z-10 top-36 -left-28 h-[1px] w-28 bg-[#ED1C29]' />
                    </div>
                </Box>
            </div>
        </Box>
    )
}