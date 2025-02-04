import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    
    <div className='relative flex flex-col h-full w-full'>
        <video
        autoPlay
        muted
        loop
        className='absolute left-0 z-[1] w-full h-screen object-cover'>
            <source src='https://res.cloudinary.com/ddognlxcd/video/upload/v1738667244/space_hero_mrx0lw.mp4' type='video/webm'/>
        </video>
        <HeroContent/>
        

        </div>
        
  )
}

export default Hero