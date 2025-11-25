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
          {project.link && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              style={{ marginBottom: '1rem' }}
            >
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="modal-visit-button"
              >
                Visitar Proyecto
              </a>
            </motion.div>
          )}
          
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
              {project.resumen}
            </p>
          </motion.div>

          <motion.div 
            className="modal-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="modal-section-title">Tecnologías Utilizadas</h3>
            <div className="modal-tags">
              {project.tecnologias && project.tecnologias.length > 0 ? (
                project.tecnologias.map((tech, index) => (
                  <span key={index} className="modal-tag">{tech}</span>
                ))
              ) : (
                <p></p>
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal
