import { motion } from 'framer-motion'
import './Portada.css'
import CVIcon from '../../components/CVIcon'

function Portada() {
  const scrollToQuienSoy = () => {
    const target = document.getElementById('quien-soy')
    if (!target) return

    const targetPosition = target.offsetTop
    const start = window.scrollY
    const distance = targetPosition - start
    const duration = 1000
    const startTime = performance.now()

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = easeInOutCubic(progress)

      window.scrollTo(0, start + distance * easeProgress)

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  return (
    <header className="portada">
      <motion.div 
        className="logo"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src="/Logo.png"/>
      </motion.div>
      <motion.h1 
        className="nombre"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Matías Grynfeld
      </motion.h1>
      <motion.p 
        className="lema"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Observar, Analizar, e Innovar
      </motion.p>
      <motion.div 
        className="iconos"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.a 
          href="https://github.com/MatiasGrynfeld" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="icono"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/icons/githubIcon.png"/>
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/matias-grynfeld/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="icono"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/icons/linkedinIcon.png"/>
        </motion.a>
        <CVIcon size={80} />
      </motion.div>
      <motion.button 
        className="boton-empezar" 
        onClick={scrollToQuienSoy}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(2, 137, 75, 0.5)" }}
        whileTap={{ scale: 0.95 }}
      >
        Empezar
      </motion.button>
    </header>
  )
}

export default Portada
