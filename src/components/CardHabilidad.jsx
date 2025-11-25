import './CardHabilidad.css'
import { motion } from 'framer-motion'

function CardHabilidad({ icon_path, title, skills, index = 0 }) {
  return (
    <motion.article 
      className="card-habilidad"
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="card-habilidad-header">
        <img src={icon_path} className="card-habilidad-icono" />
        <h3 className="card-habilidad-subtitulo">{title}</h3>
      </div>
      <ul className="card-habilidad-lista">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </motion.article>
  )
}

export default CardHabilidad