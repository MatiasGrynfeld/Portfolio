import './CVIcon.css'

function CVIcon({ size = 80 }) {
  return (
    <a href="#" className="cv-icon" style={{ width: `${size}px`, height: `${size}px` }}>
      CV
    </a>
  )
}

export default CVIcon
