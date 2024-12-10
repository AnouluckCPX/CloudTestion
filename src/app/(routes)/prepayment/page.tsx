"use client"
import { Container } from '@mui/material'
import React from 'react'
import { ButtonPrimary } from '../../_components/ui/button'
import { useRouter } from 'next/navigation'

type Props = {}

export default function Payment({ }: Props) {

    const router = useRouter();

    return (
        <div className='pb-[15rem]'>
            <Container maxWidth="lg" className='pt-[4rem]'>
                <h2 className='text-2xl font-extrabold'>Payment Channels</h2>
                <p className='mt-5'>Payment service through Banque Pour Le Commerce Exterieur Lao Public (BCEL) - Modern Quick Reliable and Lao Mobile Money Co., Ltd</p>
                <div className='grid grid-cols-1 gap-10 mt-10'>
                    <div className='border border-solid border-[#E5E5E5] rounded-lg p-5'>
                        <p className='font-bold'>Banque Pour Le Commerce Exterieur Lao Public (BCEL)</p>
                        <div className='flex gap-5'>
                            <div>
                                aa
                            </div>
                            <div>
                                <p>Account Name: </p>
                                <p>Account Number:</p>
                            </div>
                        </div>
                    </div>
                    <div className='border border-solid border-[#E5E5E5] rounded-lg p-5'>
                        <p className='font-bold'>Lao Mobile Money Co., Ltd</p>
                        <div className='flex gap-5'>
                            <div>
                                aa
                            </div>
                            <div>
                                <p>Account Name: </p>
                                <p>Account Number:</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-10 flex justify-center'>
                    <ButtonPrimary className='w-[370px] font-semibold rounded-lg'
                        onClick={() => router.push('/paymentconfirm')}>
                        Confirm Payment
                    </ButtonPrimary>
                </div>
                <div>
                    <h3 className='text-xl mt-10 font-extrabold'>Remark</h3>
                    <div className='leading-8 mt-2 pl-1'>
                        <li> Service rates on the website include 7% VAT.</li>
                        <li>For customers who need a receipt/tax invoice, if you do not receive it within 15 days, please contact the staff immediately.</li>
                        <li>We reserve the right to issue receipts/tax invoices retrospectively.</li>
                    </div>
                </div>
            </Container>
        </div>
    )
}