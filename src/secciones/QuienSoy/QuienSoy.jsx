import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './QuienSoy.css'
import '../Seccion.css'
import Titulo from '../../components/Titulo'

function QuienSoy() {
  const [data, setData] = useState({ para1: '', para2: '', highlight: [] })

  useEffect(() => {
    fetch('/jsons/quienSoy.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error loading quienSoy.json:', error))
  }, [])

  const highlightText = (text, highlights) => {
    if (!highlights || highlights.length === 0) return text

    let highlightedText = text
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
    <section className="seccion quien-soy" id="quien-soy">
      <Titulo texto="¿Quién Soy?" />
      <motion.p 
        className="quien-soy-parrafo"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {highlightText(data.para1, data.highlight)}
      </motion.p>
      <motion.p 
        className="quien-soy-parrafo"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {highlightText(data.para2, data.highlight)}
      </motion.p>
    </section>
  )
}

export default QuienSoy
