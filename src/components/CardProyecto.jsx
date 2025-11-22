import './CardProyecto.css'

function CardProyecto({ img_path, Nombre, Rol, Descripcion }) {
  return (
    <article className="card-proyecto">
      <div className="card-proyecto-imagen">
        <img src={img_path} />
      </div>
      <div className="card-proyecto-contenido">
        <h3 className="card-proyecto-titulo">{Nombre}</h3>
        <p className="card-proyecto-rol">{Rol}</p>
        <p className="card-proyecto-descripcion">{Descripcion}</p>
        <button className="card-proyecto-boton">
          <span className="boton-texto">CONOCER MÁS</span>
          <span className="boton-flechas">{">>"}</span>
        </button>
      </div>
    </article>
  )
}

export default CardProyecto
