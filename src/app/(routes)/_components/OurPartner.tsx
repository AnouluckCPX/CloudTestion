import { Box, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function OurPartner({ }: Props) {
    return (
        <Box sx={{ paddingTop: '20rem', height: '57rem', backgroundColor: '#FAFAFF' }}>
            <Container maxWidth="lg">
                <h1 className='text-3xl font-black text-center'>Our Partners</h1>
                <p className='text-center leading-8 mt-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br /> been the industrys standard dummy text ever since the 1500s</p>
                <div className='grid grid-cols-3 gap-10 mt-[7rem]'>
                    <div className='bg-white rounded-lg shadow-sm flex justify-center py-3 h-[8rem] w-full'>
                        <Image src='/static/images/landing/partner-1.png' alt="cloud icon" width={150} height={150} className='w-full h-full object-contain' />
                    </div>
                    <div className='bg-white rounded-lg shadow-sm flex justify-center py-3 h-[8rem] w-full'>
                        <Image src='/static/images/landing/partner-2.png' alt="cloud icon" width={150} height={150} className='w-full h-full object-contain' />
                    </div>
                    <div className='bg-white rounded-lg shadow-sm flex justify-center py-3 h-[8rem] w-full'>
                        <Image src='/static/images/landing/partner-3.png' alt="cloud icon" width={150} height={150} className='w-full h-full object-contain' />
                    </div>
                </div>
            </Container>
        </Box>
    )
}