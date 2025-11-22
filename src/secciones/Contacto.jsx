import { useState, useEffect } from 'react'
import './Contacto.css'
import Titulo from '../components/Titulo'
import ContactCard from '../components/ContactCard'

function Contacto() {
  const [data, setData] = useState({ text: '', icons_path: [] })

  useEffect(() => {
    fetch('/jsons/contacto.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error loading contacto.json:', error))
  }, [])

  return (
    <footer className="contacto" id="contacto">
      <div className='contacto-container'>
        <Titulo texto="Contactame" />
        <p className="contacto-texto">{data.text}</p>
        <div className="contacto-grid">
          <div className="contacto-fila-3">
            {data.icons_path.slice(0, 3).map((icon_path, index) => (
              <ContactCard key={index} icon_path={icon_path}/>
            ))}
          </div>
          <div className="contacto-fila-2">
            {data.icons_path.slice(3).map((icon_path, index) => (
              <ContactCard key={index} icon_path={icon_path}/>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contacto
