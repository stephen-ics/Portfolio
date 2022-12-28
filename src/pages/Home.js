import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect'
import './page-styles/Home.css'
import Logo from '../pictures/Logo.png'

const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.75,
      },
    },
    exit: {
        y: '-20vh',
        opacity: 0,
        transition: {
          duration: 0.25,
        }
    },
  };

  const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const letterAnimation = {
    initial: {
      y: 400
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1,
      },
    },
  };

  const textUp = {
    hidden: {
        x: '-5vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const imageUp = {
    hidden: {
        y: 0,
        opacity: 0,
    },
    visible: { 
        y: '-5vh',
        opacity: 1,
        transition: {
            duration: 2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const buttonLeft = {
    hidden: {
        x: '-10vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const buttonRight = {
    hidden: {
        x: '10vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            delay: 1.5,
            duration: 2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const imageRight = {
    hidden: {
        x: '20vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            delay: 2.5,
            duration: 1,
            ease: [0.6, 0.01, 0.05, 0.95],
            type: "spring",
            stiffness: 200,

        }
    },
    exit: {
        opacity: 0,
    },
  };
  return (
    <motion.div 
    className='h-full text-slate-900 flex flex-col mt-24 w-full'
    variants={container}
    initial='hidden'
    animate='visible'
    exit='exit'
  >
    <motion.div className='flex justify-center'>
      <motion.div className='flex flex-col justify-around'>
        <motion.div>
          <motion.h1 className='text-6xl font-bold'
            variants={textUp}
          >
            👋 Hey 
          </motion.h1>
          <motion.h1 className='text-9xl font-bold'
            variants={textUp}
          >
            I'm Stephen Ni
          </motion.h1>
          <motion.div className='text-3xl mb-8 mt-8'
            variants={textUp}>
              <Typewriter
                options={{
                  strings:[],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2500)
                    .typeString("Aspiring Full-Stack Developer")
                    .deleteAll()
                    .typeString("Creator, Innovator")
                }}
              />
          
          </motion.div>
        </motion.div>
        <motion.div className='flex'>
          <Link to='/experience'>
            <motion.button className="button"
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
              variants={buttonLeft}
              >
                Experiences
            </motion.button>
          </Link>
          <Link to='project'>
              <motion.button 
                className="button"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                variants={buttonRight}
                >
                  Projects
              </motion.button>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        variants={imageRight}
        >     
          <img src={Logo} className='w-96 ml-40 rounded-full object-cover border-green-500 border-solid border-3'/>
      </motion.div>
    </motion.div>
  </motion.div>
  )
}

export default Home