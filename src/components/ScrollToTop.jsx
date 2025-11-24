import { useState, useEffect } from 'react'
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
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          <img src="/icons/up-arrow-svgrepo-com.svg" className="arrow-up" />
        </button>
      )}
    </>
  )
}

export default ScrollToTop
