import React from 'react'
import { Backend_skill, Frontend_skill } from '@/constant'
// import { Frontend_skill } from '../../constant'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    
        <section
        id='skills'
        className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20'
        style={{transform:"scale(0.9)"}}
        >
            <SkillText/>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {Frontend_skill.map((image, index) => (
                    <SkillDataProvider
                     key={index}
                     src={image.Image}
                     width={image.width}
                     height={image.height}
                     index={index}
                     />
                ))}
            </div>
            <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
                {Backend_skill.map((image, index) => (
                    <SkillDataProvider
                     key={index}
                     src={image.Image}
                     width={image.width}
                     height={image.height}
                     index={index}
                     />
                ))}
            </div>
            <div className='w-full h-full absolute mb-30'>
                <div className='w-full h-auto z-[-10] opacity-30 absolute flex justify-center items-center bg-cover '>
                    <video
                    className='w-full h-auto'
                    preload="false"
                    playsInline
                    loop
                    muted
                    autoPlay
                    src='https://res.cloudinary.com/ddognlxcd/video/upload/v1738668989/Second_vszf5h.mp4'
                    />

                </div>
            </div>
    <div className='h-20 w-full'></div>
            
        </section>
    
  )
}

export default Skills