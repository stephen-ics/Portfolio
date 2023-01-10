import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import Modal from './Modal.js';
import { useState } from 'react'
import './component-styles/ICSSection.css';


const ICSSection = ({ whileHover, whileTap, className, onClick, title, subtitle, image, devpost, github, youtube, description, techStack }) => {
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

      const [modalOpen, setModalOpen] = useState(false);
      const close = () => setModalOpen(false);
      const open = () => setModalOpen(true);

      return (
        <motion.button
            whileHover={whileHover}
            whileTap={whileTap}
            className={className}
            onClick={onClick}
        > 
          <div className='flex flex-col items-center w-full h-full'>
            <img src={image} className='ics-image object-cover rounded-t-2xl border-none'></img>
            <h1 className='mt-10 text-4xl'>{title}</h1>
            <h2 className='text-2xl'>{subtitle}</h2>
            <div className='flex justify-center mt-4'>
                { github &&
                    <a href={github} target='_blank' className='mr-8'>
                    <div className='flex justify-between items-center bg-slate-900 rounded-xl project-section-icons'>
                    <p className='text-lg mr-4 text-white'>Github</p>
                    <a href='https://google.com' target='_blank'>
                    <FaGithub size={40} color="rgb(70, 70, 70)"/>
                    </a>
                    </div> 
                </a>
                }
                {  youtube && 
                    <a href={youtube} target='_blank' className='ml-8'>
                    <div className='flex justify-between items-center bg-red-600 rounded-xl project-section-icons'>
                    <p className='text-lg mr-4 text-white'>Youtube</p>
                    <FaYoutube size={40} color='rgb(140, 0, 0)' />
                    </div>
                    </a>
                }
            </div>
          </div>
        </motion.button>
      )
}

export default ICSSection

