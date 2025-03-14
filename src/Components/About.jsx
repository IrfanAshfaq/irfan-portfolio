import React from 'react'
import AboutImage from '../assets/About.jpg'

function About() {
  return (
    <div className='bg-black text-white py-20 ' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h1 className='text-4xl font-bold text-center mb-12'>About Me</h1>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={AboutImage} alt="Hero" className='w-72 h-90 rounded object-cover mb-8 md:mb-0' />
                <div className='flex-1'>
                     <p className='text-lg mb-8'>
                     I am a passionate Frontend Developer dedicated to crafting visually stunning, user-friendly, and highly responsive web experiences. With expertise in HTML, CSS, JavaScript, React, and Tailwind CSS, I focus on building sleek interfaces that enhance user engagement.
                    </p>
                    
                    <div className='space-y-4'>
    <div className='grid grid-cols-1 md:grid-cols-12 items-center gap-2 md:gap-4 w-full overflow-hidden'>
        <label className='col-span-4 md:col-span-2 text-left'>HTML & CSS</label>
        <div className='col-span-8 md:col-span-10 bg-gray-800 rounded-full h-2.5 w-full'>
            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-[95%]'></div>
        </div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-12 items-center gap-2 md:gap-4 w-full overflow-hidden'>
        <label className='col-span-4 md:col-span-2 text-left'>JAVASCRIPT</label>
        <div className='col-span-8 md:col-span-10 bg-gray-800 rounded-full h-2.5 w-full'>
            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-[90%]'></div>
        </div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-12 items-center gap-2 md:gap-4 w-full overflow-hidden'>
        <label className='col-span-4 md:col-span-2 text-left'>React JS</label>
        <div className='col-span-8 md:col-span-10 bg-gray-800 rounded-full h-2.5 w-full'>
            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-[85%]'></div>
        </div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-12 items-center gap-2 md:gap-4 w-full overflow-hidden'>
        <label className='col-span-4 md:col-span-2 text-left'>BootStrap</label>
        <div className='col-span-8 md:col-span-10 bg-gray-800 rounded-full h-2.5 w-full'>
            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-[90%]'></div>
        </div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-12 items-center gap-2 md:gap-4 w-full overflow-hidden'>
        <label className='col-span-4 md:col-span-2 text-left'>C++</label>
        <div className='col-span-8 md:col-span-10 bg-gray-800 rounded-full h-2.5 w-full'>
            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-[75%]'></div>
        </div>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-12 items-center gap-2 md:gap-4 w-full overflow-hidden'>
        <label className='col-span-4 md:col-span-2 text-left'>Python</label>
        <div className='col-span-8 md:col-span-10 bg-gray-800 rounded-full h-2.5 w-full'>
            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-[65%]'></div>
        </div>
    </div>
</div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default About;
