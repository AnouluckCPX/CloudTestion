import { Box, Typography } from '@mui/material'
import React from 'react'

type Props = {}

export default function Home({ }: Props) {
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4">Hosting</Typography>
            <Typography variant="body1" sx={{ my: 2 }}>
                This is the about page.
            </Typography>
        </Box>
    )
}