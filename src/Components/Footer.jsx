import React from 'react';
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='container mx-auto px-8 md:px-8 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
          <div className='flex-1 mb-4 md:mb-0'>
            <h1 className='text-2xl font-bold mb-2'>Irfan Ashfaq</h1>
            <p className='text-gray-400'>
              Crafting sleek, responsive, and user-friendly web experiences with modern frontend magic.
            </p>
          </div>
          <div className='flex-1 w-full'>
            <form className='flex items-center justify-center'>
              <input
                type='email'
                placeholder='Your Email'
                className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
              />
              <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className='border-gray-600 my-4' />
        
        <div className='flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm'>
          <div className='mb-4 md:mb-0'>&copy; 2025 Irfan Ashfaq. All rights reserved.</div>
          <div className='flex space-x-4 mb-4 md:mb-0'>
            <a href='#' className='hover:text-white'><FaFacebookF /></a>
            <a href='#' className='hover:text-white'><FaTwitter /></a>
            <a href='#' className='hover:text-white'><FaGithub /></a>
            <a href='#' className='hover:text-white'><FaLinkedinIn /></a>
          </div>
          <div className='flex space-x-4'>
            <a href='#' className='hover:text-white'>Privacy</a>
            <a href='#' className='hover:text-white'>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
