// components/landing/HeroSection.tsx

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
    return (
        <Box sx={{ textAlign: 'center', p: 4 }}>
            <Typography variant="h2">Welcome to MyApp</Typography>
            <Typography variant="h5" sx={{ my: 2 }}>Your success starts here.</Typography>
            <Button variant="contained" color="primary">Get Started</Button>
        </Box>
    );
};

export default HeroSection;