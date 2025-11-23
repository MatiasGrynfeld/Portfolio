import './Principal.css'
import PanelLateral from '../../components/PanelLateral'
import QuienSoy from '../QuienSoy/QuienSoy'
import Habilidades from '../Habilidades/Habilidades'
import Timeline from '../Timeline/Timeline'
import Proyectos from '../Proyectos/Proyectos'
import Otros from '../Otros/Otros'

function Principal() {
  return (
    <main className="principal">
      <div className="panel-container">
        <PanelLateral />
      </div>
      <div className="contenido-container">
        <QuienSoy />
        <Habilidades />
        <Timeline />
        <Proyectos />
        <Otros />
      </div>
    </main>
  )
}

export default Principal
