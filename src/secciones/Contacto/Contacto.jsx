import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Contacto.css'
import Titulo from '../../components/Titulo'
import ContactCard from '../../components/ContactCard'

function Contacto() {
  const [data, setData] = useState({ text: '', contacts: [] })

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
        <motion.p 
          className="contacto-texto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          {data.text}
        </motion.p>
        <div className="contacto-grid">
          <div className="contacto-fila-3">
            {data.contacts.slice(0, 3).map((contact, index) => (
              <ContactCard key={index} index={index} icon_path={contact.icon_path} href={contact.href}/>
            ))}
          </div>
          <div className="contacto-fila-2">
            {data.contacts.slice(3).map((contact, index) => (
              <ContactCard key={index} index={index + 3} icon_path={contact.icon_path} href={contact.href}/>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contacto
