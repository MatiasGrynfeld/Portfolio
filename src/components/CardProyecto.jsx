import { useState } from 'react'
import './CardProyecto.css'
import ProjectModal from './ProjectModal'

function CardProyecto({ img_path, Nombre, Rol, Descripcion, id }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <article className="card-proyecto" id={id}>
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
      </article>

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
