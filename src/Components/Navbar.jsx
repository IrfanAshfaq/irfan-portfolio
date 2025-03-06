import React from 'react'


function Navbar() {
  
  return (
    <nav className='bg-black text-white px-8 md:px-16 border border-green-400/30 lg:px-24 '>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline bg-gradient-to-r text-green-400'>Irfan Ashfaq</div>
        <div className='space-x-6'>
          <a href="#home"className='hover:text-green-400'>Home</a>
          <a href="#about"className='hover:text-green-400'>About Me </a>
         <a href="#experience" className='hover:text-green-400'>Experience</a>
          <a href="#project"className='hover:text-green-400'>Projects</a>
          <a href="#contact"className='hover:text-green-400'>Contact Me</a>
        </div>
        
        <a href="#contact" className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline 
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</a>
      </div>
    </nav>
  )
}

export default Navbar