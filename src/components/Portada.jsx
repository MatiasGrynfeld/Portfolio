import './Portada.css'

function Portada() {
  return (
    <header className="portada">
      <div className="logo">
        <img src="/logo.png"/>
      </div>
      <h1 className="nombre">Matías Grynfeld</h1>
      <p className="lema">Observar, Analizar, e Innovar</p>
      <div className="iconos">
        <a href="#" className="icono">
          <img src="/githubIcon.png"/>
        </a>
        <a href="#" className="icono">
          <img src="/linkedinIcon.png"/>
        </a>
        <a href="#" className="icono" id='CV_icon'>
          CV
        </a>
      </div>
      <button className="boton-empezar">Empezar</button>
    </header>
  )
}

export default Portada
