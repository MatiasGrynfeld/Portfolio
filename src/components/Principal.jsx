import './Principal.css'
import PanelLateral from './PanelLateral'
import QuienSoy from '../secciones/QuienSoy'
import Habilidades from '../secciones/Habilidades'
import Seccion3 from '../secciones/Seccion3'
import Seccion4 from '../secciones/Seccion4'
import Seccion5 from '../secciones/Seccion5'

function Principal() {
  return (
    <main className="principal">
      <div className="panel-container">
        <PanelLateral />
      </div>
      <div className="contenido-container">
        <QuienSoy />
        <Habilidades />
        <Seccion3 />
        <Seccion4 />
        <Seccion5 />
      </div>
    </main>
  )
}

export default Principal
