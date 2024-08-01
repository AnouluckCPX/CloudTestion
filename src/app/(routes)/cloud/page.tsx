// pages/home/about.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4">Cloud</Typography>
            <Typography variant="body1" sx={{ my: 2 }}>
                This is the about page.
            </Typography>
        </Box>
    );
};

export default About;