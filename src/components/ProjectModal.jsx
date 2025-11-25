import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './ProjectModal.css'

function ProjectModal({ project, onClose }) {
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  return (
    <motion.div 
      className={`modal-overlay ${isClosing ? 'closing' : ''}`}
      onClick={handleOverlayClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="modal-content"
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 50, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.div 
          className="modal-header"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="modal-header-content">
            <h2 className="modal-title">{project.Nombre}</h2>
            <p className="modal-subtitle">{project.Rol}</p>
          </div>
          <motion.button 
            className="modal-close" 
            onClick={handleClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>

        <motion.div 
          className="modal-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img 
            src={project.img_path} 
            alt={project.Nombre} 
            className="modal-image"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />

          <motion.div 
            className="modal-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="modal-section-title">Resumen del Proyecto</h3>
            <p className="modal-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="modal-text">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </motion.div>

          <motion.div 
            className="modal-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="modal-section-title">Desafíos y Soluciones</h3>
            <p className="modal-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <ul className="modal-list">
              <li>Desafío técnico principal y cómo fue resuelto mediante innovación</li>
              <li>Optimización de rendimiento que resultó en mejoras significativas</li>
              <li>Integración compleja de sistemas que requirió soluciones creativas</li>
              <li>Escalabilidad y arquitectura diseñada para crecimiento futuro</li>
            </ul>
          </motion.div>

          <motion.div 
            className="modal-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="modal-section-title">Tecnologías Utilizadas</h3>
            <div className="modal-tags">
              <span className="modal-tag">Python</span>
              <span className="modal-tag">TensorFlow</span>
              <span className="modal-tag">React</span>
              <span className="modal-tag">Node.js</span>
              <span className="modal-tag">PostgreSQL</span>
              <span className="modal-tag">Docker</span>
              <span className="modal-tag">AWS</span>
            </div>
          </motion.div>

          <motion.div 
            className="modal-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h3 className="modal-section-title">Resultados e Impacto</h3>
            <p className="modal-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. 
              Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.
            </p>
            <div className="modal-stats">
              <div className="modal-stat">
                <p className="modal-stat-number">95%</p>
                <p className="modal-stat-label">Precisión</p>
              </div>
              <div className="modal-stat">
                <p className="modal-stat-number">5000+</p>
                <p className="modal-stat-label">Usuarios</p>
              </div>
              <div className="modal-stat">
                <p className="modal-stat-number">4 Meses</p>
                <p className="modal-stat-label">Desarrollo</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="modal-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="modal-section-title">Aprendizajes Clave</h3>
            <ul className="modal-list">
              <li>Experiencia práctica en desarrollo de inteligencia artificial aplicada</li>
              <li>Trabajo en equipo y metodologías ágiles de desarrollo</li>
              <li>Diseño de arquitectura escalable y mantenible</li>
              <li>Gestión de proyectos complejos con múltiples stakeholders</li>
              <li>Presentación de soluciones técnicas a audiencias diversas</li>
            </ul>
          </motion.div>

          <motion.div 
            className="modal-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h3 className="modal-section-title">Enlaces y Recursos</h3>
            <p className="modal-text">
              Repositorio GitHub: <strong>github.com/usuario/proyecto</strong><br/>
              Demostración en vivo: <strong>proyecto-demo.com</strong><br/>
              Documentación técnica: <strong>docs.proyecto.com</strong>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal
