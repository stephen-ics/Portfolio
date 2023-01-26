import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ICSSection from '../components/ICSSection';
import DisplayICS from '../components/DisplayICS';
import Logo from '../pictures/Logo.png'
import Recursion from '../pictures/RecursionSection.png'
import DataStructures from '../pictures/DataStructuresSection.png'
import Algorithms from '../pictures/AlgorithmsSection.png'


const ICS4U0_DSA = () => {
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
    <motion.div className='text-slate-900 mb-10 w-full flex flex-col mt-36'
    variants={container}
    initial='hidden'
    animate='visible'
    exit='exit'
 
    >
      <h1 className='text-5xl text-center mt-10'></h1>

      <motion.div className='flex flex-wrap justify-evenly'>
      <Link to="data-structures">
        <ICSSection
          whileHover={{ scale:1.05 }}
          whileTap={{ scale:0.95 }}
          className='ics-section'
          title="Data Structures"
          subtitle=""
          image={DataStructures}
        >
        </ICSSection>    
      </Link>
      <Link to="algorithms">
        <ICSSection
          whileHover={{ scale:1.05 }}
          whileTap={{ scale:0.95 }}
          className='ics-section'
          title="Algorithms"
          subtitle=""
          image={Algorithms}
        >
        </ICSSection>    
      </Link>
      <Link to="recursions">
        <ICSSection
          whileHover={{ scale:1.05 }}
          whileTap={{ scale:0.95 }}
          className='ics-section'
          title="Recursion"
          subtitle=""
          image={Recursion}
        >
        </ICSSection>  
      </Link>
      </motion.div>

    </motion.div>
  )
}

export default ICS4U0_DSA
