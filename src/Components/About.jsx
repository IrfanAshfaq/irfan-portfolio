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

            <div className='space-y-6'>
              {[
                { label: "HTML & CSS", width: "w-12/13" },
                { label: "JAVASCRIPT", width: "w-11/12" },
                { label: "React js", width: "w-11/13" },
                { label: "BootStrap", width: "w-11/12" },
                { label: "C++", width: "w-9/13" },
                { label: "Python", width: "w-8/13" }
              ].map((skill, index) => (
                <div key={index} className='flex flex-col md:flex-row md:items-center md:space-x-4'>
                  <label className='text-sm md:text-base w-full md:w-2/12 mb-2 md:mb-0'>{skill.label}</label>
                  <div className='flex-1 bg-gray-800 rounded-full h-2.5'>
                    <div className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full ${skill.width}`}></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
