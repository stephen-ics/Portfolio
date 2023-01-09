import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import './component-styles/ICSSection.css';

const ICSSection = ({ whileHover, whileTap, className, onClick, title, subtitle, image, devpost, github }) => {
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
        </motion.button>
      )
}

export default ICSSection