import React from 'react';
import { FaBluetooth } from 'react-icons/fa';
import './component-styles/Timeline.css'
import { motion } from 'framer-motion'
import CodeBro from '../pictures/Logo.png'

const TimelineItem = ({ data, id }) => (
    <motion.div className="timeline-item"
    whileHover={{scale: 1.05}}
    whileTap={{scale: 0.95}}>
        <div className="timeline-item-content">
            <div>
                <div className='flex items-center mt-4'>
                    <img src={CodeBro}  className='timeline-image mt-4 rounded-xl object-cover'/>
                    <div className='ml-10'>
                        <h1 className='timeline-title'>{data.employer}</h1>
                        <h3 className='timeline-subtitle font-normal mt-1'>{data.position} </h3> 
                        <h3 className='timeline-date font-normal'> {data.date}</h3>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

export default TimelineItem;