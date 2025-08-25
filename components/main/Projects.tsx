import React from 'react'
import ProjectCard from '../sub/ProjectCard'


const Projects = () => {
  return (
    <div id='projects' className='flex flex-col items-center justify-center py-20 bg-[#09052a75]'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10 justify-center'>
            <ProjectCard src='/project/eco.png' title='e-Commerce website' description='An innovative eCommerce website offering seamless shopping, secure payments, fast delivery, and a user-friendly experience with diverse product selections.'/>
            <ProjectCard src='/project/to-do.png' title='To-Do-List' description='A simple and efficient to-do list website for task management, reminders, and productivity, featuring a user-friendly interface and real-time updates.'/>
            <ProjectCard src='/project/video.png' title='Video graphy portfolio' description='A professional videography website showcasing high-quality videos, portfolio highlights, client testimonials, booking options, and seamless navigation for an immersive experience.'/>
        </div>
    </div>
    
  )
}

export default Projects
