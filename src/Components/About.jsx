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
                        <div className='flex items-center'>
                            <label className='w-2/12'>HTML & CSS</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 hover:scale-105 to-blue-500 h-2.5 rounded-full w-12/13'></div>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <label className='w-2/12'>JAVASCRIPT</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 hover:scale-105 to-blue-500 h-2.5 rounded-full w-11/12'></div>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <label className='w-2/12'>React js</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 hover:scale-105 to-blue-500 h-2.5 rounded-full w-11/13'></div>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <label className='w-2/12'>BootStrap</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 hover:scale-105 to-blue-500 h-2.5 rounded-full w-11/12'></div>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <label className='w-2/12'>C++</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 hover:scale-105 to-blue-500 h-2.5 rounded-full w-9/13'></div>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <label className='w-2/12'>Python</label>
                            <div className='grow bg-gray-800 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 hover:scale-105 to-blue-500 h-2.5 rounded-full w-8/13'></div>
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
