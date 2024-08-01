import React from 'react'
import LandingLayout from './_components/layoutlanding/LandingLayout'
import { Box, Container, Typography } from '@mui/material'
import HeroSection from './_components/common/HeroSelection'
import OurServices from './(routes)/_components/OurServices'
import CardPackage from './(routes)/_components/CardPackage'
import HeaderAds from './(routes)/_components/HeaderAds'
import CloudService from './(routes)/_components/CloudService'
import Support from './(routes)/_components/Support'
import Discover from './(routes)/_components/Discover'
import WhyChooseUs from './(routes)/_components/WhyChooseUs'
import OurPartner from './(routes)/_components/OurPartner'

type Props = {}

export default function Home({ }: Props) {
  return (
    <LandingLayout>

      <HeaderAds />

      <CardPackage />

      <OurServices />

      <CloudService />

      <Support />

      <Discover />

      <WhyChooseUs />

      <OurPartner />

    </LandingLayout>
  )
}