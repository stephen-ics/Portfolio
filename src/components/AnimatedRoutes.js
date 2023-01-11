import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from '../pages/Home'
import About from '../pages/About'
import Project from '../pages/Project'
import Experience from '../pages/Experience'
import ICS4U0 from '../pages/ICS4U0'
import ICS4U0_DSA from '../pages/ICS4U0_DSA'
import ICS4U0_DS from '../pages/ICS4U0_DS'
import ICS4U0_Algorithms from '../pages/ICS4U0_Algorithms'
import ICS4U0_Recursions from '../pages/ICS4U0_Recursions'
import ICS4U0_ProjectManagement from '../pages/ICS4U0_ProjectManagement'

import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence
    mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/experience" exact element={<Experience />} />
        <Route path="/project" exact element={<Project />} />
        <Route path='/ICS4U0' exact element={<ICS4U0 />} />
        <Route path='/ICS4U0/data-structures-and-algorithms' exact element={<ICS4U0_DSA />}></Route>
        <Route path='/ICS4U0/data-structures-and-algorithms/data-structures' exact element={<ICS4U0_DS />}></Route>
        <Route path='/ICS4U0/data-structures-and-algorithms/algorithms' exact element={<ICS4U0_Algorithms />}></Route>
        <Route path='/ICS4U0/data-structures-and-algorithms/recursions' exact element={<ICS4U0_Recursions />}></Route>
        <Route path='/ICS4U0/project-management' exact element={<ICS4U0_ProjectManagement />}></Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes