import './PanelLateral.css'
import CVIcon from './CVIcon'

function PanelLateral() {
  return (
    <aside className="panel-lateral">
      <section className="seccion-perfil">
        <div className="foto-perfil">
          <img src="/aksjhdb" alt="FOTO" />
        </div>
        <h2 className="nombre-perfil">Matías Grynfeld</h2>
      </section>

      <div className="separador"></div>
      <nav className="seccion-navegacion">
        <div className="columna-nav">
          <a href="#quien-soy">¿Quién Soy?</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#edu-exp">Edu. & Exp.</a>
        </div>
        <div className="columna-nav">
          <a href="#proyectos">Proyectos</a>
          <a href="#otros">Otros</a>
          <a href="#contacto">Contactame</a>
        </div>
      </nav>

      <div className="separador"></div>
      <section className="seccion-info">
        <div className="icono-info">
          <img src="/icons/mailIcon.png"/>
        </div>
        <div className="texto-info">
          <h3 className="titulo-info">MAIL</h3>
          <p className="contenido-info">matiasgrynfeld@gmail.com</p>
        </div>
      </section>

      <div className="separador"></div>
      <section className="seccion-info">
        <div className="icono-info">
          <img src="/icons/locationIcon.png"/>
        </div>
        <div className="texto-info">
          <h3 className="titulo-info">UBICACIÓN</h3>
          <p className="contenido-info">Buenos Aires, Argentina</p>
        </div>
      </section>

      <div className="separador"></div>

      <section className="seccion-iconos">
        <a href="#" className="icono-social">
          <img src="/icons/githubIcon.png"/>
        </a>
        <a href="#" className="icono-social">
          <img src="/icons/linkedinIcon.png"/>
        </a>
        <CVIcon size={90} />
      </section>
    </aside>
  )
}

export default PanelLateral
