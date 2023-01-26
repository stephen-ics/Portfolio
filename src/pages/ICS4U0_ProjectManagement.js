import React from 'react'
import './page-styles/Project.css'

import ICSSection from '../components/ICSSection';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import DisplayICS from '../components/DisplayICS';
import Logo from '../pictures/Logo.png'
import HopQueen from '../pictures/HopQueen.png'

const ICS4U0_ProjectManagement = () => {
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.35,
      },
    },
    exit: {
        y: '-10vh',
        opacity: 0,
        transition: {
          duration: 0.25,
        }
    },
  };



  
  return (
    <motion.div className='text-slate-900 mb-10 mt-36 w-full flex flex-col'
    variants={container}
    initial='hidden'
    animate='visible'
    exit='exit'
    >
      <h1 className='text-5xl text-center mt-10'>Projects</h1>

      <motion.div className='flex flex-wrap justify-evenly'>
        <Link to="hop-queen">
          <ICSSection
            whileHover={{ scale:1.05 }}
            whileTap={{ scale:0.95 }}
            className='ics-section'
            title="Hop Queen"
            subtitle=""
            image={HopQueen}
            github="https://github.com/stephen-ics/Hop-Queen"
            youtube="https://www.youtube.com/watch?v=-orOY6NSltM">
          </ICSSection> 
        </Link> 
      </motion.div>

    </motion.div>
  )
}

export default ICS4U0_ProjectManagement


