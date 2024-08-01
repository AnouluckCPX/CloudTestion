"use client"
import React, { useState } from 'react'
import { Box, Card, CardContent, Divider, FormControl, OutlinedInput } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Payment from './Payment';
import FormPersonal from './FormPersonal';

const tableStyles = {
    th: {
        backgroundColor: '#CFFAFE',
        color: '#2D3436',
        padding: '8px',
        border: '1px solid #ddd',
    },
    thCustom1: {

    },
    td: {
        border: '1px solid #ddd',
        padding: '8px',
    },
}

const boxOption = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '15px'
}

export default function TableList() {

    const [age, setAge] = useState<number>(1);


    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        // let value = parseInt((event.target as HTMLInputElement).value);
        setAge(event.target.value as number);
    };

    return (
        <Box >
            <h2 className='mt-10 mb-1 font-bold text-lg text-[#673de6]'>Information Package</h2>
            <Divider />
            <Grid container spacing={2}>
                <Grid xs={8}>
                    <Card sx={{
                        boxShadow: '0', backgroundColor: 'transparent', borderRadius: '5px', padding: '5px', marginBottom: '50px',
                        border: '0px solid #ddd'
                    }}>
                        <CardContent>
                            <h4 className='mb-3 font-normal'>Selected plan:<span className='text-[#673de6] pl-1 font-bold'> Premium</span></h4>
                            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr>
                                        <th style={tableStyles.th}>No.</th>
                                        <th style={tableStyles.th}>Description</th>
                                        <th style={tableStyles.th}>Duration</th>
                                        <th style={tableStyles.th}>Maintenance (LAK)</th>
                                        <th style={tableStyles.th}>Unit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={tableStyles.td} align='center' >
                                            1
                                        </td>
                                        <td style={tableStyles.td} className='leading-6'>
                                            <div className='flex justify-between'><span>-  vCspanU</span><span>1 Core</span></div>
                                            <div className='flex justify-between'><span>-  Mem</span><span>2 GB</span></div>
                                            <div className='flex justify-between'><span>-  Disk</span><span>70 GB</span></div>
                                            <div className='flex justify-between'><span>-  Backuspan on site</span><span>1 Cospanies</span></div>
                                            <div className='flex justify-between'><span>-  Ispan spanublic</span><span>1 Address</span></div>
                                            <div className='flex justify-between'><span>-  Bandwidth</span><span>50/100 Mbspans</span></div>
                                            <div className='flex justify-between'><span>-  Virtual firewall NSX</span><span>-</span></div>
                                        </td>
                                        <td style={tableStyles.td} align='center' >
                                            <FormControl sx={{ minWidth: '80%', m: 1 }} size="small">
                                                <Select
                                                    sx={{ width: '100%' }}
                                                    value={age}
                                                    onChange={() => handleChange}
                                                    displayEmpty
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                >
                                                    <MenuItem value={1}> 1 Month</MenuItem>
                                                    <MenuItem value={6}>6 Months</MenuItem>
                                                    <MenuItem value={12}>1 Year</MenuItem>
                                                    <MenuItem value={24}>2 Years</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </td>
                                        <td style={tableStyles.td} align='center' >200,000</td>
                                        <td style={tableStyles.td} align='center' >Month(s)</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4 className='mt-10 mb-3 font-bold'>Additional Service</h4>
                            <Divider />
                            <Grid container sx={{ marginTop: '20px' }} spacing={2}>
                                <Grid xs={6}>
                                    <p className='mb-1.5'>Operating System</p>
                                    <FormControl fullWidth size="small">
                                        <Select
                                            sx={{ width: '100%' }}
                                            value={age}
                                            onChange={() => handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value={1}> Windows</MenuItem>
                                            <MenuItem value={6}>Linux</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid xs={6}>
                                    <p className='mb-1.5'>Version</p>
                                    <FormControl fullWidth size="small">
                                        <Select
                                            sx={{ width: '100%' }}
                                            value={age}
                                            onChange={() => handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value={1}> Windows</MenuItem>
                                            <MenuItem value={6}>Linux</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                            </Grid>
                            <h4 className='mt-10 mb-3 font-bold'>Option Custom</h4>
                            <Divider />
                            <Box sx={boxOption} >
                                <p className='w-[100px]' >Option 1 :</p>
                                <OutlinedInput
                                    fullWidth
                                    size='small'
                                />
                            </Box>
                            <Box sx={boxOption}>
                                <p className='w-[100px]' >Option 2 :</p>
                                <OutlinedInput
                                    fullWidth
                                    size='small'
                                />
                            </Box>
                            <Box sx={boxOption}>
                                <p className='w-[100px]' >Option 3 :</p>
                                <OutlinedInput
                                    fullWidth
                                    size='small'
                                />
                            </Box>
                            <Box sx={boxOption}>
                                <p className='w-[100px]' >Option 4 :</p>
                                <OutlinedInput
                                    fullWidth
                                    size='small'
                                />
                            </Box>

                            <FormPersonal />

                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Payment />
                </Grid>
            </Grid>
        </Box>

    );
}