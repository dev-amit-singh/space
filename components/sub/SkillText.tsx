'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utility/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-screen h-auto flex flex-col items-center justify-center p-20'>
        <motion.div
            variants={slideInFromTop}
            className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
            >
              <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5 '/>
              <h1 className='welcome-text text-white text-[13px]'>Think Better with Next.Js 13</h1>
            </motion.div>
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
            >
              Making apps with modern technologies
            </motion.div>
            <motion.div
            variants={slideInFromRight(0.5)}
            className='cursive text-[20px] text-gray-200 mt-[10px] text-center mb-10'
            >
                Never miss a task deadline or idea
            </motion.div>
            
    </div>
  )
}

export default SkillText