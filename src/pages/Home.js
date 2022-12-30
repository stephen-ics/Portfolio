import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect'
import './page-styles/Home.css'
import Logo from '../pictures/Logo.png'
import HomeProjects from '../components/HomeProjects'

import StockStalker from '../pictures/Logo.png'
import PlantUp from '../pictures/Logo.png'
import CodeBro from '../pictures/Logo.png'
import DeSsert from '../pictures/Logo.png'
import CloseConnect from '../pictures/Logo.png'
import TokensForGood from '../pictures/Logo.png'

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
    className='homeContainer'
    variants={container}
    initial='hidden'
    animate='visible'
    exit='exit'
  >
    <motion.div className='flex justify-center'>
      <motion.div className='flex flex-col justify-around'>
        <motion.div>
          <motion.h1 className='heading2'
            variants={textUp}
          >
            👋 Hey 
          </motion.h1>
          <motion.h1 className='heading1'
            variants={textUp}
          >
            I'm Stephen Ni
          </motion.h1>
          <motion.div className='heading3 mb-8 mt-8'
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
    </motion.div>
    <motion.div
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        variants={imageRight}
        >     
          <img src={Logo} className='m-20 rounded-full object-cover border-green-500 border-solid'/>
      </motion.div>
      <motion.div className='flex flex-col items-center mt-40'>
        <motion.div variants={imageUp} className='homeProject'>
          <HomeProjects title='StockStalker: Hack the 6ix Winner' date='August 2022' subtitle='To search, manage, and see the overall ESG performance' image={StockStalker} link='https://devpost.com/software/stock-stalker-4jrosz'/>
        </motion.div>
        <motion.div variants={imageUp} className='homeProject'>
          <HomeProjects title='PlantUp: Backyard Hacks III Winner' date='July 2022' subtitle='To make gardening an exciting experience' image={PlantUp} link='https://devpost.com/software/plantup'/>
        </motion.div>
        <motion.div variants={imageUp} className='homeProject'>
          <HomeProjects title='CodeBro: Hacky Birthay MLH! 2022 Winner' date='July 2022' subtitle='To practice both their web design and competitive problem-solving skills offline' image={CodeBro} link='https://devpost.com/software/codebro'/>
        </motion.div>
        <motion.div variants={imageUp} className='homeProject'>
          <HomeProjects title='DeSsert: FreyHacks Winner' date='June 2022' subtitle="Find the perfect recipe while owning the rights to your content on the world's first decentralized recipe sharing site" image={DeSsert} link='link'/>
        </motion.div>
        <motion.div variants={imageUp} className='homeProject'>
          <HomeProjects title='Close Connect: WaffleHacks 2022 Winner' date='June 2022' subtitle='To meet others who live in different regions and celebrate your differences' image={CloseConnect} link='link'/>
        </motion.div>
        <motion.div variants={imageUp} className='homeProject'>
          <HomeProjects title='Tokens For Good: JAMHacks 6 Winner' date='May 2022' subtitle='To provide an incentive to donate through collectible NFTs' image={TokensForGood} link='https://devpost.com/software/decharity-gvhxw2'/>
        </motion.div>
      </motion.div>
  </motion.div>
  )
}

export default Home