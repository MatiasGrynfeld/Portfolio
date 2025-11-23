import { useState, useEffect } from 'react'
import './Proyectos.css'
import Titulo from '../../components/Titulo'
import CardProyecto from '../../components/CardProyecto'

function Proyectos() {
  const [data, setData] = useState({ proyectos: [] })

  useEffect(() => {
    fetch('/jsons/proyectos.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error loading proyectos.json:', error))
  }, [])

  return (
    <section className="seccion proyectos" id="proyectos">
      <Titulo texto="Proyectos Destacados" />
      <div className="proyectos-grid">
        {data.proyectos.map((proyecto, index) => (
          <CardProyecto
            key={index}
            img_path={proyecto.img_path}
            Nombre={proyecto.Nombre}
            Rol={proyecto.Rol}
            Descripcion={proyecto.Descripcion}
          />
        ))}
      </div>
    </section>
  )
}

export default Proyectos
