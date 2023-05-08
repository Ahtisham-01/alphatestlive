
import { Inter } from 'next/font/google'
import dynamic from "next/dynamic"
const HeroSection = dynamic(() => import('@/components/herosection'), {
  ssr: false,
});
const MicroManagement = dynamic(() => import('@/components/micromanagement'), {
  ssr: false,
});
const Mediocrity = dynamic(() => import('@/components/mediocrity'), {
  ssr: false,
});
const SavingTheWorld = dynamic(() => import('@/components/SavingTheWorld'), {
  ssr: false,
});
const Consultation = dynamic(() => import('@/components/consultation'), {
  ssr: false,
});
// import HeroSection from '@/components/herosection'
// import MicroManagement from '@/components/micromanagement'
import React from 'react'
// import Mediocrity from '@/components/mediocrity'
// import SavingTheWorld from '@/components/SavingTheWorld'
// import Consultation from '@/components/consultation'
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
