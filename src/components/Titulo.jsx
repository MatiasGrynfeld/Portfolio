import './Titulo.css'
import { motion } from 'framer-motion'

function Titulo({ texto }) {
  return (
    <motion.h2 
      className="titulo"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {texto}
    </motion.h2>
  )
}

export default Titulo
