import React from 'react'
import { Container } from '@mui/material'
import Image from 'next/image'
import ShiningButtonWhite from '../../_components/ui/shining-button-white'

type Props = {}

export default function About({ }: Props) {
    return (
        <div className='h-[90rem] '>
            <div className='bg-[#FDF0F0] w-full h-[30rem] absolute -z-10' />

            <Container maxWidth="lg" className='pt-[10rem] z-10'>
                <div className='relative'>
                    {/* ----- rectangle line */}
                    <div className='absolute bg-[#FDF0F0] right-0 top-0 border-[#ED1C29] border-solid border-[2px] rounded-xl'>
                        <Image className='rounded-lg' src='/static/images/landing/ltc_bg_about.png' alt="cloud icon" width={500} height={500} />
                    </div>
                    <div className='bg-white absolute -top-10 right-12 -z-[8] border-1 border-solid border-[#861111] rounded-2xl w-[500px] h-[280px]'>
                        <div className='bg-[#ED1C29] absolute top-4 left-[1.75rem] -z-10 rounded-full w-[.7rem] h-[.7rem]' />
                        <div className='bg-[#ED1C29] absolute top-4 left-[3rem] -z-10 rounded-full w-[.7rem] h-[.7rem]' />
                        <div className='bg-[#ED1C29] absolute top-4 left-[4.3rem] -z-10 rounded-full w-[.7rem] h-[.7rem]' />
                    </div>
                    <div className='bg-white absolute top-0 right-[6rem] -z-[9] border-1 border-solid border-[#861111] rounded-2xl w-[500px] h-[150px]' />

                    {/* ----- border line */}
                    <div className='absolute z-10 -top-[1.8rem] left-[35rem] h-[1px] w-[6rem] bg-[#ED1C29]' />
                    <div className='absolute -z-10 top-[2rem] right-[35rem] h-[1px] w-[10rem] bg-[#ED1C29]' />
                    <div className='absolute -z-10 top-[17rem] left-[23rem] h-[1px] w-[18rem] bg-[#ED1C29]' />


                    <h1 className='pt-[5rem] text-[2rem] font-extrabold'>About Us</h1>
                    <p className='mt-3 leading-7'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Veritatis enim, quos voluptatibus ex asperiores hic quod eos tempore.</p>
                </div>

            </Container>
            <Container maxWidth="lg" className='mt-[15rem] pb-[15rem]'>
                <div className=' relative'>
                    <div className='absolute top-0 left-0'>
                        <Image src='/static/images/landing/simicolone.svg' alt="simicolone" width={33} height={33} />
                    </div>
                    <h1 className='pt-[3rem] text-[2rem] font-extrabold'>We are Leader
                        <br /> of <span className='text-[#22B758]'>Technological </span> Innovations</h1>
                    <p className='mt-6'>LTC is a comprehensive ICT infrastructure provider for businesses and those who want to use ICT as a tool to strengthen their
                        business competitiveness. The company services range from Cloud Solutions, full Internet connection services, and LTC-IDC
                        operation center services for those who need efficient services at international standards.
                    </p>
                    <p className='mt-6'>
                        LTC is a leader and developer of technological innovations to meet all the needs of customers in the 4.0 era with a variety of platforms
                        that support various technologies such as the education sector, financial business, telecommunications, the public sector, state
                        enterprises and various other services guaranteed by international standards.
                    </p>
                </div>
                <div className='bg-gradient-to-t from-[#8E1212] to-[#E53636] rounded-xl mt-[6rem]'>
                    <div className='relative h-[18rem]'>
                        <div className='absolute top-0 left-0 w-full '>
                            <Image className='w-full rounded-xl object-cover h-[18rem] mix-blend-multiply' src='/static/images/landing/line_about.png' alt="line_about" width={1800} height={1500} />
                        </div>
                        <div className='flex flex-col items-center gap-5'>
                            <h2 className='text-[1.8rem] font-extrabold pt-12 text-white'>Let’s Explore With Us</h2>
                            <p className='text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos necessitatibus commodi laborum magnam quisquam <br /> sed maiores perspiciatis nulla consequuntur. Atque.</p>
                            <ShiningButtonWhite show={false} label='Join us Now' />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}