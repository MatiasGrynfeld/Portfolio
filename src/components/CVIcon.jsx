import { motion } from 'framer-motion'
import './CVIcon.css'

function CVIcon({ size = 80 }) {
  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <motion.a 
      href="#" 
      className="cv-icon" 
      onClick={handleClick} 
      style={{ width: `${size}px`, height: `${size}px` }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      CV
    </motion.a>
  )
}

export default CVIcon
