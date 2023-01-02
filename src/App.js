
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { AnimatePresence } from 'framer-motion';
import { Helmet } from "react-helmet";
 
import AnimatedRoutes from './components/AnimatedRoutes'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Project from './pages/Project'

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Stephen Ni | Software Developer</title>
        <meta name="description" content="Hello! I'm Stephen! I'm a high school student at John Fraser Secondary School and an aspiring full-stack developer."></meta>
      </Helmet>
      <BrowserRouter>
        <Suspense fallback={<div>Page Loading...</div>}>
          <Navbar />
          <AnimatedRoutes />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
