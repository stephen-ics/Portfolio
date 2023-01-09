import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from '../pages/Home'
import About from '../pages/About'
import Project from '../pages/Project'
import Experience from '../pages/Experience'
import ICS4U0 from '../pages/ICS4U0'

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
        <Route path='/ICS4U0/project-management' exact element={<Project />}></Route>
        <Route path='/search/data-structures-and-algorithnms' exact element={<Project />}></Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes