import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ICSSection from '../components/ICSSection';
import DisplayICS from '../components/DisplayICS';
import Logo from '../pictures/Logo.png'


const ICS4U0_Algorithms = () => {
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
    <motion.div className='text-slate-900 mb-10 w-full flex flex-col'
    variants={container}
    initial='hidden'
    animate='visible'
    exit='exit'
 
    >
      <h1 className='text-5xl text-center mt-10'></h1>

      <motion.div className='flex flex-wrap justify-evenly'> 
      <DisplayICS
        whileHover={{ scale:1.05 }}
        whileTap={{ scale:0.95 }}
        id={"documentation-algorithms"}
        className='ics-section'
        title="Documentation"
        subtitle=""
        image={Logo}
        github="https://github.com/stephen-ics/ICS4U0-DS-A/tree/main/Algorithms"
      >
      </DisplayICS>  
      <DisplayICS
        whileHover={{ scale:1.05 }}
        whileTap={{ scale:0.95 }}
        id={"results"}
        className='ics-section'
        title="Results"
        subtitle=""
        image={Logo}
        github="https://github.com/stephen-ics/ICS4U0-DS-A/tree/main/Recursion"
      >
      </DisplayICS>   
      <DisplayICS
        whileHover={{ scale:1.05 }}
        whileTap={{ scale:0.95 }}
        id={"sorting-algorithms"}
        className='ics-section'
        title="Sorting Algorithms"
        subtitle="Sorting Algorithms"
        description="Sorting Algorithms Sorting Algorithms Sorting Algorithms Sorasjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsasjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsasjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsasjkdh asjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsasjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsasjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsasjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsasjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsasjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsting Algorithms Sorting Algorithms Sorting Algorithms Sorting Algorithms"
        techStack="asjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsasjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsasjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsasjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsasjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsasjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsasjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsasjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashsasjkdh asjdhaskdjh aksjdh kja cjdhajshd kjashdk jsahd kjashs"
        image={Logo}
        github="https://github.com/stephen-ics/ICS4U0-DS-A/tree/main/Recursion"
      >
      </DisplayICS> 
      <DisplayICS
        whileHover={{ scale:1.05 }}
        whileTap={{ scale:0.95 }}
        id={"searching-algorithms"}
        className='ics-section'
        title="Searching Algorithms"
        subtitle=""
        image={Logo}
        github="https://github.com/stephen-ics/ICS4U0-DS-A/tree/main/Recursion"
      >
      </DisplayICS>  
      </motion.div>

    </motion.div>
  )
}

export default ICS4U0_Algorithms
