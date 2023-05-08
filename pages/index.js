
import { Inter } from 'next/font/google'
import HeroSection from '@/components/herosection'
import MicroManagement from '@/components/micromanagement'
import React from 'react'
import Mediocrity from '@/components/mediocrity'
import SavingTheWorld from '@/components/SavingTheWorld'
import Consultation from '@/components/consultation'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <MicroManagement />
      {/* {/* <Mediocrity /> */}
      {/* <SavingTheWorld />
      <Consultation/> */} 
    </React.Fragment>
  )
}
