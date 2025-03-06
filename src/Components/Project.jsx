import React from 'react';
import FinalProjec from '../assets/Picture1.png'
import EcommerceImage from '../assets/Ecommerce.png'
import ResturantImage from '../assets/Resturant.png'
import ReactImage from '../assets/Reactjs.png'
const projects = [
  {
    id: 1,
    title: "React Js Portfolio",
    image: ReactImage,
    technologies: ["React JS","tailwind CSS"],
    githubLink: "https://github.com/IrfanAshfaq/irfan-portfolio/upload/main"
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: FinalProjec,
    technologies: ["HTML", "BootStrap", "JavaScript" ,"PHP","MYSQL"],
    githubLink: "https://github.com/IrfanAshfaq/E-commerce-website"
  },

  {
    id: 3,
    title: "E-Commerce Store",
    image: EcommerceImage,
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    githubLink: "https://github.com/IrfanAshfaq/E-commerce-website"
  },
  {
    id: 4,
    title: "Resturant Website",
    image: ResturantImage,
    technologies: ["HTML", "CSS"],
    githubLink: "https://github.com/IrfanAshfaq/Resturants/tree/main/Project%202"
  }
];

function Project() {
  return (
    <div className='bg-black text-white py-16' id='project'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h1 className='text-4xl font-bold text-center mb-12'>My Projects</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div key={project.id} className='bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform'>
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-md mb-4' />
              
              <h2 className='text-xl font-semibold text-green-400 mb-2'>{project.title}</h2>
              
              <p className='text-gray-400 mb-4'>Technologies:</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.technologies.map((tech, index) => (
                  <span key={index} className='bg-green-600 px-3 py-1 rounded-full text-sm'>
                    {tech}
                  </span>
                ))}
              </div>

              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <button className='w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 rounded-md 
                hover:scale-105 transition-transform'>
                  View on GitHub
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
