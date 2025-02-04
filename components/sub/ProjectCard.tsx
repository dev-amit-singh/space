import React from 'react'
import Image from 'next/image';

interface Props{
    src: string;
    title: string;
    description: string;
}

const ProjectCard = ({src, title, description} : Props) => {
  return (
    <div className='realtive overflow-hidden rounded-lg shadow-lg border border-[#2a0e61] sm:w-[90%] w-[30%]'>
        <Image src={src} alt={title} width={1000} height={1000} className='w-full object-contain'/>
        <div className='rellative p-4'>
            <h1 className='text-2xl font-semibold text-white'>{title}</h1>
            <p className='mt-2 text-gray-300'>{description}</p>

        </div>
    </div>
  )
}

export default ProjectCard