'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import { MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { ButtonPrimary } from '../../_components/ui/button';
import { OutlinedInputCustom } from '../../_components/ui/input';
import { Select } from 'antd';


const boxOption = {
    height: '38px',
    borderRadius: '7px'
}

type Props = {}

export default function Contact({ }: Props) {

    const [typeService, setTypeService] = useState([]);
    const [TypeSelect, setTypeSelect] = useState("");
    const [des, setDes] = useState('');

    const handleContact = async () => {
        const newData = {
            "customer_id": 12,
            "type_service_id": 'TypeSelect',
            "des": ''
        }
        const response = await fetch('http://172.28.26.181:3300/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData)
        });
        if (response.ok) {
            const data = await response.json();
            // showAlertSuccess("success");
        } else {
            // showAlertFail("Please Insert Data");
        }
    }

    return (
        <>
            <div className='relative h-screen'>
                <div className='absolute -top-20 left-0 right-0 bottom-0 bg-gradient-to-b from-[#34e5e5] to-[#f7c5c5] h-[33rem]' />
                <div className="relative flex items-center justify-center">
                    <div className="grid grid-cols-2 bg-white rounded-3xl drop-shadow-2xl w-[1200px] mt-32">
                        <div className="p-4">
                            <div className="p-8 space-y-5 bg-[#e53636] text-white rounded-xl">
                                <p className='text-center text-2xl font-bold mb-3'>Contact information</p>
                                <p className='pb-5'>
                                    User our contact form for all information requests or contact us directly using the contact information below.
                                </p>
                                <div className="flex gap-5 items-center">
                                    <CallRoundedIcon className='ml-[2.5px]' width={22} height={22} />
                                    <p className='text-lg'>+ (856) 20 345-6789</p>
                                </div>
                                <div className="flex gap-5">
                                    <FacebookRoundedIcon className='ml-[1px] text-[25px]' />
                                    <p className='text-lg'>Lao Telecom</p>
                                </div>
                                <div className="flex gap-5">
                                    <Image src='/static/images/landing/whatsapp-w.svg' className='ml-[2.5px]' alt="facebook" width={20} height={20} />
                                    <p className='text-lg'>+ (856) 20 3456-6789</p>
                                </div>
                                <div className="flex gap-5">
                                    <Image src='/static/images/landing/mail-w.svg' className='ml-[1px]' alt="facebook" width={22} height={22} />
                                    <p className='text-lg'>cloud@laotel.com</p>
                                </div>
                                <div className="flex gap-5 items-start">
                                    <Image src='/static/images/landing/map-w.svg' alt="facebook" width={22} height={22} />
                                    <p className='text-lg'>5<sup>th</sup> Floor, LTC HQ, Saylom Rd, Chanthabuly district, Vientiane, Lao PDR</p>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 pl-8 pr-10 space-y-5">
                            <div className='grid grid-cols-2 gap-5 pt-5'>
                                <div>
                                    <p className='pl-0.5 mb-1'>Your Name</p>
                                    <OutlinedInputCustom
                                        value=''
                                    />
                                </div>
                                <div>
                                    <p className='pl-0.5 mb-1'>Your Email</p>
                                    <OutlinedInputCustom
                                        value=''
                                    />
                                </div>
                            </div>

                            <div>
                                <p className='pl-0.5 mb-1'>Sevices</p>
                                <Select style={{ ...boxOption, width: '100%' }} value={TypeSelect === "" ? 'Please Choose' : TypeSelect}
                                    popupMatchSelectWidth={false}>
                                    <Select.Option value="datacenter"> Data Center </Select.Option>
                                    <Select.Option value="backup"> Backup </Select.Option>
                                    <Select.Option value="disasterrecovery"> Disaster Recovery </Select.Option>
                                    <Select.Option value="colocation"> Co-Location </Select.Option>
                                    <Select.Option value="ltcdrive" > LTC-Drive </Select.Option>
                                    <Select.Option value="cloudcallcenter" > Cloud Call Center </Select.Option>
                                    <Select.Option value="zimbra" > Zimbra </Select.Option>
                                    <Select.Option value="cloudpbx" > Cloud PBX </Select.Option>
                                </Select>
                            </div>

                            <div className="">
                                <p className='pl-0.5 mb-1'>Message</p>
                                <OutlinedInputCustom
                                    value=''
                                    multiline={true}
                                    maxRows={5}
                                    minRows={5}
                                />
                            </div>
                            <div className='flex justify-end transa'>
                                <ButtonPrimary className='px-6' onClick={handleContact}>Send Message</ButtonPrimary>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        </>
    )
}