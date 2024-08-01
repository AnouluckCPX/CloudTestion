import { Box, Container } from '@mui/material'
import React from 'react'
import CartProducts from './CartProducts'

export default function Preorder() {
    return (
        <Box>
            <div className='bg-[#F14D58] h-48 w-full'>
                <Container maxWidth="xl" className='pt-12'>
                    <h2 className='text-left pt-10 text-white font-bold text-2xl'>Check Order</h2>
                    <p className='mt-2 text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, similique</p>
                </Container>
            </div>
            <CartProducts />
        </Box>
    )
}