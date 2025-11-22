import './Principal.css'
import PanelLateral from '../components/PanelLateral'
import QuienSoy from './QuienSoy'
import Habilidades from './Habilidades'
import Seccion3 from './Seccion3'
import Proyectos from './Proyectos'
import Otros from './Otros'

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
        <Proyectos />
        <Otros />
      </div>
    </main>
  )
}

export default Principal
