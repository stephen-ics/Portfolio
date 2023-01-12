import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from './Modal.js';
import ModalICS from './ModalICS.js';
import ICSSection from './ICSSection';
import Logo from '../pictures/Logo.png'
import './component-styles/Modal.css';

const DisplayICS = ({id, className, title, subtitle, description, image, devpost, github, youtube,  sectionTitle, techStack}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    
  return (
    <motion.div className='flex justify-center items-center mt-5'> 
        <ICSSection
            whileHover={{ scale:1.05 }}
            whileTap={{ scale:0.95 }}
            id={id}
            className={className}
            onClick={() => (modalOpen ? close() : open())}
            title={title}
            subtitle={subtitle}
            image={image}
            devpost={devpost}
            youtube={youtube}
            github={github}
        >
        </ICSSection> 
        <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
        >
            {modalOpen && <ModalICS modalOpen={modalOpen} handleClose={close} id={id} title={title} subtitle={subtitle} description={description} image={image} devpost={devpost} github={github} techStack={techStack}/>}
        </AnimatePresence>
    </motion.div>

  
  )
}

export default DisplayICS

    
