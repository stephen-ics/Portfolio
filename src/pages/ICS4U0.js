import React from 'react'
import { motion } from 'framer-motion'

import ICSSection from '../components/ICSSection';
import Logo from '../pictures/Logo.png'
import { Link } from 'react-router-dom';

const ICS4U0 = () => {
    const container = {
        hidden: {
          y: '10vh',
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            staggerChildren: 0.35,
            duration: 0.5,
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
        <motion.div 
        className='mt-10 flex flex-col text-center justify-center text-slate-900'
        variants={container}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
         <h1 className='text-5xl text-center mt-10'>ICS4U0 - Currently under construction!</h1>

        <motion.div className='flex flex-wrap justify-evenly'> 
        <Link to="project-management">
          <ICSSection
              whileHover={{ scale:1.05 }}
              whileTap={{ scale:0.95 }}
              className='ics-section'
              title="Project Management"
              subtitle=""
              image={Logo}
            >
          </ICSSection>
        </Link>
        <Link to="data-structures-and-algorithms">
          <ICSSection
              whileHover={{ scale:1.05 }}
              whileTap={{ scale:0.95 }}
              className='ics-section'
              title="Data Structures/Algorithms"
              subtitle=""
              image={Logo}
            >
          </ICSSection>
        </Link>
                
        </motion.div>
      </motion.div>
      )
}

export default ICS4U0