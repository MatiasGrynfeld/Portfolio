import { useState, useEffect } from 'react'
import './ScrollToTop.css'

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
    const start = window.scrollY
    const duration = 1000
    const startTime = performance.now()

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = easeInOutCubic(progress)

      window.scrollTo(0, start * (1 - easeProgress))

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
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
