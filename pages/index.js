
import { Inter } from 'next/font/google'
import dynamic from "next/dynamic"
const HeroSection = dynamic(() => import('@/components/herosection'), {
  ssr: false,
});
const MicroManagement = dynamic(() => import('@/components/micromanagement'), {
  ssr: false,
});
// import HeroSection from '@/components/herosection'
// import MicroManagement from '@/components/micromanagement'
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
      <Mediocrity />
      <SavingTheWorld />
      <Consultation />
    </React.Fragment>
  )
}
