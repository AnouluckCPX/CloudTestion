import { Box, Card, CardActions, CardContent, Container, Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'




export default function OurServices({ }) {

    const dataCard = [
        {
            key: 1,
            name: "Data Center On Cloud",
            des: "The customers who do not want to invest in their own IT systems and prefer to transfer their systems to the Cloud, such as mail servers, web servers, and database servers"
        },
        {
            key: 2,
            name: "Back-Up To Cloud",
            des: "Backup deposit information outside of their organization to prevent data loss. The backup can be done through NAS, Backup Software (Veeam, Veritas), and S3 Protocol"
        },
        {
            key: 3,
            name: "Cloud PBX",
            des: "The for rent a telephone branch box system through the Lao Telecom network, designed to replace PABX without the need for service users to invest in the installation of the telephone branch box themselves"
        },
    ]

    return (
        <Box className='mt-[10rem] h-[40rem] relative'>
            <div className='-z-10 bg-[#E53636] w-full h-[40rem] absolute' />
            <div className='w-full absolute -z-10 mix-blend-multiply'>
                <Image src='/static/images/landing/bg-line-2.png' alt="bg-line-2" width={1500} height={500} className='w-full h-[40rem] object-cover' />
            </div>
            <Container maxWidth="lg" className='pt-24 z-10'>
                <h1 className='text-3xl text-center font-black text-white'>Our Best Service</h1>
                <p className='text-center text-white text-base pt-2 pb-6'>Introducing new services to help your business and we provide the best services for our customer.</p>
                <Box sx={{ mt: 4 }}>
                    <Grid container spacing={5}>
                        {
                            dataCard.map(({ key, name, des }, index) => {
                                return (
                                    <Grid xs={4} key={key}>
                                        <Box key={index}>
                                            <Card sx={{ height: 300 }} className='px-4 rounded-xl border-2 border-black'>
                                                <CardContent className='text-center'>
                                                    <Box display={'flex'} justifyContent={'center'} className='pb-3 pt-3'>
                                                        <Image src='/static/images/landing/check-red.svg' alt="check red" width={38} height={38} />
                                                    </Box>
                                                    <Typography variant='h6' className='font-bold pb-3'>{name}</Typography>
                                                    <Typography className='text-[#1F2426]'>
                                                        {des}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Box>
            </Container >
        </Box >
    )
}