
import React from 'react';
import Header from './Header';
import { Box } from '@mui/material';
import Footer from './Footer';


type Props = { children: React.ReactNode };

export default function LandingLayout({ children }: Props) {
    return (
        <Box>
            <Header />

            <main>
                {children}
            </main>

            <Footer />
        </Box>
    );
};
