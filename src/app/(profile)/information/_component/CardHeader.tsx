import React from 'react';
import { Card, styled, CardContent, Box, Typography } from '@mui/material';
import Image from 'next/image';

const CustomCardProfile = styled(Card)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    boxShadow: 'none',
    borderRadius: 10,
    width: '160px',
    height: '120px',
}));

const CustomCardContent = styled(CardContent)(({ theme }) => ({
    padding: theme.spacing(2, 2), // Reset padding
}));

type Props = {};

export default function CardHeader({ }: Props) {
    return (
        <Box component='div' display={'flex'} gap={1}>
            <CustomCardProfile>
                <CustomCardContent>
                    <Box display='flex'>
                        <Box sx={{ marginBottom: 1.5 }}>
                            <Box component={'div'} sx={{ p: 1, bgcolor: '#FBE0E0', borderRadius: '7px' }}>
                                <Image src='/static/images/profile/web.svg' alt="cloud icon" width={20} height={20} />
                            </Box>
                        </Box>
                        <Typography variant='body2' sx={{ ml: 1.5 }}>Total <br />Actives</Typography>
                    </Box>
                    <Typography variant='h4' sx={{ fontWeight: 'medium', }}>25 <span className='text-sm font-normal'>Items</span></Typography>
                </CustomCardContent>
            </CustomCardProfile>

            <CustomCardProfile>
                <CustomCardContent>
                    <Box display='flex'>
                        <Box sx={{ marginBottom: 1.5 }}>
                            <Box component={'div'} sx={{ p: 1, bgcolor: '#FBE0E0', borderRadius: '7px' }}>
                                <Image src='/static/images/profile/web.svg' alt="cloud icon" width={20} height={20} />
                            </Box>
                        </Box>
                        <Typography variant='body2' sx={{ ml: 1.5 }}>Save Your <br />Cart</Typography>
                    </Box>
                    <Typography variant='h4' sx={{ fontWeight: 'medium', }}>15 <span className='text-sm font-normal'>Items</span></Typography>
                </CustomCardContent>
            </CustomCardProfile>

            <CustomCardProfile>
                <CustomCardContent>
                    <Box display='flex'>
                        <Box sx={{ marginBottom: 1.5 }}>
                            <Box component={'div'} sx={{ p: 1, bgcolor: '#FBE0E0', borderRadius: '7px' }}>
                                <Image src='/static/images/profile/web.svg' alt="cloud icon" width={20} height={20} />
                            </Box>
                        </Box>
                        <Typography variant='body2' sx={{ ml: 1.5 }}>Products To <br />Expire</Typography>
                    </Box>
                    <Typography variant='h4' sx={{ fontWeight: 'medium', }}>0 <span className='text-sm font-normal'>Items</span></Typography>
                </CustomCardContent>
            </CustomCardProfile>
        </Box>
    );
}