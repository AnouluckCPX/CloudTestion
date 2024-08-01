import { Box, Container } from '@mui/material'
import React from 'react'

type Props = {}

export default function Billing({ }: Props) {
    return (
        <Box component={'div'} sx={{ paddingTop: 10 }}>
            <Container maxWidth="xl" className='h-screen'>
                <h1>Billing</h1>
            </Container>

        </Box>
    )
}