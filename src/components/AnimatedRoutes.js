import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from '../pages/Home'
import About from '../pages/About'
import Project from '../pages/Project'
import Experience from '../pages/Experience'

import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence
    exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/experience" exact element={<Experience />} />
        <Route path="/project" exact element={<Project />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes