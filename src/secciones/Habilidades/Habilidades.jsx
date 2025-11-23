import { useState, useEffect } from 'react'
import './Habilidades.css'
import '../Seccion.css'
import Titulo from '../../components/Titulo'
import CardHabilidad from '../../components/CardHabilidad'

function Habilidades() {
  const [data, setData] = useState({ cards: [] })

  useEffect(() => {
    fetch('/jsons/skills.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error loading skills.json:', error))
  }, [])

  return (
    <section className="seccion habilidades" id="habilidades">
      <Titulo texto="Habilidades" />
      <div className="habilidades-grid">
        {data.cards.map((card, index) => (
          <CardHabilidad
            key={index}
            icon_path={card.icon_path}
            title={card.title}
            skills={card.skills}
          />
        ))}
      </div>
    </section>
  )
}

export default Habilidades