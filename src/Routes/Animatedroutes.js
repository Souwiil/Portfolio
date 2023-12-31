
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
// import Portfolio from '../pages/Portfolio';




const AnimatedRoute = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/Portfolio" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AnimatedRoute;