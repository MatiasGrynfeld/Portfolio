import { useState, useEffect } from 'react'
import './QuienSoy.css'
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
      <p className="quien-soy-parrafo">{highlightText(data.para1, data.highlight)}</p>
      <p className="quien-soy-parrafo">{highlightText(data.para2, data.highlight)}</p>
    </section>
  )
}

export default QuienSoy
