import './Principal.css'
import PanelLateral from './PanelLateral'
import Seccion1 from './Seccion1'
import Seccion2 from './Seccion2'
import Seccion3 from './Seccion3'
import Seccion4 from './Seccion4'
import Seccion5 from './Seccion5'

function Principal() {
  return (
    <main className="principal">
      <div className="panel-container">
        <PanelLateral />
      </div>
      <div className="contenido-container">
        <Seccion1 />
        <Seccion2 />
        <Seccion3 />
        <Seccion4 />
        <Seccion5 />
      </div>
    </main>
  )
}

export default Principal
