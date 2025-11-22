import { useState, useEffect } from 'react'
import './Otros.css'
import Titulo from '../components/Titulo'

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
      
      <div className="otros-seccion">
        <h3 className="otros-subtitulo">Logros</h3>
        <ul className="otros-lista">
          {data.Logros.items.map((item, index) => (
            <li key={index}>{highlightText(item, data.Logros.highlight)}</li>
          ))}
        </ul>
      </div>

      <div className="otros-seccion">
        <h3 className="otros-subtitulo">Extracurricular</h3>
        <ul className="otros-lista">
          {data.Extracurricular.items.map((item, index) => (
            <li key={index}>{highlightText(item, data.Extracurricular.highlight)}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Otros
