"use client"
import { ButtonPrimary } from '@/src/app/_components/ui/button'
import { OutlinedInputCustom } from '@/src/app/_components/ui/input'
import { Box, Button, Card, CardActionArea, CardContent, Container, Divider, OutlinedInput, Radio, styled } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'

type Props = {}

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

export default function Paymentconfirm({ }: Props) {

    const [selectTypePayment, setSelectTypePayment] = useState<string>('MMONEY');

    const handleChangeTypePay = (event: React.MouseEvent<HTMLElement>, key: string) => {
        setSelectTypePayment(key);
    };


    return (
        <Box sx={{ bgcolor: '#fff', p: 1, mb: 10 }}>
            <Container
                maxWidth="xl" >
                <h2 className='mt-10 mb-1 font-bold text-lg text-[#673de6] flex items-center'>
                    <span className='mr-2 pb-0.5'>
                        <Image src='/static/images/landing/bill.svg' alt="bill" width={22} height={22} />
                    </span>Payment
                </h2>
                <Divider />
                <div className='grid grid-cols-3 gap-5 mt-6 h-[40rem]'>
                    <div className='col-span-2'>
                        <p className='font-bold'>Description of your order</p>
                        <div>
                            ...
                        </div>
                        <p className='font-bold'>Choose Payments Channel</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, fugiat.</p>
                        <div className='grid grid-cols-3 gap-5 mt-6'>
                            <div>
                                <Card sx={selectTypePayment === 'MMONEY' ? RadioDefault.checked : RadioDefault.default}>
                                    <CardActionArea onClick={(e) => handleChangeTypePay(e, 'MMONEY')}>
                                        <CardContent sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                                            <Radio
                                                checked={selectTypePayment === 'MMONEY'}
                                                value="MMONEY"
                                            />
                                            <p className='text-base z-20'>M MoneyX</p>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div>
                                <Card sx={selectTypePayment === 'BANK' ? RadioDefault.checked : RadioDefault.default}>
                                    <CardActionArea onClick={(e) => handleChangeTypePay(e, 'BANK')}>
                                        <CardContent sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                                            <Radio
                                                checked={selectTypePayment === 'BANK'}
                                                value="BANK"
                                            />
                                            <p className='text-base z-20'>Bank</p>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div>
                                <Card sx={{
                                    ...(selectTypePayment === 'CARD' ? RadioDefault.checked : RadioDefault.default),
                                    padding: 0,
                                }}>
                                    <CardActionArea onClick={(e) => handleChangeTypePay(e, 'CARD')}>
                                        <CardContent sx={{ display: 'flex', alignItems: 'center', p: 0.5 }}>
                                            <Radio
                                                checked={selectTypePayment === 'CARD'}
                                                value="CARD"
                                            />
                                            <p className='text-base z-20'>Card</p>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            <div className='col-span-3'>
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
                                    selectTypePayment === 'BANK' && (
                                        <Box sx={{ marginTop: '10px' }}>
                                            <p className='text-base text-center'>
                                                Bank
                                            </p>
                                        </Box>
                                    )
                                }
                                {
                                    selectTypePayment === 'CARD' && (
                                        <Box sx={{ marginTop: '10px', px: 15 }}>
                                            <p className='text-base text-center'>
                                                Payment with Credit Card
                                            </p>

                                            <div className='grid grid-cols-2 gap-5'>
                                                <div className='col-span-2'>
                                                    <p className='pl-0.5 mb-1'>Full Name</p>
                                                    <OutlinedInputCustom
                                                        value=''
                                                    />
                                                </div>
                                                <div className='col-span-2'>
                                                    <p className='pl-0.5 mb-1'>Card Number</p>
                                                    <OutlinedInputCustom
                                                        value=''
                                                    />
                                                </div>
                                                <div>
                                                    <p className='pl-0.5 mb-1'>Expiry</p>
                                                    <OutlinedInputCustom
                                                        value=''
                                                    />
                                                </div>
                                                <div>
                                                    <p className='pl-0.5 mb-1'>CVV</p>
                                                    <OutlinedInputCustom
                                                        value=''
                                                    />
                                                </div>
                                            </div>
                                        </Box>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className='px-10'>
                        <ButtonPrimary className='w-full'>
                            Confirm
                        </ButtonPrimary>
                    </div>
                </div>
            </Container>
        </Box>
    )
}