
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { AnimatePresence } from 'framer-motion'
 
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Project from './pages/Project'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Page Loading...</div>}>
          <Navbar />
          <AnimatePresence
          mode='wait'>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/experience" exact element={<Experience />} />
              <Route path="/project" exact element={<Project />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
