import './CVIcon.css'

function CVIcon({ size = 80 }) {
  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <a href="#" className="cv-icon" onClick={handleClick} style={{ width: `${size}px`, height: `${size}px` }}>
      CV
    </a>
  )
}

export default CVIcon
