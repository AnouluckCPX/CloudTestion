"use client"
import React, { useEffect, useState } from 'react'
import { Box, Card, CardContent, Divider, FormControl, OutlinedInput } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Payment from './Payment';
import { Layers3, CircleHelp } from 'lucide-react';
import { usePackageOutStore } from '@/src/store/packageOutStore';
import { useSearchParams } from 'next/navigation'
import useSystemStore from '@/src/store/systemStore';
import { Skeleton } from "@nextui-org/skeleton";


const boxOption = {
    width: '100%',
    height: '38px',
    borderRadius: '7px'
}

export default function TableList() {

    const searchParams = useSearchParams();
    // console.log(searchParams.get('id'));

    useEffect(() => {
        const _id = searchParams.get('id');
        if (_id) {
            const parsedId = parseInt(_id);
            getPackageById(parsedId);
        }
    }, []);



    const [selectMonth, setSelectMonth] = useState(1);


    const [selectStatus, setSelectStatus] = useState<boolean>(false);

    const [selectedConfig, setSelectedConfig] = useState(1);
    const [checkChangeVersoin, setCheckChangeVersoin] = useState(false);

    const [selectedVersion, setSelectedVersion] = useState(0);

    const {
        getListCpu, getListDisk, getListMemory, cpus, disks, mems,
        getPackageById, packageid: dataPackage,
    } = usePackageOutStore();

    const {
        querySystems, querySystemsByVersion, systems, versions
    } = useSystemStore();

    const [loadingData, setLoadingData] = useState(false);

    const [labelOperation, setLabelOperation] = useState('');
    const [labelVerion, setLabelVerion] = useState('');

    const [cpuValue, setCpuValue] = useState(dataPackage?.cpu);
    const [ramValue, setRamValue] = useState(dataPackage?.memory);
    const [diskValue, setDiskValue] = useState(dataPackage?.disk);
    const [ipaddressValue, setIpaddressValue] = useState(dataPackage?.ip);

    const [labelPackgaeName, setLabelPackgaeName] = useState('');

    const [dataUnit, setDataUnit] = useState({
        cpu: 0,
        ram: 0,
        disk: 0,
        priceCpu: 0,
        priceRam: 0,
        priceDisk: 0
    });

    useEffect(() => {
        if (searchParams) {
            getListCpu();
            getListMemory();
            getListDisk();
            querySystems()
            querySystemsByVersion(selectedConfig);
        }
    }, [searchParams]);

    useEffect(() => {
        setLoadingData(true);
        if (dataPackage) {
            setTimeout(() => {
                setCpuValue(dataPackage?.cpu);
                setRamValue(dataPackage?.memory);
                setDiskValue(dataPackage?.disk);
                setIpaddressValue(dataPackage?.ip);

                setDataUnit({
                    ...dataUnit,
                    cpu: dataPackage?.cpu ?? 0,
                    ram: dataPackage?.memory ?? 0,
                    disk: dataPackage?.disk ?? 0,
                })
                setLoadingData(false)
            }, 1000);
        }
    }, [dataPackage, searchParams]);

    useEffect(() => {
        if (checkChangeVersoin) {
            querySystemsByVersion(selectedConfig)
            setCheckChangeVersoin(false)
        }
        let data = systems.find((item) => item?.id === selectedConfig)
        setLabelOperation(data?.name ?? '');

        let dataVersion = versions.find((item) => item?.id === selectedVersion)
        setLabelVerion(dataVersion?.version_os ?? '-');

    }, [checkChangeVersoin, selectedVersion, versions, systems]);

    const handleSelectedMonth = (event: SelectChangeEvent<string | unknown>) => {
        setSelectMonth(event.target.value as number);
    };

    const handleSelectedVersion = (event: SelectChangeEvent<string | unknown>) => {
        setSelectedVersion(event.target.value as number);
    };

    useEffect(() => {
        let filterCpu = cpus?.find((item) => item?.cpu === dataPackage?.cpu);
        let filterRam = mems?.find((item) => item?.memory === dataPackage?.memory);
        let filterDisk = disks?.find((item) => item?.disk === dataPackage?.disk);
        setDataUnit({
            ...dataUnit,
            priceCpu: filterCpu?.cpu_price ?? 0,
            priceRam: filterRam?.me_price ?? 0,
            priceDisk: filterDisk?.dis_price ?? 0
        })
    }, [cpus, disks, mems, dataPackage]);

    const handleChange = ({ value, type, status }: { value: number | undefined, type: string, status: boolean }) => {
        setSelectStatus(status);

        if (type === 'cpu') {
            setCpuValue(value);

            let filterCpu = cpus?.find((item) => item?.cpu === value);
            setDataUnit({
                ...dataUnit,
                cpu: value ?? 0,
                priceCpu: filterCpu?.cpu_price ?? 0
            })
        }

        if (type === 'ram') {
            setRamValue(value);
            let filterRam = mems?.find((item) => item?.memory === value);
            setDataUnit({
                ...dataUnit,
                ram: value ?? 0,
                priceRam: filterRam?.me_price ?? 0
            })
        }

        if (type === 'disk') {
            setDiskValue(value);
            let filterDisk = disks?.find((item) => item?.disk === value);
            setDataUnit({
                ...dataUnit,
                disk: value ?? 0,
                priceDisk: filterDisk?.dis_price ?? 0
            })
        }
    };

    const handleChangeConfigurable = (event: SelectChangeEvent<string | unknown>) => {
        setSelectedConfig(event.target.value as number);
        setCheckChangeVersoin(true);
    }

    const layoutLoading = () => {
        return (
            <Skeleton className="w-full rounded-lg mt-1">
                <div className="h-[38px] w-full rounded-lg bg-gray-100"></div>
            </Skeleton>
        )
    }

    const handleChangeIP = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setIpaddressValue(Number(value))
    }

    const [showMore, setShowMore] = useState(false);

    const ClickShowMore = () => {
        setShowMore(!showMore)
    }

    return (
        <Box >
            <h2 className='mt-10 mb-1 font-bold text-lg text-[#673de6] flex items-center'>
                <span className='mr-2 pb-0.5'><Layers3 width={20} /></span>Information Package
            </h2>
            <Divider />
            <Grid container spacing={2}>
                <Grid xs={8}>
                    <Card sx={{
                        boxShadow: '0', backgroundColor: 'transparent', borderRadius: '5px', padding: '5px', marginBottom: '50px',
                        border: '0px solid #ddd'
                    }}>
                        <CardContent>
                            <div className='border-ddd-rounded-xl mt-6 py-5'>
                                <div className='px-5'>
                                    <div className='bg-gray-100 px-4 py-3 rounded-xl'>
                                        <p className='text-sm mb-3 px-2'>Configure your desired options and continue to checkout.</p>
                                        <h4 className='mb-2 font-medium bg-gray-200 py-1.5 px-2 rounded-lg'>Selected plan:
                                            <span className='text-[#673de6] pl-1 font-black'>
                                                {selectStatus ? labelPackgaeName : dataPackage?.topic}
                                            </span>
                                        </h4>
                                        <div className='px-2'>
                                            <p>CPU: <span className='font-medium'>{dataPackage?.cpu} vCore</span></p>
                                            <p>Ram: <span className='font-medium'>{dataPackage?.memory} GB</span></p>
                                            <p>Harddisk: <span className='font-medium'>{dataPackage?.disk} GB</span></p>
                                        </div>
                                        <Divider className='my-2 mx-2' />
                                        <div className='text-[#4D4D4D] px-2'>
                                            <div className='flex justify-between'>
                                                <p>Backuspan on site -  {dataPackage?.options[0].backup_on_site}</p>
                                                <button className='text-indigo-500 font-bold text-sm' onClick={ClickShowMore}>{showMore ? 'Hide' : 'More Condition Package...'}</button>
                                            </div>
                                            {
                                                showMore && <>
                                                    <p>Bandwidth - {dataPackage?.options[0].bandwidth} </p>
                                                    <p>Consultation - {dataPackage?.options[0].consultation}</p>
                                                    <p>Customize - {dataPackage?.options[0].customize}</p>
                                                    <p>Datacenter Tier - {dataPackage?.options[0].datacenter_tier}</p>
                                                    <p>Firewall - {dataPackage?.options[0].firewall}</p>
                                                    <p>Migration - {dataPackage?.options[0].migration}</p>
                                                    <Divider className='my-2' />
                                                    <div className='text-[#4D4D4D]'>
                                                        <p className=''>Operation: {labelOperation}</p>
                                                        <p className=''>Version: {labelVerion ?? '-'}</p>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-ddd-rounded-xl py-5 px-10 mt-6'>
                                <div className='mt-3 grid grid-cols-2 gap-5'>
                                    <div className='col-span-2'>
                                        <div className='flex items-center'>
                                            <CircleHelp width={20} className='mr-2 text-indigo-700' />
                                            <p className='text-indigo-700 font-bold'>Read more</p>
                                        </div>
                                        <p className='mb-3'>You can change these options up to you need (when some options has any change price will be calculate by unit).</p>
                                        <Divider />
                                    </div>
                                    <div>
                                        <p className='pl-1'>vCspan</p>
                                        {
                                            loadingData
                                                ? layoutLoading()
                                                : <FormControl sx={{ minWidth: '100%', mt: 0.5 }} size="small">
                                                    <Select
                                                        sx={{ ...boxOption }}
                                                        value={cpuValue}
                                                        onChange={(event) => handleChange({ value: parseInt(event.target.value as string), type: 'cpu', status: true })}
                                                        displayEmpty
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                    >
                                                        {
                                                            cpus?.map((item, index) => {
                                                                return <MenuItem key={index}
                                                                    value={item.cpu}>
                                                                    {item?.cpu} Core
                                                                </MenuItem>
                                                            })
                                                        }
                                                    </Select>
                                                </FormControl>
                                        }
                                    </div>
                                    <div>
                                        <p className='pl-1'>Disk</p>
                                        {
                                            loadingData
                                                ? layoutLoading()
                                                : <FormControl sx={{ minWidth: '100%', mt: 0.5 }} size="small">
                                                    <Select
                                                        sx={{ ...boxOption }}
                                                        value={diskValue}
                                                        onChange={(event) => handleChange({ value: parseInt(event.target.value as string), type: 'disk', status: true })}
                                                        displayEmpty
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                    >
                                                        {
                                                            disks?.map((item, index) => {
                                                                return <MenuItem key={index}
                                                                    value={item.disk}>
                                                                    {item?.disk} GB
                                                                </MenuItem>
                                                            })
                                                        }
                                                    </Select>
                                                </FormControl>
                                        }
                                    </div>
                                    <div>
                                        <p className='pl-1'>Mem</p>
                                        {
                                            loadingData
                                                ? layoutLoading()
                                                : <FormControl sx={{ minWidth: '100%', mt: 0.5 }} size="small">
                                                    <Select
                                                        sx={{ ...boxOption }}
                                                        value={ramValue}
                                                        onChange={(event) => handleChange({ value: parseInt(event.target.value as string), type: 'ram', status: true })}
                                                        displayEmpty
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                    >
                                                        {
                                                            mems?.map((item, index) => {
                                                                return <MenuItem key={index}
                                                                    value={item.memory}>
                                                                    {item?.memory} GB
                                                                </MenuItem>
                                                            })
                                                        }
                                                    </Select>
                                                </FormControl>
                                        }
                                    </div>
                                    <div>
                                        <p className='pl-1'>Internet Protocol (IP)</p>
                                        {
                                            loadingData
                                                ? layoutLoading()
                                                : <OutlinedInput
                                                    sx={{ ...boxOption, mt: 0.5 }}
                                                    autoComplete='off'
                                                    className='rounded-lg'
                                                    fullWidth
                                                    size='small'
                                                    type="number"
                                                    value={ipaddressValue}
                                                    onChange={handleChangeIP}
                                                    required

                                                />}
                                    </div>
                                </div>
                            </div>
                            <div className='border-ddd-rounded-xl py-5 px-10 mt-6'>
                                <p className='mb-3'>Choose Billing Cycle</p>
                                <FormControl sx={{ minWidth: '100%', mt: 0.5 }} size="small">
                                    <Select
                                        sx={{ ...boxOption }}
                                        value={selectMonth}
                                        onChange={handleSelectedMonth}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value={1}> 1 Month</MenuItem>
                                        <MenuItem value={3}>3 Months</MenuItem>
                                        <MenuItem value={6}>6 Months</MenuItem>
                                        <MenuItem value={12}>12 Months</MenuItem>
                                    </Select>
                                </FormControl>

                            </div>


                            <div className='border border-solid border-[#ddd] rounded-xl mt-6 py-5 px-10'>
                                <h4 className='mb-3 font-bold'>Configurable Options</h4>
                                <Divider />
                                <Grid container sx={{ marginTop: '10px' }} spacing={2}>
                                    <Grid xs={6}>
                                        <p className='mb-1.5'>Operating System</p>
                                        <FormControl fullWidth size="small">
                                            <Select
                                                sx={{ ...boxOption }}
                                                value={selectedConfig}
                                                onChange={handleChangeConfigurable}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                {
                                                    systems.map((os, index) => {
                                                        return (
                                                            <MenuItem value={os.id} key={index}>{os.name}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid xs={6}>
                                        <p className='mb-1.5'>Version</p>
                                        <FormControl fullWidth size="small">
                                            <Select
                                                sx={{ ...boxOption }}
                                                value={selectedVersion === 0 ? '' : selectedVersion}
                                                onChange={handleSelectedVersion}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value=''>
                                                    <p className='font-dm-sans text-base'>Choose</p>
                                                </MenuItem>
                                                {
                                                    versions.map((ver, index) => {
                                                        return (
                                                            <MenuItem value={ver.id} key={index}>{ver.version_os ?? <span className='text-sm'>No name</span>}</MenuItem>
                                                        )
                                                    })
                                                }
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                </Grid>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid xs={4}>
                    <Payment
                        price={dataPackage?.price!}
                        month={selectMonth}
                        selected={selectStatus}
                        packageName={dataPackage?.topic!}
                        unit={dataUnit}
                        sysytemOs={labelOperation + ' ' + labelVerion}
                        oldUnit={{
                            cpu: dataPackage?.cpu ?? 0,
                            ram: dataPackage?.memory ?? 0,
                            disk: dataPackage?.disk ?? 0,
                        }}
                        callbackChange={(x) => {
                            setSelectStatus(x);
                        }}
                        callbackName={(x) => {
                            if (x) {
                                setSelectStatus(true);
                                setLabelPackgaeName('Customize Personal');
                            }
                        }}
                    />
                </Grid>
            </Grid>
        </Box>

    );
}