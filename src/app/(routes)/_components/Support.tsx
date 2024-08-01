"use client"
import { Box, Container } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Support({ }: Props) {
  return (
    <Box className='bg-gradient-to-r from-[#FBE0E0] to-[#F5B2B2] w-full h-[35rem] mt-[7rem]'>
      <Container maxWidth="lg" className='pt-[10rem]'>
        <Box display={'flex'} justifyItems={'center'}>
          <div className='grid grid-cols-2 gap-5'>
            <div>
              <h1 className='text-7xl font-black'>24/7</h1>
              <h2 className='text-3xl font-black pt-4'>Support for your success</h2>
              <p className='pt-5'>There is a help center staffed by highly qualified and <br /> experienced professionals who are ready to serve you 24/7.</p>
            </div>
            <div className=''>
              <div className='relative'>
                <div className='bg-[#E95555] border-2 border-solid border-[#861111] rounded-lg w-[650px] h-[260px]'></div>
                <div className='absolute bottom-[2px] -right-14'>
                  <Image src='/static/images/landing/call.png' alt="call" width={320} height={300} />
                </div>
                <div className='absolute -top-9 -left-14 bg-white border-[#C91A1A] border-solid border-2 py-3 px-6 rounded-lg'>
                  <p>
                    Hello, thank you for contacting our support center. <br />
                    How can I assist you today ?
                  </p>
                  <div className='absolute top-[4.6rem] left-[24rem] w-0 h-0 border-solid border-t-[15px] border-t-[#C91A1A] border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent' />
                </div>

                <div className='absolute top-[5rem] -left-[7rem] bg-white border-[#C91A1A] border-solid border-2 py-3 px-6 rounded-lg'>
                  <p>Can I backup some website files auto ?</p>
                  <div className='absolute top-[3rem] left-[1rem] w-0 h-0 border-solid border-t-[15px] border-t-[#C91A1A] border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent' />
                </div>

                <div className='absolute top-[11.5rem] left-[1rem] bg-white border-[#C91A1A] border-solid border-2 py-3 px-6 rounded-lg'>
                  <p>
                    Yes! <br />
                    There an auto backup everyday. <br />
                    <b>Your files is backup already!</b>
                  </p>
                  <div className='absolute top-[6rem] left-[15.5rem] w-0 h-0 border-solid border-t-[15px] border-t-[#C91A1A] border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent' />
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  )
}