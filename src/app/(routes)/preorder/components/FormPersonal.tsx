import { Box, Button, Card, CardActionArea, CardContent, Divider, OutlinedInput, Radio, styled } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React, { useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const RadioDefault = {
    default: {
        boxShadow: '0',
        borderRadius: '7px',
        border: '2px solid #DDD',
    },
    checked: {
        boxShadow: '0',
        borderRadius: '7px',
        border: '2px solid #ED1C29',
        backgroundColor: '#FBCACD80'
    }
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function FormPersonal() {
    const [selectTypePayment, setSelectTypePayment] = useState<string>('MMONEY');

    const handleChangeTypePay = (event: React.MouseEvent<HTMLElement>, key: string) => {
        setSelectTypePayment(key);
    };

    return (
        <Box>
            <h4 className='mt-10 mb-3 font-bold'>Customer Information</h4>
            <Divider />
            <Grid container spacing={2} sx={{ marginTop: '10px', }}>
                <Grid xs={6}>
                    <p className='mb-1.5' >Full Name</p>
                    <OutlinedInput
                        fullWidth
                        size='small'
                    />
                </Grid>
                <Grid xs={6}>
                    <p className='mb-1.5' >Email Address</p>
                    <OutlinedInput
                        fullWidth
                        size='small'
                    />
                </Grid>
                <Grid xs={6}>
                    <p className='mb-1.5' >ID/Passport</p>
                    <OutlinedInput
                        fullWidth
                        size='small'
                    />
                </Grid>
                <Grid xs={6}>
                    <p className='mb-1.5' >Telephone number</p>
                    <OutlinedInput
                        fullWidth
                        size='small'
                    />
                </Grid>
            </Grid>

            <h4 className='mt-10 mb-3 font-bold'>Payment Method</h4>
            <Divider />
            <Grid container spacing={2} sx={{ marginTop: '10px', }}>
                <Grid xs={4}>
                    <Card sx={selectTypePayment === 'MMONEY' ? RadioDefault.checked : RadioDefault.default}>
                        <CardActionArea onClick={(e) => handleChangeTypePay(e, 'MMONEY')}>
                            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                <Radio
                                    checked={selectTypePayment === 'MMONEY'}
                                    value="MMONEY"
                                />
                                <p className='text-base z-20'>M MoneyX</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card sx={selectTypePayment === 'CREDIT' ? RadioDefault.checked : RadioDefault.default}>
                        <CardActionArea onClick={(e) => handleChangeTypePay(e, 'CREDIT')}>
                            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                <Radio
                                    checked={selectTypePayment === 'CREDIT'}
                                    value="CREDIT"
                                />
                                <p className='text-base z-20'>Credit Card</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card sx={selectTypePayment === 'BANK' ? RadioDefault.checked : RadioDefault.default}>
                        <CardActionArea onClick={(e) => handleChangeTypePay(e, 'BANK')}>
                            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                                <Radio
                                    checked={selectTypePayment === 'BANK'}
                                    value="BANK"
                                />
                                <p className='text-base z-20'>Bank</p>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid xs={12}>
                    {
                        selectTypePayment === 'MMONEY' && (
                            <Box sx={{ marginTop: '10px' }}>
                                <p className='text-base text-center'>
                                    Payment with eWallet online and safe by Scan QR M-Money X
                                </p>
                                <div className='bg-gray-400 w-[240px] h-[240px] mx-auto mt-5' />
                            </Box>
                        )
                    }
                    {
                        selectTypePayment === 'CREDIT' && (
                            <Box sx={{ marginTop: '10px' }}>
                                <p className='text-base text-center'>
                                    Payment with Credit Card
                                </p>
                            </Box>
                        )
                    }
                    {
                        selectTypePayment === 'BANK' && (
                            <Box sx={{ marginTop: '10px' }}>
                                <p className='text-base text-center'>
                                    Upload File
                                </p>
                                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                    <Button
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        tabIndex={-1}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        Upload file
                                        <VisuallyHiddenInput type="file" />
                                    </Button>
                                </Box>
                            </Box>
                        )
                    }
                </Grid>
            </Grid>
        </Box>
    )
}
