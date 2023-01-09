import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal.js';
import './component-styles/Modal.css';
import ProjectSection from './ProjectSection';

const DisplayModal = ({title, subtitle, description, image, devpost, github, sectionTitle, techStack}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    
  return (
    <motion.div className='flex justify-center items-center mt-5'> 
    
        <ProjectSection
            whileHover={{ scale:1.05 }}
            whileTap={{ scale:0.95 }}
            className='project-section'
            onClick={() => (modalOpen ? close() : open())}
            title={title}
            subtitle={subtitle}
            image={image}
        >
            
        </ProjectSection>
        
        <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
        >
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} title={title} subtitle={subtitle} description={description} image={image} devpost={devpost} github={github} techStack={techStack}/>}
        </AnimatePresence>
    </motion.div>
  )
}

export default DisplayModal