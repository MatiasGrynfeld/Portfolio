import { motion } from 'framer-motion'
import './PanelLateral.css'
import CVIcon from './CVIcon'
import { scrollToElement } from '../utils/smoothScroll'

function PanelLateral() {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    scrollToElement(sectionId, 1000)
  }

  return (
    <motion.aside 
      className="panel-lateral"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.section 
        className="seccion-perfil"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="foto-perfil">
          <img src="/aksjhdb" alt="FOTO" />
        </div>
        <h2 className="nombre-perfil">Matías Grynfeld</h2>
      </motion.section>

      <div className="separador"></div>
      <motion.nav 
        className="seccion-navegacion"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="columna-nav">
          <a href="#quien-soy" onClick={(e) => handleNavClick(e, 'quien-soy')}>¿Quién Soy?</a>
          <a href="#habilidades" onClick={(e) => handleNavClick(e, 'habilidades')}>Habilidades</a>
          <a href="#edu-exp" onClick={(e) => handleNavClick(e, 'edu-exp')}>Edu. & Exp.</a>
        </div>
        <div className="columna-nav">
          <a href="#proyectos" onClick={(e) => handleNavClick(e, 'proyectos')}>Proyectos</a>
          <a href="#otros" onClick={(e) => handleNavClick(e, 'otros')}>Otros</a>
          <a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')}>Contactame</a>
        </div>
      </motion.nav>

      <div className="separador"></div>
      <motion.section 
        className="seccion-info"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <a href="mailto:matiasgrynfeld@gmail.com" className="icono-info" style={{ cursor: 'pointer' }}>
          <img src="/icons/mailIcon.png"/>
        </a>
        <div className="texto-info">
          <h3 className="titulo-info">MAIL</h3>
          <a href="mailto:matiasgrynfeld@gmail.com" className="contenido-info contenido-info-link">matiasgrynfeld@gmail.com</a>
        </div>
      </motion.section>

      <div className="separador"></div>
      <motion.section 
        className="seccion-info"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="icono-info">
          <img src="/icons/locationIcon.png"/>
        </div>
        <div className="texto-info">
          <h3 className="titulo-info">UBICACIÓN</h3>
          <p className="contenido-info contenido-info-static">Buenos Aires, Argentina</p>
        </div>
      </motion.section>

      <div className="separador"></div>

      <motion.section 
        className="seccion-iconos"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <motion.a 
          href="https://github.com/MatiasGrynfeld" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="icono-social"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/icons/githubIcon.png"/>
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/matias-grynfeld/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="icono-social"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src="/icons/linkedinIcon.png"/>
        </motion.a>
        <CVIcon size={90} />
      </motion.section>
    </motion.aside>
  )
}

export default PanelLateral
