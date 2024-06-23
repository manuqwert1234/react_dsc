import React, { useEffect, useState } from 'react'
import Navbar from './comp/Navbar'
import Middle from './comp/Middle'
import Ending from './comp/Ending'
import Hero from './comp/Hero'
import './App.css'
import Teampart from './comp/Teampart'
import { motion } from 'framer-motion'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      setIsAnimating(true);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      width: 40,
      height: 40,
      backgroundColor: 'rgba(0, 200, 255, 0.444)',
      borderRadius: '50%',
      boxShadow: '0 0 20px rgba(87, 98, 130, 0.88))',
      opacity: 1,
      transition: {
        type: 'tween',
        ease: 'backOut',
        duration: 0,
        fill: 'forwards'
      }
    },
    hidden: {
      opacity: 0,
      transition: {
        type: 'tween',
        ease: 'easeOut',
        duration: 0.5,
        fill: 'forwards'
      }
    }
  };

  return (
    <div>

      <BrowserRouter>
      <Navbar />
      <Hero />
      <Middle />
      <Ending />
      <Teampart />

      </BrowserRouter >

      <motion.div
        className='cursor'
        variants={variants}
        animate={isAnimating ? 'default' : 'hidden'}
        initial="hidden"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999
        }}
      />
    </div>
  );
}

export default App;
