"use client"
import { Box, Button, Container, styled } from '@mui/material'
import React, { useState } from 'react'
import { OutlinedInputCustom } from '../../_components/ui/input'
import { Select } from 'antd'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ButtonApple, ButtonPrimary } from '../../_components/ui/button'

type Props = {}

const boxOption = {
    height: '38px',
    borderRadius: '7px'
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

export default function PaymentConfirm({ }: Props) {

    const [paymentChannel, setPaymentChannel] = useState('');

    return (
        <div className='pb-[15rem]'>
            <Container maxWidth="lg" className='pt-[4rem]'>
                <h2 className='text-2xl font-extrabold'>Payment Confirmation</h2>
                <p className='mt-5'>Payment confirmation notification system It is a system created to facilitate customers in notifying of online payments. will help our staff Know about customer payments and can check information From the details that the customer informs. This will save time. and reduce the hassle of the process.</p>
                <Container maxWidth='md' className='mt-[3rem]'>
                    <div className='border border-solid border-[#E5E5E5] rounded-lg p-5'>
                        <div className='grid grid-cols-2 gap-7'>
                            <div className='col-span-2'>
                                <p className='pl-0.5 mb-1'>Invoice ID, Order ID or Domain name*</p>
                                <OutlinedInputCustom
                                    value=''
                                />
                            </div>
                            <div>
                                <p className='pl-0.5 mb-1'>E-mail or Phone Number Registered*</p>
                                <OutlinedInputCustom
                                    value=''
                                />
                            </div>
                            <div>
                                <p className='pl-0.5 mb-1'>Total Balance*</p>
                                <OutlinedInputCustom
                                    value=''
                                />
                            </div>
                            <div className='col-span-2'>
                                <p className='pl-0.5 mb-1'>
                                    Proof of payment (File size not more than 10 MB) *
                                </p>
                                <div className='border border-solid border-[#E5E5E5] rounded-lg p-5'>
                                    <p className='text-center'>Drag and drop files here <br /> or </p>
                                    <div className='mt-3 flex justify-center'>
                                        <ButtonApple
                                            component="label"
                                            role={undefined}
                                            variant="contained"
                                            tabIndex={-1}
                                            startIcon={<CloudUploadIcon />}
                                        >
                                            Upload file
                                            <VisuallyHiddenInput type="file" />
                                        </ButtonApple>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <p className='pl-0.5 mb-1'>Payment Channels</p>
                                <Select style={{ ...boxOption, width: '100%' }} value={paymentChannel === "" ? 'Please Choose' : paymentChannel}
                                    popupMatchSelectWidth={false}>
                                    <Select.Option value="datacenter">Banque Pour Le Commerce Exterieur Lao Public (BCEL)</Select.Option>
                                    <Select.Option value="backup">Lao Mobile Money Co., Ltd</Select.Option>
                                </Select>
                            </div>
                            <div className='col-span-2'>
                                <div className='flex justify-center'>
                                    <ButtonPrimary className='w-[19rem]'>
                                        Submit to send confirm payment
                                    </ButtonPrimary>
                                </div>
                            </div>
                        </div>

                    </div>
                </Container>

            </Container>
            <style jsx global>
                {`
                    .ant-select-selector {
                        font-size: .9375rem !important;
                        border-radius: 8px !important;
                        border-color: #c4c4c4 !important;
                    }
                    .ant-select-selector:selected {
                        border: 2px solid #006FC7 !important;
                    }
                    .ant-select-dropdown .ant-select-item  {
                        font-size: .9375rem !important;
                    }
                    .ant-select-selector:hover{
                        border-color: rgba(0, 0, 0, 0.87) !important;
                    }
                    .ant-select-focused .ant-select-selector,
                    .ant-select-selector:focus,
                    .ant-select-selector:active,
                    .ant-select-open .ant-select-selector {
                        border-width: 2px !important;
                        border-color: #006FC7 !important;
                        outline: none !important;
                        shadow: none !important;
                    }
                `}
            </style>
        </div>
    )
}