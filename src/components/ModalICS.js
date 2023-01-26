
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import './component-styles/Modal.css'
import { FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'
import Logo from '../pictures/Logo.png'

import ICSData from '../data/ICSData'

const dropIn ={
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: { 
        y:'0',
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 14,
            stiffness: 150,
        }
    },
    exit: {
        y: '100vh',
        opacity: 0,
    },
};



const ModalButton = ({ onClick, label }) => (
    <motion.button
        className='modal-button'
        type='button'
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={onClick}
    >
        {label}
    </motion.button>
);


const Modal = ({ handleClose, id, title, subtitle, description, techStack, image, github, devpost }) => {
    let isId = false;
    return (
        <Backdrop onClick={handleClose}>
            <motion.div 
                onClick={(e) => e.stopPropagation()}
                className='modal-ics'
                variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'
                
            >
                <div className='w-full flex flex-col items-center'>
                    <ModalButton onClick={handleClose} label='Close'></ModalButton>
                    <div className='flex flex-col w-full h-full justify-between items-start'>
       
                        {ICSData.map((element) => {
                            if (id == element.id) {
                                return (
                         
                                    <div className="whitespace-pre-line ">
   
                                        <div className='flex'>
                                            <div className='w-1/2'>
                                                <h1 className='text-center mt-6 font-bold'>NOTE: The lines referred to below can be found in the Github Repository linked to Github Sticker on each topics tab</h1>
                                                <div className='modal-text-separator'>
                                                    <h1 className='modal-title'>{element.title}</h1>
                                                    <h3 className='modal-date'>{element.subtitle1}</h3>
                                                    <p className='modal-description mt-2'>{element.description1}</p>
                                                </div>  
                                                { element.subtitle2 && 
                                                    <div className='modal-text-separator'>
                                                        <h3 className='modal-date'>{element.subtitle2}</h3>
                                                        <p className='modal-description mt-2'>{element.description2}</p>
                                                    </div>        
                                                }
                                                { element.subtitle3 && 
                                                    <div className='modal-text-separator'>
                                                        <h3 className='modal-date'>{element.subtitle3}</h3>
                                                        <p className='modal-description mt-2'>{element.description3}</p>
                                                    </div>        
                                                }
                                                { element.subtitle4 && 
                                                    <div className='modal-text-separator'>
                                                        <h3 className='modal-date'>{element.subtitle4}</h3>
                                                            <p className='modal-description mt-2'>{element.description4}</p>
                                                    </div>        
                                                }
                                                { element.subtitle5 && 
                                                    <div className='modal-text-separator'>
                                                        <h3 className='modal-date'>{element.subtitle5}</h3>
                                                        <p className='modal-description mt-2'>{element.description5}</p>
                                                    </div>        
                                                }
                                            </div>
                                            <div className='w-1/2 m-20'>
                                                { element.image &&
                                                    <img className='modal-image-width' src={element.image} />
                                                }
                                            </div>
                                        </div>
                                        <div className='w-2/3'>
                                            { element.code1 && 
                                                <div className='modal-text-separator'>
                                                    <h3 className='modal-date'>{element.code1}</h3>
                                                    <p className='modal-description mt-2'>{element.codeexample1}</p>
                                                </div>       
                                            }           
                                            { element.code2 && 
                                            <div className='modal-text-separator'>
                                                <h3 className='modal-date'>{element.code2}</h3>
                                                <p className='modal-description mt-2'>{element.codeexample2}</p>
                                            </div>       
                                            }           
                                            { element.code3 && 
                                            <div className='modal-text-separator'>
                                                <h3 className='modal-date'>{element.code3}</h3>
                                                <p className='modal-description mt-2'>{element.codeexample3}</p>
                                            </div>       
                                            }           
                                            { element.code4 && 
                                            <div className='modal-text-separator'>
                                                <h3 className='modal-date'>{element.code4}</h3>
                                                <p className='modal-description mt-2'>{element.codeexample4}</p>
                                            </div>       
                                            }       
                                        </div>    
                                                
                                    </div>  
                                  
                                                                      
                                )
                            }
                        })}             
                    </div>                  
                </div>
            </motion.div>
        </Backdrop>
    )
}

export default Modal;