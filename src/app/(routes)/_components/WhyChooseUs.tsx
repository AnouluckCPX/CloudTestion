import { Box, Container, Divider } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function WhyChooseUs({ }: Props) {

    const listData = [
        {
            icon: '/static/images/landing/ic_save.svg',
            title: 'Save',
            des: `Save on administrative costs, <br /> equipment costs and <br /> maintenance costs`
        },
        {
            icon: '/static/images/landing/ic_scale.svg',
            title: 'Scale',
            des: `Resources can be increased or <br /> decreased according <br /> to customer needs`
        },
        {
            icon: '/static/images/landing/ic_safe.svg',
            title: 'Safe',
            des: `There is a DATA Center, SLA <br /> Uptime 99.9% to be sure <br /> that data is not lost`
        },
        {
            icon: '/static/images/landing/ic_secure.svg',
            title: 'Secure',
            des: `Receive international standard <br /> certification to solve all <br /> security problems`
        },
    ]

    let imgVideo = `https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`

    return (
        <Box className='relative w-full h-[60rem] mt-[6rem]'>
            <div className='absolute -z-10 bg-gradient-to-t from-[#E95555] to-[#FFFFFF] w-full h-[75rem]'>
            </div>
            <div className='absolute -z-10 h-[75rem] w-full mix-blend-color-burn'>
                <Image src='/static/images/landing/bg-line-3.png' alt="bg-line-3" width={1500} height={500} className='w-full object-cover h-[75rem]' />
            </div>
            <Container maxWidth="lg">
                <h1 className='text-3xl font-black text-center text-[#1F2426]'>Why Choose US </h1>
                <p className='text-center text-[#1F2426] mt-4'>Our web hosting solutions are an easy way to get a great website up and running, with so many robust features.</p>
                <div className='grid grid-cols-4 gap-7 mt-[6rem]'>
                    {
                        listData.map(({ icon, title, des }, index) => {
                            return (
                                <div key={index} className='bg-white text-center border-2 border-solid border-[#861111] rounded-2xl pb-7 drop-shadow-lg'>
                                    <div>
                                        <div className='flex justify-center mt-7'>
                                            <Image src={icon} alt={title} width={54} height={54} />
                                        </div>
                                        <h1 className='text-xl font-black text-[#1F2426] pt-5 text-center'>{title}</h1>
                                        <p className='text-[#777777] text-center pt-4' dangerouslySetInnerHTML={{ __html: des }}></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex justify-center'>
                    <Divider className='mt-[10rem] border-[#777] mb-[2rem] w-[80%]' />
                </div>
                <h1 className='text-2xl font-black text-center text-[#861111] leading-10'>
                    Cloud Service solve all the needs of communication in the DIGITAL <br />
                    which is designed to support the NEW NALMAL lifestyle
                </h1>
                <div className='flex justify-center mt-[4rem]'>
                    <div className="overflow-hidden w-[60rem] h-[24rem] rounded-2xl">
                        <div className="w-full overflow-hidden relative ">
                            <Image src={imgVideo}
                                width={400} height={400}
                                alt='video'
                                className="w-full h-[24rem] transform transition duration-1000 hover:scale-110 " />
                            <div className='absolute inset-x-[44%] top-[37%] w-full'>
                                <Image src='/static/images/landing/play.svg' alt='server' width={120} height={120} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </Box>
    )
}