'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utility/motion'
import Image from 'next/image'

const Encryption = () => {
  return (
    <div className='flex flex-row relative items-center justify-center w-full h-full min-h-screen'>
        <div className='absolute w-auto h-auto top-0 z-[5]'>
            <motion.div
            variants={slideInFromTop}
            className='text-[40px] font-medium text-center text-gray-200'
            >Performance <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> & 
                </span> Security
            </motion.div>
        </div>

        <div className='flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto'>
            <div className='flex flex-col items-center group cursor-pointer w-auto h-auto'>
                <Image src="/LockTop.png" alt='lockTop' width={50} height={50} className='w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11'/>

                <Image src="/LockMain.png" alt='main' width={70} height={70} className='z-[10]'/>
            </div>
            <div className='Welcome-box px-[15px] mt-4 py-[4px] z-[20] border border-[#7042f88b] opacity-[0.9]'>
                <h1 className='Welcome-text text-[12px] p-1 text-sm'>Encryption</h1>
            </div>
        </div>

        <div className='absolute z-[25] bottom-[10px] px-[5px] text-white'>
        <div className='cursive text-[20px] font-medium text-centertext-gray-300'>
            Secure your Data end-to-end encryption
        </div>
        </div>

        <div className='w-full flex items-start justify-center absolute'>
            <video src="https://res.cloudinary.com/ddognlxcd/video/upload/v1738667247/encryption_nkmwvw.webm" loop muted autoPlay playsInline preload='false' className='w-full h-auto'/>
        </div>
    </div>
  )
}

export default Encryption