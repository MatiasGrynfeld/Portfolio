import './CardHabilidad.css'

function CardHabilidad({ icon_path, title, skills }) {
  return (
    <article className="card-habilidad">
      <div className="card-habilidad-header">
        <img src={icon_path} className="card-habilidad-icono" />
        <h3 className="card-habilidad-subtitulo">{title}</h3>
      </div>
      <ul className="card-habilidad-lista">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </article>
  )
}

export default CardHabilidad