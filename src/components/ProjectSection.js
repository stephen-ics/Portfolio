import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'
import './component-styles/Modal.css'


const ProjectSection = ({ whileHover, whileTap, className, onClick, title, subtitle, image, devpost, github }) => {
  const textUp = {
    hidden: {
        y: '15vh',
        opacity: 0,
    },
    visible: { 
        zIndex: 1,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  return (
    <motion.button
        whileHover={whileHover}
        whileTap={whileTap}
        className={className}
        onClick={onClick}
    
    > 
      <div className='flex flex-col items-center w-full h-full'>
        <img src={image} className='project-image object-cover rounded-t-2xl border-none'></img>
        <h1 className='mt-4 text-4xl'>{title}</h1>
        <h2 className='text-2xl'>{subtitle}</h2>
      </div>
      <div className='flex justify-evenly mb-3 mt-3'>
      <a href='https://google.com' target='_blank'>
        <div className='flex justify-between items-center bg-blue-600 rounded-xl project-section-icons'>
          <p className='text-lg mr-4 text-white'>Devpost</p>
          <SiDevpost size={40} color='rgb(12,56,145)' />
        </div>
      </a>
       <a href='https://google.com' target='_blank'>
          <div className='flex justify-between items-center bg-slate-900 rounded-xl project-section-icons'>
            <p className='text-lg mr-4 text-white'>Github</p>
            <a href='https://google.com' target='_blank'><FaGithub size={40} color="rgb(70, 70, 70)"/></a>
          </div> 
      </a>
      </div>
    </motion.button>
    
  )
}

export default ProjectSection