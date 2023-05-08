import dynamic from 'next/dynamic'
import React from 'react'

// import { Fade } from "react-awesome-reveal"
// const Fade =dynamic(()=>import("react-awesome-reveal").then(res=>res),{ssr:false})


const Footer = () => {
  return (
    <div>
      <div className='w-full  imgfooter '>

        <p className='w-full text-[20px] leading-6 text-center border-zinc-700 border text-white uppercase py-14 '>Book a call now</p>
      </div>
      <div className='flex justify-between w-full text-white items-center px-[80px] py-[56px]'>
        <div className='flex flex-col gap-4'>
          <p className='text-zinc-400 font-light text-[24ox] leading-none komi-xLight'> FIND US</p>
          <div className='text-[18px] leading-none komi-xLight font-light flex gap-4'>
            <ul>
              <li>DRIBBLE</li>
            </ul>
            <li>GITHUB</li>
            <li>LINKEDIN</li>
            <li>INSTAGRAM</li>
            <li>SPOTIFY</li>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-zinc-400 font-light text-[24ox] leading-none komi-xLight'> UP CLOSE AND PERSONAL</p>
          <p className='text-[18px] leading-none font-light komi-xLight flex gap-4'>HOWDY@ALPHASQUAD.TECH</p>

        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-zinc-400 font-light text-[24ox] leading-[130%] komi-xLight w-full max-w-[294px]'>© ALPHASQUAD LLC 2022
            ALL RIGHTS RESERVED</p>

        </div>
      </div>
    </div>
  )
}

export default Footer