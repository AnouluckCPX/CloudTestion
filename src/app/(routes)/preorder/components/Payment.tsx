import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, Divider, OutlinedInput } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ButtonApple, ButtonPrimary } from '@/src/app/_components/ui/button';
import Image from 'next/image';

interface Unit {
    cpu: number | undefined;
    disk: number | undefined;
    ram: number | undefined;
    priceCpu?: number;
    priceRam?: number;
    priceDisk?: number;
}

type Props = {
    price: number
    month: number
    selected: boolean
    packageName: string
    sysytemOs: string
    callbackChange: (value: boolean) => void
    callbackName: (value: boolean) => void
    oldUnit: Unit
    unit: Unit
}

export default function Payment({ price, month, selected, packageName, sysytemOs, oldUnit, unit, callbackChange, callbackName }: Props) {
    // console.log(unit);
    // console.log(oldUnit);
    const router = useRouter()
    const [showCoupon, setShowCoupon] = useState<boolean>(false);
    const [showTopic, setShowTopic] = useState(false);
    const [changePrice, setChangePrice] = useState({
        cpu: 0, ram: 0, disk: 0,
        pricecpu: 0, priceram: 0, pricedisk: 0
    });

    const [balance, setBalance] = useState<number>(0);
    const [totalMoney, setTotalMoney] = useState<number>(0);

    useEffect(() => {
        if (selected) {
            if (unit.cpu === oldUnit.cpu && unit.ram === oldUnit.ram && unit.disk === oldUnit.disk) {
                setChangePrice({
                    cpu: oldUnit.cpu!, ram: oldUnit.ram!, disk: oldUnit.disk!,
                    pricecpu: 0, priceram: 0, pricedisk: 0
                })
                setShowTopic(false)
                callbackChange(false)
                callbackName(false)
            } else {
                setChangePrice({
                    cpu: unit?.cpu!, ram: unit?.ram!, disk: unit?.disk!,
                    pricecpu: unit?.priceCpu!,
                    priceram: unit?.priceRam!,
                    pricedisk: unit?.priceDisk!
                })
                setShowTopic(true)
                callbackChange(true)
                callbackName(true)
            }
        }
    }, [selected, unit?.priceCpu, unit?.priceDisk, unit?.priceRam, unit?.cpu, unit?.disk, unit?.ram]);

    const handleChangeCoupon = () => {
        setShowCoupon(!showCoupon);
    };

    useEffect(() => {
        let total;

        if (showTopic) {
            const sum = changePrice.pricecpu + changePrice.priceram + changePrice.pricedisk;
            total = sum * month;
            setBalance(sum);
            setTotalMoney(total);
        } else {
            total = price * month;
            setBalance(total);
            setTotalMoney(total);
        }
    }, [showTopic, changePrice, price, month]);

    return (
        <Card sx={{ boxShadow: '0', borderRadius: '5px', padding: '10px', marginBottom: '50px' }}>
            <CardContent>
                <div className='flex items-center mb-3 '>
                    <Image src='/static/images/landing/bill.svg' alt="bill" width={22} height={22} />
                    <h3 className='font-black pl-2'>Order Summary</h3>
                </div>
                <Divider />
                <div className='grid grid-cols-2 gap-2 my-5'>
                    <div className='col-span-2'>
                        <p className='text-left font-bold leading-5 pb-1'>Package plan: {showTopic ? 'Customize Personal' : packageName}</p>
                        <p className='text-sm'> {'>'} Operating System: {sysytemOs} <br />
                            {'>'} Control Panel: No <br />
                        </p>
                    </div>
                    <p className='text-left'>CPU {unit?.cpu} <span className='text-sm pl-1'>core</span>:</p>
                    <p className='text-right'>{changePrice?.pricecpu?.toLocaleString()}</p>
                    <p className='text-left'>Ram {unit?.ram} <span className='text-sm pl-1'>GB</span>:</p>
                    <p className='text-right'>{changePrice?.priceram?.toLocaleString()}</p>
                    <p className='text-left'>Hard disk {unit?.disk} <span className='text-sm pl-1'>GB</span>:</p>
                    <p className='text-right'>{changePrice?.pricedisk?.toLocaleString()}</p>
                    {/* <p className='text-left'>IP {unit?} <span className='text-sm pl-1'>GB</span>:</p>
                        <p className='text-right'>{changePrice?.pricedisk?.toLocaleString()}</p> */}
                    <div className='col-span-2'>
                        <Divider sx={{ m: '10px 0' }} />
                    </div>
                    <p className='text-left'>Monthly (unit):</p>
                    <p className='text-right'>{month}</p>
                    <p className='text-left'>Balance amount (kip):</p>
                    <p className='text-right'>{balance?.toLocaleString()}</p>
                    <p className='text-left'>VAT (kip):</p>
                    <p className='text-right'>0</p>
                </div>
                <Divider sx={{ m: '10px 0' }} />
                <div className='flex justify-between mb-6'>
                    <p className='text-left font-bold text-2xl'>Total <span className='text-xl'>(₭)</span>:</p>
                    <h2 className='text-left font-bold text-2xl'> {totalMoney?.toLocaleString()}</h2>
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
                    onClick={() => router.push('/preorder/paymentconfirm')}>
                    Confrim Order
                </ButtonPrimary>
            </CardContent>
        </Card>
    )
}
