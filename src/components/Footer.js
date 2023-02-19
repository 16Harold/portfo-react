import React from 'react'
import bannerGif from "../assets/logo.gif";

const Footer = () => {
  return (
    <section className='bg-[#0e1f1e] flex flex-col justify-center md:py-5 rounded-lg  items-center'>
        <h1 className='uppercase text-[#89dee6] text-sm p-0 pt-3 md-pt-0 '>thanks for exploring my world</h1>
        <img src={bannerGif} alt='banner gif' className='w-[100px]'/>
        <p className='text-[#89dee6] pb-3 md:pb-0'> Harold Lopez | 2023</p>
    </section>
  )
}

export default Footer