import React, { useState } from 'react'
import { Box, Button, Card, CardContent, Divider, OutlinedInput, styled } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ButtonPrimary } from '@/src/app/_components/ui/button';

export default function Payment() {

    const [showCoupon, setShowCoupon] = useState<boolean>(false);
    const router = useRouter()

    const handleChangeCoupon = () => {
        setShowCoupon(!showCoupon);
        console.log(true);
    };

    const ButtonApple = styled(Button)(({ theme }) => ({
        backgroundColor: '#727568',
        marginTop: '10px',
        textAlign: 'left',
        fontWeight: 'medium',
        color: '#fff',
        fontSize: '16px',
        height: '40px',
        boxShadow: 'none',
        borderRadius: '7px',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#868A7B',
            color: '#fff',
            boxShadow: 'none',
        },
    }));


    return (
        <Card sx={{ boxShadow: '0', borderRadius: '5px', padding: '10px', marginBottom: '50px' }}>
            <CardContent>
                <h3 className='mb-3'>Order Summary</h3>
                <Divider />
                <div className='flex justify-between mt-3'>
                    <p className='text-left mt-1'>Balance amount:</p>
                    <p className='text-left mt-1'>1,000</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <p className='text-left mt-1'>VAT (7%):</p>
                    <p className='text-left mt-1'>1,000</p>
                </div>
                <Divider sx={{ m: '10px 0' }} />
                <div className='flex justify-between mb-6'>
                    <p className='text-left font-bold text-2xl'>Total:</p>
                    <h2 className='text-left font-bold text-2xl'> ₭ 1,000</h2>
                </div>
                <Divider />
                <button className='text-base font-bold mt-3 text-[#673de6] border-none bg-transparent hover:underline'
                    onClick={handleChangeCoupon}>
                    Have a coupon code?</button>
                {
                    showCoupon === true ? <>
                        <Box sx={{ display: 'flex', alignItems: 'end', paddingBottom: '10px' }}>
                            <div>
                                <OutlinedInput
                                    fullWidth
                                    size='small'
                                />
                            </div>
                            <ButtonApple className='ml-5 w-[130px]'>
                                Apple
                            </ButtonApple>
                        </Box>
                    </> : null
                }
                <Divider sx={{ marginTop: '10px', marginBottom: '15px' }} />
                <ButtonPrimary variant='contained' fullWidth sx={{ marginTop: '10px' }}
                    onClick={() => router.push('/login')}>
                    Confrim Order
                </ButtonPrimary>
            </CardContent>
        </Card>
    )
}
