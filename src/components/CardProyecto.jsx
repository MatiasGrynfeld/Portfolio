import { useState } from 'react'
import { motion } from 'framer-motion'
import './CardProyecto.css'
import ProjectModal from './ProjectModal'

function CardProyecto({ img_path, Nombre, Rol, Descripcion, id, index = 0 }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <motion.article 
        className="card-proyecto" 
        id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
      >
        <div className="card-proyecto-imagen">
          <img src={img_path} />
        </div>
        <div className="card-proyecto-contenido">
          <h3 className="card-proyecto-titulo">{Nombre}</h3>
          <p className="card-proyecto-rol">{Rol}</p>
          <p className="card-proyecto-descripcion">{Descripcion}</p>
          <button className="card-proyecto-boton" onClick={handleOpenModal}>
            <span className="boton-texto">CONOCER MÁS</span>
            <span className="boton-flechas">{">>"}</span>
          </button>
        </div>
      </motion.article>

      {isModalOpen && (
        <ProjectModal 
          project={{ img_path, Nombre, Rol, Descripcion, id }}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}

export default CardProyecto
