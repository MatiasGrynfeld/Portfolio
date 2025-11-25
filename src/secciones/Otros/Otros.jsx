import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Otros.css'
import '../Seccion.css'
import Titulo from '../../components/Titulo'

function Otros() {
  const [data, setData] = useState({ Logros: { items: [], highlight: [] }, Extracurricular: { items: [], highlight: [] } })

  useEffect(() => {
    fetch('/jsons/otros.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error loading otros.json:', error))
  }, [])

  const highlightText = (text, highlights) => {
    if (!highlights || highlights.length === 0) return text

    const parts = []
    let lastIndex = 0

    const sortedHighlights = highlights
      .map(phrase => ({ phrase, index: text.indexOf(phrase) }))
      .filter(item => item.index !== -1)
      .sort((a, b) => a.index - b.index)

    sortedHighlights.forEach(({ phrase, index }) => {
      if (index > lastIndex) {
        parts.push(text.substring(lastIndex, index))
      }
      parts.push(<span key={index} className="highlight">{phrase}</span>)
      lastIndex = index + phrase.length
    })

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex))
    }

    return parts.length > 0 ? parts : text
  }

  return (
    <section className="seccion otros" id="otros">
      <Titulo texto="Otras cosas sobre mí" />
      
      <motion.div 
        className="otros-seccion"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="otros-subtitulo">Logros</h3>
        <ul className="otros-lista">
          {data.Logros.items.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            >
              {highlightText(item, data.Logros.highlight)}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div 
        className="otros-seccion"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="otros-subtitulo">Extracurricular</h3>
        <ul className="otros-lista">
          {data.Extracurricular.items.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              {highlightText(item, data.Extracurricular.highlight)}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}

export default Otros
