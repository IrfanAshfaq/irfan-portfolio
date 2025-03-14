import React from 'react';
import HeroImage from '../assets/Hero.jpg';

function Hero() {
  return (
    <div className='bg-black text-white text-center py-16 px-4' id='home'>
      <img
        src={HeroImage}
        alt="Hero"
        className='mx-auto mb-6 w-40 h-40 md:w-48 md:h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-3xl md:text-4xl font-bold leading-tight'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Irfan Ashfaq
        </span>
        , <br className="block md:hidden" />
        Front-End Developer
      </h1>
      <p className='mt-3 text-base md:text-lg text-gray-300 px-2 md:px-0'>
        Crafting sleek, responsive, and user-friendly web experiences with modern frontend magic.
      </p>

      <div className='mt-8 space-x-4'>
        <a
          href="#contact"
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Contact Me
        </a>

        {/* Resume Download Button */}
        <a
          href={`${window.location.origin}/resume.pdf`}
          download="Irfan_Ashfaq_Resume.pdf"
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Hero;
