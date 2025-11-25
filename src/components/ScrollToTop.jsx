import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ScrollToTop.css'
import { smoothScrollTo } from '../utils/smoothScroll'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    smoothScrollTo(0, 1000)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button 
          onClick={scrollToTop} 
          className="scroll-to-top"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/icons/up-arrow-svgrepo-com.svg" className="arrow-up" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
