import { Box, Container } from '@mui/material'
import React, { Suspense } from 'react'

type Props = {
    children: React.ReactNode
}

export default function MainPreOrder({ children }: Props) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Box>
                <div className='bg-[#F14D58] h-[8rem] w-full'>
                    <Container maxWidth="xl" className=''>
                        <h2 className='text-left pt-10 text-white font-bold text-2xl'>Check Order</h2>
                        <p className='mt-2 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, similique</p>
                    </Container>
                </div>

                {children}
            </Box>
        </Suspense>
    )
}